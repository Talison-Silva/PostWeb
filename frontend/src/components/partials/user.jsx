import { styled } from "styled-components";

const UserP = styled.div`
  position: relative;
  width: 200px;
  height: 200px;
  border-radius: 50%;
  transition: transform 1s;
  overflow: hidden;
  border: 6px solid #08152e;

  &:hover {
    transform: scale(120%);
  }
`;

export default ({ photo, username }) => {
  const User = styled(UserP)`
    &::after {
      content: "${username || "undefined"}";
      position: absolute;
      top: 70%;
      left: 0;
      width: 200px;
      min-height: min-content;
      background-color: #084ccf; //rgb(0, 0, 0, 1);
      padding: 8px 0 8px 0;

      text-align: center;
      text-transform: uppercase;
      font-weight: 800;
      color: white;
      font-size: 14px;
    }
  `;
  return (
    <User
      style={{
        background: `url('${import.meta.env.VITE_BASE_URL_API}/static/photo-perfil/${photo}')`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    />
  );
};
