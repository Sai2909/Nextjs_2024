import Link from "next/link";

export default function Notfound() {
    return (
        <div>
            <h2>Page Not Found...😭</h2>
            <Link href={'/'}>Go BackNext Page...</Link>
        </div>
    )
}