import { createContext, useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import Cookies from "universal-cookie";
import api from "@/app/hook/backend.js";
import { useLocation } from "react-router-dom";

export const AuthContext = createContext({});

interface Auth {
  username: string;
  password: string;
  email: string;
}

export const AuthProvider = ({ children }) => {
  const cookies = new Cookies(null, { path: "/" });
  const [isClient, setIsClient] = useState(null);
  const isAutheticate = !!isClient;
  const navigate = useNavigate();
  const locate = useLocation();

  const authenticate = async ({ email, password, username }: Auth) => {
    try {
      const {
        data: { token, client },
      } = await api.post("/new-users/authenticate", {
        password,
        username,
        email,
      });

      cookies.set("postweb.token.auth", token, { path: "/", maxAge: 3600 });
      setIsClient(client[0]);
    } catch (err) {
      console.error(err);
      cookies.set("postweb.token.auth", "", { path: "/", maxAge: 3600 });
      setIsClient(null);
    }
  };

  const refreshjwt = async () => {
    try {
      const { data } = await api.get("/new-users/myAccount");
      setIsClient(data[0]);
    } catch (err) {
      if (!cookies.get("postweb.token.auth")) {
        navigate(import.meta.env.VITE_ROUTER_SIGNIN);
      }

      if (err?.response?.status) {
        switch (err?.response?.status) {
          case 401:
            navigate(import.meta.env.VITE_ROUTER_SIGNIN);
            break;
        }
      }

      setIsClient(null);
    }
  };

  const tokenjwt = () => {
    return cookies.get("postweb.token.auth");
  };

  useEffect(() => {
    if (!isClient && tokenjwt()) {
      refreshjwt();
    }
  }, [locate]);

  return (
    <AuthContext.Provider
      value={{ authenticate, refreshjwt, isAutheticate, isClient, tokenjwt }}
    >
      {children}
    </AuthContext.Provider>
  );
};
