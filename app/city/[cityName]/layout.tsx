import type { Metadata } from "next"
import type { ReactNode } from "react"

// Helper function to capitalize first letter
function CapitalizeFirstLetter(str: string): string {
  if (!str) return str
  return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase()
}

// Define expected route parameters
interface PageParams {
  cityName: string
}

// Fetch metadata from Sanity
async function getPageMetadataFromServer(cityName: string) {

  const query = `*[
    _type == 'diseaseInCity' &&
    slug.current == '${cityName}'
  ]{
    header,
    seoTitle,
    seoDescription,
    shortDescription,
    "slug": slug.current,
    disease->{
      "diseaseSlug": slug.current
    }
  }[0]`

  const encodedQuery = encodeURIComponent(query)
  const fetchURL = `https://7rljkuk3.apicdn.sanity.io/v2025-05-12/data/query/production?query=${encodedQuery}`

  try {
    const response = await fetch(fetchURL, {
      method: "GET",
      headers: { "Content-type": "application/json" },
      next: { revalidate: 3600 },
    })

    if (!response.ok) {
      console.error(`Network response was not ok for metadata (${response.status}): ${await response.text()}`)
      return null
    }

    const data = await response.json()
    return data.result
  } catch (error) {
    console.error("Error fetching page metadata:", error)
    return null
  }
}

// Props type for generateMetadata (can include searchParams)
type GenerateMetadataProps = {
  params: Promise<PageParams>
}

// Layout component props (layouts don't receive searchParams)
type LayoutProps = {
  children: ReactNode
  params: Promise<PageParams>
}

// Metadata generator for this layout
export async function generateMetadata(
  { params }: GenerateMetadataProps,
): Promise<Metadata> {
  // Await the params promise
  const { cityName } = await params
  const pageData = await getPageMetadataFromServer(cityName)

  if (!pageData) {
    return {
      title: "Information Not Available",
      description: "Detailed information for this condition in the specified city is currently not available.",
      alternates: {
        canonical: `https://mediend.com/city/${cityName}`,
      },
      robots: {
        index: true,
        follow: true,
      },
    }
  }

  const title =
    pageData.seoTitle || pageData.header 
  const description =
    pageData.seoDescription || pageData.shortDescription
  const canonicalUrl = `https://mediend.com/city/${cityName}`

  return {
    title,
    description,
    alternates: {
      canonical: canonicalUrl,
    },
  }
}

// Default layout export
export default async function DiseaseCityLayout({ children }: LayoutProps) {
  // If you need to use params in the layout component, await them here
  // const { disease, cityName } = await params;

  return <>{children}</>
}
