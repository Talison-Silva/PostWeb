import { apiForApplication, applicationForApi } from "@/api/mappers/posts.ts";
import ServicesPosts from "@/api/services/infra-posts.ts";
import { count } from "console";
import { Request, Response } from "express";
import { logger } from "@/logger";

/* .....

{ apiForApplication, applicationForApi } .. Dependencies
{ Request, Response } .. Infra Posts
{ InfraPosts } .. Mappers

*/ // .....

export const get = async (req: Request, res: Response) => {
  logger.request({
    entity: "posts",
    route: "get",
  });
  var filter = JSON.parse(req.query.filter || "{}");
  var response = apiForApplication(await ServicesPosts.geted(filter));

  switch (typeof response) {
    case "number":
      logger.response({
        route: "get",
        code: response,
      });

      res.status(response).send();
      break;
    default:
      logger.request({
        code: 200,
        route: "get",
      });

      res.status(200).send(response);
      break;
  }
};

export const post = async (req: Request, res: Response) => {
  logger.request({
    entity: "posts",
    route: "post",
  });
  var params = applicationForApi({ ...req.body, ...req.files });
  var response = await ServicesPosts.posted(req.token, params);

  logger.response({
    route: "get",
    code: response,
  });

  res.status(response).send();
};

export const deleted = async (req: Request, res: Response) => {
  logger.request({
    entity: "posts",
    route: "deleted",
  });
  var response = await ServicesPosts.deleted(req.token, req.params.id);

  logger.response({
    route: "deleted",
    code: response,
  });

  res.status(response).send();
};

export const put = async (req: Request, res: Response) => {
  logger.request({
    entity: "posts",
    route: "put",
  });
  const params = applicationForApi({ ...req.body, ...req.files });
  var response = await ServicesPosts.puted(req.token, params);

  logger.response({
    route: "put",
    code: response,
  });

  res.status(response).send();
  //return res.status(204).send();
};
