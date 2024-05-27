"use client"

import SimilarProducts from "@/app/components/SimilarProducts"
import MainLayout from "@/app/layouts/MainLayout"

export default function Product({params}) {

    const product = {
            id: 1,
            title: "Brown Leather Bag",
            description: "It is a long established fact thatbution of letters, as opposed to using 'Content here, conttor",
            url: "https://picsum.photos/id/3",
            price: 2500 // EG 25.00
    }

    const { id, title, description, url, price } = product
    
    return (
        <>
            <MainLayout>
                <div className="max-w-[1200px] mx-auto">
                    <div className="flex px-4 py-10">
                        { url ?
                            <img
                                className="w-[40%] rounded-lg"
                                src={url+'/280'}
                            /> :
                            <div className="w=[40%]"></div>
                        }
                        <div className="px-4 w-full">
                            <div className="font-bold text-xl">{title}</div>
                            <div className="text-sm text-gray-700 pt-2">Brand New - Full Warranty</div>
                            <div className="border-b py-1"/>
                            <div className="pt-3 pb-2">
                                <div className="flex items-center">
                                    Condition: <span className="font-bold text-[17px] ml-2">New</span>
                                </div>
                            </div>
                            <div className="border-b py-1"/>
                            <div className="pt-3">
                                <div className="w-full flex items-center justify-between">
                                    <div className="flex items-center">
                                        Price:
                                        {price ?
                                            <div className="font-bold text-[20px] ml-2">
                                                USD ${(price / 100).toFixed(2)}
                                            </div>
                                        : null}
                                    </div>
                                    <button className="
                                    text-black
                                    py-2
                                    px-20
                                    rounded-full
                                    cursor-pointer
                                    bg-[#3498C9]">
                                            Add to Cart
                                    </button>
                                </div>
                            </div>
                            <div className="border-b py-1"/>
                                    <div className="pt-3">
                                        <div className="font-semibold pb-1">Description:</div>
                                        <div className="text-sm">{description}</div>
                                    </div>
                        </div>
                    </div>
                </div>
                <SimilarProducts />
            </MainLayout>
        </>
    )
}