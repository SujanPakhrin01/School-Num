"use client";
import React, { FC } from "react";

interface Course {
  id: number;
  label: string;
  img: string;
}

interface Props {
  course: Course;
}

const CourseCard: FC<Props> = ({ course }) => {
  return (
    <div
      style={{
        background: "#ffffff",
        borderRadius: "12px",
        boxShadow: "0 6px 16px rgba(0,0,0,0.08)",
        padding: "1rem",
        cursor: "pointer",
        transition: "all 0.3s ease",
        textAlign: "center",
        minWidth: "180px",
        maxWidth: "250px",
        flex: "1 1 200px",
      }}
      onMouseEnter={(e) =>
        (e.currentTarget.style.transform = "translateY(-6px)")
      }
      onMouseLeave={(e) =>
        (e.currentTarget.style.transform = "translateY(0)")
      }
    >
      <img
        src={course.img}
        alt={course.label}
        style={{
          width: "100%",
          height: "110px",
          objectFit: "cover",
          borderRadius: "8px",
          marginBottom: "0.8rem",
        }}
      />

      <h3
        style={{
          fontSize: "1rem",
          fontWeight: 600,
          color: "#1f2937",
        }}
      >
        {course.label}
      </h3>
    </div>
  );
};

export default CourseCard;