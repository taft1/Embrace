import React from 'react'
import PropTypes from 'prop-types'
import { useFormik } from 'formik'
import * as yup from 'yup'
import sanitize from '../utils/sanitizer'
import jwt from 'jsonwebtoken'
import bcrypt from 'bcryptjs'



const validationSchema = yup.object({
  username: yup.string().required('Username is required'),
  password: yup.string().required('Password is required'),
})

const Login = ({ onLogin }) => {
  const formik = useFormik({
    initialValues: {
      username: '',
      password: '',
    },
    validationSchema: validationSchema,
    onSubmit: async (values) => {
      // Simulate fetching hashed password from the server
      const hashedPasswordFromDatabase =
        '$2b$10$GZsPUpgofz.Zi.UOeYGtUuc/5FQu.G2geuz.VMN0PmLUrRyfyv9om';

      const isPasswordValid = await bcrypt.compare(
        values.password,
        hashedPasswordFromDatabase
      );

      if (isPasswordValid) {
        // Simulate user data
        const fakeUser = {
          id: 123,
          username: values.username,
        };

        // Generate a real JWT token
        const realAuthToken = jwt.sign(fakeUser, 'your_real_jwt_secret', {
          expiresIn: '1h', // Token expiration time
        });

        localStorage.setItem('authToken', realAuthToken);

        onLogin(realAuthToken);
      } else {
        alert('Invalid username or password');
      }
    },
  });

  const handleChange = (e) => {
    const { name, value } = e.target
    formik.setFieldValue(name, sanitize(value))
  }

  return (
    <div>
      <h2>Login</h2>
      <form onSubmit={formik.handleSubmit}>
        <label>
          Username:
          <input
            type="text"
            name="username"
            value={formik.values.username}
            onChange={(e) => {
              handleChange(e)
              formik.handleChange(e)
            }}
          />
          {formik.touched.username && formik.errors.username && (
            <div>{formik.errors.username}</div>
          )}
        </label>
        <br />
        <label>
          Password:
          <input
            type="password"
            name="password"
            value={formik.values.password}
            onChange={(e) => {
              handleChange(e)
              formik.handleChange(e)
            }}
          />
          {formik.touched.password && formik.errors.password && (
            <div>{formik.errors.password}</div>
          )}
        </label>
        <br />
        <button type="submit">Login</button>
      </form>
    </div>
  )
}

Login.propTypes = {
  onLogin: PropTypes.func.isRequired,
}

export default Login
