import fs from "fs";
import { google } from "googleapis";
import path from "path";

export async function POST(req: Request) {
  try {
    const { nome, email, telefone, conheceuPor, descricaoProjeto, data } =
      await req.json();

    const auth = new google.auth.GoogleAuth({
      credentials: JSON.parse(
        fs.readFileSync(
          path.join(process.cwd(), "app/api/planilha/chave.json"),
          "utf-8"
        )
      ),
      scopes: ["https://www.googleapis.com/auth/spreadsheets"],
    });

    const sheets = google.sheets({ version: "v4", auth });
    const spreadsheetId = "1hnk7iXiz9w6kiq62liqsfD4dAkHsuJe9gtYcp9I3f60";
    const range = "Página1!A:F";

    await sheets.spreadsheets.values.append({
      spreadsheetId,
      range,
      valueInputOption: "RAW",
      requestBody: {
        values: [[nome, email, telefone, conheceuPor, descricaoProjeto, data]],
      },
    });

    return new Response(
      JSON.stringify({ message: "Dados adicionados com sucesso!" }),
      { status: 200 }
    );
  } catch (error: unknown) {
    const message =
      error instanceof Error ? error.message : "Erro interno ao salvar o lead.";

    return new Response(JSON.stringify({ error: message }), {
      status: 500,
    });
  }
}
