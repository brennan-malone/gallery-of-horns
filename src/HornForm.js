import React from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

class HornForm extends React.Component {
  render() {
    return (
      <>
        <Form onSubmit={(e) => { this.props.handleChangeHorn(e) }}>
          <Form.Group>
            <p>Filter by amount of horns</p>
            {['checkbox'].map((type) => (
              <div key={`inline-${type}`} className="mb-3">
                <Form.Check
                  inline
                  label="1"
                  name="group1"
                  type={type}
                  id={`inline-${type}-1`}
                />
                <Form.Check
                  inline
                  label="2"
                  name="group1"
                  type={type}
                  id={`inline-${type}-2`}
                />
                <Form.Check
                  inline
                  label="3"
                  name="group1"
                  type={type}
                  id={`inline-${type}-3`}
                />
                <Form.Check
                  inline
                  label="100"
                  name="group1"
                  type={type}
                  id={`inline-${type}-4`}
                />
                <Button type='submit'>Submit</Button>
              </div>
            ))}
          </Form.Group>
        </Form>
      </>
    )
  }
}

export default HornForm;