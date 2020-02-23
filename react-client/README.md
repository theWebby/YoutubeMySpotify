## Running in Dev

Do not use the electron app when developing the react app as the electron app only uses the built react app to render. You would need to rebuild the react app each time. Instead it is recommended that you:

```bash
cd react-app
npm run start
```

.. and develop the app in the browser. It is hot reloaded every time you make changed. 

You can then test the electron app by running:

```bash
cd ..
npm run build-react-start-electron
```