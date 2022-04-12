import { PrismaClient, User } from "@prisma/client";
import {
  AutoInject,
  Inject,
  PRISMA_CLIENT,
} from "../decorators/controller.decorator";

@AutoInject()
export class HomeRepository {
  constructor(@Inject(PRISMA_CLIENT) private client: PrismaClient) {}

  findById(id: string) {
    return this.client.user.findFirst({ where: { id } });
  }
  findAll() {
    return this.client.user.findMany();
  }

  create({ name }: { name: string }) {
    return this.client.user.create({ data: { name } });
  }
  delete(id: string) {
    return this.client.user.delete({ where: { id } });
  }
  update(id: string, body: Partial<User>) {
    return this.client.user.update({
      where: { id },
      data: body,
    });
  }
}
