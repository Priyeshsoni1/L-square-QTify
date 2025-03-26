import { Box, Button, Typography } from "@mui/material";
import React, { useEffect } from "react";
import CloseIcon from "@mui/icons-material/Close";
import "./style.css";
const FeedbackFrom = ({ toggleForm }) => {
  useEffect(() => {
    document.body.style.overflowY = "hidden";
    return () => {
      document.body.style.overflowY = "scroll";
    };
  });
  return (
    <Box
      sx={{
        position: "fixed",
        top: 0,
        left: 0,
        bottom: 0,
        right: 0,
        zIndex: 6,
        background: "#121212c4",
      }}
      onClick={toggleForm}
    >
      <Box
        sx={{
          position: "fixed",
          top: "10%",
          left: "50%",
          zIndex: 10,
          transform: "translate(-50%)",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          gap: "1rem",
          px: "2rem",
          backgroundColor: "var(--color-white)",
          height: { xs: "60%", sm: "60%", md: "70%" },
          width: { xs: "80%", sm: "60%", md: "30%" },
          borderRadius: "10px",
          alignItems: "center",
          opacity: 1,
        }}
        onClick={(e) => {
          e.stopPropagation();
        }}
      >
        <Box
          sx={{
            color: "black",
            position:"absolute",
            top:20,
            right:20,
          }}
        >
          <CloseIcon onClick={toggleForm} style={{ cursor: "pointer" }} />
        </Box>
        <Typography
          sx={{
            color: "#121212",
            fontFamily: "Poppins",
            fontSize: "16px",
            fontStyle: "normal",
            fontWeight: "600",
            lineHeight: "normal",
          }}
        >
          Feedback
        </Typography>
        <input type="text" placeholder="Full name" />
        <input type="email" placeholder="Email ID" />
        <input type="text" placeholder="Subject" />
        <textarea
          name="description"
          id=""
          cols="30"
          rows="5"
          placeholder="Description"
        ></textarea>
        <Button
          variant="contained"
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            backgroundColor: "var(--Primary-400, var(--color-primary))",
            "&:hover": {
              backgroundColor: "var(--Primary-800, var(--color-primary))",
            },
          }}
        >
          Submit Feedback
        </Button>
      </Box>
    </Box>
  );
};

export default FeedbackFrom;
