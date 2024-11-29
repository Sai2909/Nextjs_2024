"use client"
import Link from "next/link";
import { useRouter } from "next/navigation";

/*
=>By default server component.
=>client componetn we need to use the "use client".
=>Routes        -account and products.
=>Nested Routes -account/membership.
=>dynamic Route - [details]=>products/sdf(somthing).
=>Mutlipe Slugs -[...product-review] =>products/fadhbsd/dsfbsd/shbfs
=>Link           - hrfe={}
=>useRouter      - next/navigation  =>onClick={}
=> redirect      -      const userProfileInfo=null;
                   if(userProfileInfo===null) redirect('profile')

=>usePathname    -import { usePathname} from "next/navigation"    -client
=>serachParms    -import { useSearchParams } from "next/navigation"  -client
=>searver side - using {params} and {searchParams}
=>create file in root -Loading and suspance in main layout
=>create file in root -page not fount page 
*/
export default function Home() {

  //useRouter
  const router = useRouter()
  console.log(router)

  //button click with push
  function handleNavigate() {
    router.push('products')
  }





  return (
    <div className="grid grid-rows-[20px_1fr_20px]  justify-items-center p-8 pb-20 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <h2>Next Js Learning 2024</h2>
      <Link href={'products'}>This is Products</Link>
      <Link href={'/account'}>This is Account</Link>
      <h2 className="font-bold mt-3 text-lg">Alternative navigating  using the useRouter </h2>
      <button onClick={handleNavigate}>Navigate to products page using use router</button>
    </div>
  );
}
