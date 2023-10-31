// jest-dom adds custom jest matchers for asserting on DOM nodes.
// allows you to do things like:
// expect(element).toHaveTextContent(/react/i)
// learn more: https://github.com/testing-library/jest-dom
import '@testing-library/jest-dom';

describe('Setup', () => {
    it('should have Jest DOM library available', () => {
      // This assertion will pass if the Jest DOM library is available
      expect(document.body).toBeInTheDocument();
    });
  });