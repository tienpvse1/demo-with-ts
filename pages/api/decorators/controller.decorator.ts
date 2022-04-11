import { ROUTES } from "./method.decorator";

export const Controller = (): ClassDecorator => {
  return (constructor) => {
    if (Reflect.getMetadata(ROUTES, constructor)) {
      Reflect.defineMetadata(ROUTES, [], constructor);
    }
  };
};
