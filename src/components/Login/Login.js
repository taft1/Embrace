import React from 'react'
import PropTypes from 'prop-types'
import { useFormik } from 'formik'
import * as yup from 'yup'
import sanitize from '../../utils/sanitizer'
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
      // Make API request to your server to authenticate
      const response = await fetch('http://localhost:3001/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(values),
      });

      const data = await response.json();

      if (response.ok) {
        onLogin(data.token);
      } else {
        alert(data.message);
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
