import React from "react";
import ReactDOM from "react-dom";
import { useFormik } from "formik";
import * as yup from "yup";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Country from "./components/dropdownCountry";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Hobbies from "./components/dropdownHobbies";

const validationSchema = yup.object({
  name: yup.string().required("Name is required"),
  address: yup.string().required("Address is required"),
  country: yup.string().required("Country is required"),
  hobbies: yup.array().required("Hobbies are required"),
});

const WithMaterialUI = () => {
  const formik = useFormik({
    initialValues: {
      name: "",
      address: "",
      country: "",
      hobbies: [],
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    },
  });

  return (
    <div className="bg-opacity-70 bg-blur-lg p-2 rounded-lg">
      <form
        onSubmit={formik.handleSubmit}
        className="m-10 border-2 border-black  p-3 rounded-lg  "
      >
        <TextField
          fullWidth
          id="name"
          name="name"
          label="Name"
          value={formik.values.name}
          onChange={formik.handleChange}
          error={formik.touched.name && Boolean(formik.errors.name)}
          helperText={formik.touched.name && formik.errors.name}
          style={{ marginBottom: "10px" }}
        />

        <TextField
          id="address"
          name="address"
          label="Address"
          multiline
          rows={3}
          value={formik.values.address}
          onChange={formik.handleChange}
          error={formik.touched.address && Boolean(formik.errors.address)}
          helperText={formik.touched.address && formik.errors.address}
          style={{ marginBottom: "10px", width: "100%" }}
        />

        <div className="w-full mt-2 mb-2">
          <Country
            value={formik.values.country}
            onChange={formik.handleChange}
            error={formik.touched.country && Boolean(formik.errors.country)}
            helperText={formik.touched.country && formik.errors.country}
          />
        </div>

        <RadioGroup
          aria-label="gender"
          name="gender"
          value={formik.values.gender}
          onChange={formik.handleChange}
          style={{ marginBottom: "10px" }}
        >
          <FormControlLabel value="female" control={<Radio />} label="Female" />
          <FormControlLabel value="male" control={<Radio />} label="Male" />
        </RadioGroup>

        <div className="mb-2">
          <Hobbies
            value={formik.values.hobbies}
            onChange={formik.handleChange}
            error={formik.touched.hobbies && Boolean(formik.errors.hobbies)}
            helperText={formik.touched.hobbies && formik.errors.hobbies}
          />
        </div>

        <Button color="primary" variant="contained" fullWidth type="submit">
          Submit
        </Button>
      </form>
    </div>
  );
};

export default WithMaterialUI;

ReactDOM.render(<WithMaterialUI />, document.getElementById("root"));
