import prisma from "@/lib/prisma";
import Cookies from "js-cookie";
import { useRouter } from "next/navigation";
import { NextRequest, NextResponse } from "next/server";

export interface ArticleData {
  id: number;
  title: string;
  content: string;
  author: string;
  createdAt: Date;
  updatedAt: Date;
}

export async function GET(req: NextRequest) {
  try {
    const articles = await prisma.article.findMany();
    return NextResponse.json(articles);
  } catch (error) {
    return (
      NextResponse.json({ error: "Erro ao buscar artigos" }), { status: 500 }
    );
  }
}

export async function POST(req: NextRequest) {
  const { title, content, author } = await req.json();
  try {
    const newArticle = await prisma.article.create({
      data: {
        title,
        content,
        author,
      },
    });
    return NextResponse.json(newArticle), { status: 201 };
  } catch (error) {
    return (
      NextResponse.json({ error: "Erro ao criar artigo" }), { status: 500 }
    );
  }
}

export async function PUT(req: NextRequest) {
  const { id, title, content, author } = await req.json();
  try {
    const updateArticle = await prisma.article.update({
      where: { id: id },
      data: {
        title,
        content,
        author,
      },
    });
    return NextResponse.json(updateArticle), { status: 200 };
  } catch (error) {
    return (
      NextResponse.json({ error: "Erro ao atualizar artigo" }), { status: 500 }
    );
  }
}

export function useAdminAccessCheck() {
  const router = useRouter();

  const accessToken = Cookies.get("accessToken");
  if (!accessToken) {
    router.push("/admin/auth");
  }
}

{
  /* EXEMPLOS DE COMO USAR ESSES ENDPOINTS DENTRO DO PROJETO
  

  /////////////////////////////////////////////////////////////
  GET MANY

  async function fetchArticles() {
    const response = await fetch('/api/articles');
    if (!response.ok) {
        throw new Error('Failed to fetch articles');
    }
    return await response.json();
}

// Example usage
fetchArticles()
    .then(articles => console.log('Articles:', articles))
    .catch(error => console.error('Error fetching articles:', error));
  
  /////////////////////////////////////////////////////////////
  
  GET UNIQUE

  async function fetchArticleById(id) {
    const response = await fetch(`/api/articles/${id}`);
    if (!response.ok) {
        throw new Error('Failed to fetch article');
    }
    return await response.json();
}

// Example usage
const articleId = 1; // Replace with an existing article ID
fetchArticleById(articleId)
    .then(article => console.log('Article:', article))
    .catch(error => console.error('Error fetching article:', error));

///////////////////////////////////////////////////////////

POST 

async function createArticle(articleData) {
    const response = await fetch('/api/articles', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(articleData),
    });
    if (!response.ok) {
        throw new Error('Failed to create article');
    }
    return await response.json();
}

// Example usage
const newArticle = {
    title: 'New Article',
    content: 'Lorem ipsum dolor sit amet...',
    author: 'John Doe',
};

createArticle(newArticle)
    .then(article => console.log('Created article:', article))
    .catch(error => console.error('Error creating article:', error));

///////////////////////////////////////////////////////////

    PUT


    async function updateArticle(id, updatedArticleData) {
    const response = await fetch(`/api/articles/${id}`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(updatedArticleData),
    });
    if (!response.ok) {
        throw new Error('Failed to update article');
    }
    return await response.json();
}

// Example usage
const articleIdToUpdate = 1; // Replace with an existing article ID
const updatedData = {
    title: 'Updated Article Title',
    content: 'Updated content...',
    author: 'Jane Doe',
};

updateArticle(articleIdToUpdate, updatedData)
    .then(article => console.log('Updated article:', article))
    .catch(error => console.error('Error updating article:', error));

///////////////////////////////////////////////////////////

    DELETE


    async function deleteArticle(id) {
    const response = await fetch(`/api/articles/${id}`, {
        method: 'DELETE',
    });
    if (!response.ok) {
        throw new Error('Failed to delete article');
    }
    // No need to return JSON, just check for successful response (204 No Content)
}

// Example usage
const articleIdToDelete = 1; // Replace with an existing article ID
deleteArticle(articleIdToDelete)
    .then(() => console.log('Article deleted successfully'))
    .catch(error => console.error('Error deleting article:', error));

///////////////////////////////////////////////////////////

CHECK ADMIN ACCESS 

    import {useAdminAccessCheck} from '@/api/articles/route';

    useAdminAccessCheck();

  */
}
