import { React, Component } from "react";
import { Col, Row, Button, Form, FormGroup, Label, Input } from "reactstrap";
import { Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import "../style/upload.css";
import axios from "axios";

class Upload extends Component {
  state = {
    modal: false
  };

  componentDidMount() {}

  toggle = () => this.setState({
    modal: !this.state.modal
  });

  handleSubmit = (e) => {
    e.preventDefault();
    const data = new FormData(e.target);
    axios.post("/upload", {
      name: data.get('name'),
      age: data.get('age'),
      favFood: data.get('favFood'),
      loves: data.get('loves')
    }).then(res => {
      this.toggle();
      console.log(res.statusText)
    })
  }

  render() {
    return (
      <div className="upload_container">
        <h4>Add New Hamster</h4>
        <Form id="myForm" onSubmit={this.handleSubmit}>
          <Row form>
            <Col md={6}>
              <FormGroup>
                <Label for="hamName">Hamster Name</Label>
                <Input
                  required
                  type="text"
                  name="name"
                  id="hamName"
                  placeholder=""
                />
              </FormGroup>
            </Col>
            <Col md={6}>
              <FormGroup>
                <Label for="hamAge">Hamster Age</Label>
                <Input
                  required
                  type="number"
                  name="age"
                  id="hamAge"
                  placeholder=""
                />
              </FormGroup>
            </Col>
          </Row>
          <FormGroup>
            <Label for="favFood">Favorite Food</Label>
            <Input
              required
              type="text"
              name="favFood"
              id="favFood"
              placeholder=""
            />
          </FormGroup>
          <FormGroup>
            <Label for="loves">Hobbies</Label>
            <Input
              required
              type="text"
              name="loves"
              id="loves"
              placeholder=""
            />
          </FormGroup>
          <Button type="submit" color="success" style={{width: "150px"}}>Add</Button>
        </Form>

        <Modal isOpen={this.state.modal} toggle={this.toggle}>
          <ModalHeader toggle={this.toggle}>Congratulations</ModalHeader>
          <ModalBody>
            New Hamster added successfully
          </ModalBody>
          <ModalFooter>
            <Button color="primary" onClick={this.toggle}>Ok</Button>{' '}
          </ModalFooter>
        </Modal>
      </div>
    );
  }
}

export default Upload;
