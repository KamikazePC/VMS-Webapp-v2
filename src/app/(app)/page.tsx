import { Estate_Managers, existingEstateCodes } from "@/lib/codeCheck";


export default async function Home() {
const RegistrationCodes = await existingEstateCodes('2D1111')
console.log("RegistrationCodes.docs:", RegistrationCodes.docs)


const EstateMangaers= await Estate_Managers()
console.log("EstateMangaers:", EstateMangaers)


  return (
    <div>
    </div>
  );
}
