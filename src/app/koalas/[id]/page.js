export default async function IdPage({ params }) {
  const result = await fetch(`https://dummyjson.com/products/${params.id}`);
  const data = await result.json();

  return (
    <>
      <h1>{data.title}</h1>
      <p>You are looking at koala number {params.id}</p>

      <h2>{data.description}</h2>
      <h3>{data.category}</h3>
      <p>{data.price}</p>
    </>
  );
}
