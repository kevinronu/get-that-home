import { useContext } from "react";
import { useFormik } from "formik";

import { AuthContext } from "../../context/auth-context";
import Container from "../../layout/Container";
import { StyledSection } from "./styles";
import Button from "../Button";
import Input from "../Input";

export default function ProfileSection() {
  const { user, updateUser } = useContext(AuthContext);

  const validate = (values) => {
    const errors = {};

    if (!values.name) {
      errors.name = "Required";
    }

    if (!values.email) {
      errors.email = "Required";
    } else if (
      !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)
    ) {
      errors.email = "Invalid email address";
    }

    if (!values.phone) {
      errors.phone = "Required";
    } else if (
      !/^(?:(?:\+|00)([1-9]\d{0,2})[\s.-]?)?(?:(?:\(\d{1,}\)|\d{1,})[\s.-]?)?((?:\d[\s.-]?){6,14}\d)$/.test(
        values.phone
      )
    ) {
      errors.phone = "Invalid phone number";
    }

    if (values.password.length > 0 && values.password.length < 6) {
      errors.password = "At least 6 characters";
    }

    if (
      values.password_confirmation.length > 0 &&
      values.password_confirmation.length < 6
    ) {
      errors.password_confirmation = "At least 6 characters";
    } else if (values.password_confirmation != values.password) {
      errors.password_confirmation = "No match with password";
    }

    return errors;
  };

  const formik = useFormik({
    initialValues: {
      name: user.name,
      email: user.email,
      phone: user.phone,
      password: "",
      password_confirmation: "",
    },
    validate,
    onSubmit: (values) => {
      updateUser(values);
    },
  });

  return (
    <StyledSection>
      <Container size={"xl"} padding={"1rem"}>
        <>
          <div className="sign-up-container">
            <h2 className="title">Update your Account</h2>
            <form onSubmit={formik.handleSubmit} className="form">
              <div className="form__inputs">
                <Input
                  label={"NAME"}
                  name={"name"}
                  placeholder={"John Doe"}
                  isFullWidth={true}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.name}
                />
                {formik.touched.name && formik.errors.name ? (
                  <div className="form__error">{formik.errors.name}</div>
                ) : (
                  <div className="form__error"></div>
                )}
                <Input
                  label={"EMAIL"}
                  name={"email"}
                  type={"email"}
                  placeholder={"user@mail.com"}
                  isFullWidth={true}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.email}
                />
                {formik.touched.email && formik.errors.email ? (
                  <div className="form__error">{formik.errors.email}</div>
                ) : (
                  <div className="form__error"></div>
                )}
                <Input
                  label={"PHONE"}
                  name={"phone"}
                  placeholder={"999-999-999"}
                  isFullWidth={true}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.phone}
                />
                {formik.touched.phone && formik.errors.phone ? (
                  <div className="form__error">{formik.errors.phone}</div>
                ) : (
                  <div className="form__error"></div>
                )}
                <Input
                  label={"NEW PASSWORD"}
                  name={"password"}
                  type={"password"}
                  placeholder={"******"}
                  isFullWidth={true}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.password}
                />
                {formik.touched.password && formik.errors.password ? (
                  <div className="form__error">{formik.errors.password}</div>
                ) : (
                  <div className="form__error"></div>
                )}
                <Input
                  label={"NEW PASSWORD CONFIRMATION"}
                  name={"password_confirmation"}
                  type={"password"}
                  placeholder={"******"}
                  isFullWidth={true}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.password_confirmation}
                />
                {formik.touched.password_confirmation &&
                formik.errors.password_confirmation ? (
                  <div className="form__error">
                    {formik.errors.password_confirmation}
                  </div>
                ) : (
                  <div className="form__error"></div>
                )}
              </div>
              <Button
                type={"primary"}
                disabled={!(formik.isValid && formik.dirty)}
              >
                UPDATE
              </Button>
            </form>
          </div>
        </>
      </Container>
    </StyledSection>
  );
}
