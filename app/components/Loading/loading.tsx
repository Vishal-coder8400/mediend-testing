import { IconHeart } from '@tabler/icons-react'

export default function LoadingScreen() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-b from-blue-50 to-white">
      <div className="text-blue-600 animate-pulse">
        <IconHeart size={64} strokeWidth={1.5} />
      </div>
      <h1 className="mt-8 text-2xl font-semibold text-gray-800">When was your last checkup?</h1>
      <p className="mt-2 text-gray-600">Please wait while we prepare your data...</p>
      <div className="mt-8 flex space-x-2">
        <div className="w-3 h-3 bg-blue-600 rounded-full animate-bounce"></div>
        <div className="w-3 h-3 bg-blue-600 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
        <div className="w-3 h-3 bg-blue-600 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
      </div>
    </div>
  )
}

