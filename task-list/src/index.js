import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'

/*
//With JSX
const heading = <h1 className="site-heading">Hello, React</h1>;

//Without JSX
const heading = React.createElement('h1', {className: 'site-heading'}, 'Hello, React!');
*/

//const heading = <h1 className="site-heading">Hello, React</h1>;
//const heading = React.createElement('h1', {className: 'site-heading'}, 'Hello, React!');

const headingMsg = "Both Solutions Work, and can be combined!"
const heading = <h1 className="site-heading">{headingMsg}</h1>

class App extends React.Component {
    render() {
      return (
        <div className="App">
          {heading}
        </div>
      )
    }
  }

  ReactDOM.render(<App />, document.getElementById('root'))