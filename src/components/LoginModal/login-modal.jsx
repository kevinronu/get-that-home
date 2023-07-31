import PropTypes from "prop-types";
import { useContext } from "react";
import { RiUserReceived2Line } from "react-icons/ri";
import { useFormik } from "formik";

import { AuthContext } from "../../context/auth-context";
import { Modal, ModalContent } from "./styles";
import Input from "../Input";
import Button from "../Button";

function LoginModal({ toggleModal }) {
  const { login } = useContext(AuthContext);

  const validate = (values) => {
    const errors = {};

    if (!values.email) {
      errors.email = "Required";
    } else if (
      !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)
    ) {
      errors.email = "Invalid email address";
    }

    if (!values.password) {
      errors.password = "Required";
    } else if (values.password.length < 6) {
      errors.password = "Must be 6 characters or more";
    }

    return errors;
  };

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validate,
    onSubmit: (values) => {
      login(values);
    },
  });

  function handlePropagation(event) {
    event.stopPropagation();
  }

  return (
    <Modal onClick={toggleModal}>
      <ModalContent onClick={handlePropagation}>
        <p className="title">Login</p>
        <form onSubmit={formik.handleSubmit} className="form">
          <div className="form__inputs">
            <Input
              label={"EMAIL"}
              name={"email"}
              type={"email"}
              placeholder={"user@mail.com"}
              isFullWidth
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.email}
            />
            {formik.touched.email && formik.errors.email ? (
              <div className="form__email-error">{formik.errors.email}</div>
            ) : (
              <div className="form__email-error"></div>
            )}
            <Input
              label={"PASSWORD"}
              name={"password"}
              type={"password"}
              placeholder={"******"}
              isFullWidth
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.password}
            />
            {formik.touched.password && formik.errors.password ? (
              <div className="form__password-error">
                {formik.errors.password}
              </div>
            ) : (
              <div className="form__password-error"></div>
            )}
          </div>
          <Button
            icon={<RiUserReceived2Line />}
            type={"primary"}
            to={"/login"}
            isFullWidth
            disabled={!(formik.isValid && formik.dirty)}
          >
            LOGIN
          </Button>
        </form>
      </ModalContent>
    </Modal>
  );
}

LoginModal.propTypes = {
  toggleModal: PropTypes.func,
};

export default LoginModal;
