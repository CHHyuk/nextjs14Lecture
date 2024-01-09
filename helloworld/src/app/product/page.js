import Link from "next/link"

export default function ProductList() {
  const productId = 100

  return(
    <>
      <h1>Product List</h1>
      <h1>Product1</h1>
      <h1>Product2</h1>
      <h1>Product3</h1>
      <h1><Link href={`/product/${productId}`} replace>Product {productId}</Link></h1>
    </>
  )
}