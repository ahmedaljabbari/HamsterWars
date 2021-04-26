import { React, Component } from "react";
import axios from "axios";
import { Spinner, Badge, Table } from "reactstrap";
import "../style/statics.css";

class Statics extends Component {
  state = {
    myData: ["", [], []],
    loading: true,
  };

  componentDidMount() {
    axios.get("/api/stats").then((res) => {
      this.setState({
        myData: res.data,
        loading: false,
      });
      console.log(res.data[0]);
      console.log(res.data[1]);
    });
  }

  render() {
    const winners = this.state.myData[1];
    const losers = this.state.myData[2];

    return (
      <div>
        {this.state.loading ? (
          <div style={{ position: "fixed", right: "50%" }}><Spinner color="info" /></div>) : ("")
        }
        <div className="stats_container">
          <h3>Total Games :{" "}<Badge color="secondary">{this.state.myData[0]}</Badge></h3>

          <section id="tables_container">
          <Table dark className="stats_tables">
            <thead>
              <tr>
                <th>#</th>
                <th>Top Winners</th>
                <th>Wins</th>
              </tr>
            </thead>
            <tbody>
              {winners.map((item, index) => {
                return (
                  <tr>
                    <th scope="row">{index + 1}</th>
                    <td>{item.name}</td>
                    <td>{item.wins}</td>
                  </tr>
                );
              })}
            </tbody>
          </Table>

          <Table dark className="stats_tables">
            <thead>
              <tr>
                <th>#</th>
                <th>Top Losers</th>
                <th>Defeats</th>
              </tr>
            </thead>
            <tbody>
              {losers.map((item, index) => {
                return (
                  <tr>
                    <th scope="row">{index + 1}</th>
                    <td>{item.name}</td>
                    <td>{item.defeats}</td>
                  </tr>
                );
              })}
            </tbody>
          </Table>
          </section>
        </div>
      </div>
    );
  }
}

export default Statics;
