import React,{Component} from 'react';
import './Taulu.css';

export class Taulu extends Component {

  state = {
    userlist: []
  }

  componentDidMount() {
    fetch('http://localhost:3000/user')
    .then(res => res.json())
    .then((data) => {
      this.setState({ userlist: data.list })
    })
    .catch(console.log)
  }

    render() {
        return (
          <table className="table" id="table1">
<tbody>
          <tr>
            <th>ID</th>
            <th>Etunimi</th>
            <th>Sukunimi</th>
            <th>Ika</th>
          </tr>

          {this.state.userlist.map((user) => (
                  <tr>
                  <td>{user.id}</td>
                  <td>{user.first}</td>
                  <td>{user.last}</td>
                  <td>{user.age}</td>
                </tr>
              ))}
</tbody>
            </table>
        )
    }
}

export default Taulu