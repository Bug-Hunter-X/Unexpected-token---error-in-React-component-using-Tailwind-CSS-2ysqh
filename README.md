# Unexpected token < error in React component using Tailwind CSS

This repository demonstrates a common error encountered when using JSX within a React component that also utilizes Tailwind CSS. The error, typically "Unexpected token <", arises from the failure to properly compile JSX before it's used by the browser.

The `someComponent.js` file shows the erroneous code.  The solution involves using a JSX compiler, such as Babel, as part of your build process.

## Solution

The `someComponentSolution.js` file demonstrates how to resolve the issue by including appropriate JSX compilation.  The key is to ensure your development environment properly transpiles JSX into regular JavaScript before your application is run in the browser.