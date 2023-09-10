'use client'
import { useRouter } from "next/navigation"
import { useState } from "react"


export default function Login(){

    const router = useRouter();

    const [formValue, setFormValue] = useState({
        email: '',
        password: ''
    });

    const handleChange = (name, value) => {
        // const {name, value } = e.target;
        setFormValue({...formValue, [name]: value});
    }

    const handleSubmit= async (e) =>{

        e.preventDefault()
        const config = {method: 'POST', body: JSON.stringify(formValue)}
        const response = await fetch('/api/login', config);
        const json = await response.json();

        if(json['status'] === true){
            router.replace('/dashboard')
        }else{
            alert(json['message']);
        }
    }


    return(
        <div>           
            <form onSubmit={handleSubmit} className="w-[500px] mx-auto border-2 p-6 mt-20">
                <p className="mb-5 text-3xl text-center">Login</p>
                
                <label  className="block mb-1">Email</label>
                <input onChange={(e)=> {handleChange('email', e.target.value)}} value={formValue?.email} type="email" className="block w-full px-2 py-2 mb-3 border-2 rounded-md" placeholder="Your Email"/>

                <label className="block">Password</label>
                <input onChange={(e)=> {handleChange('password', e.target.value)}} value={formValue?.password} type="password" className="block w-full px-2 py-2 mb-3 border-2 rounded-md" placeholder="Your Password"/>

                <button  type="submit" className='w-full py-3 mt-5 text-center text-white bg-blue-600 rounded-md hover:bg-blue-700 px-7'>Login</button>
            </form>
        </div>
    )
}