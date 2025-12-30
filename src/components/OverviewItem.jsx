import React from "react"

export function OverviewItem({ price, discountedPrice, title, image }) {
    return (
        <div className="flex flex-row border border-gray-300 rounded-md p-2 gap-2 w-full items-center bg-gray-50">
            <div className="items-center">
                <img src={image} alt="The product" width="25px" height="25px" />
            </div>
            <div className="flex flex-col">
                <div className="font-semibold text-m text-gray-800">{title}</div>
                <div className="gap-2">
                    {discountedPrice !== price ?
                        <>
                            <p className="font-thin line-through text-sm text-gray-500">{price} Kr</p>
                            <p className="text-amber-600 font-semibold">{discountedPrice} Kr</p>
                        </>
                        :
                        <p className="text-gray-800 font-semibold">{price} Kr</p>
                    }
                </div>

            </div>
        </div>
    )
}



