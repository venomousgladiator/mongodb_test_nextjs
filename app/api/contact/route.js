import { NextResponse } from "next/server";
import connectdb from "@/app/lib/mongodb";
import contact from "@/app/models/contact";
import mongoose from "mongoose";
export async function POST(req){
    const {fullname, email, age}=await req.json();
try {
    await connectdb();
    await Contact.create({ fullname , email , age});

    return nextResponse.json({
        msg:["Success"],success: true,
    });
} catch (error) { 
    if (error instanceof mongoose.Error.validationError) {
        let errorList = [];
        for (let e in error.errors) {
        errorList.push(error.errors[e].message);
    }
console.log(errorList);
    return NextResponse.json({ msg: errorList });
} else {
    return NextResponse.json({ msg: ["Unable to send message."] });
    
}
}
}