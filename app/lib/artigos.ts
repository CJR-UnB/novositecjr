export async function findAll() {
  const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/artigos`);
  if (!response.ok) {
    throw new Error("Failed to fetch articles");
  }
  return response.json();
}

export async function findUnique(id: number) {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/artigos/${id}`
  );
  if (!response.ok) {
    throw new Error("Failed to fetch article");
  }
  return response.json();
}
