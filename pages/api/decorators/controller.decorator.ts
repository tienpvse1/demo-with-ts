import { autoInjectable, inject } from "tsyringe";
import { ROUTES } from "./method.decorator";

export const Controller = (): ClassDecorator => {
  return (constructor) => {
    if (Reflect.getMetadata(ROUTES, constructor)) {
      Reflect.defineMetadata(ROUTES, [], constructor);
    }
  };
};

export const AutoInject = autoInjectable;
export const Inject = inject;
export const PRISMA_CLIENT = "PrismaClient";
