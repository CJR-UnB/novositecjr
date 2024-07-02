"use client";

import Cookies from "js-cookie";
import { useRouter } from "next/navigation";

export default function CheckAcessToken() {
  const router = useRouter();

  const accessToken = Cookies.get("accessToken");
  if (!accessToken) {
    router.push("/admin/auth");
  } else {
    router.push("/admin/blogAdmin/edit/[id]");
  }

  return (
    <main>
      <p>Verificando token de acesso...</p>
    </main>
  );
}
