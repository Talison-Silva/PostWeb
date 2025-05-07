import { styled } from "styled-components";
import { Link } from "react-router-dom";

const Feeds = styled.aside`
  position: relative;
  height: 100vh;
  flex: 1 1 0%;
  overflow-y: auto;
  padding: 0 28px 0 28px;
  //border-left: 2px solid #202020;
  //border-right: 2px solid #202020;
  background-color: #141414;

  display: flex;
  flex-direction: column;

  & article.feed-article {
    height: min-content;
    padding: 24px 56px 0px 56px;
    display: flex;
    justify-content: space-between;
    font-family: "Ubuntu", monospace;
    align-items: center;

    & h1 {
      text-transform: capitalize;
      font-weight: 800;
      font-size: 20px;
      color: white;
    }

    & ul {
      display: flex;
      gap: 24px;
      color: white;
    }
  }
`;

export default ({ children }) => {
  return (
    <Feeds>
      <article className="feed-article">
        <h1>feeds</h1>
        <ul>
          <li>
            <Link to="/postweb-new/posts">Posts</Link>
          </li>
          <li>
            <Link to="/postweb-new/users">Users</Link>
          </li>
        </ul>
      </article>
      {children}
    </Feeds>
  );
};
