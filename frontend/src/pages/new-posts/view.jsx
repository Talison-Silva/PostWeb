import { FourSquare } from "react-loading-indicators";
import { useEffect, useState, useRef } from "react";
import { useParams } from "react-router-dom";
import { styled } from "styled-components";
import { Hook } from "@/app/hook/hook.ts";
import { marked } from "marked";

const View = styled.section`
  min-height: 100vh;
  color: white;

  display: flex;
  flex-direction: column;

  .emphasis-post {
    position: relative;
    width: 100vw;
    height: 400px;
    background-color: rgba(11, 13, 13, 0.6125);
    backdrop-filter: blur(12px);
  }

  .emphasis-post::before {
    content: "";
    position: absolute;
    bottom: -20px;
    left: -16px;
    width: 100%;
    height: 100px;
    background-color: #0b0d0d;
    filter: blur(12px);
    z-index: 0;
  }

  .post {
    position: relative;
    flex-grow: 1;
    position: relative;
    padding: 0 200px 0 200px;
    background-color: #0b0d0d;
    display: flex;
    gap: 10px;

    & .account {
      width: 64px;
      height: 64px;
      border-radius: 50%;
    }

    & .container {
      flex-grow: 1;
      position: relative;
      height: min-content;

      & article {
        margin-top: 6px;
        font-family: "Roboto", monospace;
        .username {
        }
      }

      & div {
        margin-top: 10px;
        width: 100%;
        height: 100px;
        border-radius: 0 10px 10px 10px;
        background-color: #121414;
      }

      .comments {
        margin-top: 10px;
        width: 100%;
        height: 48px;
        border-radius: 5px;
        background-color: #121414;
      }
    }
  }
`;

export default () => {
  const fetchPost = async () => {
    const { data } = await Hook.push("/new-posts/").get({
      filter: JSON.stringify({ id: id }),
    });
    console.log(data[0]);
    setPost(data[0]);

    setLoading(false);

    /*setTimeout(() => {
      ContentRef.current.innerHTML = marked.parse(data[0].content);
      }, 100);*/
  };

  const [loading, setLoading] = useState(true);
  const [post, setPost] = useState({});
  const ContentRef = useRef(null);
  const { id } = useParams();

  useEffect(() => {
    fetchPost();
  }, []);

  if (!loading) {
    return (
      <View
        style={{
          background: `url('${import.meta.env.VITE_BASE_URL_API}/static/emphasis/${post.emphasis}')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <section className="emphasis-post"></section>
        <section className="post">
          <div
            className="account"
            style={{
              background: `url('${import.meta.env.VITE_BASE_URL_API}/static/emphasis/${post.emphasis}')`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          />
          <div className="container">
            <article>
              <h1 className="username">{post.user.username}</h1>
            </article>
            <div className="p-[20px]">
              <p>{post.content}</p>
            </div>
            <div className="comments"></div>
          </div>
        </section>
      </View>
    );
  } else {
    return (
      <section className="w-full h-screen flex justify-center items-center">
        <FourSquare color="#084ccf" size="medium" text="" textColor="" />
      </section>
    );
  }
};
