/*
useEffect 
swr and useSwr hook
with loading state
*/
'use client'
import { useEffect, useState } from "react"

export default function ClientsideFetching() {
    const [loading, setLoding] = useState(false);
    const [users, setUsers] = useState([])

    async function fetchUsers() {
        try {
            setLoding(true)
            const apiResponce = await fetch(`https://dummyjson.com/users`)
            const result = await apiResponce.json()
            if (result?.users) {
                setUsers(result.users)
                setLoding(false)
            }
        } catch (error) {
            console.log(error)
            setUsers([])
            setLoding(false)
        }

    }
    useEffect(() => {
        fetchUsers()
    }, [])

    if (!loading) {
        <h2>Still Loading some time...😁</h2>
    }

    return (
        <div className="p-10">
            <h5 className="font-bold text-2xl">Client side Fetching..</h5>
            <ul>
                {
                    users && users.length > 0 ? users.map(user => <li className="mt-5 cursor-pointer" key={user.id}>
                        {user.firstName}</li>) : null
                }
            </ul>
        </div>
    )

}