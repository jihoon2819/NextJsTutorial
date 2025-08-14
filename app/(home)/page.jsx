import Link from "next/link"
import styles from "./home.module.css"
import Movie from "@/components/movie"
export const API_URL='https://nomad-movies.nomadcoders.workers.dev/movies'

export const metadata ={
  title : "home"
}

async function getMovies(){
  // await new Promise((resolve)=>setTimeout(resolve,1000))
  const response = await fetch(API_URL,{cache:'force-cache'})
  const json = await response.json()
  console.log("[NETWORK FETCH]")
  return json
}
// export const metadata = {
//   title: "Home",
// };
console.log('NODE_ENV:', process.env.NODE_ENV);

export default async function HomePage() {
  const movies = await getMovies();
  return (
    <div className={styles.container}>
     {movies.map((movie) => (
        <Movie
          key={movie.id}
          id={movie.id}
          poster_path={movie.poster_path}
          title={movie.title}
        />
      ))}
    </div>
  );
}
