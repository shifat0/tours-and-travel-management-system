import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

function PostBlogs() {
  const [validated, setValidated] = useState(false);
  const [blog, setBlog] = useState({
    blogTitle: "",
    place: "",
    description: "",
  });
  const [image, setImage] = useState("");

  const handleSubmit = (e) => {
    const form = e.currentTarget;
    if (form.checkValidity() === false) e.prblogDefault();
    setValidated(true);
    e.prblogDefault();
    const formData = new FormData();
    formData.append("blogName", `${blog.name}`);
    formData.append("place", `${blog.place}`);
    formData.append("description", `${blog.description}`);
    formData.append("fee", `${blog.fee}`);
    formData.append("startingDate", `${blog.startingDate}`);
    formData.append("endDate", `${blog.endDate}`);
    formData.append("image", image);
    console.log(formData);

    fetch("http://localhost:5000/api/v1/blogs", {
      method: "POST",
      body: formData,
    })
      .then((res) => res)
      .then((payload) => {
        console.log(payload);
      });
  };

  const handleBlur = (e) => {
    const newBlog = { ...blog };
    newBlog[e.target.name] = e.target.value;
    setBlog(newBlog);
  };

  const changeHandler = (e) => {
    setImage(e.target.files[0]);
  };

  return (
    <div className="mt-5">
      <Form
        className="w-50 mt-3 m-auto text-center"
        noValidate
        validated={validated}
        onSubmit={handleSubmit}
        onBlur={handleBlur}
      >
        <h1 className="mb-3">Post blogs</h1>

        <Form.Floating className="mb-3">
          <Form.Control
            required
            type="text"
            id="floatingInputCustom01"
            placeholder="blog Name"
            name="name"
          />
          <label htmlFor="floatingInputCustom01">Blog Title</label>
          <Form.Control.Feedback type="invalid">
            Please enter blog name
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
          Post blog
        </Button>
      </Form>
    </div>
  );
}

export default PostBlogs;
