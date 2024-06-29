import prisma from "@/lib/prisma";
import { NextRequest } from "next/server";

interface ArticleData {
  id: number;
  title: string;
  content: string;
  author: string;
  createdAt: Date;
  updatedAt: Date;
}

export async function GET(req: NextRequest) {
  try {
    const articles = await prisma.article.findMany({
      orderBy: {
        id: "desc",
      },
    });
    return new Response(JSON.stringify(articles), {
      status: 200,
      headers: {
        "Content-Type": "application/json",
      },
    });
  } catch (error) {
    console.error("Erro ao buscar artigos:", error);
    return new Response("Erro ao buscar artigos", { status: 500 });
  }
}

export async function POST(req: NextRequest) {
  try {
    const articleData: ArticleData = await req.json();
    const article = await prisma.article.create({
      data: {
        id: articleData.id,
        title: articleData.title,
        content: articleData.content,
        author: articleData.author,
      },
    });
    return new Response(JSON.stringify(article), {
      status: 201,
      headers: { "Content-Type": "application/json" },
    });
  } catch (error) {
    console.error("Erro ao criar artigo:", error);
    return new Response("Erro ao criar artigo", { status: 500 });
  }
}

export async function PUT(req: NextRequest) {
  try {
    const articleData: ArticleData & { id: number } = await req.json();
    const article = await prisma.article.update({
      where: { id: articleData.id },
      data: {
        id: articleData.id,
        title: articleData.title,
        content: articleData.content,
        author: articleData.author,
      },
    });
    return new Response(JSON.stringify(article), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    });
  } catch (error) {
    console.error("Erro ao atualizar artigo:", error);
    return new Response("Erro ao atualizar artigo", { status: 500 });
  }
}

export async function DELETE(req: NextRequest) {
  try {
    const { id }: { id: number } = await req.json();
    await prisma.article.delete({
      where: { id },
    });
    return new Response("Artigo deletado com sucesso", { status: 200 });
  } catch (error) {
    console.error("Erro ao deletar artigo:", error);
    return new Response("Erro ao deletar artigo", { status: 500 });
  }
}
