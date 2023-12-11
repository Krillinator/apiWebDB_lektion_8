"use client"
import Image from "next/image"
import Link from "next/link"

interface Product {
  id: string
  name: string
  price: number
  isOnSale: boolean
}

export default function Home() {
  const products: Product[] = [
    { id: "1", name: "product_1", price: 200, isOnSale: false },
    { id: "2", name: "product_2", price: 300, isOnSale: true },
  ]

  return (
    <>
      <div>
        <h1>Does this work?</h1>
        <ul>
          {products.map((product) => (
            <li key={product.id}>
              <Link
                href={{
                  pathname: `/product/${product.id}`,
                  query: { ...product },
                }}
              >
                {product.name}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </>
  )
}
