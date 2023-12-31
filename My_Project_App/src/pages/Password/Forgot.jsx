import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { Button, Paper, Typography, Container, Grid } from "@mui/material";
import Field from "../Login/Field.jsx";
import { forgot } from "../../actions/auth.jsx";
import styles from "./Password.module.css";

const Forgot = () => {
  const history = useNavigate();
  const [formData, setFormData] = useState({ email: "" });
  const [step, setStep] = useState(0);
  const dispatch = useDispatch();
  const user = JSON.parse(localStorage.getItem("profile"));

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(forgot(formData));
    window.navigator.onLine ? setStep(1) : setStep(2);
  };

  const handleChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  if (user) history("/dashboard");

  return (
    <div style={{ paddingTop: "100px", paddingBottom: "100px" }}>
      <Container component="main" maxWidth="xs">
        <Paper
          sx={{
            marginTop: 0,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            padding: "32px",
          }}
          variant="outlined">
          {step === 0 && (
            <div>
              <Typography variant="h6" gutter="5">
                Please enter your email address
              </Typography>
              <form
                sx={{ margin: 8 }}
                noValidate
                autoComplete="off"
                onSubmit={handleSubmit}>
                <Grid container spacing={2}>
                  <Field
                    name="email"
                    label="Email Address"
                    handleChange={handleChange}
                    type="email"
                  />
                  <Button
                    type="submit"
                    fullWidth
                    variant="contained"
                    color="primary"
                    sx={{ margin: "16px 0 16px" }}>
                    {" "}
                    Submit{" "}
                  </Button>
                </Grid>
              </form>
            </div>
          )}

          {step === 1 && (
            <div>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}>
                {" "}
                <i
                  className="fas fa-check-circle"
                  style={{ fontSize: "55px", color: "#3e6947" }}></i>
              </div>
              <br />
              <p>
                A password reset link has been sent to your email. Please follow
                the link to reset your password
              </p>
              <div className={styles.buttons}>
                <button className={styles.button} onClick={() => history("/")}>
                  Back to home
                </button>
                <button className={styles.button} onClick={() => setStep(0)}>
                  Resend link
                </button>
              </div>
            </div>
          )}

          {step === 2 && (
            <div>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}>
                {" "}
                <i
                  className="fas fa-check-circle"
                  style={{ fontSize: "55px", color: "#3e6947" }}></i>
              </div>
              <br />
              <p>Please check your internet connection and try again</p>
              <div className={styles.buttons}>
                <button className={styles.button} onClick={() => history("/")}>
                  Back to home
                </button>
                <button className={styles.button} onClick={() => setStep(0)}>
                  Resend link
                </button>
              </div>
            </div>
          )}
        </Paper>
      </Container>
    </div>
  );
};

export default Forgot;
