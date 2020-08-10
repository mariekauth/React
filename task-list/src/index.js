import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import Table from './Table'
import Form from './Form'

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
    state = {
        characters: [],
    }

    removeCharacter = (index) => {
        const {characters} = this.state

        this.setState({
            characters: characters.filter((character, i) => {
                return i !== index
            }),
        })
    }

    handleSubmit = (character) => {
        this.setState({characters: [...this.state.characters, character]})
    }

    render() {
        const characters = this.state.characters;

      return (
          <div className="container">
              <Table 
                characterData={characters} 
                removeCharacter={this.removeCharacter}
              />
              <Form handleSubmit={this.handleSubmit} />
          </div>
      )
    }
  }

  ReactDOM.render(<App />, document.getElementById('root'))