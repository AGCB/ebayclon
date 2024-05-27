"use client"

import Product from "./Product"

export default function Products() {

    const products = [
        {
            id: 1,
            title: "Brown Leather Bag",
            description: "It is a long established fact thatbution of letters, as opposed to using 'Content here, conttor",
            url: "https://picsum.photos/id/3",
            price: 2500 // EG 25.00
        },
        {
            id: 1,
            title: "School Books",
            description: "IImagine a really interesting description hereor",
            url: "https://picsum.photos/id/5",
            price: 1999 // EG 25.00
        },
    ]

    return (
        <div className="max-w-[1200px] mx-auto">
            <div className="text-2xl font-bold mt-4 mb-6 px-4">
                Products
            </div>
            <div className="grid grid-cols-5 gap-4">
                {
                    products.map(product => {
                        return (
                            <Product key={product.id}product={product} />
                        )
                    })
                }
            </div>
        </div>
    )
}