import React from "react";
import {
  Container,
  Box,
  Button,
  TextField,
  Grid,
  FormControlLabel,
  Checkbox,
  Link,
} from "@mui/material";
import { useUserAuth } from "../../contexts/AuthContext";
import { useNavigate } from "react-router-dom";

import "./SignIn.css";
import "../../App.css";

function SignIn() {
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [error, setError] = React.useState("");
  const { signIn } = useUserAuth();

  let navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      setError("");
      await signIn(email, password);
      navigate("/about");
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <section className="section-container">
      <Box
        component="form"
        noValidate
        onSubmit={handleSubmit}
        sx={{ width: "40%" }}
      >
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <TextField
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="new-password"
            />
          </Grid>
        </Grid>
        <Button
          type="submit"
          fullWidth
          variant="contained"
          sx={{ mt: 3, mb: 2 }}
        >
          Sign In
        </Button>
        <Grid container justifyContent="center">
          <Grid item>
            <Link href="/signup" variant="body2">
              Don't have an account? Sign up
            </Link>
          </Grid>
        </Grid>
      </Box>
    </section>
  );
}

export default SignIn;
