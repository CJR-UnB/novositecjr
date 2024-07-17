"use client";

import HeaderAlt from "@/app/sections/headerAlt/headerAlt";
import Cookies from "js-cookie";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function CheckAcessToken() {
  const router = useRouter();

  useEffect(() => {
    const accessToken = Cookies.get("accessToken");
    if (!accessToken) {
      router.push("/admin/auth");
    } else {
      router.push("/admin/edit/[id]");
    }
  }, [router]);

  return (
    <main>
      <HeaderAlt />
      <p>Verificando token de acesso...</p>
    </main>
  );
}
