console.log('main.jsx is executing!');

const rootElement = document.getElementById('root');
console.log('Root element found:', rootElement);

if (rootElement) {
  rootElement.innerHTML = `
    <div style="padding: 20px; font-family: Arial; text-align: center;">
      <h1 style="color: green; font-size: 2rem;">✅ Basic HTML is working!</h1>
      <p>If you see this, JavaScript is loading and executing.</p>
      <p>Check the browser console for more info.</p>
    </div>
  `;
} else {
  console.error('No root element found!');
  document.body.innerHTML = '<h1 style="color: red;">ERROR: No root element</h1>';
}