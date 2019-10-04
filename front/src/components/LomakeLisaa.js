import React from 'react';
import ReactDOM from 'react-dom';
import './Form.css';


export default class Form extends React.Component {

    state = {
        firstName: '',
        lastName: '',
        age: '',
        id: ''
    };

    change = e => {
      this.setState({
        [e.target.name]: e.target.value
      });
    };  

    onSubmit = e => {
      e.preventDefault();
      

      (async () => {
        const rawResponse = await fetch('http://localhost:3000/user', {
          method: 'POST',
          headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({firstName: this.state.firstName, lastName: this.state.lastName , age: this.state.age})
        });
        const content = await rawResponse.json();
      
        alert(content.message);
      })();
      
      this.setState({
        firstName: '',
        lastName: '',
        age: ''
      });
    };
  

  render() {
    return (
      <div id = "holder">
      <form><p>Etunimi</p>
        <input
        name ="firstName"
        placeholder = 'First name' 
        value ={this.state.firstName}
        onChange={e => this.change(e)}        
        /><br/><br/><p>Sukunimi</p>
        
        <input
        name = "lastName"
        placeholder = 'Last name' 
        value ={this.state.lastName}
        onChange={e => this.change(e)}
        /><br/><br/><p>Ika</p>
        
        <input 
        name = "age"
        placeholder = 'Age' 
        value ={this.state.age}
        onChange={e => this.change(e)}
        /><br/><br/>
        
        <div id="buttonHolder">
        <button id = "submitButton" onClick={e => this.onSubmit(e)}>ADD</button>
        </div>
      </form>
      </div>
    );
  }
}
ReactDOM.render(<Form />, document.getElementById('root'));