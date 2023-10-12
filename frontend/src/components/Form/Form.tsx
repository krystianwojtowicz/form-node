import React, { useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import axios from "axios";
import { Input } from "../../atoms/Input/Input";
import "./Form.scss";
import { FormData } from '../../types';

const initialValues: FormData = {
  customers: "",
  requirements: "",
  typeOfCustomers: "",
  positionsOfProspects: "",
};

export const Form: React.FC = () => {
  const [errorFromDB, setErrorFromDB] = useState<string>("");
  const [confirmation, setConfirmation] = useState<string>("");

  const formik = useFormik<FormData>({
    initialValues,
    validationSchema: Yup.object({
      customers: Yup.string()
        .min(5, "Must be at least 8 characters")
        .max(50, "Must be 50 characters or less")
        .required("Required"),
      requirements: Yup.string().max(50, "Must be 50 characters or less"),
      typeOfCustomers: Yup.string()
        .min(5, "Must be at least 8 characters")
        .max(50, "Must be 50 characters or less")
        .required("Required"),
      positionsOfProspects: Yup.string()
        .min(5, "Must be at least 8 characters")
        .max(50, "Must be 50 characters or less")
        .required("Required"),
    }),
    onSubmit: async (values) => {
      try {
        await axios.post("http://localhost:5000/data/add", values);
        setConfirmation("przesłano dane");
      } catch (error) {
        if (axios.isAxiosError(error) && error.response?.status === 409) {
          console.error("Data already exists:", error.response.data.error);
          setErrorFromDB(error.response.data.error);
        } else {
          console.error("Wystąpił błąd podczas wysyłania danych:", error);
        }
      }
    },
  });

  return (
    <main id="wrapper-form">
      <div id="form">
        <p id="paragraph">
          what is your <br />
          audience?
        </p>
        <form id="inner-form" onSubmit={formik.handleSubmit}>
          <Input
            label="who are your customers?"
            id="customers"
            name="customers"
            type="text"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.customers}
            error={
              formik.touched.customers && formik.errors.customers
                ? formik.errors.customers
                : ""
            }
          />
          <Input
            label="are there any special requirements like technology, location etc.?"
            id="requirements"
            name="requirements"
            type="text"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.requirements}
            error={
              formik.touched.requirements && formik.errors.requirements
                ? formik.errors.requirements
                : ""
            }
          />
          <Input
            label="what type of customers should be excluded?"
            id="typeOfCustomers"
            name="typeOfCustomers"
            type="text"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.typeOfCustomers}
            error={
              formik.touched.typeOfCustomers && formik.errors.typeOfCustomers
                ? formik.errors.typeOfCustomers
                : ""
            }
          />
          <Input
            label="what are the positions of your prospects?"
            id="positionsOfProspects"
            name="positionsOfProspects"
            type="text"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.positionsOfProspects}
            error={
              formik.touched.positionsOfProspects &&
              formik.errors.positionsOfProspects
                ? formik.errors.positionsOfProspects
                : ""
            }
          />
          {confirmation && <p>{confirmation}</p>}
          <button id="button" type="submit">
            submit
          </button>
          {errorFromDB && <p className="error">{errorFromDB}</p>}
        </form>
      </div>
    </main>
  );
};
