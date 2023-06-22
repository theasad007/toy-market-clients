import { useEffect } from "react"

const useTitle = title => {
    useEffect(() => {
        document.title = `Kid's Zone | ${title} `;
    }, [title])
}

export default useTitle;