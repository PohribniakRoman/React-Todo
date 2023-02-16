import React, { useState } from "react";
import { Button, Form, InputGroup } from "react-bootstrap";

export default function Login( {changeStatus} ) {
    const [field, updateField] = useState("");
    return(
      <Form className="login" onSubmit={(event)=>{
        event.preventDefault();
        if(field.trim()){
          changeStatus(true);
          localStorage.setItem("user", field.trim());
          updateField("");
        }else{
          alert("Write your name")
        }
      }}>
      <Form.Label>Log in</Form.Label>
        <InputGroup className="mb-3">
          <Form.Control
            required
            value={field}
            placeholder="User name"
            onChange={(event) => {
              updateField(event.target.value);
            }}/>
          <Button type="submit" variant="outline-secondary" id="button-addon2">
            log in
          </Button>
        </InputGroup>
    </Form>

    )
}