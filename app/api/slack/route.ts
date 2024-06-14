// app.slack.com/block-kit-builder
import { App as SlackApp } from "@slack/bolt";
import dotenv from "dotenv";

dotenv.config();

const app = new SlackApp({
  signingSecret: process.env.SLACK_SIGNING_SECRET,
  token: process.env.SLACK_BOT_TOKEN,
});

interface FormData {
  nome: string;
  email: string;
  telefone: string;
  conheceuPor: string;
  descricaoProjeto: string;
}

export async function POST(req: Request) {
  try {
    const formData: FormData = await req.json();
    const blocks = generateBlock(formData);

    await sendSlackMessage(blocks);

    return new Response(
      JSON.stringify({ message: "Mensagem enviada com sucesso!" }),
      {
        status: 200,
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
  } catch (error) {
    console.error("Erro ao enviar mensagem para o Slack:", error);
    return new Response(
      JSON.stringify({ message: "Erro ao enviar mensagem para o Slack" }),
      {
        status: 500,
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
  }
}

function generateBlock(formData: FormData) {
  return [
    {
      type: "section",
      text: {
        type: "mrkdwn",
        text: `*Novo cliente respondeu o form!*\n\n*Nome:* ${formData.nome}\n*Contato:* ${formData.email}, ${formData.telefone}\n*Como conheceu a CJR:* ${formData.conheceuPor}\n*Descrição do projeto:* ${formData.descricaoProjeto}`,
      },
    },
  ];
}

export function sendSlackMessage(block: any) {
  app.client.chat.postMessage({
    token: process.env.SLACK_BOT_TOKEN,
    channel: process.env.SLACK_CHANNEL || "geral",
    text: "Um novo cliente respondeu o form!",
    blocks: block,
  });
}
