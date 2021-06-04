import React from "react";
import {Jumbotron,
Form,
Row,
Col,
Button} from "react-bootstrap";
import PropTypes from 'prop-types';
import './add-ticket-form.css';

export const AddTicketForm = ({
  handleOnSubmit,
  handleOnChange,
  frmDt,
  frmDataErro,
}) => {
  console.log(frmDt);
  return (
    <Jumbotron className="mt-3 add-new-ticket bg-light">
      <h1 className="text-info text-center">Add New Ticket</h1>
      <hr />
      {/* <div>
        {error && <Alert variant="danger">{error}</Alert>}
        {successMsg && <Alert variant="primary">{successMsg}</Alert>}
        {isLoading && <Spinner variant="primary" animation="border" />}
      </div> */}
      <Form autoComplete="off" onSubmit={handleOnSubmit}>
        <Form.Group as={Row}>
          <Form.Label column sm={3}>
            Subject
          </Form.Label>
          <Col sm={9}>
            <Form.Control
              name="subject"
              value={frmDt.subject}
              // minLength="3"
              maxLength="100"
              onChange={handleOnChange}
              placeholder="Subject"
              required
            />
              {/* <Form.Text className="text-danger">
              {frmDataErro.subject && "SUbject is required!"}
            </Form.Text>    */}
          </Col>
        </Form.Group>
        <Form.Group as={Row}>
          <Form.Label column sm={3}>
            Issue Found
          </Form.Label>
          <Col sm={9}>
            <Form.Control
              type="date"
              name="issueDate"
              value={frmDt.issueDate}
              onChange={handleOnChange}
              required
            />
          </Col>
        </Form.Group>
        <Form.Group>
          <Form.Label>Password</Form.Label>
          <Form.Control
            as="textarea"
            name="message"
            rows="5"
            value={frmDt.message}
            onChange={handleOnChange}
            required
          />
        </Form.Group>

        <Button type="submit" variant="info" block>
          Open Ticket
        </Button>
      </Form>
    </Jumbotron>
  );
};

AddTicketForm.propTypes={
	handleOnSubmit:PropTypes.func.isRequired,
	handleOnChange:PropTypes.func.isRequired,
	frmDt:PropTypes.object.isRequired,
frmDataErro:PropTypes.object.isRequired,
};