export function GET(req) {

  return new Response("Hello")
}

export function POST(req, res) {
  res.status(200).json({ message: "Hello" });
}
