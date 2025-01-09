```javascript
// someComponent.js
<div className="bg-gray-100 p-4">
  <h2 className="text-xl font-bold mb-2">Some Component</h2>
  <p>This component has some content.</p>
  <button className="mt-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Button</button>
</div>
```
This will result in the error: `Unexpected token <` or similar, as JSX needs to be compiled using a tool like Babel before it can be run in the browser.  Tailwind itself isn't the source of the error, but it often gets blamed when JSX isn't handled correctly.