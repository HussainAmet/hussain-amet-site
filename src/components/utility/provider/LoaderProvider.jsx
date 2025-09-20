'use client'
import { useEffect, useState } from "react"
import Loader from "../loader/Loader"

export default function LoaderProvider({ children }) {
    const [loader, setLoader] = useState(true)

    useEffect(() => {
        const timer = setTimeout(() => setLoader(false), 500); // 5 milisec
        return () => clearTimeout(timer);
    }, []);

    return (
        <div className={`relative ${loader ? 'overflow-hidden h-screen' : ''}`}>
            {/* Main content hamesha render hoga (crawler ke liye visible) */}
            {children}

            {/* Loader sirf overlay ke roop me dikhega */}
            {loader && (
                <div className="fixed inset-0 z-50 bg-black flex items-center justify-center">
                    <Loader />
                </div>
            )}
        </div>
    );
}
