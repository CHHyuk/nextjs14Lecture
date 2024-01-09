import Link from "next/link"

export const metadata = {
  title: {
    absolute: "Blog"
  }
}

export default function Blog() {
  return (
    <>
      <Link href="/">Home</Link>
      <Link href='/blog/first'>First Page</Link>
      <h1>My blog</h1>
    </>
  )
}

