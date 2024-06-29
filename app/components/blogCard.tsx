"use client";

import { useRouter } from "next/navigation";

interface BlogCardProps {
  id: number;
  title: string;
  author: string;
  createdAt: Date;
  content: string;
  updatedAt: Date;
  isAdmin?: boolean;
}

const BlogCard: React.FC<BlogCardProps> = ({
  id,
  title,
  author,
  createdAt,
  content,
  updatedAt,
  isAdmin,
}) => {
  const router = useRouter();
  const date = new Date(createdAt);
  const day = date.getDate().toString().padStart(2, "0");
  const month = (date.getMonth() + 1).toString().padStart(2, "0");
  const formattedDate = `${day}/${month}`;

  const handleLeiaMais = () => {
    router.push(`/blog/${id}`);
  };

  const handleDelete = async (id: number) => {
    try {
      const response = await fetch(`/api/articles`, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ id }),
      });

      if (!response.ok) {
        throw new Error("Failed to delete the article");
      }
      window.location.reload();
    } catch (error) {
      console.error("Ërror ao apagar o artigo", error);
    }
  };

  return (
    <div className="relative flex max-w-[24rem] flex-col rounded-lg bg-white bg-clip-border shadow-md text-spaceblue m-5">
      <div className="px-6 pt-6">
        <h4 className="block font-sans text-xl font-semibold leading-snug tracking-normal antialiased">
          {title}
        </h4>
        <p className="mt-3 block font-sans text-xl font-normal leading-relaxed text-mutedSpaceblue antialiased">
          {content.slice(0, 50)}
          {content.length > 50 ? "..." : ""}
        </p>
      </div>
      {isAdmin && (
        <div className="flex px-6 py-2 gap-5">
          <button className="bg-navyblue/70 p-2 rounded-lg text-white font-medium hover:scale-110 hover:bg-navyblue transition-all duration-300 ease-in-out">
            Editar
          </button>
          <button
            onClick={() => handleDelete(id)}
            className="bg-red-600/70 p-2 rounded-lg text-white font-medium hover:scale-110 hover:bg-red-600 transition-all duration-300 ease-in-out"
          >
            Excluir
          </button>
        </div>
      )}
      <button
        onClick={handleLeiaMais}
        className="flex items-center gap-2 w-fit mt-2 p-2 ml-6 font-medium text-aquagreen rounded-lg hover:bg-aquagreen/10 transition-all duration-200"
      >
        Continuar lendo
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="2"
          stroke="currentColor"
          aria-hidden="true"
          className="h-4 w-4"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
          ></path>
        </svg>
      </button>

      <div className="text-right px-5 pb-3 text-">
        <p className="block font-sans text-base font-normal leading-relaxed text-inherit antialiased">
          {formattedDate} - {author}
        </p>
      </div>
    </div>
  );
};

export default BlogCard;
