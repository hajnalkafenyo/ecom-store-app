import React from "react";

export function Tag({ text }) {
    return (
        <div className="px-2 m-px rounded-xl border border-amber-400 text-sm bg-amber-50 text-amber-700 hover:bg-amber-100 transition-colors">
            {text}
        </div>
    )
}