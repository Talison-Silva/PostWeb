import { authorizationJWT } from "@/helpers/authorizationJWT.ts";
import { uploadImage } from "@/utils/upload-image.ts";
import { Infra } from "@/api/infra/mariadb.ts";
import jwt from "jsonwebtoken";
import { access } from "fs/promises";
import bcrypt from "bcrypt";

class InfraUsers extends Infra {
  model = "Users";

  async geted(filters) {
    return await this.get({ ...filters });
  }

  myAccount(token) {
    return authorizationJWT(async (decode) => {
      return await this.get({
        id: decode.sub,
      });
    }, token);
  }

  async authenticate(data) {
    const [account] = await this.get({
      email: data.email,
    });

    if (account && (await bcrypt.compare(data.password, account.password))) {
      const token = await jwt.sign({ sub: account.id }, process.env.SECRET, {
        expiresIn: "3600s",
      });

      return { token: token, client: account };
    } else {
      return 500;
    }
  }

  async register(data) {
    if (data.photo) {
      data.photo = await uploadImage(data.photo, "photo-perfil");
    }

    var hasUser = await this.get({ email: data.email });
    data.password = await bcrypt.hash(data.password, 10);

    if (hasUser.length === 1) {
      return 409;
    } else {
      return await this.post(data);
    }
  }
}

export default new InfraUsers();
