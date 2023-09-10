'use client'
import { useRouter } from "next/navigation";
import { useState } from "react";


export default function Dashboard() {

  const [email, setEmail] = useState("");
  const router = useRouter();

  const logout = async () => {
    const res = await fetch('/api/login');
    const json = await res.json();
    if(json?.status === true){
      alert(json?.message);
      router.replace('/login');
    }
  }

  const ShowData = async () =>{
    const res = await fetch('/api/dashboard');
    const result = await res.json();
    // console.log(result['verify']['email'])
    const email = result['verify']['email'];
    // console.log(email)
    setEmail(email);
    alert("email set successfully")
    


  }
 


  return (
    <div className="w-full h-screen">
      <div className="w-1/3 mx-auto mt-20 text-center">
        <p>Dashboard</p> 
        <p>Wait 2 min for email</p> 
        <button onClick={ShowData}  type="submit" className='w-full py-3 mt-5 text-center text-white bg-blue-600 rounded-md hover:bg-blue-700 px-7'>Send Email</button>
        <p>Email sent success to: {email}</p>
        <button onClick={logout} type="submit" className='w-full py-3 mt-5 text-center text-white bg-blue-600 rounded-md hover:bg-blue-700 px-7'>Logout</button>   
      </div>     
    </div>
  )
}