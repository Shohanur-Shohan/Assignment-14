import Link from "next/link";

export default function Home() {
  return (
    <div className="w-full h-screen">
      <div className="w-1/3 mx-auto mt-20 text-center">
        <Link href={'/login'}><button className="w-[200px] btn btn-success">Register</button></Link>      
      </div>     
    </div>
  )
}
