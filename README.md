# React

- Repo containing react tutorials, training projects
- https://reactjs.org/docs/getting-started.html
- Tutorial 1: tic-tac-toe from https://reactjs.org/tutorial.htm
- Tutorial 2: product-search from https://reactjs.org/docs/thinking-in-react.html
- Tutorial 3: task-list from https://www.taniarascia.com/getting-started-with-react/

# Create new React App
- Navigate to your repo
- `cd ~/source/{repo}`
- Create a new react project - FrontEnd only (Uses Babel and webpack, add your BackEnd separate)
- `npx create-react-app my-app`
- `cd my-app`
- `npm start`
- Press Control C to stop app
- Navigate to src directory and remove ALL default files and directories, you will add your own
- `cd ~/source{repo}/{my-app}`
- `rm -fd`
- Build your app when done
- `cd ~/source{repo}/{my-app}`
- `npm run build`
- https://github.com/facebook/create-react-app recommends that if you installed create-react globally, uninstall it and instead use npx to always install the latest version.

# Alternative Create new React App
- Install create-react-native-app globally
- `npm install -g create-react-native-app`
- Navigate to your repo
- `cd ~/source/{repo}`
- Create a new react project - FrontEnd only (Uses Babel and webpack, add your BackEnd separate)
- `create-react-app my-app`
- `cd my-app`
- `npm start`
- Press Control C to stop app
- Navigate to src directory and remove ALL default files and directories, you will add your own
- `cd ~/source{repo}/{my-app}`
- `rm -fd`
- Build your app when done
- `cd ~/source{repo}/{my-app}`
- `npm run build`

# npm info
- In the repo (above where you want your project folder)
- `npx create-react-app {my-app}` Creates your app
- Or in the repo
- `create-react-native-app {my-app}` Will create your app if you installed the tool globally
- Inside Project Folder
- `npm start` Starts the development server.
- `npm run build` Bundles the app into static files for production.
- `npm test` Starts the test runner
- `npm run eject` Removes this tool and copies build dependencies, configuration files and scripts into the app directory. If you do this, you can't go back!
- More info https://www.npmjs.com/package/create-react-native-app

# tic-tac-toe
- In project folder run `npm start` to run the project
- Local: http://localhost:3000
- Use `npm run build` to create a production build
- Install Chrome Extensions https://chrome.google.com/webstore/search/react?hl=en
- Install Firefox Extensions https://addons.mozilla.org/en-US/firefox/search/?platform=windows&q=react
- Install Edge Extensions https://microsoftedge.microsoft.com/addons/Microsoft-Edge-Extensions-Home?hl=en-US

# product-search
- https://reactjs.org/docs/thinking-in-react.html
- FilterableProductTable
  - SearchBar
  - ProductTable
    - ProductCategoryRow
    - ProductRow

# task-list
- Tutorial
- https://www.taniarascia.com/getting-started-with-react/
- Create starter app
- Modify app 
- Const (Simple component)
- function (Simple component)
- Class Components - A class component must include render(), and the return can only return one parent element.
- Props - Or properties
- State - Data that is manipulated and retained, but not necessarily added to a database. Similar to session variables. Example given: Add or remove items from a shopping cart before confirming your purchase.
- Add Class, Componenets, Properties, and Functions
- Use JSX - JavaScript XML
- Add data
- Work with State
- Work with a Form
- Pull in API Data
- Deploy the app
- Note: The render() method is the only required method ina a class component, which is used to render DOM nodes.