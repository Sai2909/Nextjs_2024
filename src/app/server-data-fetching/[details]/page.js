
async function fetchUserDetails(currentUserId) {
    try {
        const Apiresponce = await fetch(`https://dummyjson.com/users/${currentUserId}`)
        const result = await Apiresponce.json();
        return result
    } catch (error) {
        throw new Error(error)
    }
}



export default async function UserDetailsPage({ params }) {
    const { details } = params
    console.log(params)


    const userDetail = await fetchUserDetails(details)
    return (
        <div className="flex justify-center items-center min-h-screen bg-gray-100">
            <div className="max-w-sm mx-auto p-5 bg-white border border-gray-200 rounded-lg shadow-lg">
                <div className="text-center">
                    <h2 className="text-xl font-bold text-gray-800">User Details</h2>
                </div>
                <div className="mt-4">
                    <p className="text-gray-600">
                        <span className="font-semibold">Name:</span> {userDetail?.firstName} {userDetail?.lastName}
                    </p>
                    <p className="text-gray-600 mt-2">
                        <span className="font-semibold">Email:</span> {userDetail?.email}
                    </p>
                    <p className="text-gray-600 mt-2">
                        <span className="font-semibold">Password:</span> {userDetail?.password}
                    </p>
                    <p className="text-gray-600 mt-2">
                        <span className="font-semibold">Birth Date:</span> {userDetail?.birthDate}
                    </p>
                </div>
            </div>
        </div>

    )
}