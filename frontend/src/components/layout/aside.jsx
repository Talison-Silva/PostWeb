import { styled } from "styled-components";
import {
  ChatBubbleLeftRightIcon,
  RocketLaunchIcon,
  EnvelopeIcon,
  Cog6ToothIcon,
  UsersIcon,
} from "@heroicons/react/24/outline";
import postweb from "@/assets/images/postweb.svg";

import { AuthContext } from "@/app/contexts/AuthContext.tsx";
import { useContext } from "react";

const Aside = styled.aside`
  width: 24vw;
  height: 100vh;
  padding: 24px 28px 28px 28px;
  user-select: none;
  //border-right: 1px solid white;

  display: flex;
  flex-direction: column;

  .section-one {
    height: min-content;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    font-family: "Ubuntu", monospace;

    & div {
      display: flex;
      padding-left: 50px;

      & .account {
        width: 112px;
        height: 112px;
        border-radius: 50%;
        background-color: white;
        transform: translateX(-40px);
      }
      & .logo {
        width: 112px;
        height: 112px;
        border-radius: 50%;
        background-color: #202020;
      }
    }

    & h1 {
      margin-top: 14px;
      font-size: 19px;
      color: white;
    }

    & p {
      font-size: 12px;
      color: #a8a8a8;
    }
  }
  .central {
    margin-top: 32px;
    flex: 1 1 0%;

    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 8px;

    &-item {
      padding: 12px 24px 12px 24px;
      width: 100%;
      min-height: 48px;
      border-radius: 20px;
      display: flex;
      align-items: center;
      gap: 12px;
      transition: transform 600ms;

      & svg {
        width: 24px;
        height: 24px;
        color: white;
      }

      p {
        font-family: "Ubuntu", monospace;
        color: white;
        font-size: 20px;
        //font-weight: 600;
      }

      &:hover {
        //background-color: #2e2e2e;
        transform: scale(120%);
        svg,
        p {
          color: #084ccf; //#121212;
        }
      }

      &:active {
        transform: scale(90%);
      }
    }
  }
  .section-tree {
    height: 20vh;
    background-color: red;
  }
`;

/*
style={{
  background: `url('${import.meta.env.VITE_BASE_URL_API}/static/emphasis/${post.emphasis}')`,
  backgroundSize: "cover",
  backgroundPosition: "center",
}}
*/

export default () => {
  const { isClient } = useContext(AuthContext);
  console.log("isclint::.", isClient.photo);
  return (
    <Aside>
      <div className="section-one">
        <div>
          <div className="logo" style={{ background: `url(${postweb})` }} />
          <div
            className="account"
            style={{
              background: `url('${import.meta.env.VITE_BASE_URL_API}/static/photo-perfil/${isClient.photo}')`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          />
        </div>
        <h1>Talison Silva</h1>
        <p>@talison.silva.dev</p>
      </div>
      <div className="central">
        <button className="central-item">
          <div className="central-item-icon">
            <RocketLaunchIcon />
          </div>

          <p>News Feed</p>
        </button>

        <button className="central-item">
          <div className="central-item-icon">
            <EnvelopeIcon />
          </div>

          <p>Messages</p>
        </button>

        <button className="central-item">
          <div className="central-item-icon">
            <ChatBubbleLeftRightIcon />
          </div>

          <p>Foruns</p>
        </button>

        <button className="central-item">
          <div className="central-item-icon">
            <UsersIcon />
          </div>

          <p>Friends</p>
        </button>

        <button className="central-item">
          <div className="central-item-icon">
            <Cog6ToothIcon />
          </div>

          <p>Settings</p>
        </button>
      </div>
    </Aside>
  );
};
