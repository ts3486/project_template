import { FormControl, InputLabel, Input, FormHelperText } from '@material-ui/core';
import { Container } from "react-bootstrap";

export default function Post() {
    return (
      <div className="posts-page">
        <Container>
          <FormControl margin="normal">
            <InputLabel htmlFor="my-input">Title</InputLabel>
            <Input id="my-input" aria-describedby="my-helper-text" />
            <FormHelperText id="my-helper-text">Give it a non-technical comprehensive title</FormHelperText>

            

          </FormControl>
        </Container>
      </div>
    )
  }