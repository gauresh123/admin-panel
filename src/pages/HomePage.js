import React from "react";
import Projects from "../components/Projects";
import { Button } from "@mui/material";

const HomePage = () => {
  return (
    <div style={{ width: "1180px" }}>
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <div style={{ display: "flex", gap: "25px" }}>
          <span
            style={{
              fontWeight: 500,
              fontSize: "32px",
              lineHeight: "32.73px",
              fontFamily: "Inter",
            }}
          >
            Projects
          </span>
          <Button
            startIcon={
              <img src="../plus1.svg" width={"20px"} height={"20px"} />
            }
            sx={{
              padding: "10px 18px 10px 18px",
              fontSize: "16px",
              lineHeight: "19.36px",
              textTransform: "none",
              backgroundColor: "#2D446E",
              fontFamily: "Inter",
              fontWeight: "700",
              fontSize: "16px",
            }}
            variant="contained"
          >
            Projects
          </Button>
        </div>
        <img
          src="../overview1.svg"
          alt=""
          width={"185.06px"}
          height={"22.06px"}
        />
      </div>

      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          marginTop: "20px",
          marginBottom: "20px",
        }}
      >
        <div
          style={{
            display: "flex",
            gap: "10px",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <span
            style={{
              fontWeight: 600,
              fontSize: "20px",
              lineHeight: "24.2px",
              fontFamily: "Inter",
              letterSpacing: "0.15%",
            }}
          >
            All Projects
          </span>
          <img src="../Vector.svg" alt="" width={"12.37px"} height={"7.45px"} />
        </div>
        <div style={{ display: "flex", gap: "10px" }}>
          <img src="../table.svg" alt="" width={"40px"} height={"40px"} />
          <img src="../Button.svg" alt="" width={"40px"} height={"40px"} />
          <img
            src="../menu.svg"
            alt=""
            width={"24px"}
            height={"24px"}
            style={{ alignSelf: "center" }}
          />
        </div>
      </div>
      <Projects />
    </div>
  );
};

export default HomePage;
