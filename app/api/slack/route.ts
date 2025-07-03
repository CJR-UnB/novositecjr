import { App as SlackApp } from "@slack/bolt";

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

async function sendSlackMessage(blocks: any) {
  if (
    !process.env.SLACK_SIGNING_SECRET ||
    !process.env.SLACK_BOT_TOKEN ||
    !process.env.SLACK_CHANNEL
  ) {
    console.warn("Variáveis de ambiente do Slack não configuradas.");
    return;
  }

  const app = new SlackApp({
    signingSecret: process.env.SLACK_SIGNING_SECRET,
    token: process.env.SLACK_BOT_TOKEN,
  });

  await app.client.chat.postMessage({
    channel: process.env.SLACK_CHANNEL,
    text: "Um novo cliente respondeu o form!",
    blocks: blocks,
  });
}


/*

O código acima pode ser integrado dentro do funil de vendas com a seguinte função aplicada dentro do componente


  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsSubmitting(true); // Show loading animation

    try {
      const response = await fetch("/api/slack", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setTimeout(() => {
          setIsSubmitting(false);
          setIsSubmitted(true);
        }, 1000);
      } else {
        console.error(
          "Erro ao enviar mensagem para o Slack",
          response.statusText
        );
      }
    } catch (error) {
      console.error("Erro ao enviar mensagem para o Slack", error);
    } finally {
    }
  };


*/
