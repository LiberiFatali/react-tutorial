import React, { Component } from 'react'
import Table from './Table'
import Form from './Form'

class App extends Component {
    state = {
        characters: [
            // {
            //     name: 'Charlie',
            //     job: 'Janitor',
            // },
            // {
            //     name: 'Mac',
            //     job: 'Bouncer',
            // },
            // {
            //     name: 'Dee',
            //     job: 'Aspring actress',
            // },
            // {
            //     name: 'Dennis',
            //     job: 'Bartender',
            // },
        ],
    }

    removeCharacter = (index) => {
        const { characters } = this.state

        this.setState({
            characters: characters.filter((characters, i) => {
                return i !== index
            }),
        })
    }

    handleSubmit = (more_chars) => {
        this.setState({ characters: [...this.state.characters, more_chars] })
    }

    render() {
        // const characters = [
        //     {
        //         name: 'Charlie',
        //         job: 'Janitor',
        //     },
        //     {
        //         name: 'Mac',
        //         job: 'Bouncer',
        //     },
        //     {
        //         name: 'Dee',
        //         job: 'Aspring actress',
        //     },
        //     {
        //         name: 'Dennis',
        //         job: 'Bartender',
        //     },
        // ]
        const { characters } = this.state

        return (
            // <div className="App">
            //   <h1>Hello, React!</h1>
            // </div>
            <div className="container">
                <Table characterData={characters} removeCharacter={this.removeCharacter} />
                <Form handleSubmit={this.handleSubmit}/>
            </div>
        )
    }
}

export default App
