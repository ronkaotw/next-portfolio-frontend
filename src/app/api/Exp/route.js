export async function GET() {
  const res = await fetch("https://api.ronkao.tw/resume");
  const data = await res.json();
  return new Response(JSON.stringify(data), { status: 200 });
}