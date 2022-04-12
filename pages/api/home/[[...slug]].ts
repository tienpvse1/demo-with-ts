import type { User } from "@prisma/client";
import { AutoInject, Controller } from "../decorators/controller.decorator";
import { handler } from "../decorators/handler";
import { Get, Post } from "../decorators/method.decorator";
import { Body, Param } from "../decorators/param.decorator";
import { HomeService } from "./home.service";

@AutoInject()
@Controller("/api/home")
export class MyController {
  constructor(private service: HomeService) {}

  @Get(":slug")
  async getItem(@Param("slug") id: string) {
    console.log("short route get execute");
    return { message: `match ${id}` };
  }
  @Get("item/:id2")
  async getItem2(@Param("id2") id: string) {
    console.log("long route get execute");

    return { message: `match ${id}` };
  }
  @Post()
  async postItem(@Body() body: User) {
    console.log(body);
    return { body };
    // return this.service.create(body);
  }
}

export default handler(MyController);
