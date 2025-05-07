import { styled } from "styled-components";
import WallpaperSignIn from "@/assets/images/mesh-766.png";
import Google from "@/assets/icons/google.png";

import { useNavigate } from "react-router-dom";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import { useContext, useState } from "react";
import { AuthContext } from "@/app/contexts/AuthContext.tsx";

const SignIn = styled.div`
  & {
    position: relative;
    height: 100vh;
    display: flex;
    font-family: "Ubuntu", monospace;
    color: white;
    display: flex;
    user-select: none;
  }

  & .username {
    grid-area: username;
  }
  & .password {
    grid-area: password;
  }
  & .email {
    grid-area: email;
  }

  & .sign-in-left {
    width: 44vw;
    height: 100%;
    background-color: #0a0a0a;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    .welcome {
      text-transform: uppercase;
      font-weight: 950;
      text-wrap: wrap;
      font-size: 44px;
    }

    .create-account {
      margin-top: 10px;
      color: #333333;
      font-size: 16px;

      a {
        color: #084ccf;
      }
    }

    .form {
      position: relative;
      padding: 0 24px 0 24px;
      width: min-content;
      min-height: min-content;

      display: flex;
      flex-direction: column;
      align-items: center;

      .fields {
        margin-top: 50px;
        min-width: 400px;
        display: grid;
        grid-template-areas: "username username" "password password" "email email";
        gap: 16px;

        input {
          height: 44px;
          padding-left: 20px;
          border-radius: 4px;
          background-color: #272822;

          &::placeholder {
            color: #414238;
          }
          &:focus {
            outline: 2px solid #084ccf;
          }
        }
      }

      .submit {
        width: 100%;
        height: 52px;
        margin-top: 60px;
        border-radius: 5px;
        background-color: #084ccf;
      }

      .google {
        width: 100%;
        height: 52px;
        margin-top: 20px;
        border-radius: 5px;
        background-color: #272822;
        display: flex;
        justify-content: center;
        align-items: center;
        gap: 10px;
      }

      .google:active,
      .submit:active {
        transform: scale(98%);
      }

      .google:hover,
      .submit:hover {
        box-shadow: 0 0 0 1px #80abff;
      }
    }
  }

  & .sign-in-right {
    flex-grow: 1;
    height: 100%;

    padding: 40px;
    border-radius: 20px;
    color: black;

    background: url(${WallpaperSignIn});
    background-size: cover;
    background-position: center;

    display: flex;
    flex-direction: column;
    justify-content: flex-end;

    * {
      opacity: 70%;
    }
  }
`;

const validate = Yup.object({
  username: Yup.string().required("este campo é obrigatório"),
  email: Yup.string()
    .email("adicione um @exemple.com")
    .required("este campo é obrigatório"),
  password: Yup.string()
    .min(4, "o minimo são 8 carateres")
    .required("este campo é obrigatório"),
});

export default () => {
  const submit = async (fields, { setSubmitting }) => {
    await authenticate(fields).then((response) => {
      console.log("response ::. ", response);
    });
    setTimeout(() => navigate(import.meta.env.VITE_ROUTER_FEED_POSTS), 1000);
    setSubmitting(false);
  };

  const { authenticate } = useContext(AuthContext);
  const navigate = useNavigate();

  return (
    <SignIn>
      <section className="sign-in-left">
        <h1 className="welcome">
          hello, good to
          <br />
          see you :)
        </h1>

        <p className="create-account">
          Don't you have an account yet? press{" "}
          <a href={import.meta.env.VITE_ROUTER_SIGNUP}>here</a>
        </p>

        <Formik
          onSubmit={submit}
          validationSchema={validate}
          initialValues={{ username: "", password: "", email: "" }}
        >
          {(value, isSubmitting) => (
            <Form className="form">
              <section className="fields">
                <Field
                  type="text"
                  name="username"
                  placeholder="Username..."
                  className="username"
                />
                <Field
                  type="password"
                  name="password"
                  placeholder="Password..."
                  className="password"
                />
                <Field
                  type="email"
                  name="email"
                  placeholder="Email..."
                  className="email"
                />
              </section>

              <button type="submit" className="submit">
                Log In
              </button>

              <button type="submit" className="google">
                <img src={Google} className="w-[30px] h-[30px] rounded-full " />
                <p>Log in with Google</p>
              </button>
            </Form>
          )}
        </Formik>
      </section>

      <section className="sign-in-right">
        <div className="flex justify-between px-[40px] items-end">
          <p className="uppercase font-[950] text-[26px] ">postweb</p>
          <p className="uppercase font-[300] text-[20px] ">sign in</p>
        </div>
      </section>
    </SignIn>
  );
};
