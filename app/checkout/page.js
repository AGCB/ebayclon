"use client"

import CheckoutItem from "../components/CheckoutItem"
import MainLayout from "../layouts/MainLayout"

export default function Checkout() {

    const product = {
        id: 1,
        title: "Brown Leather Bag",
        description: "It is a long established fact thatbution of letters, as opposed to using 'Content here, conttor",
        url: "https://picsum.photos/id/3",
        price: 2500 // EG 25.00
    }
    return (
        <MainLayout>
            <div id="CheckoutPage" className="mt-4 max-w-[1100px] mx-auto border-3">
                <div className="text-2xl font-bold mt-4 mb-4">Checkout</div>
                <div className="relative flex-col items-baseline gap-4 justify-between mx-auto w-full">
                    <div className="w-[65%]">
                        <div className="text-xl font-semibold mb-2 ml-2">
                            Shipping Address
                        </div>
                        <div>
                            <ul className="text-sm mt-2 ml-2">
                            <li>Name: test</li>
                            <li>Address: test</li>
                            <li>Zipcode: test</li>
                            <li>City: test</li>
                            <li>Country: test</li>
                            </ul>
                        </div>
                    </div>
                    <div id="Items" className="bg-white rounded-lg mt-4">
                        <CheckoutItem key={product.id} product={product} />
                    </div>
                </div>
            </div>
        </MainLayout>
    )
}