import { styled } from "styled-components";

const SignIn = styled.div`
  position: relative;
  height: 100vh;
  display: flex;
  padding: 10px;
  border-radius: 36px;
  font-family: "Roboto", monospace;
  color: white;

  // w-[30vw] p-[40px] h-full rounded-[10px] bg-[#1d1d1d] flex flex-col justify-between
  & section.left {
    width: 36vw;
    height: 100%;
    padding: 40px;
    border-radius: 10px;
    background-color: #1d1d1d;

    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }

  & section.right {
    flex-grow: 1;
    height: 100%;
    background-color: #0a0a0a;
  }
`;

export default () => {
  return (
    <SignIn>
      <section className="left snap-align-none"></section>
      <section className="right"></section>
    </SignIn>
  );
};
