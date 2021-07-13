import { FormControl, InputLabel, Input, FormHelperText } from '@material-ui/core';
import { Container } from "react-bootstrap";
import "../styles/posts.module.css";

export default function Register() {
    return (
      <div className="posts-page">
        <Container>
          <FormControl margin="normal">
            <InputLabel htmlFor="my-input">Email</InputLabel>
            <Input id="my-input" aria-describedby="my-helper-text" />
            <FormHelperText id="my-helper-text"></FormHelperText>

            <InputLabel htmlFor="my-input">Password</InputLabel>
            <Input id="my-input" aria-describedby="my-helper-text" />
            <FormHelperText id="my-helper-text"></FormHelperText>
          </FormControl>
        </Container>
      </div>
    )
  }