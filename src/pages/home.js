import { React, Component } from "react";
import { Link } from "react-router-dom";
import "../App.css"


class Home extends Component{
  state = {}

  componentDidMount(){}

  render(){
    return(
      <div className="homePage_Container">
        <div className="homeLogo">
          <img src={"/assets/myHmaster.png"} alt="Dator" width="300"></img>
          <div className="titleBox">
            <h3>Here the Hamsters fight battles for the title</h3>
            <h1 id="cutie">The Cutie</h1>
          </div>
          <div className="box_navigation">
            <Link to="/api/battle" className="app_navigation">Battles</Link>
            <Link to="/api/upload" className="app_navigation">Add Hamster</Link>
            <Link to="/api/stats" className="app_navigation">Statics</Link>
          </div>
        </div>

      </div>
    )
  }
}

export default Home;