import SignUpValidation from "@/app/config/formik-validations/sign-up-validation.ts";
import { Hook } from "@/app/hook/hook.ts";
import { Formik, Form } from "formik";
import { useState, useRef } from "react";
import Carrossel from "@/UI/components/carrossel/index.tsx";

import Finally from "@/pages/auth/signUp/steps/loading.tsx";
import Steps from "@/pages/auth/signUp/steps/index.ts";

export default () => {
  const submit = async (fields, { setSubmitting }) => {
    setFinallystep(true);
    defaultValuesRef.current = {
      ...fields,
    };

    try {
      await Hook.push("/new-users/register").post(fields);
    } finally {
      setStatefinally(true);
      setSubmitting(false);
    }
  };

  const [finallystep, setFinallystep] = useState(false);
  const [statefinally, setStatefinally] = useState(false);
  const defaultValuesRef = useRef({
    day: "1",
    month: "1",
    year: "2000",
    email: "",
    username: "",
    password: "",
    biography: "",
  });

  return (
    <Formik
      onSubmit={submit}
      initialValues={defaultValuesRef.current}
      validationSchema={SignUpValidation}
    >
      {({ errors, touched, isValidating }) => (
        <Form className="w-full h-full flex justify-center items-center">
          {!finallystep && <Carrossel steps={Steps} errors={errors} />}
          {finallystep && (
            <Finally back={setFinallystep} finallyprocess={statefinally} />
          )}
        </Form>
      )}
    </Formik>
  );
};
