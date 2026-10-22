import { google } from "googleapis";

const auth = new google.auth.GoogleAuth({
  credentials: JSON.parse(process.env.GOOGLE_CREDENTIALS || "{}"),
  scopes: ["https://www.googleapis.com/auth/spreadsheets"],
});

const sheets = google.sheets({ version: "v4", auth });
const spreadsheetId = process.env.SPREADSHEET_ID;
const range = "Página1!A:F";

export async function GET() {
  try {
    await auth.getAccessToken();
    return new Response(null, { status: 204 });
  } catch {
    return new Response(null, { status: 204 });
  }
}

export async function POST(req: Request) {
  try {
    const { nome, email, telefone, conheceuPor, descricaoProjeto, data } =
      await req.json();

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
      { status: 200 },
    );
  } catch (error: unknown) {
    const message =
      error instanceof Error ? error.message : "Erro interno ao salvar o lead.";

    return new Response(JSON.stringify({ error: message }), {
      status: 500,
    });
  }
}
