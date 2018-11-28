import React, { Component } from 'react';

class FamousPerson extends Component {
    // state = { person: {
    //             name : '',
    //             role : ''
    //         },
    //         people: [
    //             {name:'firstPerson', role:'firstRole'},
    //             {name:'secondPerson', role:'secondPerson'}
    //         ]
    // }
    // handleChange = (propertyName) => {
    //     return ( (event) => {
    //         console.log(`In handler: `, event.target.value);
    //         this.setState({ person: {
    //                 ...this.props.person, [propertyName] : event.target.value
    //             }
    //         })
    //     });
    // }
    // handleClick = (event) => {
    //     console.log('the values of state are:', this.props);
    //     this.setState({ people: [...this.props.people, this.props.person]});
    // }
    render() {
        let personList = this.props.people.map((person, i) => 
            <li key={i}>{person.name} is famous for {person.role}</li>
        );
        return (
            <div>
                <input type="text" value={this.props.person.name} placeholder="name" onChange={ this.props.handleChange('name') } />
                <input type="text" value={this.props.person.role} placeholder="role" onChange={ this.props.handleChange('role')} />
                <button onClick={this.props.handleClick}>Log State to Console</button>
                {personList}
            </div>
        );
    }
}

export default FamousPerson;