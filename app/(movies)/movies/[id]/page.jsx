import { API_URL } from "@/app/(home)/page";

async function getMovie(id){
  console.log("제목 요청 시도:", id, new Date().toISOString());
  const response = await fetch(`${API_URL}/${id}`,{cache:'force-cache'})
  return response.json();
}
async function getVideos(id){
  console.log("비디오 요청 시도:", id, new Date().toISOString());
  const response = await fetch(`${API_URL}/${id}/videos`,{cache:'force-cache'})
  return response.json();
}
export default async function MoviesDetail({ params, searchParams }) {
  const { id } = await params;
  const { samsung } = await searchParams;
  console.log(id + " " + samsung);
  console.log('fetching start')
  const [movie,videos]= await Promise.all([getMovie(id), getVideos(id)])
  console.log('end start')

  return <div><h1>Mobe {id}</h1>
  {movie.title}
  {console.log(videos)}</div>;
}
