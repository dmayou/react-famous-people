import React, { Component } from 'react';

class FamousPerson extends Component {
    state = { person: {
                name : '',
                role : ''
            },
            people: [
                {name:'firstPerson', role:'firstRole'},
                {name:'secondPerson', role:'secondPerson'}
            ]
    }
    handleChange = (propertyName) => {
        return ( (event) => {
            console.log(`In handler: `, event.target.value);
            this.setState({ person: {
                    ...this.state.person, [propertyName] : event.target.value
                }
            })
        });
    }
    handleClick = (event) => {
        console.log('the values of state are:', this.state);
        this.setState({ people: [...this.state.people, this.state.person]});
    }
    render() {
        let personList = this.state.people.map((person, i) => 
            <li key={i}>{person.name} is famous for {person.role}</li>
        );
        return (
            <div>
                <input type="text" placeholder="name" onChange={ this.handleChange('name') } />
                <input type="text" placeholder="role" onChange={this.handleChange('role')} />
                <button onClick={this.handleClick}>Log State to Console</button>
                {personList}
            </div>
        );
    }
}

export default FamousPerson;