import { React, Component } from "react";
import axios from "axios";
import { Spinner } from "reactstrap";
import "../style/Battle.css";
//import { Link } from "react-router-dom";

class Battle extends Component {
  state = {
    hamsters: [],
    loading: true,
  };

  componentDidMount() {
    axios.get("/api/battle").then((res) => {
      this.setState({
        loading: false,
        hamsters: res.data,
      });
    });
  }

  nextBattle = () => {
    axios.get("/api/battle").then((res) => {
      this.setState({
        loading: false,
        hamsters: res.data,
      });
    });
  }

  postWinner = (wins, games, name, ID) => {
    const firstItemId = this.state.hamsters[0].name;
    const secondItemId = this.state.hamsters[1].name;
    var loser, loserGames, loserDefeats;
    if (name === firstItemId) {
      loser = secondItemId;
      loserGames = this.state.hamsters[1].games;
      loserDefeats = this.state.hamsters[1].defeats;
    } else {
      loser = firstItemId;
      loserGames = this.state.hamsters[0].games;
      loserDefeats = this.state.hamsters[0].defeats;
    }
    axios({
      method: "post",
      url: "/api/battle",
      data: {
        name: name,
        wins: wins + 1,
        games: games + 1,
        loser: loser,
        loserGames: loserGames + 1,
        loserDefeats: loserDefeats + 1,
      },
    }).then(() => {
      console.log("loser )> " + loser);
      console.log("winner )> " + name);
      this.props.history.push(`/api/result/${ID}`);
    })
  };

  render() {
    return (
      <div>
        <h4>Pick a Cutie</h4>
        {this.state.loading ? (
          <div style={{ position: "fixed", right: "50%" }}>
            <Spinner color="info" />
          </div>
        ) : (
          ""
        )}
        <section className="battle_section">
          {this.state.hamsters.map((hamster) => {
            return (
              <div
                className="ham_id"
                key={hamster._id}
                onClick={this.postWinner.bind(
                  this,
                  hamster.wins,
                  hamster.games,
                  hamster.name,
                  hamster._id
                )}
              >
                <img src={"/assets/" + hamster.imgName} alt={hamster.imgName}></img>
                <h4>{hamster.name}</h4>
              </div>
            );
          })}
        </section>
        <div>
          <span id="btn_nextBattle" color="success" onClick={this.nextBattle}>Next Battle</span>
        </div>
      </div>
    );
  }
}

export default Battle;
