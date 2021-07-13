import { FormControl, InputLabel, Input, FormHelperText } from '@material-ui/core';
import { Container } from "react-bootstrap";
import styles from "../styles/auth.module.css"

export default function Login() {
    return (
      <div className="posts-page">
        <Container className={styles.loginForm}>
          <FormControl margin="normal">
            <InputLabel htmlFor="my-input">Email</InputLabel>
            <Input id="my-input" aria-describedby="my-helper-text" />
            <FormHelperText id="my-helper-text"></FormHelperText>
          </FormControl>
          <FormControl margin="normal">
            <InputLabel htmlFor="my-input">Password</InputLabel>
            <Input id="my-input" aria-describedby="my-helper-text" />
            <FormHelperText id="my-helper-text"></FormHelperText>
          </FormControl>
        </Container>
      </div>
    )
  }