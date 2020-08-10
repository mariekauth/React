import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import Table from './Table'

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
        const characters = [
            {
                name: 'Charlie',
                job: 'Janitor',
            },
            {
                name: 'Mac',
                job: 'Bouncer',
            },
            {
                name: 'Dee',
                job: 'Aspring actress',
            },
            {
                name: 'Dennis',
                job: 'Bartender',
            },
            ]

      return (
          <div className="container">
              <Table characterData={characters} />
          </div>
      )
    }
  }

  ReactDOM.render(<App />, document.getElementById('root'))