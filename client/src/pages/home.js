import { React, Component } from "react";
import { Button, ButtonGroup } from 'reactstrap';
import { Link } from "react-router-dom";


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
        </div>

        <ButtonGroup size="lg">
          <Button color="dark" style={{width: "200px"}}>
            <Link to="/battle" className="routerLink">Battle</Link>
          </Button>
          <Button color="dark" style={{width: "200px"}}>
            <Link to="/upload" className="routerLink">Add Hamster</Link>
          </Button>
          <Button color="dark" style={{width: "200px"}}>
            <Link to="/stats" className="routerLink">Statics</Link>
          </Button>
          

        </ButtonGroup>        
      </div>
    )
  }
}

export default Home;