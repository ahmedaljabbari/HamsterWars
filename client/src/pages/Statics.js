import { React, Component } from "react";
import axios from "axios";
import {Spinner} from "reactstrap";

class Statics extends Component {
  state = {
    myData: [],
    loading: true
  }

  componentDidMount(){
    axios.get('/stats').then(res => {
      this.setState({
        myData: res.data,
        loading: false
      })
      console.log(res.data[0])
    })
  }

  render(){
    return(
    <div>
      {this.state.loading ? <div style={{position: "fixed", right:"50%"}}><Spinner color="info" /></div> : ''}
      <h1>Statics</h1>
    </div>
    )
  }
}

export default Statics;

