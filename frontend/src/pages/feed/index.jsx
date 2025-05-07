import Highlights from "@/components/layout/highlights";
import Feeds from "@/components/layout/feeds";

import { styled } from "styled-components";

const Feed = styled.section`
  min-height: 100vh;
  display: flex;
`;

export default ({ children }) => {
  return (
    <Feed>
      <Feeds>{children}</Feeds>
      <Highlights />
    </Feed>
  );
};
