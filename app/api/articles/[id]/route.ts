import prisma from "@/lib/prisma";
import { NextRequest, NextResponse } from "next/server";

export async function GET(
  req: NextRequest,
  { params }: { params: { id: string } }
) {
  const { id } = params;

  try {
    const article = await prisma.article.findUniqueOrThrow({
      where: { id: Number(id) },
    });
    if (!article) {
      return (
        NextResponse.json({ error: "Artigo não encontrado" }), { status: 404 }
      );
    }
    return NextResponse.json(article);
  } catch (error) {
    return (
      NextResponse.json({ error: "Erro ao buscar artigos" }), { status: 500 }
    );
  }
}

export async function DELETE(
  req: NextRequest,
  { params }: { params: { id: string } }
) {
  const { id } = params;
  try {
    await prisma.article.delete({
      where: { id: Number(id) },
    });
    return (
      NextResponse.json({ message: "Artigo deletado com sucesso" }),
      { status: 200 }
    );
  } catch (error) {
    return (
      NextResponse.json({ error: "Erro ao deletar artigo PORRA" }),
      { status: 500 }
    );
  }
}
