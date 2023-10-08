import { useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import axios from "axios";
import { Input } from "../atoms/Input";

export const Form = () => {
  const [error, setError] = useState("");
  const [confirmation, setConfirmation] = useState("");

  const formik = useFormik({
    initialValues: {
      customers: "",
      requirements: "",
      typeOfCustomers: "",
      positionsOfProspects: "",
    },
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
        if (error.response && error.response.status === 409) {
          console.error("Data already exists:", error.response.data.error);
          setError(error.response.data.error);
        } else {
          console.error("Wystąpił błąd podczas wysyłania danych:", error);
        }
      }
    },
  });
  return (
    <div>
      <form onSubmit={formik.handleSubmit}>
        <Input
          id="customers"
          name="customers"
          type="text"
          placeholder="customers"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.customers}
          error={formik.touched.customers && formik.errors.customers}
        />
        <Input
          id="requirements"
          name="requirements"
          type="text"
          placeholder="requirements"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.requirements}
          error={formik.touched.requirements && formik.errors.requirements}
        />
        <Input
          id="typeOfCustomers"
          name="typeOfCustomers"
          type="text"
          placeholder="typeOfCustomers"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.typeOfCustomers}
          error={
            formik.touched.typeOfCustomers && formik.errors.typeOfCustomers
          }
        />
        <Input
          id="positionsOfProspects"
          name="positionsOfProspects"
          type="text"
          placeholder="positionsOfProspects"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.positionsOfProspects}
          error={
            formik.touched.positionsOfProspects &&
            formik.errors.positionsOfProspects
          }
        />
        {error && <p>{error}</p>}
        {confirmation && <p>{confirmation}</p>}
        <button type="submit">submit</button>
      </form>
    </div>
  );
};
