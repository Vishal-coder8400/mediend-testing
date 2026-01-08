'use server';

import { sanity } from '../../lib/sanity';

export async function search(searchTerm: string) {
  if (searchTerm.length<3) {
    return [];
  }

  const query = `
    *[_type in ["department", "disease", "diseaseInCity", "doctor"] && title match $searchTerm] {
      _type,
      _id,
      title,
      "slug":slug.current,
      description,
      header,
      ...select(
        _type == "doctor" => {
          speciality,
          location,
          rating,
          "imageUrl":image.asset->url,
        },
        _type == "department" => {
          "imageUrl": headerImage.asset->url,
        },
        _type == "disease" => {
          "imageUrl": headerImage.asset->url,
        },
        _type == "diseaseInCity" => {
          city,
          disease->{
    "slug":slug.current,
     "imageUrl": headerImage.asset->url,

  },
        }
      )
    }
  `;

  try {
    const results = await sanity.fetch(query, { searchTerm: `*${searchTerm}*` });
    return results;
  } catch (error) {
    console.error('Error fetching search results:', error);
    return [];
  }
}