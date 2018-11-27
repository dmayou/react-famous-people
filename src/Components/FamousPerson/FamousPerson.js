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
    render() {
        return (
            <div>
                <input type="text" placeholder="name" onChange={ this.handleChange('name') } />
                <p>Hello world! {this.state.person.name + ' ' + this.state.person.role}</p>
            </div>
        );
    }
}

export default FamousPerson;