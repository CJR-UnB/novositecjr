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
    const spreadsheetId = "1pwmuxDpN0usQCbwZXSeXOmOFXvsFGejywBnJMBi07Wk";
    const range = "Página1!A:E";

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
  } catch (error: any) {
    return new Response(JSON.stringify({ error: error.message }), {
      status: 500,
    });
  }
}
