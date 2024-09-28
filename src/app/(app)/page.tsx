'use client'
import { Estate_Managers, existingEstateCodes } from "@/lib/codeCheck";
import { useRouter } from "next/navigation";

export default async function Home() {

  const Router = useRouter()



  return (
    <div className="flex justify-center mt-[400px]">
    <button onClick={() => Router.push('/admin')} className=" bg-white text-black rounded-md hover:scale-105 p-2 font-bold text-lg">
      Login
    </button>
    </div>
  );
}
