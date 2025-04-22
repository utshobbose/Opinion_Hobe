import { Button } from '@/components/ui/button'
import React from 'react'

const Home = () => {
  return (
    <div className="mt-9 flex flex-col gap-9">
      <div className="bg-red-500 text-white p-4">Hello</div>
      <section>
      <h1 className="text-20 font-bold text-white">Trending Podcasts</h1>
      <Button className="bg-orange-500 text-white hover:bg-orange-600inline-flex items-center justify-center h-9 px-4 py-2 rounded-md text-sm font-medium bg-orange-500 text-white hover:bg-orange-600"> Button </Button>
      </section>
    </div>
  )
}

export default Home
// "use client";
// import PodcastCard from '@/components/PodcastCard'
// import { useQuery } from "convex/react";
// import { api } from "@/convex/_generated/api";
// import LoaderSpinner from '@/components/LoaderSpinner';

// const Home = () => {
//   const trendingPodcasts = useQuery(api.podcasts.getTrendingPodcasts);

//   if(!trendingPodcasts) return <LoaderSpinner />
  
//   return (
//     <div className="mt-9 flex flex-col gap-9 md:overflow-hidden">
//       <section className='flex flex-col gap-5'>
//         <h1 className="text-20 font-bold text-white-1">Trending Podcasts</h1>

//         <div className="podcast_grid">
//           {trendingPodcasts?.map(({ _id, podcastTitle, podcastDescription, imageUrl }) => (
//             <PodcastCard 
//               key={_id}
//               imgUrl={imageUrl as string}
//               title={podcastTitle}
//               description={podcastDescription}
//               podcastId={_id}
//             />
//           ))}
//         </div>
//       </section>
//     </div>
//   )
// }

// export default Home