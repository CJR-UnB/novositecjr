// api/articles/edit/route.ts

import prisma from "@/lib/prisma";
import { NextRequest } from "next/server";

export async function GET(req: NextRequest) {
  const { searchParams } = new URL(req.url);
  const id = parseInt(searchParams.get('id') || '0', 10);


  try {
    const article = await prisma.article.findUnique({
      where: { id: id },
    });
    if (!article) {
      return new Response(JSON.stringify({ error: "Article not found" }), { status: 404 });
    }
    return new Response(JSON.stringify(article), { status: 200 });
  } catch (error) {
    console.error("Erro ao buscar artigos:", error);
    return new Response(JSON.stringify({ error: "Erro ao buscar artigos" }), { status: 500 });
  }
}