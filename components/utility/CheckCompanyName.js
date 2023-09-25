import { useEffect } from "react";
import { useRouter } from "next/router";
import {toast} from "react-toastify"

export default function CheckCompanyName() {
  const router = useRouter(); // Initialize router from next/router

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const companyName = localStorage.getItem("companyName");
      if ((!companyName || companyName === "") && (router.pathname !== "/App/Erhebung")) {
        // Redirect the user to "/App/Erhebung#company"
        router.push('/App/Insert#company');
        console.log("No CompanyName!");
        toast.warn("Bitte Füllen Sie erst Ihre Firmen ID aus!")
      }
    }
  }, [router]); // Include router as a dependency

  // You should also return some content here, even if it's just null
  return null;
}
