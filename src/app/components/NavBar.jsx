import Link from "next/link";

export default function Navbar() {
  return (
    <div>
      <h1>Navigation</h1>
      <nav>
        <Link href="/">Home</Link>
        <Link href="/About">About</Link>
        <Link href="/koalas">Koalas</Link>
      </nav>
    </div>
  );
}
