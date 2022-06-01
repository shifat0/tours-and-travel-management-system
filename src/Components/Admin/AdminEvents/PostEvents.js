import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Form, Button } from "react-bootstrap";
import AdminNav from "../AdminNav";

const PostEvents = () => {
  const [validated, setValidated] = useState(false);
  const [event, setEvent] = useState({
    name: "",
    place: "",
    description: "",
    fee: "",
    startingDate: "",
    endDate: "",
  });
  const [image, setImage] = useState("");

  const navigate = useNavigate();
  let { from } = { from: { pathname: "/admin/events" } };

  const handleSubmit = (e) => {
    const form = e.currentTarget;
    if (form.checkValidity() === false) e.preventDefault();
    setValidated(true);
    e.preventDefault();
    const formData = new FormData();
    formData.append("eventName", `${event.name}`);
    formData.append("place", `${event.place}`);
    formData.append("description", `${event.description}`);
    formData.append("fee", `${event.fee}`);
    formData.append("startingDate", `${event.startingDate}`);
    formData.append("endDate", `${event.endDate}`);
    formData.append("image", image);
    console.log(formData);

    fetch("http://localhost:5000/api/v1/events", {
      method: "POST",
      body: formData,
    })
      .then((res) => res)
      .then((payload) => {
        if (payload) return navigate(from, { replace: true });
      });
  };

  const handleBlur = (e) => {
    const newEvent = { ...event };
    newEvent[e.target.name] = e.target.value;
    setEvent(newEvent);
  };

  const changeHandler = (e) => {
    setImage(e.target.files[0]);
  };

  return (
    <>
      <AdminNav />
      <Form
        className="w-50 mt-3 m-auto text-center"
        noValidate
        validated={validated}
        onSubmit={handleSubmit}
        onBlur={handleBlur}
      >
        <h1 className="mb-3">Post Events</h1>

        <Form.Floating className="mb-3">
          <Form.Control
            required
            type="text"
            id="floatingInputCustom01"
            placeholder="Event Name"
            name="name"
          />
          <label htmlFor="floatingInputCustom01">Event Name</label>
          <Form.Control.Feedback type="invalid">
            Please enter event name
          </Form.Control.Feedback>
        </Form.Floating>

        <Form.Floating className="mb-3">
          <Form.Control
            required
            type="text"
            id="floatingInputCustom02"
            placeholder="Place name"
            name="place"
          />
          <label htmlFor="floatingInputCustom02">Place Name</label>
          <Form.Control.Feedback type="invalid">
            Please enter a place
          </Form.Control.Feedback>
        </Form.Floating>

        <Form.Floating className="mb-3">
          <textarea
            className="form-control"
            id="floatingInputCustom03"
            rows="5"
            cols="30"
            placeholder="Description"
            name="description"
            required
          />
          <label htmlFor="floatingInputCustom03">Description</label>
          <Form.Control.Feedback type="invalid">
            Please provide a description.
          </Form.Control.Feedback>
        </Form.Floating>

        <Form.Floating className="mb-3">
          <Form.Control
            type="text"
            placeholder="Fee"
            id="floatingInputCustom04"
            name="fee"
            required
          />
          <label htmlFor="floatingInputCustom04">Fee</label>
          <Form.Control.Feedback type="invalid">
            Please provide amount of fee.
          </Form.Control.Feedback>
        </Form.Floating>

        <Form.Floating className="mb-3">
          <Form.Control
            type="date"
            placeholder="Starting Date"
            id="floatingInputCustom05"
            name="startingDate"
            required
          />
          <label htmlFor="floatingInputCustom05">Starting Date</label>
          <Form.Control.Feedback type="invalid">
            Please provide starting date of event.
          </Form.Control.Feedback>
        </Form.Floating>

        <Form.Floating className="mb-3">
          <Form.Control
            type="date"
            placeholder="End Date"
            id="floatingInputCustom06"
            name="endDate"
            required
          />
          <label htmlFor="floatingInputCustom06">End Date</label>
          <Form.Control.Feedback type="invalid">
            Please provide end date of event.
          </Form.Control.Feedback>
        </Form.Floating>

        <Form.Group className="mb-3">
          <Form.Label htmlFor="floatingInputCustom07">Upload Image</Form.Label>
          <Form.Control
            type="file"
            name="image"
            id="floatingInputCustom07"
            onChange={changeHandler}
            required
          />
          <Form.Control.Feedback type="invalid">
            Please upload an image.
          </Form.Control.Feedback>
        </Form.Group>

        <Button type="submit" size="md">
          Post Event
        </Button>
      </Form>
    </>
  );
};

export default PostEvents;
