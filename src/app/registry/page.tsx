"use client";
import { useEffect, useState } from "react";
import { products, type ProductStatus, type Product } from "@/lib/products";
import StatusBadge from "@/components/StatusBadge";
import GSAPReveal from "@/components/GSAPReveal";
import Footer from "@/components/Footer";
import { createPortal } from "react-dom";

type Filter = "all" | ProductStatus;

const filters: { id: Filter; label: string }[] = [
  { id: "all", label: "All Files" },
  { id: "deployed", label: "Deployed" },
  { id: "active", label: "Active" },
  { id: "classified", label: "Classified" },
];

function ProjectDetail({
  product,
  onClose,
}: {
  product: Product;
  onClose: () => void;
}) {
  const [imgIdx, setImgIdx] = useState(0);
  const [mounted, setMounted] = useState(false);
  const isCls = product.status === "classified";

  useEffect(() => {
    setMounted(true);
  }, []);
  if (!mounted) return null;

  return createPortal(
    <div
      style={{
        position: "fixed",
        inset: 0,
        zIndex: 9000, // ← very high z-index
        background: "rgba(5,4,3,0.93)",
        backdropFilter: "blur(14px)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "2rem",
        animation: "fadeIn .25s ease",
        overflowY: "hidden",
      }}
      onClick={onClose}
      onWheel={(e) => e.stopPropagation()} // ← add this
      onTouchMove={(e) => e.stopPropagation()} // ← add this
    >
      <div
        style={{
          background: "#0d0d0f",
          border: ".5px solid rgba(201,166,107,0.18)",
          maxWidth: 900,
          width: "100%",
          maxHeight: "86vh", // ← constrain height
          overflowY: "auto", // ← this div scrolls
          overflowX: "hidden",
          position: "relative",
          animation: "riseIn .35s ease",
          scrollbarWidth: "none",
          margin: "auto",
        }}
        onClick={(e) => e.stopPropagation()}
        onWheel={(e) => e.stopPropagation()} // ← add this
        onTouchMove={(e) => e.stopPropagation()}
      >
        {/* Close */}
        <button
          onClick={onClose}
          style={{
            position: "absolute",
            top: "1.5rem",
            right: "1.5rem",
            zIndex: 10,
            background: "none",
            border: ".5px solid rgba(201,166,107,0.2)",
            color: "var(--white-dim)",
            width: 36,
            height: 36,
            fontFamily: "Montserrat,sans-serif",
            fontSize: ".9rem",
            cursor: "pointer",
            transition: "all .2s",
          }}
        >
          ✕
        </button>

        {/* Top accent line */}
        <div
          style={{
            height: 1.5,
            background: `linear-gradient(to right, transparent, ${product.accentColor?.replace("0.12", "0.8") ?? "var(--gold)"}, transparent)`,
          }}
        />

        <div style={{ padding: "3rem" }}>
          {/* Header */}
          <div
            style={{
              display: "flex",
              alignItems: "flex-start",
              gap: "1.5rem",
              marginBottom: "2.5rem",
            }}
          >
            <div
              style={{
                width: 56,
                height: 56,
                flexShrink: 0,
                border: `.5px solid ${product.accentColor?.replace("0.12", "0.4") ?? "rgba(201,166,107,0.3)"}`,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontFamily: "Cinzel,serif",
                fontSize: "1.4rem",
                color: "var(--gold)",
                background: "rgba(201,166,107,0.04)",
              }}
            >
              {product.icon}
            </div>
            <div style={{ flex: 1 }}>
              <div
                className="label-mono"
                style={{
                  color: "rgba(201,166,107,0.35)",
                  fontSize: ".5rem",
                  marginBottom: ".4rem",
                }}
              >
                File / {product.num}
              </div>
              <h2
                style={{
                  fontFamily: "Cinzel,serif",
                  fontSize: "clamp(1.3rem,3vw,2rem)",
                  color: "var(--white)",
                  marginBottom: ".6rem",
                }}
              >
                {product.name}
              </h2>
              <StatusBadge status={product.status} />
            </div>
          </div>

          {/* Classified gate */}
          {isCls ? (
            <div
              style={{
                textAlign: "center",
                padding: "4rem 2rem",
                color: "rgba(201,166,107,0.2)",
                fontFamily: "Cinzel,serif",
                letterSpacing: ".2em",
                fontSize: ".8rem",
              }}
            >
              ◆ ACCESS DENIED ◆<br />
              <span
                style={{
                  fontSize: ".55rem",
                  fontFamily: "Montserrat,sans-serif",
                  marginTop: ".8rem",
                  display: "block",
                }}
              >
                Continental clearance required to view this file.
              </span>
            </div>
          ) : (
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "1fr 1fr",
                gap: "3rem",
              }}
              className="detail-grid"
            >
              {/* Left col */}
              <div>
                {/* Dates */}
                {(product.startDate || product.endDate) && (
                  <div style={{ marginBottom: "2rem" }}>
                    <div
                      className="label-mono"
                      style={{
                        color: "rgba(201,166,107,0.3)",
                        fontSize: ".48rem",
                        marginBottom: ".8rem",
                        letterSpacing: ".2em",
                      }}
                    >
                      OPERATION WINDOW
                    </div>
                    <div style={{ display: "flex", gap: "2rem" }}>
                      {product.startDate && (
                        <div>
                          <div
                            style={{
                              fontFamily: "Montserrat,sans-serif",
                              fontSize: ".44rem",
                              color: "var(--white-dim)",
                              letterSpacing: ".15em",
                              textTransform: "uppercase",
                            }}
                          >
                            Start
                          </div>
                          <div
                            style={{
                              color: "var(--gold)",
                              fontFamily: "Cinzel,serif",
                              fontSize: ".85rem",
                              marginTop: ".2rem",
                            }}
                          >
                            {product.startDate}
                          </div>
                        </div>
                      )}
                      {product.endDate && (
                        <div>
                          <div
                            style={{
                              fontFamily: "Montserrat,sans-serif",
                              fontSize: ".44rem",
                              color: "var(--white-dim)",
                              letterSpacing: ".15em",
                              textTransform: "uppercase",
                            }}
                          >
                            End
                          </div>
                          <div
                            style={{
                              color: "var(--gold)",
                              fontFamily: "Cinzel,serif",
                              fontSize: ".85rem",
                              marginTop: ".2rem",
                            }}
                          >
                            {product.endDate}
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                )}

                {/* Full desc */}
                <div style={{ marginBottom: "2rem" }}>
                  <div
                    className="label-mono"
                    style={{
                      color: "rgba(201,166,107,0.3)",
                      fontSize: ".48rem",
                      marginBottom: ".8rem",
                      letterSpacing: ".2em",
                    }}
                  >
                    MISSION BRIEF
                  </div>
                  <p
                    className="body-serif"
                    style={{
                      color: "var(--white-dim)",
                      fontSize: "1rem",
                      lineHeight: 1.8,
                    }}
                  >
                    {product.fullDesc}
                  </p>
                </div>

                {/* Tech stack */}
                <div style={{ marginBottom: "2rem" }}>
                  <div
                    className="label-mono"
                    style={{
                      color: "rgba(201,166,107,0.3)",
                      fontSize: ".48rem",
                      marginBottom: ".8rem",
                      letterSpacing: ".2em",
                    }}
                  >
                    TECH STACK
                  </div>
                  <div
                    style={{ display: "flex", flexWrap: "wrap", gap: ".5rem" }}
                  >
                    {product.tags.map((tag) => (
                      <span
                        key={tag}
                        style={{
                          fontFamily: "Montserrat,sans-serif",
                          fontSize: ".44rem",
                          letterSpacing: ".14em",
                          textTransform: "uppercase",
                          padding: ".3rem .8rem",
                          border: ".5px solid rgba(201,166,107,0.18)",
                          color: "rgba(201,166,107,0.6)",
                        }}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Features */}
                {product.features && product.features.length > 0 && (
                  <div>
                    <div
                      className="label-mono"
                      style={{
                        color: "rgba(201,166,107,0.3)",
                        fontSize: ".48rem",
                        marginBottom: ".8rem",
                        letterSpacing: ".2em",
                      }}
                    >
                      KEY FEATURES
                    </div>
                    <ul
                      style={{
                        listStyle: "none",
                        padding: 0,
                        display: "flex",
                        flexDirection: "column",
                        gap: ".6rem",
                      }}
                    >
                      {product.features.map((f) => (
                        <li
                          key={f}
                          style={{
                            display: "flex",
                            alignItems: "flex-start",
                            gap: ".7rem",
                            color: "var(--white-dim)",
                            fontSize: ".95rem",
                            fontFamily: "Cormorant Garamond,serif",
                          }}
                        >
                          <span
                            style={{
                              color: "var(--gold)",
                              flexShrink: 0,
                              marginTop: ".2rem",
                            }}
                          >
                            ◆
                          </span>
                          {f}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>

              {/* Right col — images */}
              <div>
                {product.images && product.images.length > 0 ? (
                  <div>
                    <div
                      className="label-mono"
                      style={{
                        color: "rgba(201,166,107,0.3)",
                        fontSize: ".48rem",
                        marginBottom: ".8rem",
                        letterSpacing: ".2em",
                      }}
                    >
                      VISUAL RECORD
                    </div>
                    {/* Main image */}
                    <div
                      style={{
                        position: "relative",
                        aspectRatio: "16/9",
                        border: ".5px solid rgba(201,166,107,0.1)",
                        overflow: "hidden",
                        marginBottom: ".8rem",
                      }}
                    >
                      <img
                        src={product.images[imgIdx]}
                        alt={`${product.name} screenshot ${imgIdx + 1}`}
                        style={{
                          width: "100%",
                          height: "100%",
                          objectFit: "cover",
                          filter: "grayscale(20%)",
                        }}
                      />
                      <div
                        style={{
                          position: "absolute",
                          inset: 0,
                          background:
                            "linear-gradient(to top, rgba(5,4,3,0.4), transparent 50%)",
                        }}
                      />
                    </div>
                    {/* Thumbnails */}
                    {product.images.length > 1 && (
                      <div style={{ display: "flex", gap: ".5rem" }}>
                        {product.images.map((img, i) => (
                          <button
                            key={i}
                            onClick={() => setImgIdx(i)}
                            style={{
                              flex: 1,
                              aspectRatio: "16/9",
                              overflow: "hidden",
                              cursor: "pointer",
                              border: `.5px solid ${i === imgIdx ? "var(--gold)" : "rgba(201,166,107,0.1)"}`,
                              padding: 0,
                              background: "none",
                              transition: "border-color .2s",
                            }}
                          >
                            <img
                              src={img}
                              alt=""
                              style={{
                                width: "100%",
                                height: "100%",
                                objectFit: "cover",
                                filter: "grayscale(40%)",
                              }}
                            />
                          </button>
                        ))}
                      </div>
                    )}
                  </div>
                ) : (
                  <div
                    style={{
                      aspectRatio: "16/9",
                      border: ".5px solid rgba(201,166,107,0.06)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      color: "rgba(201,166,107,0.1)",
                      fontFamily: "Cinzel,serif",
                      letterSpacing: ".2em",
                      fontSize: ".7rem",
                    }}
                  >
                    NO VISUAL RECORD
                  </div>
                )}

                {/* Live link */}
                {product.liveUrl && (
                  <a
                    href={product.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-gold"
                    style={{
                      display: "inline-block",
                      marginTop: "1.5rem",
                      textDecoration: "none",
                      fontSize: ".56rem",
                    }}
                  >
                    Access Live System →
                  </a>
                )}
              </div>
            </div>
          )}
        </div>
      </div>
      <style>{`
        .detail-grid { display:grid; grid-template-columns:1fr 1fr; gap:3rem; }
        @media(max-width:640px){ .detail-grid { grid-template-columns:1fr !important; } }
      `}</style>
    </div>,
    document.body,
  );
}

export default function RegistryPage() {
  const [filter, setFilter] = useState<Filter>("all");
  const [hovered, setHovered] = useState<string | null>(null);
  const [selected, setSelected] = useState<Product | null>(null);

  // In RegistryPage, after useState declarations:
  useEffect(() => {
    if (selected) {
      document.body.style.overflow = "hidden";
      document.body.style.overscrollBehavior = "none"; // ← add
    } else {
      document.body.style.overflow = "";
      document.body.style.overscrollBehavior = ""; // ← add
    }
    return () => {
      document.body.style.overflow = "";
      document.body.style.overscrollBehavior = "";
    };
  }, [selected]);

  const filtered =
    filter === "all" ? products : products.filter((p) => p.status === filter);

  return (
    <div
      style={{
        background: "var(--black)",
        minHeight: "100vh",
        animation: "pageIn .6s ease forwards",
      }}
    >
      {/* ── Hero ── */}
      <div
        style={{
          textAlign: "center",
          padding: "6rem 2rem 4rem",
          position: "relative",
          overflow: "hidden",
        }}
      >
        <div
          style={{
            position: "absolute",
            inset: 0,
            background:
              "radial-gradient(ellipse at 50% 80%, rgba(201,166,107,0.05) 0%, transparent 70%)",
            pointerEvents: "none",
          }}
        />
        <GSAPReveal>
          <div className="s-label-center" style={{ marginBottom: "1.2rem" }}>
            Case Files
          </div>
        </GSAPReveal>
        <GSAPReveal delay={0.1}>
          <h1
            className="heading-xl"
            style={{
              fontSize: "clamp(2rem,7vw,5.5rem)",
              color: "var(--white)",
              marginBottom: "1rem",
            }}
          >
            The{" "}
            <span
              style={{
                color: "var(--gold)",
                textShadow: "0 0 40px rgba(201,166,107,0.25)",
              }}
            >
              Registry
            </span>
          </h1>
        </GSAPReveal>
        <GSAPReveal delay={0.15}>
          <p
            className="body-serif"
            style={{
              fontSize: "1.2rem",
              color: "var(--white-dim)",
              fontStyle: "italic",
            }}
          >
            Every product. Every deployment. Every operation.
          </p>
        </GSAPReveal>

        {/* Filters */}
        <GSAPReveal delay={0.2}>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              gap: ".8rem",
              margin: "3rem 0 0",
              flexWrap: "wrap",
            }}
          >
            {filters.map(({ id, label }) => (
              <button
                key={id}
                onClick={() => setFilter(id)}
                style={{
                  fontFamily: "Montserrat,sans-serif",
                  fontSize: ".56rem",
                  letterSpacing: ".28em",
                  color: filter === id ? "var(--gold)" : "var(--white-dim)",
                  background: filter === id ? "rgba(201,166,107,0.06)" : "none",
                  border: `.5px solid ${filter === id ? "var(--gold)" : "rgba(201,166,107,0.15)"}`,
                  padding: ".65rem 1.8rem",
                  cursor: "none",
                  textTransform: "uppercase",
                  transition: "all .35s",
                  boxShadow:
                    filter === id ? "0 0 20px rgba(201,166,107,0.1)" : "none",
                }}
              >
                {label}
              </button>
            ))}
          </div>
        </GSAPReveal>
      </div>

      {/* ── Grid ── */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill,minmax(360px,1fr))",
          gap: "1.5px",
          background: "rgba(201,166,107,0.06)",
          maxWidth: 1240,
          margin: "0 auto",
        }}
      >
        {filtered.map((p, i) => {
          const isHov = hovered === p.id;
          const isCls = p.status === "classified";

          return (
            <GSAPReveal key={p.id} delay={i * 0.06}>
              <div
                onClick={() => setSelected(p)}
                onMouseEnter={() => setHovered(p.id)}
                onMouseLeave={() => setHovered(null)}
                style={{
                  background: isHov
                    ? isCls
                      ? "#0d0d0d"
                      : "#121008"
                    : p.accentColor
                      ? `linear-gradient(150deg,${p.accentColor},rgba(10,10,10,0.98))`
                      : "var(--black)",
                  padding: "2.6rem",
                  position: "relative",
                  overflow: "hidden",
                  cursor: "default",
                  transition: "all .45s cubic-bezier(0.25,0.46,0.45,0.94)",
                  transform: isHov ? "translateY(-2px)" : "none",
                  borderBottom: ".5px solid rgba(201,166,107,0.04)",
                  height: "100%",
                }}
              >
                {/* Top reveal line */}
                <div
                  style={{
                    position: "absolute",
                    top: 0,
                    left: 0,
                    right: 0,
                    height: 1.5,
                    background:
                      "linear-gradient(to right,transparent,var(--gold),transparent)",
                    transform: isHov ? "scaleX(1)" : "scaleX(0)",
                    transition:
                      "transform .55s cubic-bezier(0.25,0.46,0.45,0.94)",
                  }}
                />
                {/* Corner glow */}
                <div
                  style={{
                    position: "absolute",
                    top: -30,
                    right: -30,
                    width: 100,
                    height: 100,
                    background: `radial-gradient(circle,${isCls ? "rgba(80,80,80,0.06)" : "rgba(201,166,107,0.1)"},transparent 70%)`,
                    opacity: isHov ? 1 : 0,
                    transition: "opacity .4s",
                  }}
                />

                {/* Card header */}
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "flex-start",
                    marginBottom: "1.6rem",
                  }}
                >
                  <div
                    style={{
                      width: 46,
                      height: 46,
                      border: `.5px solid ${isCls ? "#1e1e1e" : "rgba(201,166,107,0.2)"}`,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      fontFamily: "Cinzel,serif",
                      fontSize: "1.1rem",
                      color: isCls
                        ? "#2a2a2a"
                        : isHov
                          ? "var(--gold)"
                          : "var(--gold-dim)",
                      transition: "all .4s",
                      background:
                        isHov && !isCls
                          ? "rgba(201,166,107,0.06)"
                          : "transparent",
                    }}
                  >
                    {p.icon}
                  </div>
                  <StatusBadge status={p.status} />
                </div>

                {/* File number */}
                <div
                  className="label-mono"
                  style={{
                    color: isCls ? "#1e1e1e" : "rgba(201,166,107,0.22)",
                    marginBottom: ".4rem",
                    fontSize: ".52rem",
                  }}
                >
                  File / {p.num}
                </div>

                {/* Name */}
                <div
                  className="heading-md"
                  style={{
                    fontSize: "1.28rem",
                    color: isHov
                      ? isCls
                        ? "#444"
                        : "var(--gold)"
                      : isCls
                        ? "#333"
                        : "var(--white)",
                    marginBottom: ".75rem",
                    transition: "color .35s",
                  }}
                >
                  {p.name}
                </div>

                {/* Description */}
                <p
                  className="body-serif"
                  style={{
                    fontSize: "1rem",
                    color: isCls ? "#2e2e2e" : "var(--white-dim)",
                    lineHeight: 1.85,
                    marginBottom: "1.5rem",
                  }}
                >
                  {p.fullDesc}
                </p>

                {/* Tags */}
                <div
                  style={{ display: "flex", gap: ".5rem", flexWrap: "wrap" }}
                >
                  {p.tags.map((tag) => (
                    <span
                      key={tag}
                      className="label-mono"
                      style={{
                        fontSize: ".48rem",
                        color: isCls
                          ? "#222"
                          : isHov
                            ? "var(--gold-dim)"
                            : "rgba(201,166,107,0.35)",
                        border: `.5px solid ${isCls ? "#1a1a1a" : isHov ? "rgba(201,166,107,0.3)" : "rgba(201,166,107,0.12)"}`,
                        padding: ".28rem .75rem",
                        transition: "all .35s",
                      }}
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Hover CTA */}
                <div
                  style={{
                    position: "absolute",
                    bottom: "2.2rem",
                    right: "2.2rem",
                    fontFamily: "Montserrat,sans-serif",
                    fontSize: ".52rem",
                    letterSpacing: ".2em",
                    color: isCls ? "#333" : "var(--gold)",
                    textTransform: "uppercase",
                    opacity: isHov ? 1 : 0,
                    transform: isHov ? "none" : "translateX(10px)",
                    transition: "all .35s",
                  }}
                >
                  {isCls ? "Restricted →" : "Open File →"}
                </div>
              </div>
            </GSAPReveal>
          );
        })}

        {selected && (
          <ProjectDetail product={selected} onClose={() => setSelected(null)} />
        )}
      </div>

      <Footer
        links={[
          { href: "/", label: "Sanctuary" },
          { href: "/ledger", label: "The Ledger" },
          { href: "/access", label: "System Access" },
        ]}
      />

      <style>{`
  .detail-grid { display:grid; grid-template-columns:1fr 1fr; gap:3rem; }
  .detail-label { font-family:'Montserrat',sans-serif; font-size:.46rem; letter-spacing:.22em; color:rgba(201,166,107,0.32); text-transform:uppercase; }
  @media(max-width:640px){ .detail-grid{ grid-template-columns:1fr!important; } }
  div[style*="maxHeight:'86vh'"]::-webkit-scrollbar { display:none; }
`}</style>
    </div>
  );
}
