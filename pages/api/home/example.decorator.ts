import { NextApiHandler } from "next";

const handler: NextApiHandler = (req, res) => {
  if (req.method === "GET") {
    res.json({ message: "hello" });
  }
};

export default handler;
