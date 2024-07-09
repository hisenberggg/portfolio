// import DashboardSkeleton from '@/app/ui/skeletons';
 
export default function Loading() {
    return (
        <div className="container mx-auto p-4 animate-pulse">
          <h1 className="text-3xl font-bold text-gray-700 mb-8">Projects</h1>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            {Array(6).fill().map((_, index) => (
              <div key={index} className="p-4 border border-gray-300 rounded-lg">
                <div className="bg-gray-300 h-48 rounded mb-4"></div>
                <div className="bg-gray-300 h-6 w-3/4 mb-2 rounded"></div>
                <div className="bg-gray-300 h-4 w-1/2 mb-2 rounded"></div>
                <div className="flex space-x-2">
                  {Array(3).fill().map((_, techIndex) => (
                    <div key={techIndex} className="bg-gray-300 h-4 w-1/4 rounded"></div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      )
}