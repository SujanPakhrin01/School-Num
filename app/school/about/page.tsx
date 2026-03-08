"use client";
import React from "react";
import Image from "next/image";

const About = () => {
  return (
    <section
      style={{
        fontFamily: "'Georgia', serif",
        background: "#f8f9fa",
        color: "#1a1a2e",
        margin: 0,
        padding: 0,
        width: "100%",
      }}
    >
      {/* Hero Section */}
      <div
        suppressHydrationWarning
        style={{
          position: "relative",
          width: "100%",
          height: "75vh",
          overflow: "hidden",
          margin: 0,
          padding: 0,
        }}
      >
        <Image
          src="/school.jpg"
          alt="Shree Singeswari Secondary School"
          fill
          sizes="100vw"
          style={{ objectFit: "cover" }}
          priority
          unoptimized
        />

        {/* Dark Overlay */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            background: "rgba(0,0,0,0.45)",
            zIndex: 1,
          }}
        />

        {/* Center Text */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            color: "#fff",
            textAlign: "center",
            padding: "0 1.5rem",
            zIndex: 2,
          }}
        >
          <h1
            style={{
              fontSize: "clamp(2rem, 5vw, 3rem)",
              fontWeight: 700,
              marginBottom: "1rem",
              lineHeight: 1.2,
            }}
          >
            Welcome to Our School
          </h1>
          <p
            style={{
              fontSize: "clamp(1rem, 2.5vw, 1.3rem)",
              maxWidth: "600px",
              lineHeight: 1.6,
            }}
          >
            Empowering students with knowledge and discipline
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;