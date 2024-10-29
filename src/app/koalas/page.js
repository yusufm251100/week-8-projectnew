import Link from "next/link";
import RefactoredForm from "../components/RefactoredForm";
import { db } from "@/utils/dbConnectionString";

export default async function KoalasPage() {
  // API fetch
  const response = await fetch("https://dummyjson.com/products");
  const data = await response.json();

  const wrangledData = data.products;
  console.log(wrangledData);

  // Database query
  const people = await db.query(`SELECT * FROM people`);
  console.log(people);

  return (
    <>
      <h1>Koalas Page</h1>
      <ol>
        Icescreams List
        {wrangledData.map((product) => (
          <div key={product.id}>
            <Link href={`/koalas/${product.id}`}>{product.title}</Link>
          </div>
        ))}
      </ol>
      <RefactoredForm />
    </>
  );
}
