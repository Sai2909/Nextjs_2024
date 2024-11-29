"use client"

import { usePathname, useSearchParams } from "next/navigation"

export default function Cart() {

    //usePathname
    const pathName = usePathname()
    console.log("Current Path:", pathName)

    //searchParms
    const searchParams = useSearchParams()
    console.log("searchParms :", searchParams.get('search'), searchParams.get('random'))
    return <div>
        <h2> Cart Page</h2>
    </div>
}