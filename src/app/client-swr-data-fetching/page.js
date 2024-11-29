'use client'
import useSWR from 'swr'

const fetcher = (...args) => fetch(...args).then(res => res.json())
export default function ClientSwrFetching() {
    const { data, error, isLoading } = useSWR('https://dummyjson.com/users', fetcher)
    if (error) return <div>failed to load</div>
    if (isLoading) return <div>loading...</div>
    // render data
    console.log(data)

    return (
        <div className="p-10">
            <h5 className="font-bold text-2xl">Swr  Fetching..</h5>
            <ul>
                {
                    data && data?.users && data?.users.length > 0 ? data.users.map(user => <li className="mt-5 cursor-pointer" key={user.id}>
                        {user.firstName}</li>) : null
                }
            </ul>
        </div>
    )
}