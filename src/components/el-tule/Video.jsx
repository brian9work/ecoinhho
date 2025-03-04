import React from 'react'
import { AnimatedCSSTitle } from '../general/TextAnimation'

export default function Video() {
   const videos = [
      {
         url: "https://www.youtube.com/embed/mKM0NIEdAgA?si=2sBpJ727UIFyNwVn",
         title: "Video de 'El Tule'",
         description: "Vista aerea con Dron del fraccionamiento ",
      },
      {
         url: "https://www.youtube.com/embed/0pH1SicZawc?si=UrKU0pK_oRgzDqjM",
         title: "Video de 'El Tule'",
         description: "Vista aerea con Dron del fraccionamiento ",
      },
   ]
   return (
      <main className="min-h-screen p-4 md:p-8 bg-gray-50">
         <AnimatedCSSTitle
            animated='animate__zoomInUp'
            delay='faster'
         >Videos</AnimatedCSSTitle>
         <div className="max-w-7xl mx-auto mt-10">
            <div className="space-y-8">
               {/* Grid layout for videos */}
               <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {videos.map((video) => (
                     <div key={video.url} className="bg-white rounded-lg shadow-md overflow-hidden">
                        <iframe className='w-full h-[300px]' src={video.url} title="YouTube video player" allowFullScreen></iframe>
                        {/* <VideoPlayer video={video} isPlaying={activeVideo === video.id} onPlay={() => setActiveVideo(video.id)} /> */}
                        <div className="p-4">
                           <h2 className="text-xl font-semibold mb-2">{video.title}</h2>
                           <p className="text-gray-600">{video.description}</p>
                        </div>
                     </div>
                  ))}
               </div>
            </div>
         </div>
      </main>
   )
}
