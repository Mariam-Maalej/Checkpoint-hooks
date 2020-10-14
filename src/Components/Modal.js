import React, { useState } from "react";
import { Modal, Button, Form } from "react-bootstrap";

function Modalmovie({ movielist, setMovielist }) {
  const [show, setShow] = useState(false);
  const [title, setinputTitle] = useState("");
  const [description, setinputDescription] = useState("");
  const [posterUrl, setinputposterUrl] = useState("");
  const [rate, setinputrate] = useState("");

  const handleChangeTitle = (e) => {
    setinputTitle(e.target.value);
  };
  const handleChangeDes = (e) => {
    setinputDescription(e.target.value);
  };
  const handleChangePoster = (e) => {
    setinputposterUrl(e.target.value);
  };
  const handleChangeRate = (e) => {
    setinputrate(e.target.value);
  };
  const handleClickAdd = (newmovie) => {
    newmovie = {
      title: title,
      description: description,
      posterUrl: posterUrl,
      rate: rate,
    };
    setMovielist([...movielist, newmovie]);
  };

  return (
    <div >
      <Button variant="dark" onClick={() => setShow(true)}>
        Add new movie
      </Button>{" "}
      
        <Modal 
          show={show}
          onHide={() => setShow(false)}
          dialogClassName="modal-90w"
          aria-labelledby="example-custom-modal-styling-title"
        >
          <div className="modal-container">
          <Modal.Header closeButton variant="dark">
            {" "}
            <Modal.Title id="example-custom-modal-styling-title">
              Add new movie
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form >
              <Form.Row className="form-newmovie">
                <Form.Group controlId="formGridTitle">
                  <Form.Label>Movie title</Form.Label>
                  <Form.Control
                    id="title"
                    type="text"
                    placeholder="Enter title"
                    onChange={handleChangeTitle}
                  />
                </Form.Group>
                <Form.Group controlId="formGridDescription">
                  <Form.Label>Movie description</Form.Label>
                  <Form.Control
                    id="desc"
                    type="text"
                    placeholder="Enter Description"
                    onChange={handleChangeDes}
                  />
                </Form.Group>

                <Form.Group controlId="formGridUrl">
                  <Form.Label>Movie poster</Form.Label>
                  <Form.Control
                    id="poster"
                    type="text"
                    placeholder="Enter Poster URL"
                    onChange={handleChangePoster}
                  />
                </Form.Group>
                <Form.Group controlId="formGridRate">
                  <Form.Label>Movie rate</Form.Label>
                  <Form.Control
                    id="rate"
                    type="text"
                    placeholder="Enter Rate"
                    onChange={handleChangeRate}
                  />
                </Form.Group>
              </Form.Row>
            </Form>
          </Modal.Body>
          <Modal.Footer>
            
            <Button id="submit" variant="dark" onClick={handleClickAdd}>
              {" "}
              Add movie
            </Button>
          </Modal.Footer>
          </div>
        </Modal>
    
    </div>
  );
}

export default Modalmovie;
