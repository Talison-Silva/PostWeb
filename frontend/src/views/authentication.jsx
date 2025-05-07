import { styled } from "styled-components";

const Layout = styled.main`
  position: relative;
  min-height: 100vh;
  overflow: hidden;
  background-color: #121212;
`;

export default ({ children, require }) => {
  return <Layout>{children}</Layout>;
};
