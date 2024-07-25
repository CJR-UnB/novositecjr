"use client";

import HeaderAlt from "@/app/sections/headerAlt/headerAlt";
import Cookies from "js-cookie";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export default function CreateArticle() {
  const router = useRouter();
  const [value, setValue] = useState("");

  useEffect(() => {
    const accessToken = Cookies.get("accessToken");
    if (!accessToken) {
      router.push("/admin/auth");
    }
  }, [router]);

  return (
    <main>
      <HeaderAlt />
    </main>
  );
}
