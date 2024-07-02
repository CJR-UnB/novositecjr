"use client";

import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function Page() {
  const router = useRouter();

  useEffect(() => {
    router.push("/admin/auth");
  }, [router]);

  return <>Redirecionando...</>;
}
