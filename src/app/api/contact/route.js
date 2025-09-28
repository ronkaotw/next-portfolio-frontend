export async function GET() {
  const res = await fetch("https://api.ronkao.tw/contact");
  const data = await res.json();
  return new Response(JSON.stringify(data), { status: 200 });
}