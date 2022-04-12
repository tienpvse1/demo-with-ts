import { User } from "@prisma/client";
import { AutoInject } from "../decorators/controller.decorator";
import { HomeRepository } from "./home.repository";

@AutoInject()
export class HomeService {
  constructor(private repository: HomeRepository) {}

  findAll() {
    return this.repository.findAll();
  }
  findById(id: string) {
    return this.repository.findById(id);
  }

  create({ name }: { name: string }) {
    return this.repository.create({ name });
  }
  delete(id: string) {
    return this.repository.delete(id);
  }
  update(id: string, body: Partial<User>) {
    return this.repository.update(id, body);
  }
}
