import React, {Component} from 'react';

export default class FilterObject extends Component {
   
    constructor(){
        super();
    
        this.state = {
            students:[
                {
                    name: 'Derek',
                    age: 22,
                    hairColor: 'blonde'
                },
                {
                    name: 'Tavas',
                    age: 21,
                    title: 'dummy'
                },
                {
                    name: 'Jeordin',
                    age: 21,
                    job: 'kinda teacher'
                }
            ],
            userInput: '',
            filteredStudents: []
        }
    }
    handleChange(val) {
        this.setState({ userInput: val});
    }

    filterStudents(prop) {
        let students = this.state.students;
        let filteredStudents = [];

        for (let i = 0; i < students.length; i++){
            if( students[i].hasOwnProperty(prop) ){
                filteredStudents.push(students[i]);
            }
        }
        this.setState({ filteredStudents: filteredStudents });
    }


    render(){
        return(
            <div className="puzzleBox filterObjectPB">
                <h4>Filter Object</h4>
                <span className="puzzleText">Original: {JSON.stringify(this.state.students, null, 10) }</span>
                <input className="inputLine" onChange={ (e) => this.handleChange(e.target.value) }></input>
                <button className="confirmationButton" onClick={ () => this.filterStudents(this.state.userInput) }>Filter </button>
                <span className="resultBox filterObjectRB">Filtered: {JSON.stringify(this.state.filteredStudents, null, 10) }</span>
            </div>
        )
    }
}