import { NextApiRequest, NextApiResponse } from "next";
import "reflect-metadata";
import { IRoutes, Method, ROUTES } from "./method.decorator";
export const handler = (Controller: Function) => {
  //@ts-ignore
  const instance = new Controller();
  return async (req: NextApiRequest, res: NextApiResponse) => {
    const routes: IRoutes[] = Reflect.getMetadata(ROUTES, Controller);
    for (const route of routes) {
      if (req.method === Method.GET && route.method === Method.GET) {
        const result = await instance[route.name](req, res);
        return res.json(result);
      }
      if (req.method === Method.POST && route.method === Method.POST) {
        const result = await instance[route.name](req, res);
        return res.json(result);
      }
      if (req.method === Method.PATCH && route.method === Method.PATCH) {
        const result = await instance[route.name](req, res);
        return res.json(result);
      }
      if (req.method === Method.PUT && route.method === Method.PUT) {
        const result = await instance[route.name](req, res);
        return res.json(result);
      }
      if (req.method === Method.DELETE && route.method === Method.DELETE) {
        const result = await instance[route.name](req, res);
        return res.json(result);
      }
    }
  };
};
