import BlogCard from "@/app/components/blogCard";
import { PageBreak } from "@/app/components/SVGicons";

const Blog: React.FC = () => {
  return (
    <section className="mt-20 items-center flex flex-col" id="blog">
      <h1 className="text-center text-spaceblue font-bold text-4xl md:text-5xl">
        CONHEÇA O BLOG DA CJR
      </h1>
      <PageBreak />
      {/* A gente vai precisar de uma função map com critério de post mais recente aqui
      vou deixar um placeholder por enquanto */}
      <BlogCard
        imageSrc="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=1471&amp;q=80"
        id="?"
        title="Isso é um teste!"
        author="Rafael Dias"
        createdAt="28 de Junho"
        text="lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum "
      />
    </section>
  );
};

export default Blog;
