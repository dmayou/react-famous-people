import React, { Component } from 'react';

class FamousPersonList extends Component {
    render() {
        let personList = this.props.people.map((person, i) =>
            <li key={i}>{person.name} is famous for {person.role}</li>
        );
        return(
            personList
        );
    }
}

export default FamousPersonList;