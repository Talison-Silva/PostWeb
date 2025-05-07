import { styled } from "styled-components";
import { useRef, useEffect } from "react";
import { useField } from "formik";

const Emphasis = styled.div`
  position: relative;
  width: 100%;
  height: 316px;
  //padding: 6px;
  border-radius: 10px;
  //border: 2px solid #141717;

  display: flex;
  flex-direction: column;
  gap: 2px;

  div.load-emphasis {
    position: relative;
    width: 100%;550px;
    height: 100%;
    overflow: hidden;
    border-radius: 10px;
    background-color: #272822;
    border: 2px dashed #414238;
  }
  .render-emphasis {
    width: 100%;
    height: 100%;
  }
  .upload-emphasis {
    opacity: 0;
    position: absolute;
    top: 0;
    left: 0;
    width: 550px;
    height: 250px;

  }
`;

export default ({ upload, photo, name, field = true }) => {
  const loadImage = (e) => {
    let leitor = new FileReader();

    if (e) {
      if (field) {
        helpers.setValue(e);
      }

      leitor.onload = (e) => {
        imageRef.current.style.background = `url(${e.target.result})`;
        imageRef.current.style.backgroundPosition = "center";
        imageRef.current.style.backgroundSize = "cover";
        imageRef.current.style.backgroundRepeat = "no-repeat";
      };

      console.log("leitor.readAsDataURL :. ", e);
      leitor.readAsDataURL(e);

      if (!field) {
        upload(e);
      }
    } else {
      if (imageRef.current) {
        imageRef.current.style.background = null;
      }
    }
  };

  const [Field, meta, helpers] = useField({ name: name || "" });
  const imageRef = useRef(null);
  const Photo = useRef(null);

  if (!field) {
    loadImage(photo);
  }

  return (
    <Emphasis>
      <div className="load-emphasis">
        <div
          ref={imageRef}
          className="render-emphasis"
          style={{
            backgroundImage: field
              ? `url('http://localhost:3005/static/emphasis/${Field.value}')`
              : `url('')`,
          }}
        />
        <input
          id="emphasis"
          type="file"
          onChange={(e) => {
            if (e.target.files[0]) {
              loadImage(e.target.files[0]);
            }
          }}
          className="upload-emphasis"
        />
      </div>
    </Emphasis>
  );
};
