import React from "react";
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import App from "./App";

test('render a login component when not auth', () => {
  render(<App />);

  const loginText = screen.getByText('Login');
  expect(loginText).toBeInTheDocument();
})

test('redirect to Home when authed', () => {
  render(<App />);

  const welcomeText = screen.getByText('Welcome to Embrace');
  expect(welcomeText).toBeInTheDocument();
})