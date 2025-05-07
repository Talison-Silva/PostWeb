import { styled } from "styled-components";
import { useRef } from "react";

const Gallery = styled.div`
  position: relative;
  border-radius: 28px 28px 0 0;
  overflow: hidden;
  width: 100%;
  height: 300px;

  & .blurry {
    position: relative;
    width: 100%;
    height: 100%;
    backdrop-filter: blur(0px);
    transition: backdrop-filter 600ms;

    display: flex;
    justify-content: center;
    align-items: flex-end;

    & ul.gallery {
      width: 90%;
      height: 100px;
      background-color: rgba(0, 0, 0, 0.4125);
      border-radius: 24px;
    }
  }
`;

export default ({ photos }) => {
  return (
    <Gallery
      style={{
        background: `url('${import.meta.env.VITE_BASE_URL_API}/static/gallery/${photos[0]}')`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
      onMouseOver={()=>{}}
      onMouseOut={()=>{}}
    >      
        <ul className="gallery">
          <li />
          <li />
        </ul>     
    </Gallery>
  );
};
