"use client"
import { useSearchParams } from "next/navigation"

export default function Page({ params }: { params: { id: string } }) {
  const searchParams = useSearchParams()
  const productPrice = searchParams.get("price")

  return (
    <main>
      <h1>This is a product id page?</h1>
      <p> {params.id} </p>
      <p> {productPrice} </p>
    </main>
  )
}
