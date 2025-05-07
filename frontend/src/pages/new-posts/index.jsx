import Loading from "@/UI/components/loading/index.jsx";
import Post from "@/components/partials/post.jsx";
import { useEffect, useState } from "react";
import { Hook } from "@/app/hook/hook.ts";
import { FourSquare } from "react-loading-indicators";
import { styled } from "styled-components";

const PostsPage = styled.section`
  min-height: min-content;
  position: relative;
  color: white;

  /*div {
    min-wight: 100px;
    min-height: 100px;
  }*/
`;

export default () => {
  const fetchPosts = async () => {
    const { data } = await Hook.push("/new-posts/")
      .notify({
        good: {
          type: "good",
          notify: {
            title: "Posts successfully rescued!",
            message: "the request made to our API was completed successfully.",
          },
        },
      })
      .get();
    setResponse(data);

    setTimeout(() => {
      setLoading(false);
    }, 1000);
  };

  const deleted = async (id) => {
    await Hook.push(`/new-posts/${id}`).delete();
    setResponse(response.filter((post) => post.id !== id));
  };

  const [loading, setLoading] = useState(true);
  const [response, setResponse] = useState();
  useEffect(() => {
    fetchPosts();
  }, []);

  var itms = [];

  if (!loading) {
    if (response.length === 0) {
      return (
        <div class="h-screen text-white uppercase font-[900] flex justify-center items-center">
          <p>no posts</p>
        </div>
      );
    } else {
      response?.map((posts, index) => {
        itms.push(<Post deleted={deleted} {...posts} />);
      });

      return <PostsPage>{itms}</PostsPage>;
    }
  } else {
    return (
      <section className="w-full h-screen flex justify-center items-center">
        <FourSquare color="#084ccf" size="medium" text="" textColor="" />
      </section>
    );
  }
};
