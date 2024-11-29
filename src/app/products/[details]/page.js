export default function Dynamic({ params }) {
    console.log("server side parmas", params)
    return (
        <div>
            <h2 className='grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]'>Dynamic Routing</h2>
        </div>
    )
}