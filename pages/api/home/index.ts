import type { User } from "@prisma/client";
import { PrismaClient } from "@prisma/client";
import { AutoInject } from "../decorators/controller.decorator";
import { handler } from "../decorators/handler";
import { Get, Post } from "../decorators/method.decorator";
import { Body, Param } from "../decorators/param.decorator";
import { HomeService } from "../services/home.service";

@AutoInject()
class Controller {
  client = new PrismaClient();

  constructor(private service: HomeService) {}
  @Get()
  async getItem(@Param("id") id: string) {
    if (id) return this.client.user.findFirst({ where: { id } });

    return this.service.sayHello();
  }

  @Post()
  async postItem(@Body() body: User) {
    return this.client.user.create({
      data: {
        name: body.name,
      },
    });
  }
}

export default handler(Controller);
