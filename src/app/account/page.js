import { redirect } from 'next/navigation';
import React from 'react'

const Accounts = () => {
    //assume the profile into null
    const userProfileInfo = null;
    if (userProfileInfo === null) redirect('cart?search=product1&random=prabhas')
    return (
        <div>
            <h3 className='grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]'> Accounts Page</h3>
        </div>
    )
}

export default Accounts
