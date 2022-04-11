import { NextApiRequest, NextApiResponse } from "next";
import "reflect-metadata";
import { IRoutes, Method, ROUTES } from "./method.decorator";
export const handler = (Controller: Function) => {
  //@ts-ignore
  const instance = new Controller();
  return async (req: NextApiRequest, res: NextApiResponse) => {
    const routes: IRoutes[] = Reflect.getMetadata(ROUTES, Controller);
    for (const route of routes) {
      if (req.method === route.method) {
        const result = await instance[route.name](req, res);
        return res.json(result);
      }
    }
  };
};
