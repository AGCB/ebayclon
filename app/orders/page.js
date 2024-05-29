"use client"

import Link from "next/link"
import { CiDeliveryTruck } from 'react-icons/ci'
import MainLayout from "../layouts/MainLayout"


export default function Orders() {

    const orders = [
        {
            id:1,
            stripe_id: '123123123',
            name: "testName",
            address: "test address",
            zipcode: "91345",
            city: "Budayeen",
            country: "Iran",
            total: 1299,
            orderItem: [
                {
                    id: 1,
                    title: "Brown Leather Bag",
                    url: "https://picsum.photos/id/3",
                }
            ]
        }
    ]
    return (
        <MainLayout>
            <div id="OrdersPage" className="mt-4 max-w-[1200px] mx-auto px-2 min-h-[50vh]">
                <div className="bg-white w-full p-6 min-h-[150px]">
                    <div className="flex items-center text-xl">
                        <CiDeliveryTruck className="text-green-500" size={35}/>
                        <span className="pl-4">Orders</span>
                    </div>
                    {
                        orders.length < 1 ?
                        <div className="flex items-center justify-center">You have no order history</div> :
                        null
                    }

                    {
                        orders.map((order) => {
                            const {name, address, zipcode, city, country, total, orderItem } = order
                            return (
                                <div key={order.id} className="text-sm pl-[50px]">
                                    <div className="border-b py-1">

                                        <div className="pt-2">
                                            <span className="font-bold mr-2">Stripe ID:</span>
                                            {order?.stripe_id}
                                        </div>

                                        <div className="pt-2">
                                            <span className="font-bold mr-2">Delivery Address</span>
                                            {`${name}, ${address}, ${zipcode}, ${city}, ${country}`}
                                        </div>

                                        
                                        <div className="pt-2">
                                            <span className="font-bold mr-2">Total</span>
                                            {`$ ${(total / 100).toFixed(2)}`}
                                        </div>

                                        <div className="flex items-center gap-4">
                                            {
                                                orderItem.map(item => {
                                                    const {id, url, title} = item
                                                    return (
                                                        <div key={id} className="flex items-center">
                                                            <Link href={"/"}className="py-1 hover:underline text-blue-500 font-bold">
                                                                <img className="rounded" width="120" src={url + '/120'}/>
                                                                {title}
                                                            </Link>
                                                        </div>
                                                    )
                                                })
                                            }
                                        </div>

                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </MainLayout>
    )
} 