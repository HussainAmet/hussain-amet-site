'use client'

import { useEffect, useState } from "react"
import Loader from "../loader/Loader"

export default function LoaderProvider({ children }) {
    const [loader, setLoader] = useState(true)

    useEffect(() => {
        setTimeout(() => {
            setLoader(false);            
        }, 2000);
    },[])

    return (
        loader ? <Loader /> : children 
    )
}
