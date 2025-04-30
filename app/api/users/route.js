import prisma from "@/lib/prisma";


export async function GET() {
  try {
    const collectors = await prisma.collectors.findMany();
    return new Response(JSON.stringify(collectors), { status: 200 });
  } catch (error) {
    return new Response(JSON.stringify({ error: error.message }), { status: 500 });
  }
}