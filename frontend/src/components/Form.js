import { useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import axios from "axios";

export const Form = () => {
  const [error, setError] = useState("");

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
        const response = await axios.post(
          "http://localhost:5000/data/add",
          values
        );
      } catch (error) {
        if (error.response && error.response.status === 400) {
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
        <div className="input-container">
          <input
            id="customers"
            name="customers"
            type="text"
            placeholder="customers"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.customers}
          />
          {formik.touched.customers && formik.errors.customers && (
            <p>{formik.errors.customers}</p>
          )}
        </div>
        <div className="input-container">
          <input
            id="requirements"
            name="requirements"
            type="text"
            placeholder="requirements"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.requirements}
          />
        </div>
        <div className="input-container">
          <input
            id="typeOfCustomers"
            name="typeOfCustomers"
            type="text"
            placeholder="type of customers"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.typeOfCustomers}
          />
        </div>
        <div className="input-container">
          <input
            id="positionsOfProspects"
            name="positionsOfProspects"
            type="text"
            placeholder="positions of prospects"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.positionsOfProspects}
          />
        </div>
        {error && <p>{error}</p>}
        <button type="submit">submit</button>
      </form>
    </div>
  );
};
