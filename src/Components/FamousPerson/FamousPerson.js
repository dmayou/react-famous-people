import React, { Component } from 'react';

class FamousPerson extends Component {
    state = { person: {
                name : '',
                role : ''
            }
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
        console.log('the values of state are:', this.state)
    }
    render() {
        return (
            <div>
                <input type="text" placeholder="name" onChange={ this.handleChange('name') } />
                <input type="text" placeholder="role" onChange={this.handleChange('role')} />
                <button onClick={this.handleClick}>Log State to Console</button>
                <p>{this.state.person.name} is famous for {this.state.person.role}</p>
            </div>
        );
    }
}

export default FamousPerson;