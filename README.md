## Project Structure

````
▢ public
  ├ ▢ favicon
    ├ 16x16.png 32x32.png 96x96.png android-192x192.png apple-57x57.png apple-60x60.png ...72x72.png ...76x76.png ...114x114.png ...120x120.png ...144x144.png ...152x152.png apple-180x180.png files
  ├ ▢ fonts
    ├ ▢ customfont
      ├ .ttf .woff2, etc files  
  ├ index.html
  ├ manifest.json
  ├ robots.txt
▢ src
  ├ ▢ api
    ├ api.tsx // api config file
    ├ private.tsx // services with token
    ├ common.tsx // public services
    ├ auth.tsx // services to auth an user
    ├ index.tsx // file to map config api and all services
  ├ ▢ assets
	  ├ ▢ images
	    ├ .avif or .webp files
    ├ Assets.ts
  ├ ▢ components
	  ├ ▢ layouts
	      ├ AppLayout.tsx
	      ├ MainLayout.tsx
          ├ ...
	  ├ ...
  ├ ▢ utils
	  ├ ... // functions or methods that will possibly be used more than once
  ├ ▢ hooks
	  ├ ... // custom hooks
  ├ ▢ json
	  ├ ... // local json files
  ├ ▢ pages
    ├ ▢ home
        ├ Home.tsx
        ├ index.tsx
    ├ ▢ ... // more pages
  ├ ▢ router
    ├ App.tsx
    ├ PrivateRoute.tsx
  ├ ▢ store
     ├ ▢ ducks // ducks
     ├ ▢ schema
     ├ store.ts
  ├ ▢ styles // global styles
      ├ ▢ colors.css
      ├ ▢ measurements.css
  index.css // main css file
  index.tsx // main file
.env files
.eslintrc.js
package-lock.json
package.json
README.md
tsconfig.json
````

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.
