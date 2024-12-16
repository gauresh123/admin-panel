import React from "react";
import { data } from "../constant/dumyData";

const Projects = () => {
  return (
    <div
      style={{
        display: "flex",
        //justifyContent: "space-between",
        gap: "20px",
        flexWrap: "wrap",
        border: "1px solid #F1F1F1",
        paddingLeft: "20px",
        paddingTop: "20px",
      }}
    >
      <div
        style={{
          width: "270px",
          height: "23px",
        }}
      >
        <div
          style={{
            width: "112px",
            height: "23px",
            backgroundColor: "#B0B0B0",
            borderRadius: "8px",
          }}
        >
          <span
            style={{
              fontFamily: "Inter",
              color: "#FFFFFF",
              fontWeight: "600",
              fontSize: "12px",
              lineHeight: "14.52px",
              padding: "4px 12px 4px 12px",
            }}
          >
            Not Started <span style={{ paddingLeft: "5px" }}>2</span>
          </span>
        </div>
      </div>

      <div
        style={{
          width: "270px",
          height: "23px",
        }}
      >
        <div
          style={{
            width: "112px",
            height: "23px",
            backgroundColor: "#4A90E2",
            borderRadius: "8px",
          }}
        >
          <span
            style={{
              fontFamily: "Inter",
              color: "#FFFFFF",
              fontWeight: "600",
              fontSize: "12px",
              lineHeight: "14.52px",
              padding: "4px 12px 4px 12px",
            }}
          >
            Not Started <span style={{ paddingLeft: "5px" }}>2</span>
          </span>
        </div>
      </div>

      <div
        style={{
          width: "270px",
          height: "23px",
        }}
      >
        <div
          style={{
            width: "112px",
            height: "23px",
            backgroundColor: "#607D8B",
            borderRadius: "8px",
          }}
        >
          <span
            style={{
              fontFamily: "Inter",
              color: "#FFFFFF",
              fontWeight: "600",
              fontSize: "12px",
              lineHeight: "14.52px",
              padding: "4px 12px 4px 12px",
            }}
          >
            Not Started <span style={{ paddingLeft: "5px" }}>2</span>
          </span>
        </div>
      </div>

      <div
        style={{
          width: "270px",
          height: "23px",
        }}
      >
        <div
          style={{
            width: "112px",
            height: "23px",
            backgroundColor: "#4CAF50",
            borderRadius: "8px",
          }}
        >
          <span
            style={{
              fontFamily: "Inter",
              color: "#FFFFFF",
              fontWeight: "600",
              fontSize: "12px",
              lineHeight: "14.52px",
              padding: "4px 12px 4px 12px",
            }}
          >
            Not Started <span style={{ paddingLeft: "5px" }}>2</span>
          </span>
        </div>
      </div>

      {data?.map(() => {
        return (
          <div
            style={{
              width: "270px",
              height: "175px",
              border: "1px solid #F2F2F2",
              padding: "10px",
              display: "flex",
              flexDirection: "column",
              gap: "20px",
              borderRadius: "8px",
            }}
          >
            <div style={{ display: "flex", justifyContent: "space-between" }}>
              <div style={{ display: "flex", gap: "8px" }}>
                <img
                  src="../Vector.jpg"
                  alt=""
                  width={"17.86px"}
                  height={"14.64px"}
                />
                <span
                  style={{
                    fontFamily: "Inter",
                    fontWeight: 700,
                    fontSize: "12px",
                    lineHeight: "14.52px",
                  }}
                >
                  Project Name
                </span>
              </div>
              <span
                style={{
                  fontFamily: "Inter",
                  fontWeight: "700",
                  fontSize: "12px",
                  lineHeight: "14.52px",
                }}
              >
                id:12
              </span>
            </div>
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <span
                style={{
                  fontFamily: "Inter",
                  fontWeight: "400",
                  lineHeight: "13.31px",
                  fontSize: "11px",
                }}
              >
                07
              </span>
              <div
                style={{
                  width: "224px",
                  height: "14px",
                  borderRadius: "7px",
                  backgroundColor: "#EEEEEE",
                }}
              >
                <div
                  style={{
                    width: "112px",
                    height: "14px",
                    backgroundColor: "#66CC66",
                    display: "flex",
                    justifyContent: "flex-end",
                    alignItems: "flex-end",
                    borderRadius: "7px",
                    color: "#2D446E",
                    fontWeight: "700",
                    fontSize: "12px",
                    lineHeight: "14.52px",
                    fontFamily: "Inter",
                  }}
                >
                  50%
                </div>
              </div>
              <span
                style={{
                  fontFamily: "Inter",
                  fontWeight: "400",
                  lineHeight: "13.31px",
                  fontSize: "11px",
                }}
              >
                14
              </span>
            </div>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "4px",
              }}
            >
              <img src="../date.svg" alt="" width={"16px"} height={"16px"} />
              <span
                style={{
                  fontWeight: "500",
                  fontSize: "12px",
                  lineHeight: "14.52px",
                }}
              >
                01/01/2024 - 31/01/2024
              </span>
            </div>

            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                width: "250px",
                height: "36px",
                marginTop: "20px",
              }}
            >
              <div className="img" style={{ display: "flex" }}>
                <div style={{ position: "relative" }}></div>
              </div>
              <div style={{ display: "flex", alignItems: "center" }}>
                <img src="../file.svg" alt="" width={"20px"} height={"20px"} />
                <span
                  style={{
                    fontWeight: "700",
                    fontFamily: "Inter",
                    fontSize: "12px",
                    lineHeight: "14.52px",
                  }}
                >
                  12 Files
                </span>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Projects;
