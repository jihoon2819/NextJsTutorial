import MovieInfo from "@/components/movie-info";
import MovieVideos from "@/components/movie-videos";
import { Suspense } from "react";
import { getMovie } from "@/components/movie-info";

export async function generateMetadata({params}){
  const {id}=params;
  console.log(id)
  const movie = await getMovie({id})
  console.log(movie)
  return {
    title:movie.title
  }
}
export default async function MoviesDetail({ params, searchParams }) {
  const { id } = await params;
  const { samsung } = await searchParams;

  return <div><h1>Mobe {id}</h1>
  <Suspense fallback={<h1>Loading info</h1>}><MovieInfo id={id}/></Suspense>
  <Suspense fallback={<h1>Loading video</h1>}><MovieVideos id={id} /></Suspense>
  
  </div>;
}
