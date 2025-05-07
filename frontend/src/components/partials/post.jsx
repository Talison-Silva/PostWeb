import { styled } from "styled-components";
import Minus from "@/assets/icons/minus.svg";
import Plus from "@/assets/icons/plus.svg";
import Gallery from "@/components/ui/gallery/index.jsx";
import { useRef } from "react";

import { AuthContext } from "@/app/contexts/AuthContext.tsx";
import { useNavigate } from "react-router-dom";
import { useContext, useEffect } from "react";

import {
  HeartIcon,
  PaperAirplaneIcon,
  EllipsisHorizontalIcon,
  ChatBubbleOvalLeftEllipsisIcon,
} from "@heroicons/react/24/outline";
/*
const Post = styled.div`
  position: relative;
  overflow: hidden;
  width: 100%;
  min-height: 384px;

  background-color: #0b0d0d;
  border: 1px solid #141717;
  border-radius: 16px;

  display: flex;
  flex-direction: column;

  .top {
    width: 100%;
    height: 200px;
    background-color: rgba(11, 13, 13, 0.4125);
    backdrop-filter: blur(12px);
  }

  .bottom {
    position: relative;
    flex-grow: 100;
    width: 100%;
    padding: 0 20px 10px 20px;
    background-color: #0b0d0d;
    color: white;
    font-family: "Roboto", monospace;
    user-select: none;

    display: flex;
    flex-direction: column;

    article {
      position: relative;
      z-index: 1;
      flex-grow: 1;

      & h1 {
        font-size: 22px;
        color: #084ccf;
      }

      & div {
        width: 100%;
        min-height: 16px;
        margin-top: 14px;
        overflow-wrap: break-word;
        text-align: justify;
        font-size: 12px;
      }

      & p {
        margin-top: 12px;
        font-size: 10px;
      }
    }

    & .viewer-post {
      width: 100%;
      height: 36px;
      margin-top: 14px;
      //background-color: #084ccf;
      background-color: #121414;
      border-radius: 10px 10px 0 0;
    }

    & .edit-post {
      width: 100%;
      height: 36px;
      background-color: #0942b0;
      border-radius: 0 0 10px 10px;
    }

    & .edit-post:active,
    & .viewer-post:active {
      transform: scale(90%);
    }

    fieldset {
      border-top: 0.75px solid #1e2020;
      min-height: 20px;
      margin-top: 14px;

      legend {
        font-size: 10px;
        padding: 0 20px 5px 20px;
      }

      & .comments {
        width: 100%;
        height: 40px;
        background-color: #121414;
        border-radius: 10px;
      }
    }

    &::before {
      content: "";
      position: absolute;
      top: -28px;
      left: 0;
      width: 512px;
      height: 80px;
      background-color: #0b0d0d;
      filter: blur(12px);
      z-index: 0;
    }
  }

  .close-disabled {
    position: absolute;
    top: 12px;
    left: 12px;
    width: 16px;
    height: 16px;
    border-radius: 50%;
    background-color: #303030;
    cursor: default;
  }

  .close {
    position: absolute;
    top: 12px;
    left: 12px;
    width: 16px;
    height: 16px;
    border-radius: 50%;
    background-color: #eb5c4d;

    img {
      opacity: 0;

      &:hover {
        opacity: 1;
      }
    }

    &:hover {
      transform: scale(120%);
    }

    &:active {
      transform: scale(100%);
    }
  }
  .maximize {
    position: absolute;
    top: 12px;
    left: 36px;
    width: 16px;
    height: 16px;
    border-radius: 50%;
    background-color: #62c94a;

    img {
      opacity: 0;

      &:hover {
        opacity: 1;
      }
    }

    &:hover {
      transform: scale(120%);
    }

    &:active {
      transform: scale(100%);
    }
  }
`;

export default ({ deleted, ...post }) => {
  var { isClient, tokenjwt } = useContext(AuthContext);
  isClient = isClient || {};
  const guestUser = useRef(isClient && tokenjwt() ? false : true);
  const navigate = useNavigate();

  const timePost = useRef({
    date: "",
    hours: "",
  });

  const push = (url) => {
    return () => {
      navigate(url);
    };
  };

  const clock = (clock) => {
    var time = new Date(clock);

    timePost.current.date = `${time.getMonth()}/${time.getDay()}/${time.getFullYear()}`;
    timePost.current.hours = `${time.getHours()}h${time.getMinutes()}`;
    console.log(timePost.current);
  };
  clock(post.createdAt);

  return (
    <Post
      style={{
        background: `url('${import.meta.env.VITE_BASE_URL_API}/static/emphasis/${post.emphasis}')`,
      }}
    >
      <section className="top"></section>
      <section className="bottom">
        <article>
          <h1>{post.title}</h1>
          <div>{post.description}</div>
          <div className="w-full min-h-min w-full flex justify-between items-center">
            <p>
              Post created by{" "}
              <span className="text-[#084ccf]">{post.user.username}</span>
            </p>
            <span className="flex gap-[10px]">
              <p>{timePost.current.date}</p>
              <p>{timePost.current.hours}</p>
            </span>
          </div>
        </article>

        <button
          className="viewer-post"
          onClick={push("/postweb-new/posts/view")}
        >
          view post
        </button>

        <button className="edit-post" onClick={push("/postweb-new/posts/edit")}>
          edit post
        </button>

        <fieldset>
          <legend align="center">comments</legend>
          <section className="comments" />
        </fieldset>
      </section>

      {isClient?.username === post?.user?.username && (
        <button
          className="close"
          onClick={() => {
            deleted(post.id);
          }}
        >
          <img src={Minus} />
        </button>
      )}

      {isClient?.username !== post?.user?.username && (
        <button className="close-disabled" />
      )}
      <button className="maximize" onClick={push("/postweb-new/posts/view")}>
        <img src={Plus} />
      </button>
    </Post>
  );
};
 */

