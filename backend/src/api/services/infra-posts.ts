import { authorizationJWT } from "@/helpers/authorizationJWT.ts";
import { toSeparateID } from "@/utils/toSeparateID.ts";
import { uploadImage } from "@/utils/upload-image.ts";
import { Infra } from "@/api/infra/mariadb.ts";

//
class InfraPosts extends Infra {
  model = "Posts";

  async geted(filter = {}) {
    return await this.get({ ...filter }, "Users");
  }

  posted(token, data) {
    return authorizationJWT(async (decode) => {
      if (data.emphasis) {
        data.emphasis = await uploadImage(data.emphasis, "emphasis");
      }

      var gallery = [];
      data.gallery.map(async (photo) => {
        gallery.push(await uploadImage(photo, "gallery"));
      });
      data.gallery = gallery;

      return await this.post({ ...data, userID: decode.sub });
    }, token);
  }

  deleted(token, id) {
    return authorizationJWT(async (decode) => {
      return await this.delete(id);
    }, token);
  }

  puted(token, data) {
    return authorizationJWT(async (decode) => {
      var [id, update] = toSeparateID(data);

      if (data.emphasis) {
        update.emphasis = await uploadImage(data.emphasis, "emphasis");
      }

      return await this.put(id, update);
    }, token);
  }
}

export default new InfraPosts();
