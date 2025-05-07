import { EyeIcon, EyeSlashIcon } from "@heroicons/react/24/outline";
import { Field, useField, ErrorMessage } from "formik";
import styled from "styled-components";
import { useState, useEffect, useRef } from "react";

const InputNormal = styled.div`
  width: 100%;
  min-height: min-content;
  display: flex;
  flex-direction: column;
  gap: 4px;
`;

const InputStyle = styled.div`
  width: 100%;
  height: 48px;
  border: 2px dashed #414238;
  border-radius: 10px;
  background-color: #272822;
  overflow: hidden;

  display: flex;
  justify-content: space-between;
  align-items: center;

  font-family: "Roboto Mono", monospace;
  color: white;

  input {
    width: 100%;
    height: 100%;
    padding: 0 0 0 8px;
    align-text: center;
    outline: 2px solid transparent;
    outline-offset: 2px;
    background-color: transparent;
  }

  input::placeholder {
    color: #7d7d7d;
  }
`;

let lastIndx = 0;
const gmailSplit = (gmail) => {};

export default ({ id, name, label, type, cookie, specific, ...props }) => {
  const [fields, meta, helpers] = useField({ name: "email", type: "text" });
  const [Type, setType] = useState(type);
  const HotEmail = useRef(null);
  var hotemail = "";
  const [field] = useField(name);

  useEffect(() => {
    if (cookie) {
      cookie(`${name}${id ? id : ""}`, field.value, {
        path: `/postagens/`,
        maxAge: 10000,
      });
    }
  }, [field.value]);

  let letra = "";
  fields.onChange = (e) => {
    console.log(e.target.value.split(HotEmail.current.value));

    letra = e.target.value.split(HotEmail.current.value)[0];
    letra += HotEmail.current.value;

    helpers.setValue(letra);
  };

  return (
    <div className="w-full flex">
      <InputNormal
        className={
          label
            ? "border-2 rounded-[10px] border-dashed border-[#232323] p-2"
            : ""
        }
      >
        {label && (
          <p className="font-robotoMono font-[600] text-[10px] text-white">
            {label}
          </p>
        )}
        <InputStyle style={specific}>
          <Field type="email" name={name} {...props} />
        </InputStyle>
        <ErrorMessage name={name} />
      </InputNormal>
    </div>
  );
};
