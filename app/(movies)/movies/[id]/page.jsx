export default async function MoviesDetail({ params, searchParams }) {
  const { id } = await params;
  const { samsung } = await searchParams;
  console.log(id + " " + samsung);
  return <h1>Mobe {id}</h1>;
}
