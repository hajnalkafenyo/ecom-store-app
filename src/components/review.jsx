import React from "react";
import { stars } from "./card";

export function Review({ username, description, rating, id }) {
    return (
        <>
            <div>
                <p className="font-semibold text-l text-gray-800">{username}</p>
            </div >
            <div className="text-sm border-y border-gray-300 p-2 bg-gray-50">
                <p className="text-gray-600">{description}</p>
            </div>
            <div>
                <p className="text-amber-500">{stars(rating, "★")}</p>
            </div>
        </>
    )
}