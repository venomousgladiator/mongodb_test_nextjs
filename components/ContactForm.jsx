'use client';
import { useState } from "react"
import Link from "next/link";
import Image from "next/image";

export default function ContactForm (){
    const [fullname, setFullname] = useState("");
    const[email,setEmail] = useState("");
    const[age,setAge] = useState(""); 
    const [error,setError]= useState([]);
    const [success, setSuccess] = useState(false);

    const hsubmit = async (e) => {
        e.preventDefault();
        console.log("Full Name: ", fullname);
        console.log("Email: ", email);
        console.log("Age: ", age);

        const res = await fetch("api/contact",{
            method: 'POST',
            headers:{
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                fullname,
                email,
                age,
            }),
        })
        const{ msg, success }= await res.json();
        setError(msg);
        setSuccess(success);

        if (success) {
        setFullname("");
        setEmail("");
        setAge("");
        }
    };
    return(
        <>
        
            <form className="py-4 mt-4 border-t flex flex-col gap-5" onSubmit={hsubmit}>
            <div>
    </div>
        <div> 
            <label htmlFor="fullname">Full Name </label>
            <input onChange={(e)=>setFullname(e.target.value)}  type="text" id="fullname" placeholder="Shubham Kolaskar" value={fullname}/> 
        </div>
        <div>
            <label htmlFor="email">Email</label> 
            <input type="email" id="email" placeholder="shubh@gmail.com" onChange={(e)=>setEmail(e.target.value)} value={email}/> 
        </div>
        <div>
            <label htmlFor="age">Age</label>
            <input type="number" id="age" placeholder="20" onChange={(e)=>setAge(e.target.value)}  value={age}/>
        </div>
        <br/>
        <button type="submit" className="bg-blue-700 p-3 rounded text-white font-bold">Submit</button>
            </form>
            <div className="bg-slate-200 flex flex-col">
                {
                    error && error.map((e)=> (<div className="text-red-600 px-5 py-2">
                    {e}
                </div>
                ))}
            </div>
        </>
    )
}