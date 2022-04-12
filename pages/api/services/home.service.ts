import { AutoInject } from "../decorators/controller.decorator";
import { HomeRepository } from "./home.repository";

@AutoInject()
export class HomeService {
  constructor(private repository: HomeRepository) {}

  findById(id: string) {
    return this.repository.findById(id);
  }

  create({ name }: { name: string }) {
    return this.repository.create({ name });
  }
}
