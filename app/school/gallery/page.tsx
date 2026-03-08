"use client";
import React, { FC } from "react";
import { useRouter, usePathname } from "next/navigation";

const gallery = [
  "https://placehold.co/300x200/0f766e/white?text=Gallery+1",
  "https://placehold.co/300x200/0369a1/white?text=Gallery+2",
  "https://placehold.co/300x200/7c3aed/white?text=Gallery+3",
  "https://placehold.co/300x200/b45309/white?text=Gallery+4",
  "https://placehold.co/300x200/be123c/white?text=Gallery+5",
  "https://placehold.co/300x200/15803d/white?text=Gallery+6",
];

const fullGallery = [
  ...gallery,
  "https://placehold.co/300x200/155e75/white?text=Gallery+7",
  "https://placehold.co/300x200/1d4ed8/white?text=Gallery+8",
  "https://placehold.co/300x200/7e22ce/white?text=Gallery+9",
  "https://placehold.co/300x200/be185d/white?text=Gallery+10",
  "https://placehold.co/300x200/166534/white?text=Gallery+11",
  "https://placehold.co/300x200/92400e/white?text=Gallery+12",
];

const Gallery: FC = () => {
  const router = useRouter();
  const pathname = usePathname();
  const isFullPage = pathname === "/school/gallery";

  const imagesToShow = isFullPage ? fullGallery : gallery;

  const handleTopButton = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();

    if (isFullPage) {
      if (window.history.length > 1) router.back();
      else router.push("/");
      return;
    }

    router.push("/school/gallery");
  };

  return (
    <section
      id="gallery"
      style={{
        padding: isFullPage ? "2rem 5% 3rem" : "1rem 5% 3rem",
        minHeight: isFullPage ? "100vh" : undefined,
        scrollMarginTop: "68px", // Add scroll offset for fixed navbar
      }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          marginBottom: "1.4rem",
        }}
      >
        <h2
          style={{
            fontSize: "1.6rem",
            fontWeight: 700,
            margin: 0,
            position: "relative",
            display: "inline-block",
          }}
        >
          {isFullPage ? "Full Gallery" : "Gallery"}
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

        <a
          href={isFullPage ? "/" : "/school/gallery"}
          onClick={handleTopButton}
          style={{
            padding: "0.45rem 1.1rem",
            background: isFullPage ? "#ef4444" : "#fff",
            border: isFullPage ? "1.5px solid #ef4444" : "1.5px solid #0d9488",
            color: isFullPage ? "#fff" : "#0d9488",
            borderRadius: 4,
            textDecoration: "none",
            fontWeight: 600,
            fontSize: "0.85rem",
            transition: "background 0.2s,color 0.2s",
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.background = isFullPage ? "#dc2626" : "#0d9488";
            e.currentTarget.style.color = "#fff";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.background = isFullPage ? "#ef4444" : "#fff";
            e.currentTarget.style.color = isFullPage ? "#fff" : "#0d9488";
          }}
        >
          {isFullPage ? "Close" : "View All"}
        </a>
      </div>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: isFullPage
            ? "repeat(auto-fill,minmax(220px,1fr))"
            : "repeat(auto-fill,minmax(260px,1fr))",
          gap: "1rem",
        }}
      >
        {imagesToShow.map((src, i) => (
          <div
            key={i}
            style={{
              borderRadius: 8,
              overflow: "hidden",
              boxShadow: "0 2px 10px rgba(0,0,0,0.09)",
              transition: "transform 0.25s",
              cursor: "pointer",
            }}
            onMouseEnter={(e) => (e.currentTarget.style.transform = "scale(1.03)")}
            onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}
          >
            <img
              src={src}
              alt={`Gallery ${i + 1}`}
              style={{
                width: "100%",
                height: isFullPage ? 210 : 180,
                objectFit: "cover",
                display: "block",
              }}
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default Gallery;