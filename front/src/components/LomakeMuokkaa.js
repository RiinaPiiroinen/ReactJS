import React from 'react';
import ReactDOM from 'react-dom';
import './Form.css';





export default class FormEdit extends React.Component {


  constructor (props) {
    super(props);
    this.handleStateChange = this.handleStateChange.bind(this);

  }

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
      // this.props.onSubmit(this.state);

      (async () => {
        const rawResponse = await fetch('http://localhost:3000/user/'+this.state.id, {
          method: 'PUT',
          headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({firstName: this.state.firstName, lastName: this.state.lastName , age: this.state.age})
        });
        const content = await rawResponse.json();
      
        alert(content.message);
        
      })();

      console.log(this.state);
      this.setState({
        firstName: '',
        lastName: '',
        age: '',
        id: ''
      });
     
     
    };

    handleStateChange(value){
      this.setState({ 
        firstName : value.first,
        lastName: value.last,
        age: value.age,
        id: value.id })
    }
  

  render() {
    return (
      <div id = "holder">
        
      <form>
        
        <br></br><p>Etunimi</p>
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
        <button id = "submitButton" onClick={e => this.onSubmit(e)}>Muokkaa</button>
        </div>
      </form>
      </div>
    );
  }
}