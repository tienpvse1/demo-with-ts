import "reflect-metadata";

export const ROUTES = "routes";
export enum Method {
  GET = "GET",
  PUT = "PUT",
  POST = "POST",
  PATCH = "PATCH",
  DELETE = "DELETE",
}

export interface IRoutes {
  method: Method;
  name: string;
}

export const Get = (): MethodDecorator => {
  return (target, key) => {
    if (!Reflect.getMetadata(ROUTES, target.constructor)) {
      Reflect.defineMetadata(ROUTES, [], target.constructor);
    }
    const routes: IRoutes[] = Reflect.getMetadata(ROUTES, target.constructor);

    routes.push({
      method: Method.GET,
      name: key.toString(),
    });
    Reflect.defineMetadata(ROUTES, routes, target.constructor);
  };
};
export const Post = (): MethodDecorator => {
  return (target, key, descriptor) => {
    if (!Reflect.getMetadata(ROUTES, target.constructor)) {
      Reflect.defineMetadata(ROUTES, [], target.constructor);
    }
    const routes: IRoutes[] = Reflect.getMetadata(ROUTES, target.constructor);

    routes.push({
      method: Method.POST,
      name: key.toString(),
    });
    Reflect.defineMetadata(ROUTES, routes, target.constructor);
  };
};
export const Delete = (): MethodDecorator => {
  return (target, key, descriptor) => {
    if (!Reflect.getMetadata(ROUTES, target.constructor)) {
      Reflect.defineMetadata(ROUTES, [], target.constructor);
    }
    const routes: IRoutes[] = Reflect.getMetadata(ROUTES, target.constructor);

    routes.push({
      method: Method.DELETE,
      name: key.toString(),
    });
    Reflect.defineMetadata(ROUTES, routes, target.constructor);
  };
};
export const PATCH = (): MethodDecorator => {
  return (target, key, descriptor) => {
    if (!Reflect.getMetadata(ROUTES, target.constructor)) {
      Reflect.defineMetadata(ROUTES, [], target.constructor);
    }
    const routes: IRoutes[] = Reflect.getMetadata(ROUTES, target.constructor);

    routes.push({
      method: Method.PATCH,
      name: key.toString(),
    });
    Reflect.defineMetadata(ROUTES, routes, target.constructor);
  };
};
export const Put = (): MethodDecorator => {
  return (target, key, descriptor) => {
    if (!Reflect.getMetadata(ROUTES, target.constructor)) {
      Reflect.defineMetadata(ROUTES, [], target.constructor);
    }
    const routes: IRoutes[] = Reflect.getMetadata(ROUTES, target.constructor);

    routes.push({
      method: Method.PUT,
      name: key.toString(),
    });
    Reflect.defineMetadata(ROUTES, routes, target.constructor);
  };
};
