import { useEffect } from "react";

export function useTitle(
    title,
    description = ""
) {

    useEffect(() => {
        document.title = title
        document.description = description
    }, [title, description])

}