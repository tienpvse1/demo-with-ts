import { PrismaClient } from "@prisma/client";
import type { NextApiRequest } from "next";
import { handler } from "../decorators/handler";
import { Get, Post } from "../decorators/method.decorator";

class Controller {
  client = new PrismaClient();

  @Get()
  async getItem() {
    return this.client.user.findMany();
  }

  @Post()
  async postItem(req: NextApiRequest) {
    return this.client.user.create({
      data: {
        name: req.body.name,
      },
    });
  }
}

export default handler(Controller);
