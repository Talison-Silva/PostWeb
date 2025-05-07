import { styled } from "styled-components";
import { Formik, Form, Field } from "formik";
import Emphasis from "@/components/ui/fields/emphasis/index.tsx";
import Gallery from "@/components/ui/fields/gallery/index.jsx";
import { Hook } from "@/app/hook/hook.ts";

const Create = styled.section`
  position: relative;
  min-height: 100vh;
  color: white;
  padding: 100px 200px 100px 200px;

  & .card-form {
    min-height: 200px;
    border-radius: 16px;
    background-color: #121212;
    border: 1px solid #141717;
    //padding: 44px;

    display: flex;
    flex-direction: column;

    & h1 {
      padding: 12px 12px 12px 48px;
      font-family: "Roboto", monospace;
      background-color: #181818;
      //text-transform: uppercase;
      font-size: 24px;
      border-radius: 14px 14px 0 0;
      color: #363636;
    }

    & .form {
      flex-grow: 1;
      display: flex;
      flex-direction: column;

      & .fields {
        position: relative;
        padding: 32px 48px 0 48px;
        padding-bottom: 24px;
        flex-grow: 1;
        display: flex;
        min-height: 100px;
        gap: 14px;

        & .one {
          width: 400px;

          display: flex;
          flex-direction: column;
          gap: 14px;
        }

        .title,
        .description {
          height: 44px;
          padding-left: 20px;
          border-radius: 8px 8px 0 0;
          background-color: #272822;
          border-bottom: 2px solid #414238;

          &::placeholder {
            color: #414238;
          }
          &:focus {
            outline: 2px solid #084ccf;
          }
        }

        .content {
          background-color: #272822;
          color: white;
          resize: none;
          padding: 12px;
          height: 200px;
          border-radius: 12px;
          //border-radius: 0 0 8px 8px;
          //border-top: 2px solid #414238;

          &::placeholder {
            color: #414238;
          }
          &:focus {
            outline: 2px solid #084ccf;
          }
        }
      }

      & .gallery {
        width: 100%;
        min-height: 200px;
        padding: 0px 48px 0 48px;
        //background-color: red;#121212;

        .gallery-photos {
          width: 100%;
          height: 72px;
          border: 2px solid #141717;
          border-radius: 12px;
          margin-bottom: 16px;
          //background-color: red;
        }
      }

      & .submit {
        margin-top: 36px;
        width: 100%;
        height: 44px;
        border-radius: 0px 0px 10px 10px;
        font-family: "Roboto", monospace;
        background-color: #084ccf;
      }
    }
  }
`;

export default () => {
  // #121212
  const submit = async (fields, { setSubmitting }) => {
    await Hook.push("/new-posts/").post(fields);
    //navigate("/postweb-new/posts/");

    setSubmitting(false);
  };

  const loadImage = (e) => {
    console.log(e.target.files[0]);

    /*if (e.target.files[0]) {
      helpers.setValue(e.target.files[0]);

      let leitor = new FileReader();

      leitor.onload = (e) => {
        imageRef.current.style.backgroundImage = `url(${e.target.result})`;
      };

      leitor.readAsDataURL(e.target.files[0]);
      }*/
  };
  return (
    <Create>
      <div className="card-form">
        <h1>Create you Post</h1>
        <Formik onSubmit={submit} initialValues={{}}>
          {(value, isSubmitting) => (
            <Form className="form">
              <section className="fields">
                <div className="one">
                  <Field
                    type="text"
                    name="title"
                    placeholder="Title..."
                    className="title"
                  />
                  <Field
                    type="text"
                    name="description"
                    placeholder="Description..."
                    className="description"
                  />
                  <Field
                    as="textarea"
                    type="text"
                    name="content"
                    placeholder="Content..."
                    className="content"
                  />
                </div>
                <Emphasis field={true} name="emphasis" />
              </section>

              <section className="gallery">
                {/*<div className="gallery-photos">
                  <div></div>
                </div>
                <Emphasis />*/}

                <Gallery name="gallery" />
              </section>

              <button type="submit" className="submit">
                Create Post
              </button>
            </Form>
          )}
        </Formik>
      </div>
    </Create>
  );
};
