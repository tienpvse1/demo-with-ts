import { handler } from "../decorators/handler";
import { Get } from "../decorators/method.decorator";

class Controller {
  @Get()
  getItem() {
    return { items: ["a", "b"] };
  }
}
export default handler(Controller);
