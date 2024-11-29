import Link from "next/link";


async function fetchListOfUser() {
    try {
        const apiRequest = await fetch("https://dummyjson.com/users")
        const result = await apiRequest.json()
        return result.users
    } catch (error) {
        throw new Error(error)
    }

}



export default async function ServersideFetching() {
    const listofUsers = await fetchListOfUser();

    return (
        <div className="p-10">
            <h5 className="font-bold text-2xl">Server Side Fetching- Users List Page</h5>
            <ul>
                {
                    listofUsers && listofUsers.length > 0 ? listofUsers.map(user => <li className="mt-5 cursor-pointer">
                        <Link href={`/server-data-fetching/${user.id}`}>{user.firstName}</Link></li>) : null
                }
            </ul>
        </div>
    )

}