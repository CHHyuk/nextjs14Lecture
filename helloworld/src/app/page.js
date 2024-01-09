import Link from "next/link"

export default function Home() {
  return (
    <>
      <Link href="/blog">Blog</Link>
      <Link href="/product">Product</Link>
      <h1>Home Page</h1>
    </>
  )
}

