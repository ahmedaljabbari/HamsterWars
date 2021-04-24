import { React, Component } from "react";
import { Col, Row, Button, Form, FormGroup, Label, Input } from "reactstrap";
import "../style/upload.css";

class Upload extends Component {
  state = {};

  componentDidMount() {}

  render() {
    return (
      <div className="upload_container">
        <h4>Add New Hamster</h4>
        <Form id="myForm">
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
          <Button color="success" style={{width: "150px"}}>Add</Button>
        </Form>
      </div>
    );
  }
}

export default Upload;
