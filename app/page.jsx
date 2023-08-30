import ContactForm from "@/components/ContactForm";
import Image from "next/image";
import contact from "@/components/ContactForm";
export default function Home() {
  return(
    <div className="p-4 max-w-3xl mx-auto">
      <div className="mx-auto p-4 max-w-3xl">
        <Image src="/header.jpg"  width={500}
      height={500}
        />
      </div>
    <h1 className="text-3xl font-bold">Welcome to Research Cell,SAKEC</h1>
    <h1 className="text-2xl font-semibold">Kindly Register</h1>
    <h1>Please fill the form below.</h1>
    <div className="mx-auto">
    <ContactForm/>
   
    </div>
    </div>
  );
}

