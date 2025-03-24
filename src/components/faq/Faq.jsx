import React, { useEffect, useState } from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { Box } from "@mui/material";
import axios from "axios";

const Faq = () => {
  const [faqs, setFaqs] = useState([]);
  const fetchFaqs = async () => {
    try {
      const res = await axios.get("https://qtify-backend-labs.crio.do/faq");
      setFaqs(res.data.data);
    } catch (error) {}
  };
  useEffect(() => {
    fetchFaqs();
  }, []);
  return (
    <Box my={2} sx={{ px: { xs: 2, sm: 10, md: 20 } }}>
      <Typography
        sx={{
          color: "#FFF",
          textAlign: "center",
          textShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
          fontFamily: "Poppins",
          fontSize: "50px",
          fontStyle: "normal",
          fontWeight: "600",
          lineHeight: "normal",
        }}
      >
        FAQs
      </Typography>
      <Box>
        {faqs.map((faq, index) => (
          <Accordion
            sx={{
              my: 2,
              backgroundColor: "var(--color-black)",
              color: "var(--color-white)",
              border: "1px solid var(--color-white)",
              borderRadius: "10px",
              height:"100%",
              width:"100%",
            }}
          >
            <AccordionSummary
              expandIcon={<ExpandMoreIcon sx={{color:"var(--color-primary)"}}/>}
              aria-controls={`panel${index}a-content`}
              id={`panel${index}a-header`}
            >
              <Typography
                sx={{
                  fontFamily: "Poppins",
                  fontStyle: "normal",
                  fontWeight: "500",
                  lineHeight: "normal",
                }}
              >
                {faq.question}
              </Typography>
            </AccordionSummary>
            <AccordionDetails
              sx={{
                backgroundColor: "var(--color-white)",
                color: "var(--color-black)",
                borderRadius: "0px 0px 10px 10px",
              }}
            >
              <Typography
                sx={{
                  fontFamily: "Poppins",
                  fontStyle: "normal",
                  fontWeight: "500",
                  lineHeight: "normal",
                }}
              >
                {faq.answer}
              </Typography>
            </AccordionDetails>
          </Accordion>
        ))}
      </Box>
    </Box>
  );
};

export default Faq;
