import type { User } from "@prisma/client";
import { AutoInject, Controller } from "../decorators/controller.decorator";
import { handler } from "../decorators/handler";
import { Delete, Get, Patch, Post } from "../decorators/method.decorator";
import { Body, Param } from "../decorators/param.decorator";
import { HomeService } from "./home.service";

@AutoInject()
@Controller("/api/home")
export class MyController {
  constructor(private service: HomeService) {}

  @Get()
  getAll() {
    return this.service.findAll();
  }

  @Get(":id")
  async getItem(@Param("id") id: string) {
    return this.service.findById(id);
  }
  @Post()
  async postItem(@Body() body: User) {
    return this.service.create(body);
  }

  @Delete(":id")
  async delete(@Param("id") id: string) {
    return this.service.delete(id);
  }

  @Patch(":id")
  async updateItem(@Param("id") id: string, @Body() body: Partial<User>) {
    return this.service.update(id, body);
  }
}

export default handler(MyController);
