"use client"
import MainLayout from "../layouts/MainLayout"
import SimilarProducts from "../components/SimilarProducts"
import CartItem from "../components/CartItem"

export default function Cart() {

    const product = {
        id: 1,
        title: "Brown Leather Bag",
        description: "It is a long established fact thatbution of letters, as opposed to using 'Content here, conttor",
        url: "https://picsum.photos/id/3",
        price: 2500 // EG 25.00
}

    return (
        <>
            <MainLayout>
                <div className="max-w-[1200px] mx-auto mb-8 min-h-[300px]">
                    <div className="text-2xl font-bold my-4">
                        Shopping Cart
                    </div>
                    <div className="relative flex items-baseline justify-between gap-2">
                        <div className="w-[65%]">
                            <CartItem key={product.id} product={product} />
                        </div>
                    </div>
                </div>
                <SimilarProducts />
            </MainLayout>
        </>
    )
}