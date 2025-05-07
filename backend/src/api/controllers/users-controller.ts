import { apiForApplication, applicationForApi } from "@/api/mappers/users.ts";
import ServicesUsers from "@/api/services/infra-users.ts";
import { Request, Response } from "express";

import { logger } from "@/logger";
/* .....

{ apiForApplication, applicationForApi } .. Mappers
{ Request, Response } .. Dependencies
{ InfraUsers } .. Infra Users

*/ // .....

export const get = async (req: Request, res: Response) => {
  logger.request({
    entity: "users",
    route: "get",
  });

  var filter = JSON.parse(req.query.filter || "{}");
  var response = apiForApplication(await ServicesUsers.geted(filter));

  switch (typeof response) {
    case "number":
      logger.response({
        code: response,
        route: "get",
      });

      res.status(response).send();
      break;
    default:
      logger.response({
        code: 200,
        route: "get",
      });

      res.status(200).send(response);
      break;
  }
};

export const authenticate = async (req: Request, res: Response) => {
  logger.request({
    entity: "users",
    route: "authenticate",
  });

  var response = await ServicesUsers.authenticate(req.body);

  switch (typeof response) {
    case "number":
      logger.response({
        code: response,
        route: "authenticate",
      });

      res.status(response).send();
      break;
    default:
      logger.response({
        code: 200,
        route: "authenticate",
      });

      res.status(200).send({
        client: apiForApplication([response.client]),
        token: response.token,
      });
      break;
  }
};

export const register = async (req: Request, res: Response) => {
  logger.request({
    entity: "users",
    route: "register",
  });

  var params = applicationForApi({ ...req.body, ...req.files });
  var response = await ServicesUsers.register(params);

  logger.response({
    code: response,
    route: "register",
  });

  res.status(response).send();
};

export const myAccount = async (req: Request, res: Response) => {
  logger.request({
    entity: "users",
    route: "myAccount",
  });
  var response = apiForApplication(await ServicesUsers.myAccount(req.token));

  switch (typeof response) {
    case "number":
      logger.response({
        code: response,
        route: "myAccount",
      });

      res.status(response).send();
      break;
    default:
      logger.response({
        code: 200,
        route: "myAccount",
      });

      res.status(200).send(response);
      break;
  }
};
