import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import TipTap from "./TipTap";

interface EditorProps {
  id: number;
  title: string;
  author: string;
  createdAt: Date;
  content: string;
  updatedAt: Date;
}
const Editor: React.FC<EditorProps> = ({
  id,
  title,
  author,
  createdAt,
  content,
  updatedAt,
}) => {
  const formSchema = z.object({
    title: z
      .string()
      .min(5, { message: "O título deve ter no mínimo 5 caracteres" })
      .max(100, { message: "O título deve ter no máximo 100 caracteres" }),
    content: z.string().max(20000, {
      message: "O conteúdo deve ter no máximo 20000 caracteres",
    }),
    createdAt: z.string(),
    updatedAt: z.string(),
    author: z.string(),
  });

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    mode: "onChange",
    defaultValues: {
      content: content,
      title: title,
      createdAt: createdAt,
      updatedAt: updatedAt,
      author: author,
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    //aqui vai vir a função foda
  }

  return (
    <>
      <main className="p-5 flex flex-col items-center ">
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="w-[75vw]">
            <FormField
              control={form.control}
              name="title"
              render={({ field }) => (
                <FormItem className="flex flex-col text-2xl">
                  <FormLabel className="text-xl">Title</FormLabel>
                  <FormControl>
                    <input
                      placeholder="Insira o título aqui"
                      {...field}
                      className="p-2 rounded-lg border text-lg"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            ></FormField>
            <FormField
              control={form.control}
              name="author"
              render={({ field }) => (
                <FormItem className="flex flex-col text-4xl">
                  <FormLabel className="text-xl mt-5">Autor</FormLabel>
                  <FormControl>
                    <input
                      placeholder="Insira o autor aqui"
                      {...field}
                      className="p-2 rounded-lg border text-lg"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            ></FormField>
            <FormField
              control={form.control}
              name="content"
              render={({ field }) => (
                <FormItem className="mt-5">
                  <FormLabel className="text-xl">Texto</FormLabel>
                  <FormControl>
                    <TipTap onChange={field.onChange} content={content} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            ></FormField>
          </form>
        </Form>
      </main>
    </>
  );
};

export default Editor;
