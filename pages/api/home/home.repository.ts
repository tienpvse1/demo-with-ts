import { PrismaClient } from "@prisma/client";
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

  create({ name }: { name: string }) {
    return this.client.user.create({ data: { name } });
  }
}