const Post = styled.div`
  position: relative;
  width: 100%;
  min-height: min-content;
  border-radius: 20px;
  margin-top: 32px;
  background-color: #202020;
  padding: 32px;

  display: flex;
  flex-direction: column;
  gap: 12px;

  & .infors {
    width: 100%;
    height: min-content;
    //background-color: red;

    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 16px;

    & article {
      font-family: "Ubuntu", monospace;
      line-height: 1.425rem;
      display: flex;
      flex-direction: column;
      justify-content: center;

      & h1 {
        font-size: 20px;
        text-transform: capitalize;
      }

      & p {
        font-size: 12px;
        color: #c0c0c0;
        font-weight: 700;
      }
    }

    & button {
      width: 48px;
      height: 48px;
      border-radius: 50%;
      background-color: #2e2e2e;

      display: flex;
      justify-content: center;
      align-items: center;

      svg {
        width: 40px;
        height: 40px;
        color: #c0c0c0;
      }

      &:hover {
        border: 1.5px solid #c0c0c0;
      }

      &:active {
        transform: scale(90%);
      }
    }
  }
  & .post {
    min-height: min-content;
    //padding: 0 26px 0 26px;
    //background-color: blue;
  }
  & .b {
    width: 100%;
    height: min-content;
    //padding: 0 26px 0 26px;
    //background-color: red;

    & svg {
      width: 32px;
      height: 32px;
      color: #c0c0c0;
      stroke-width: 1px;
    }
  }

  & .gallery {
    //padding: 0 26px 0 26px;
    position: relative;
    //background-color: red;
    height: 300px;

    &-photo {
      width: 100%;
      height: 300px;
      background-color: purple;
      border-radius: 24px 24px 0 0;
    }
  }

  & .account {
    width: 52px;
    height: 52px;
    border: 2px solid #3e8cfc;
    border-radius: 50%;
  }
`;

const Clock = (d) => {
  let created = new Date(d);
  //let newString = `${created.getHours()}h${created.getMinutes()}`;

  return `${created.getHours()}h${created.getMinutes()}`;
};

export default ({ deleted, ...post }) => {
  return (
    <Post>
      <section className="infors">
        <div className="flex gap-[16px] ">
          <div
            style={{
              background: `url('${import.meta.env.VITE_BASE_URL_API}/static/emphasis/${post.emphasis}')`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
            className="account"
          />

          <article>
            <h1>{post.user.username}</h1>
            <p>{Clock(post.createdAt)}</p>
          </article>
        </div>

        <button>
          <EllipsisHorizontalIcon />
        </button>
      </section>

      <section className="post">
        <pre>{post.content} </pre>
      </section>

      {/*post.gallery.length > 0 && (
        <ul className="gallery">
          <li
            className="gallery-photo"
            style={{
              background: `url('${import.meta.env.VITE_BASE_URL_API}/static/gallery/${post.gallery[0]}')`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          ></li>
        </ul>
      )*/}

      {post.gallery.length > 0 && <Gallery photos={post.gallery} />}

      <section className="b">
        <div className="flex gap-[12px]">
          <HeartIcon />
          <ChatBubbleOvalLeftEllipsisIcon />
          <PaperAirplaneIcon />
        </div>
      </section>
    </Post>
  );
};
