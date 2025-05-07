import { useState, useEffect, useRef } from "react";
import { styled } from "styled-components";

import { useNavigate } from "react-router-dom";

import Account from "@/UI/components/photo-client-new/index.jsx";
import sliders from "@/assets/icons/sliders.svg";
import credits from "@/assets/icons/star.svg";
import search from "@/assets/icons/search.svg";
import gear from "@/assets/icons/gear.svg";
import redirect from "@/assets/icons/redirect.svg";

import { AuthContext } from "@/app/contexts/AuthContext.tsx";
import { useLocation } from "react-router-dom";
import { useContext } from "react";

const Header = styled.nav`
  z-index: 20;
  position: fixed;
  user-select: none;
  top: 0;
  left: 0;
  width: 100vw;
  height: 72px;
  background-color: rgba(13, 13, 13, 0.8125);
  backdrop-filter: blur(30px);
  padding-left: 32px;
  padding-right: 32px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: white;
  transition: top 600ms;

  & .logo {
    font-weight: 900;
    font-size: 26px;
  }

  & .right {
    min-width: min-content;
    height: 100%;
    //background-color: red;
    display: flex;
    align-items: center;
    gap: 30px;
  }

  & .right .search-new {
    position: relative;
    min-width: min-content;
    height: 42px;

    display: flex;
    gap: 16px;
  }

  & .right .log-in {
    min-width: min-content;
    padding: 10px 16px 10px 16px;
    border-radius: 10px;
    height: 44px;
    font-size: 20px;

    display: flex;
    align-items: center;
    gap: 10px;
    color: white;
  }

  & .right .create {
    height: 36px;
    padding: 0 20px 0 20px;
    border-radius: 8px;
    font-family: "Roboto", monospace;
    background-color: #084ccf;
    color: white;
  }

  & .right .log-in:hover {
    background-color: rgba(255, 255, 255, 0.125);
  }

  & .right .log-in:active {
    background-color: rgba(255, 255, 255, 0.125);
    transform: scale(90%);
  }

  & .right .search-new input {
    outline: 2px solid transparent;
    outline-offset: 2px;
    height: 100%;
    padding-left: 10px;
    padding-right: 10px;
    background-color: transparent;
    font-family: "Roboto", monospace;
    font-size: 12px;

    background-color: rgba(7, 7, 7, 1);
    border-radius: 5px;
  }

  & .right .search-new input::placeholder {
    font-weight: bold;
    opacity: 0.5;
    color: #7e7e7e;
    font-size: 12px;
    vertical-align: middle;
  }

  &[i-dynamic="true"] {
    top: -72px;
  }
  &[i-dynamic="false"] {
    top: 0px;

    .bar-open-header {
      height: 0px;
    }
  }
`;

export default ({ open }) => {
  const { isClient, tokenjwt } = useContext(AuthContext);
  const [guestUser, setGuestUser] = useState(
    isClient && tokenjwt() ? false : true,
  );

  const [dynamic, setDynamic] = useState(true);
  const mouseOver = useRef(false);
  const navigate = useNavigate();
  const locate = useLocation();

  const push = (url) => {
    return () => {
      navigate(url);
    };
  };

  useEffect(() => {
    if (!dynamic) {
      var time = setInterval(() => {
        if (!mouseOver.current) {
          setDynamic(true);
          clearInterval(time);
        }
      }, 3000);
    }
  }, [dynamic]);

  useEffect(() => {
    setGuestUser(isClient && tokenjwt() ? false : true);
  }, [isClient]);

  return (
    <Header
      i-dynamic={`${dynamic}`}
      onMouseOver={() => {
        mouseOver.current = true;
      }}
      onMouseOut={() => {
        mouseOver.current = false;
      }}
    >
      <div className="flex gap-[20px] items-center">
        <h1 onClick={push("/postweb-new/")} className="logo">
          Welcome Postweb
        </h1>

        <p
          onClick={push("/postweb-new/posts")}
          className="text-[#727272] font-robotoMono"
        >
          posts
        </p>
        <p
          onClick={push("/postweb-new/users")}
          className="text-[#727272] font-robotoMono"
        >
          users
        </p>
      </div>

      <div className="right">
        <form className="search-new">
          <img src={search} width="20" height="20" />
          <input type="text" placeholder="search..." />
          <img src={sliders} width="20" height="20" />
        </form>
        {!guestUser && <Account client={isClient} />}
        {guestUser && (
          <div className="log-in" onClick={push("/sign/in")}>
            <p>Log In</p>
            <img src={redirect} width="18" height="18" />
          </div>
        )}

        {!guestUser && (
          <button
            className="create"
            onClick={push("/postweb-new/posts/create")}
          >
            Create Post
          </button>
        )}
        <div className="flex gap-[10px] bg-[#084ccf] p-[10px] rounded-[10px]">
          <img src={credits} width="24" height="24" onClick={open} />
          <img src={gear} width="24" height="24" />
        </div>
      </div>

      <div className="absolute top-full left-0 w-full h-[6px] flex justify-center">
        <div
          onMouseOver={() => {
            setDynamic(false);
          }}
          className="bar-open-header w-[90vw] h-[6px] rounded-b-[4px] bg-[#084ccf] hover:bg-[#3f80fc]"
        />
      </div>
    </Header>
  );
};
