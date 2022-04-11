import type { NextApiRequest } from "next";
import { handler } from "../decorators/handler";
import { Get } from "../decorators/method.decorator";

class Controller {
  @Get()
  handleGetWithId(req: NextApiRequest) {
    return req.query;
  }
}

export default handler(Controller);
