import { React, Component } from "react";
import axios from "axios";
import "../style/hamsterCard.css";
import { Table } from 'reactstrap';
import { Spinner } from 'reactstrap';


class Uniqe extends Component {

  state = {
    hamster: {},
    loading: true
  }

  componentDidMount(){
    
    var url = window.location.pathname;
    var id = url.substring(url.lastIndexOf('/') + 1);
    axios.get(`/api/hamsters/${id}`)
    .then(res => {
      this.setState({
        loading: false,
        hamster: res.data
      })
    })
  }

  render() {
    return(
      <div>
      {this.state.loading ? <div style={{position: "fixed", right:"50%"}}><Spinner color="info" /></div> : ''}

      <div className="card_container">
        <img src={"/assets/" + this.state.hamster.imgName} alt="Dator" width="300"></img>
        <div className="title_section">
          <h1>{this.state.hamster.name}</h1>
          <Table size="sm">
            <thead>
              <tr>
                <th>Games</th>
                <th>Wins</th>
                <th>Defeats</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>{this.state.hamster.games}</td>
                <td>{this.state.hamster.wins}</td>
                <td>{this.state.hamster.defeats}</td>
              </tr>
            </tbody>
          </Table>
        </div>
        <Table size="sm">
          <thead>
            <tr>
              <th>Favorite food</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>{this.state.hamster.favFood}</td>
            </tr>
          </tbody>
        </Table>
        <Table size="sm">
          <thead>
            <tr>
              <th>Hobbies</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>{this.state.hamster.loves}</td>
            </tr>
          </tbody>
        </Table>
      </div>
      </div>
    )
  }
}

export default Uniqe;
