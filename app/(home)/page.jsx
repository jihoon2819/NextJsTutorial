
const URL='https://nomad-movies.nomadcoders.workers.dev/movies'

export const metadata ={
  title : "home"
}

async function getMovies(){
  await new Promise((resolve)=>setTimeout(resolve,5000))
  const response = await fetch(URL)
  const json = await response.json()
  return json
}
// export const metadata = {
//   title: "Home",
// };
export default async function HomePage() {
  const movies = await getMovies();
  return (
    <div>
      <h1>Hello</h1>
      {JSON.stringify(movies)}
    </div>
  );
}
