"use client"


export default function CartItem({product}) {
    const {id, title, description, url, price } = product
    return (
        <div className="relative flex justify-start my-2 border w-full p-6">
            <img
                src={url+'/150'}
                className="rounded-mb w-[150px]" />
            <div className="overflow-hidden pl-2 w-full">
                <div className="
                    flex
                    items-center
                    justify-between
                    w-full">
                    <div className="
                        flex
                        items-center
                        font-semibold
                        justify-between
                        w-[400px]
                        text-[16px]
                        underline">
                        {title}
                    </div>
                    <div className="font-bold text-lg">
                        $ {(price/100).toFixed(2)}
                    </div>
                </div>
                    <div className="font-semibold mt-2">
                        NEW
                    </div>
                    <div className="text-sm mt-2">
                        {description.substring(0,150)}...
                    </div>
                    <div className="absolute right-0 bottom-0 p-4 text-sm">
                        <button className="underline text-blue-500">Remove</button>
                    </div>
            </div>
        </div>
    )
}

/* 

*/