import Link from 'next/link'
import { Button } from "@mantine/core"
import { IconHeartBroken, IconHome} from '@tabler/icons-react'

export default function NotFound() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white flex flex-col items-center justify-center text-center px-4">
      <IconHeartBroken className="w-24 h-24 text-blue-500 mb-8" />
      <h1 className="text-4xl font-bold text-gray-900 mb-4">404 - Page Not Found</h1>
      <p className="text-xl text-gray-600 mb-8 max-w-md">
        Oops! It seems like the page you&apos;re looking for has been moved or doesn&apos;t exist.
      </p>
      <div className="space-y-4">
        <p className="text-gray-600">
          Please check the URL or try one of the following:
        </p>
        <div className="flex flex-row sm:flex-row gap-4 justify-center">
          <Button size="xl" >
            <Link href="/" className='flex justify-center items-center'>
              <IconHome className="mr-2 h-8 w-8" /> Return Home
            </Link>
          </Button>
        </div>
      </div>
     
    </div>
  )
}

