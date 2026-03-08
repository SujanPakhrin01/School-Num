"use client";
import React from "react";
import Image from "next/image";
import { getAllNotices, hasNotices } from "@/data/notices";

export default function NoticePage() {
  const notices = getAllNotices();

  return (
    <section
      style={{
        minHeight: "100vh",
        padding: "5rem 5% 3rem", // Increased top padding from 3rem to 5rem
        background: "#f8f9fa",
      }}
    >
      <div
        style={{
          maxWidth: "1200px",
          margin: "0 auto",
        }}
      >
        <h1
          style={{
            fontSize: "2.5rem",
            fontWeight: 700,
            marginBottom: "2rem",
            textAlign: "center",
            color: "#1a1a2e",
            position: "relative",
            display: "inline-block",
            width: "100%",
          }}
        >
          School Notices
          <span
            style={{
              position: "absolute",
              bottom: -10,
              left: "50%",
              transform: "translateX(-50%)",
              width: "100px",
              height: 4,
              background: "linear-gradient(90deg,#1565c0,#1976d2)",
              borderRadius: 2,
            }}
          />
        </h1>

        {!hasNotices() ? (
          <div
            style={{
              textAlign: "center",
              padding: "4rem 2rem",
              background: "white",
              borderRadius: "12px",
              boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
            }}
          >
            <div
              style={{
                fontSize: "3rem",
                marginBottom: "1rem",
                opacity: 0.3,
              }}
            >
              📢
            </div>
            <h2
              style={{
                fontSize: "1.5rem",
                color: "#666",
                marginBottom: "0.5rem",
              }}
            >
              No Notices Available
            </h2>
            <p style={{ color: "#999", fontSize: "1rem" }}>
              There are currently no notices to display. Please check back later.
            </p>
          </div>
        ) : (
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fill, minmax(320px, 1fr))",
              gap: "2rem",
            }}
          >
            {notices.map((notice) => (
              <div
                key={notice.id}
                style={{
                  background: "white",
                  borderRadius: "12px",
                  boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
                  overflow: "hidden",
                  transition: "transform 0.3s ease, box-shadow 0.3s ease",
                  cursor: "pointer",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = "translateY(-8px)";
                  e.currentTarget.style.boxShadow = "0 8px 24px rgba(0,0,0,0.15)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = "translateY(0)";
                  e.currentTarget.style.boxShadow = "0 4px 12px rgba(0,0,0,0.1)";
                }}
              >
                <div
                  style={{
                    position: "relative",
                    width: "100%",
                    height: "250px",
                    overflow: "hidden",
                  }}
                >
                  <Image
                    src={notice.imageUrl}
                    alt={notice.title}
                    fill
                    style={{ objectFit: "cover" }}
                  />
                </div>
                <div style={{ padding: "1.5rem" }}>
                  <div
                    style={{
                      fontSize: "0.875rem",
                      color: "#1565c0",
                      fontWeight: 600,
                      marginBottom: "0.5rem",
                    }}
                  >
                    📅 {notice.date}
                  </div>
                  <h3
                    style={{
                      fontSize: "1.25rem",
                      fontWeight: 700,
                      color: "#1a1a2e",
                      marginBottom: "0.5rem",
                      lineHeight: 1.4,
                    }}
                  >
                    {notice.title}
                  </h3>
                  {notice.description && (
                    <p
                      style={{
                        fontSize: "0.95rem",
                        color: "#666",
                        lineHeight: 1.6,
                      }}
                    >
                      {notice.description}
                    </p>
                  )}
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}