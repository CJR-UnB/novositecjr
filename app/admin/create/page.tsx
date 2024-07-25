"use client";

import Tiptap from "@/app/components/TipTap/TipTap";
import HeaderAlt from "@/app/sections/headerAlt/headerAlt";
import Cookies from "js-cookie";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export default function CreateArticle() {
  const router = useRouter();
  const [value, setValue] = useState("");
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const accessToken = Cookies.get("accessToken");
    if (!accessToken) {
      router.push("/admin/auth");
    } else {
      const savedContent = Cookies.get("editorContent");
      const savedTitle = Cookies.get("editorTitle");
      const savedAuthor = Cookies.get("editorAuthor");
      if (savedContent) setValue(savedContent);
      if (savedTitle) setTitle(savedTitle);
      if (savedAuthor) setAuthor(savedAuthor);
      setIsLoading(false);
    }
  }, [router]);

  const handleChange = (content: string) => {
    setValue(content);
    Cookies.set("editorContent", content, { expires: 5 / 24 });
  };

  const handleTitleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newTitle = event.target.value;
    setTitle(newTitle);
    Cookies.set("editorTitle", newTitle, { expires: 5 / 24 });
  };

  const handleAuthorChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newAuthor = event.target.value;
    setAuthor(newAuthor);
    Cookies.set("editorAuthor", newAuthor, { expires: 5 / 24 });
  };

  const handleClearCookies = () => {
    if (
      window.confirm(
        "Tem certeza que deseja apagar os dados e começar do zero?"
      )
    ) {
      Cookies.remove("editorContent");
      Cookies.remove("editorTitle");
      Cookies.remove("editorAuthor");
      window.location.reload();
    }
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
          value={title}
          onChange={handleTitleChange}
        />
        <h2 className="text-mutedSpaceblue mt-3">Insira o autor aqui.</h2>
        <input
          type="text"
          className="border-2 border-black mt-1 p-2 text-xl rounded-md self-center w-full"
          placeholder="Autor"
          id="author"
          value={author}
          onChange={handleAuthorChange}
        />
      </div>
      <div className="p-10">
        {!isLoading && <Tiptap content={value} onChange={handleChange} />}
      </div>
      <button
        onClick={handleClearCookies}
        className="self-center mt-5 p-2 font-medium bg-red-500/80 text-white rounded-md transition-all duration-200 hover:scale-110 ease-in-out"
      >
        Apagar dados e começar do zero
      </button>
    </main>
  );
}
