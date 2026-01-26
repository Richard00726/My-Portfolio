import { useState, useEffect } from "react"

export default function LoadingScreen() {
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval)
          return 100
        }
        return prev + 2
      })
    }, 30)

    return () => clearInterval(interval)
  }, [])

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-gradient-to-br from-black via-purple-950/20 to-black">
      
      <div className="flex flex-col items-center text-center space-y-8">
        
        {/* Name */}
        <h1 className="text-5xl md:text-6xl font-bold text-white glow">
          Welcome To My Portfolio
        </h1>

        {/* Loading Section */}
        <div className="space-y-3">
          <p className="text-gray-400 text-sm">
            Loading Portfolio...
          </p>

          <div className="w-80 h-2 bg-gray-800 rounded-full overflow-hidden">
            <div
              className="h-full bg-gradient-to-r from-purple-500 to-pink-500 transition-all duration-300 ease-out rounded-full"
              style={{ width: `${progress}%` }}
            />
          </div>

          <p className="text-purple-400 font-semibold">
            {progress}%
          </p>
        </div>

      </div>
    </div>
  )
}
