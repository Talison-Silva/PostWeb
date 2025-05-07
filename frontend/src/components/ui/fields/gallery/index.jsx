import Emphasis from "@/components/ui/fields/emphasis/index.tsx";
import plus from "@/assets/icons/plus.svg";
import { styled } from "styled-components";
import { useRef, useState, useEffect } from "react";
import { useField } from "formik";

const Gallery = styled.div`
  & {
    width: 100%;
    min-height: 200px;
    //padding: 32px 48px 0 48px;
    //background-color: red;#121212;

    & .galleries {
      width: 100%;
      height: min-content;
      margin-bottom: 24px;

      display: flex;
      align-items: center;
      gap: 10px;

      .photos {
        display: flex;
        gap: 10px;
        max-width: 540px;
        overflow-x: auto;
      }

      .image {
        width: 80px;
        height: 56px;
        border-radius: 12px;
      }
      & .image-plus {
        width: 80px;
        height: 56px;
        background-color: #272822;
        border: 1px solid #414238;
        border-radius: 12px;

        display: flex;
        justify-content: center;
        align-items: center;
      }
    }
  }
`;

export default ({ name }) => {
  const save = (img) => {
    uploads.current.push(img);
  };

  const upload = () => {
    if (uploads.current[uploads.current.length - 1]) {
      setPhotos((e) => [...e, uploads.current[uploads.current.length - 1]]);

      setPhoto(null);
      let leitor = new FileReader();

      leitor.onload = (e) => {
        var element = document.getElementsByClassName("image")[photos.length];

        element.style.backgroundImage = `url(${e.target.result})`;
        element.style.backgroundPosition = "center";
        element.style.backgroundSize = "cover";
        element.style.backgroundRepeat = "no-repeat";
      };

      leitor.readAsDataURL(uploads.current[uploads.current.length - 1]);
    }
  };

  const viewer = (photo) => {
    return () => {
      setPhoto(photo);
    };
  };

  const [field, meta, helpers] = useField({ name: name || "" });
  const [photos, setPhotos] = useState([]);
  const [photo, setPhoto] = useState(null);
  const uploads = useRef([]);
  const images = useRef(null);
  const gallery = [];

  photos.map((item, key) => {
    gallery.push(
      <li
        children={<div className="image" onClick={viewer(item)} key={key} />}
      />,
    );
  });

  useEffect(() => {
    helpers.setValue(photos);
  }, [photos]);

  return (
    <Gallery>
      <div className="galleries">
        <ul className="photos">{gallery}</ul>
        <div className="image-plus" onClick={upload}>
          <img width="36" height="36" src={plus} type="image/svg+xml" />
        </div>
      </div>
      <Emphasis upload={save} photo={photo} field={false} />
    </Gallery>
  );
};
