import { useEffect, useState } from "react";

const useWindowSize = () => {
    const [useWindowSize, setWindowSize] = useState({
        width: undefined,
        height: undefined
    });

    useEffect(() =>{
        const handleResize = () => {
            setWindowSize({
                width: window.innerWidth,
                height: window.innerHeight
            })
        }
    })
}