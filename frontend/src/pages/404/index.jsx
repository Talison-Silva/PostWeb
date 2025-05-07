import { styled } from "styled-components";
import pc from "@/assets/icons/pc.svg";

const NotFound = styled.section`
  height: 100vh;
  color: white;
  font-family: "Roboto", monospace;

  display: flex;
  justify-content: center;
  align-items: center;

  & .container {
    width: min-content;
    height: min-content;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 36px;

    & embed {
      width: 140px;
      height: 140px;
    }
    & p {
      text-align: center;
    }
  }
`;

export default () => {
  return (
    <NotFound>
      <div className="container">
        <embed src={pc} />
        <p>Esta de pagina não existe</p>
      </div>
    </NotFound>
  );
};
