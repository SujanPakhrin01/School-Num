"use client";
import React, { FC } from "react";
import CourseCard from "./coursecard";


const courses = [
  { id: 1, label: "Montessori to 10", img: "https://placehold.co/160x110/2dd4bf/white?text=Montessori+to+10" },
  { id: 2, label: "+2 Management (Class 11‑12)", img: "https://placehold.co/160x110/3b82f6/white?text=+Management" },
];

const Course: FC = () => {
  return (
    <section 
      id="course" 
      style={{ 
        padding: "3rem 5%",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        scrollMarginTop: "68px", // Add scroll offset for fixed navbar
      }}
    >
      <h2
        style={{
          fontSize: "1.6rem",
          fontWeight: 700,
          marginBottom: "1.8rem",
          position: "relative",
          display: "inline-block",
        }}
      >
        Courses
        <span
          style={{
            position: "absolute",
            bottom: -6,
            left: 0,
            width: "60%",
            height: 3,
            background: "linear-gradient(90deg,#0d9488,#0891b2)",
            borderRadius: 2,
          }}
        />
      </h2>

      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          gap: "1.5rem",
          justifyContent: "center",
          maxWidth: "1200px",
          width: "100%",
        }}
      >
        {courses.map(c => (
          <CourseCard key={c.id} course={c} />
        ))}
      </div>
    </section>
  );
};

export default Course;