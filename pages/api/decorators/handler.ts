import { PrismaClient } from "@prisma/client";
import { NextApiRequest, NextApiResponse } from "next";
import "reflect-metadata";
import { container } from "tsyringe";
import { PRISMA_CLIENT } from "./controller.decorator";
import { IRoutes, ROUTES } from "./method.decorator";
import { IParam, SupportedDecorators, SupportedType } from "./param.decorator";
export const handler = (Controller: Function) => {
  container.register<PrismaClient>(PRISMA_CLIENT, {
    useValue: new PrismaClient(),
  });
  //@ts-ignore
  container.resolve(Controller);
  //@ts-ignore
  const instance = new Controller();
  return async (req: NextApiRequest, res: NextApiResponse) => {
    const routes: IRoutes[] = Reflect.getMetadata(ROUTES, Controller);
    for (const route of routes) {
      if (req.method === route.method) {
        const params: IParam[] =
          Reflect.getMetadata(SupportedDecorators.METHOD_PARAM, Controller) ||
          [];
        const bodies: IParam[] =
          Reflect.getMetadata(SupportedDecorators.BODY, Controller) || [];
        const paramList = [...params, ...bodies];
        paramList.sort((a, b) => a.index - b.index);

        const methodParams = paramList.map((item) => {
          if (item.type === SupportedType.PARAM) return req.query[item.path!];
          if (item.type === SupportedType.BODY)
            return item.path ? req.body[item.path] : req.body;
        });

        const result = await instance[route.name](...methodParams);
        return res.json(result);
      }
    }
  };
};
