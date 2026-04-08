"use client";
import EntryGate from "@/components/EntryGate";
import Footer from "@/components/Footer";
import GSAPReveal from "@/components/GSAPReveal";
import ParallaxSection from "@/components/ParallaxSection";
import StatusBadge from "@/components/StatusBadge";
import Link from "next/link";
import { Product, products } from "@/lib/products";

const featured = products.slice(0, 3);

const stats = [
  { n: "24+", l: "Products Deployed" },
  { n: "100%", l: "Client Satisfaction" },
  { n: "06", l: "Active Builds" },
  { n: "∞", l: "No Compromises" },
];

export default function HomePage() {
  function setSelected(p: Product): void {
    throw new Error("Function not implemented.");
  }

  return (
    <>
      <EntryGate />

      {/* ═══════════ HERO ═══════════ */}
      <section
        style={{
          minHeight: "100vh",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          textAlign: "center",
          padding: "7rem 2rem 4rem",
          position: "relative",
          overflow: "hidden",
        }}
      >
        {/* Background radial */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            background:
              "radial-gradient(ellipse at 50% 60%, rgba(201,166,107,0.05) 0%, transparent 65%)",
            pointerEvents: "none",
          }}
        />

        {/* Expanding rings */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            pointerEvents: "none",
            overflow: "hidden",
          }}
        >
          {[380, 640, 920, 1260].map((sz, i) => (
            <span
              key={sz}
              style={{
                position: "absolute",
                top: "50%",
                left: "50%",
                width: sz,
                height: sz,
                border: `0.5px solid rgba(201,166,107,${0.06 - i * 0.01})`,
                borderRadius: "50%",
                transform: "translate(-50%,-50%) scale(0)",
                animation: `ringExpand 3s ease-out ${i * 0.35 + 0.2}s forwards`,
                display: "block",
              }}
            />
          ))}
        </div>

        {/* Corner decorations */}
        <div
          style={{
            position: "absolute",
            top: "5rem",
            left: "3rem",
            width: 40,
            height: 40,
            borderTop: ".5px solid rgba(201,166,107,0.2)",
            borderLeft: ".5px solid rgba(201,166,107,0.2)",
          }}
        />
        <div
          style={{
            position: "absolute",
            top: "5rem",
            right: "3rem",
            width: 40,
            height: 40,
            borderTop: ".5px solid rgba(201,166,107,0.2)",
            borderRight: ".5px solid rgba(201,166,107,0.2)",
          }}
        />
        <div
          style={{
            position: "absolute",
            bottom: "4rem",
            left: "3rem",
            width: 40,
            height: 40,
            borderBottom: ".5px solid rgba(201,166,107,0.2)",
            borderLeft: ".5px solid rgba(201,166,107,0.2)",
          }}
        />
        <div
          style={{
            position: "absolute",
            bottom: "4rem",
            right: "3rem",
            width: 40,
            height: 40,
            borderBottom: ".5px solid rgba(201,166,107,0.2)",
            borderRight: ".5px solid rgba(201,166,107,0.2)",
          }}
        />

        {/* Eyebrow */}
        <div
          style={{
            fontFamily: "Montserrat,sans-serif",
            fontSize: ".55rem",
            letterSpacing: ".55em",
            color: "var(--gold-dim)",
            textTransform: "uppercase",
            marginBottom: "2.2rem",
            animation: "riseIn 1s ease .3s both",
          }}
        >
          Est. MMXXIII — New York · London · Osaka · Dubai
        </div>

        {/* Title */}
        <ParallaxSection speed={0.05}>
          <h1
            className="heading-xl text-shimmer"
            style={{
              fontSize: "clamp(3.5rem,13vw,10rem)",
              color: "var(--white)",
              animation: "riseIn 1.2s ease .5s both",
            }}
          >
            THE
            <br />
            <span
              style={{
                WebkitTextFillColor: "initial",
                color: "var(--gold)",
                textShadow: "0 0 60px rgba(201,166,107,0.3)",
              }}
            >
              CONTINENTAL
            </span>
          </h1>
        </ParallaxSection>

        {/* Divider */}
        <div
          className="gold-divider"
          style={{
            margin: "2.5rem auto",
            animation: "riseIn 1s ease .7s both",
            width: 220,
          }}
        >
          <div className="gold-divider-line" style={{ flex: 1 }} />
          <div className="gold-divider-diamond" />
          <div className="gold-divider-line" style={{ flex: 1 }} />
        </div>

        {/* Tagline */}
        <p
          style={{
            fontFamily: "Cormorant Garamond,serif",
            fontSize: "clamp(1rem,2.5vw,1.5rem)",
            color: "var(--white-dim)",
            fontStyle: "italic",
            fontWeight: 300,
            letterSpacing: ".1em",
            maxWidth: 520,
            margin: "0 auto 3rem",
            lineHeight: 1.65,
            animation: "riseIn 1s ease .9s both",
          }}
        >
          "Where precision meets power.
          <br />
          Sanctuary for digital excellence."
        </p>

        {/* CTAs */}
        <div
          style={{
            display: "flex",
            gap: "1.5rem",
            justifyContent: "center",
            flexWrap: "wrap",
            animation: "riseIn 1s ease 1.1s both",
          }}
        >
          <Link href="/registry" className="btn-gold">
            View the Registry
          </Link>
          <Link href="/access" className="btn-outline">
            Request Access
          </Link>
        </div>

        {/* Scroll hint */}
        <div
          style={{
            position: "absolute",
            bottom: "2rem",
            left: "50%",
            transform: "translateX(-50%)",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: ".4rem",
          }}
        >
          <span
            style={{
              fontFamily: "Montserrat,sans-serif",
              fontSize: ".48rem",
              letterSpacing: ".4em",
              color: "rgba(201,166,107,0.3)",
              textTransform: "uppercase",
            }}
          >
            Scroll
          </span>
          <div
            style={{
              width: 0.5,
              height: 50,
              background:
                "linear-gradient(to bottom,var(--gold-dim),transparent)",
              animation: "scrollLine 2s ease-in-out infinite",
            }}
          />
        </div>
      </section>

      {/* ═══════════ ORG INTRO ═══════════ */}
      <section
        style={{ padding: "8rem 5rem", maxWidth: 1240, margin: "0 auto" }}
      >
        <GSAPReveal>
          <div className="s-label">The Organization</div>
        </GSAPReveal>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1.2fr 1fr",
            gap: "7rem",
            alignItems: "center",
          }}
          className="intro-grid"
        >
          <div>
            <GSAPReveal direction="left" delay={0.1}>
              <h2
                className="heading-lg"
                style={{
                  fontSize: "clamp(1.6rem,3.5vw,2.9rem)",
                  color: "var(--white)",
                  lineHeight: 1.2,
                  marginBottom: "1.8rem",
                }}
              >
                We build digital worlds that operate by their own{" "}
                <em style={{ color: "var(--gold)", fontStyle: "normal" }}>
                  rules
                </em>
              </h2>
            </GSAPReveal>
            <GSAPReveal direction="left" delay={0.2}>
              <p
                className="body-serif"
                style={{
                  fontSize: "1.1rem",
                  color: "var(--white-dim)",
                  marginBottom: "1.2rem",
                }}
              >
                The Continental is not a studio. Not an agency. It is a system —
                built for those who demand precision, power, and permanence in
                their digital presence.
              </p>
            </GSAPReveal>
            <GSAPReveal direction="left" delay={0.3}>
              <p
                className="body-serif"
                style={{
                  fontSize: "1.1rem",
                  color: "var(--white-dim)",
                  marginBottom: "2.8rem",
                }}
              >
                Every product we forge is a sanctuary of its own. Engineered
                with intent. Delivered without compromise. Our code is our coin.
              </p>
            </GSAPReveal>

            {/* Stats */}
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "1fr 1fr",
                gap: "1px",
                background: "rgba(201,166,107,0.07)",
              }}
            >
              {stats.map(({ n, l }, i) => (
                <GSAPReveal key={l} delay={0.1 * i}>
                  <div
                    className="glass glass-hover"
                    style={{ padding: "1.4rem 1.6rem", cursor: "default" }}
                  >
                    <span
                      style={{
                        fontFamily: "Cinzel,serif",
                        fontSize: "2rem",
                        color: "var(--gold)",
                        display: "block",
                        marginBottom: ".2rem",
                      }}
                    >
                      {n}
                    </span>
                    <span
                      className="label-mono"
                      style={{ color: "var(--white-dim)" }}
                    >
                      {l}
                    </span>
                  </div>
                </GSAPReveal>
              ))}
            </div>
          </div>

          {/* Visual frame */}
          <GSAPReveal
            direction="right"
            delay={0.2}
            className="intro-visual-frame"
          >
            <div
              className="glass"
              style={{
                aspectRatio: "3/4",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                position: "relative",
                overflow: "hidden",
                background:
                  "linear-gradient(145deg,rgba(20,15,8,0.8) 0%,rgba(10,10,10,0.9) 60%,rgba(20,8,10,0.8) 100%)",
              }}
            >
              <div
                style={{
                  position: "absolute",
                  top: "1.5rem",
                  left: "50%",
                  transform: "translateX(-50%)",
                  fontFamily: "Cinzel,serif",
                  fontSize: ".48rem",
                  letterSpacing: ".5em",
                  color: "rgba(201,166,107,0.12)",
                  whiteSpace: "nowrap",
                }}
              >
                THE CONTINENTAL
              </div>
              <div
                style={{
                  position: "absolute",
                  inset: "1.8rem",
                  border: ".5px solid rgba(201,166,107,0.06)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <div
                  style={{
                    animation:
                      "coinPulse 3s ease infinite float 6s ease-in-out infinite",
                  }}
                >
                  <div
                    className="animate-coin-pulse animate-float"
                    style={{
                      width: 120,
                      height: 120,
                      border: "1px solid var(--gold-dim)",
                      borderRadius: "50%",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      position: "relative",
                    }}
                  >
                    <div
                      style={{
                        position: "absolute",
                        inset: 10,
                        border: ".5px solid rgba(201,166,107,0.2)",
                        borderRadius: "50%",
                      }}
                    />
                    <span
                      style={{
                        fontFamily: "Cinzel,serif",
                        fontSize: "2.6rem",
                        color: "var(--gold)",
                        fontWeight: 700,
                      }}
                    >
                      C
                    </span>
                  </div>
                </div>
              </div>
              <div
                style={{
                  position: "absolute",
                  bottom: "1.5rem",
                  left: "50%",
                  transform: "translateX(-50%)",
                  fontFamily: "Montserrat,sans-serif",
                  fontSize: ".42rem",
                  letterSpacing: ".38em",
                  color: "rgba(201,166,107,0.14)",
                  whiteSpace: "nowrap",
                }}
              >
                DIGITAL SYSTEMS
              </div>
            </div>
          </GSAPReveal>
        </div>
      </section>

      {/* ═══════════ FEATURED PRODUCTS ═══════════ */}
      <section
        style={{
          background: "var(--black-2)",
          borderTop: ".5px solid rgba(201,166,107,0.07)",
          borderBottom: ".5px solid rgba(201,166,107,0.07)",
          padding: "7rem 5rem",
        }}
      >
        <div style={{ maxWidth: 1240, margin: "0 auto" }}>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "flex-end",
              marginBottom: "3.5rem",
              flexWrap: "wrap",
              gap: "1.5rem",
            }}
          >
            <GSAPReveal direction="left">
              <div>
                <div className="s-label" style={{ marginBottom: ".8rem" }}>
                  The Registry
                </div>
                <h2
                  className="heading-lg"
                  style={{
                    fontSize: "clamp(1.4rem,3vw,2.3rem)",
                    color: "var(--white)",
                  }}
                >
                  Featured Case Files
                </h2>
                <p
                  style={{
                    fontFamily: "Cormorant Garamond,serif",
                    fontSize: "1rem",
                    color: "var(--white-dim)",
                    fontStyle: "italic",
                    marginTop: ".3rem",
                  }}
                >
                  Select deployments from the vault
                </p>
              </div>
            </GSAPReveal>
            <GSAPReveal direction="right">
              <Link
                href="/registry"
                className="btn-outline"
                style={{ textDecoration: "none", whiteSpace: "nowrap" }}
              >
                View All Files →
              </Link>
            </GSAPReveal>
          </div>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(3,1fr)",
              gap: "1.5px",
              background: "rgba(201,166,107,0.06)",
            }}
          >
            {featured.map((p, i) => (
              <GSAPReveal key={p.id} delay={i * 0.12}>
                <div
                  className="card-hover-reveal glass-hover"
                  style={{
                    textDecoration: "none",
                    display: "block",
                    cursor: "pointer",
                  }}
                  onClick={() => setSelected(p)}
                >
                  <div
                    className="card-hover-reveal glass-hover"
                    style={{
                      background: p.accentColor
                        ? `linear-gradient(135deg, ${p.accentColor}, rgba(10,10,10,0.95))`
                        : "var(--black-2)",
                      padding: "2.5rem",
                      position: "relative",
                      overflow: "hidden",
                      height: "100%",
                      cursor: "none",
                      borderTop: ".5px solid rgba(201,166,107,0.06)",
                      transition: "all .4s",
                    }}
                    onMouseEnter={(e) => {
                      const el = e.currentTarget as HTMLDivElement;
                      el.style.background = "#141414";
                      el.style.transform = "translateY(-3px)";
                      const nm = el.querySelector(".pname") as HTMLElement;
                      const ar = el.querySelector(".parrow") as HTMLElement;
                      if (nm) nm.style.color = "var(--gold)";
                      if (ar) {
                        ar.style.opacity = "1";
                        ar.style.transform = "none";
                      }
                    }}
                    onMouseLeave={(e) => {
                      const el = e.currentTarget as HTMLDivElement;
                      el.style.background = p.accentColor
                        ? `linear-gradient(135deg,${p.accentColor},rgba(10,10,10,0.95))`
                        : "var(--black-2)";
                      el.style.transform = "";
                      const nm = el.querySelector(".pname") as HTMLElement;
                      const ar = el.querySelector(".parrow") as HTMLElement;
                      if (nm) nm.style.color = "var(--white)";
                      if (ar) {
                        ar.style.opacity = "0";
                        ar.style.transform = "translateX(8px)";
                      }
                    }}
                  >
                    <StatusBadge status={p.status} />
                    <div
                      className="label-mono"
                      style={{
                        color: "rgba(201,166,107,0.25)",
                        margin: ".8rem 0 .4rem",
                      }}
                    >
                      File / {p.num}
                    </div>
                    <div
                      className="pname heading-md"
                      style={{
                        fontSize: "1.25rem",
                        color: "var(--white)",
                        marginBottom: ".75rem",
                        transition: "color .3s",
                      }}
                    >
                      {p.name}
                    </div>
                    <p
                      className="body-serif"
                      style={{
                        fontSize: "1rem",
                        color: "var(--white-dim)",
                        lineHeight: 1.8,
                      }}
                    >
                      {p.shortDesc}
                    </p>
                    <div
                      className="parrow"
                      style={{
                        position: "absolute",
                        bottom: "2.2rem",
                        right: "2.2rem",
                        color: "var(--gold-dim)",
                        opacity: 0,
                        transform: "translateX(8px)",
                        transition: "all .35s",
                        fontSize: "1.1rem",
                      }}
                    >
                      →
                    </div>
                  </div>
                </div>
              </GSAPReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════ QUOTE ═══════════ */}
      <section
        style={{
          padding: "10rem 4rem",
          textAlign: "center",
          position: "relative",
          overflow: "hidden",
        }}
      >
        <div
          style={{
            position: "absolute",
            inset: 0,
            background:
              "radial-gradient(ellipse at center, rgba(201,166,107,0.04) 0%, transparent 70%)",
            pointerEvents: "none",
          }}
        />
        <div
          style={{
            fontFamily: "Cinzel,serif",
            fontSize: "12rem",
            color: "rgba(201,166,107,0.04)",
            lineHeight: 1,
            position: "absolute",
            top: "2rem",
            left: "50%",
            transform: "translateX(-50%)",
            pointerEvents: "none",
            userSelect: "none",
          }}
        >
          "
        </div>
        <GSAPReveal>
          <p
            style={{
              fontFamily: "Cormorant Garamond,serif",
              fontSize: "clamp(1.3rem,3.5vw,2.5rem)",
              color: "var(--white)",
              fontStyle: "italic",
              fontWeight: 300,
              maxWidth: 780,
              margin: "0 auto 1.8rem",
              lineHeight: 1.55,
              position: "relative",
            }}
          >
            Every great system runs on rules. Ours is simple — build nothing
            ordinary, accept nothing less than extraordinary.
          </p>
          <div className="label-mono" style={{ color: "var(--gold-dim)" }}>
            The Continental — Code of Digital Conduct
          </div>
        </GSAPReveal>
      </section>

      {/* ═══════════ TECH STRIP ═══════════ */}
      <div
        style={{
          borderTop: ".5px solid rgba(201,166,107,0.08)",
          borderBottom: ".5px solid rgba(201,166,107,0.08)",
          padding: "1.5rem 5rem",
          overflow: "hidden",
          background: "rgba(5,4,3,0.5)",
        }}
      >
        <div
          style={{
            display: "flex",
            gap: "3rem",
            alignItems: "center",
            flexWrap: "wrap",
            justifyContent: "center",
          }}
        >
          {[
            "Next.js 15",
            "React 19",
            "TypeScript",
            "Supabase",
            "OpenAI",
            "n8n",
            "GoHighLevel",
            "WhatsApp API",
            "HeyGen",
            "Framer Motion",
          ].map((t) => (
            <span
              key={t}
              className="label-mono"
              style={{
                color: "rgba(201,166,107,0.2)",
                whiteSpace: "nowrap",
                fontSize: ".5rem",
              }}
            >
              {t}
            </span>
          ))}
        </div>
      </div>

      <Footer />

      <style>{`
        .intro-grid { display:grid; grid-template-columns:1.2fr 1fr; gap:7rem; align-items:center; }
        @media(max-width:900px){
          .intro-grid{grid-template-columns:1fr!important;gap:3rem!important;}
          .intro-visual-frame{display:none!important;}
          section[style*="8rem 5rem"]{padding:5rem 1.5rem!important;}
          section[style*="7rem 5rem"]{padding:4rem 1.5rem!important;}
          section[style*="10rem 4rem"]{padding:6rem 1.5rem!important;}
          div[style*="repeat(3,1fr)"]{grid-template-columns:1fr!important;}
          div[style*="7rem 5rem"]{padding:4rem 1.5rem!important;}
          div[style*="1.5rem 5rem"]{padding:1.5rem!important;}
        }
      `}</style>
    </>
  );
}
