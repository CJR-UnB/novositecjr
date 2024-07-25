"use client";

import Tiptap from "@/app/components/TipTap/TipTap";
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

  const handleChange = (content: string) => {
    setValue(content);
    console.log(value);
  };

  return (
    <main className="flex flex-col">
      <HeaderAlt />
      <h1 className="text-center mt-10 font-semibold text-xl">
        Crie seu artigo para o blog da CJR aqui
      </h1>
      <div className="flex flex-col self-center w-fit mt-10">
        <h2 className="text-mutedSpaceblue">Insira o título aqui.</h2>
        <input
          type="text"
          className="border-2 border-black mt-1 p-2 text-4xl font-medium rounded-md self-center"
          placeholder="Título"
          id="title"
        />
        <h2 className="text-mutedSpaceblue mt-3">Insira o autor aqui.</h2>
        <input
          type="text"
          className="border-2 border-black mt-1 p-2 text-xl rounded-md self-center w-full"
          placeholder="Autor"
          id="author"
        />
      </div>
      <div className="p-10">
        <Tiptap content={value} onChange={handleChange} />
      </div>
    </main>
  );
}
