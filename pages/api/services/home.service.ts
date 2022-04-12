import { AutoInject } from "../decorators/controller.decorator";
import { HomeRepository } from "./home.repository";

@AutoInject()
export class HomeService {
  constructor(private repository: HomeRepository) {}

  sayHello() {
    return this.repository.sayHello();
  }
}
