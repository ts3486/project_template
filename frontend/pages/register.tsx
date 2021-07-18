import {
  FormControl,
  InputLabel,
  Input,
  FormHelperText,
} from "@material-ui/core";
import { Container } from "react-bootstrap";
import styles from "../styles/auth.module.css";

export default function Register() {
  return (
    <div className="posts-page">
      <div className="posts-page">
        <Container className={styles.loginForm}>
          <FormControl margin="normal">
            <InputLabel htmlFor="email">Email</InputLabel>
            <Input id="email" aria-describedby="email" />
            <FormHelperText id="email"></FormHelperText>
          </FormControl>
          <FormControl margin="normal">
            <InputLabel htmlFor="pw">Password</InputLabel>
            <Input id="pw" aria-describedby="pw" />
            <FormHelperText id="pw"></FormHelperText>
          </FormControl>
        </Container>
      </div>
    </div>
  );
}
