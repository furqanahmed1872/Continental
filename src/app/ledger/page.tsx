"use client";
import { timeline, years } from "@/lib/data";
import GSAPReveal from "@/components/GSAPReveal";
import Footer from "@/components/Footer";

const dotCfg = {
  deployed: {
    bg: "var(--gold)",
    shadow: "0 0 10px rgba(201,166,107,0.7)",
    pulse: false,
  },
  active: {
    bg: "var(--red)",
    shadow: "0 0 10px rgba(200,16,46,0.7)",
    pulse: true,
  },
  upcoming: { bg: "#282828", shadow: "none", pulse: false },
  classified: { bg: "#1e1e1e", shadow: "none", pulse: false },
};

const badgeCfg = {
  deployed: { color: "var(--gold)", border: "rgba(201,166,107,0.3)" },
  active: { color: "var(--red)", border: "rgba(200,16,46,0.3)" },
  upcoming: { color: "#555", border: "#2a2a2a" },
  classified: { color: "#444", border: "#222" },
};

export default function LedgerPage() {
  return (
    <div
      style={{
        background: "var(--black)",
        minHeight: "100vh",
        animation: "pageIn .6s ease forwards",
      }}
    >
      {/* Hero */}
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
              "radial-gradient(ellipse at 50% 90%, rgba(201,166,107,0.04) 0%, transparent 70%)",
            pointerEvents: "none",
          }}
        />
        <GSAPReveal>
          <div className="s-label-center" style={{ marginBottom: "1.2rem" }}>
            Project Timeline
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
              Ledger
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
            A record of every operation. Every victory. Every ongoing mission.
          </p>
        </GSAPReveal>

        {/* Legend */}
        <GSAPReveal delay={0.2}>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              gap: "2.5rem",
              marginTop: "2.5rem",
              flexWrap: "wrap",
            }}
          >
            {(
              [
                {
                  label: "Deployed",
                  color: "var(--gold)",
                  dot: "var(--gold)",
                  glow: "rgba(201,166,107,0.7)",
                },
                {
                  label: "Active",
                  color: "var(--red)",
                  dot: "var(--red)",
                  glow: "rgba(200,16,46,0.7)",
                },
                {
                  label: "Upcoming",
                  color: "#555",
                  dot: "#2a2a2a",
                  glow: "none",
                },
              ] as const
            ).map(({ label, color, dot }) => (
              <div
                key={label}
                style={{ display: "flex", alignItems: "center", gap: ".55rem" }}
              >
                <span
                  style={{
                    width: 7,
                    height: 7,
                    borderRadius: "50%",
                    background: dot,
                    display: "inline-block",
                    border: label === "Upcoming" ? ".5px solid #444" : "none",
                  }}
                />
                <span
                  className="label-mono"
                  style={{ color, fontSize: ".52rem" }}
                >
                  {label}
                </span>
              </div>
            ))}
          </div>
        </GSAPReveal>
      </div>

      {/* ── Horizontal Timeline ── */}
      <div style={{ padding: "2rem 0 5rem" }}>
        <div
          className="tl-scroll"
          style={{
            overflowX: "auto",
            overflowY: "hidden",
            scrollbarWidth: "none",
            msOverflowStyle: "none",
          }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              minWidth: "max-content",
              padding: "0 6rem",
              position: "relative",
              minHeight: 520,
            }}
          >
            {/* ── Central spine ── */}
            <div
              style={{
                position: "absolute",
                left: "6rem",
                right: "6rem",
                top: "50%",
                transform: "translateY(-50%)",
                height: 1,
                background:
                  "linear-gradient(to right, transparent, rgba(201,166,107,0.3) 4%, rgba(201,166,107,0.3) 96%, transparent)",
                pointerEvents: "none",
              }}
            />

            {/* Arrow cap */}
            <div
              style={{
                position: "absolute",
                top: "50%",
                right: "5.4rem",
                transform: "translateY(-50%)",
                width: 0,
                height: 0,
                borderTop: "5px solid transparent",
                borderBottom: "5px solid transparent",
                borderLeft: "8px solid rgba(201,166,107,0.35)",
              }}
            />

            {/* ── Year markers + entries ── */}
            {years.map((year, yi) => {
              const entries = timeline.filter((e) => e.year === year);

              return (
                <div
                  key={year}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    marginRight: yi < years.length - 1 ? "0" : "0",
                  }}
                >
                  {/* Year bubble on the spine */}
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "center",
                      position: "relative",
                      zIndex: 5,
                      margin: "0 2rem",
                      flexShrink: 0,
                    }}
                  >
                    {/* Diamond year marker */}
                    <div
                      style={{
                        width: 52,
                        height: 52,
                        border: "1px solid rgba(201,166,107,0.5)",
                        background: "var(--black)",
                        transform: "rotate(45deg)",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        boxShadow: "0 0 20px rgba(201,166,107,0.1)",
                        flexShrink: 0,
                      }}
                    >
                      <span
                        style={{
                          transform: "rotate(-45deg)",
                          fontFamily: "Cinzel,serif",
                          fontSize: ".58rem",
                          color: "var(--gold)",
                          letterSpacing: ".1em",
                          whiteSpace: "nowrap",
                        }}
                      >
                        {year.includes("·") ? year.split("·")[1].trim() : year}
                      </span>
                    </div>
                  </div>

                  {/* Entries for this year — alternating above/below */}
                  {entries.map((entry, idx) => {
                    const ds = dotCfg[entry.status];
                    const bs = badgeCfg[entry.status];
                    const above = idx % 2 === 0;

                    return (
                      <div
                        key={entry.id}
                        style={{
                          display: "flex",
                          flexDirection: "column",
                          alignItems: "center",
                          width: 210,
                          flexShrink: 0,
                          position: "relative",
                          zIndex: 3,
                          marginRight:
                            idx < entries.length - 1 ? "1.5rem" : "2rem",
                        }}
                      >
                        {/* Card above spine */}
                        {above ? (
                          <div
                            className="tl-card"
                            style={{
                              width: "100%",
                              padding: "1.1rem",
                              border: ".5px solid rgba(201,166,107,0.1)",
                              background: "rgba(201,166,107,0.02)",
                              marginBottom: ".4rem",
                              transition: "border-color .3s, background .3s",
                            }}
                          >
                            <div
                              style={{
                                fontFamily: "Montserrat,sans-serif",
                                fontSize: ".42rem",
                                letterSpacing: ".14em",
                                color: "rgba(201,166,107,0.35)",
                                marginBottom: ".35rem",
                                textTransform: "uppercase",
                              }}
                            >
                              {entry.date}
                            </div>
                            <div
                              style={{
                                fontFamily: "Cinzel,serif",
                                fontSize: ".7rem",
                                color: "var(--white)",
                                lineHeight: 1.4,
                                marginBottom: ".45rem",
                              }}
                            >
                              {entry.name}
                            </div>
                            <p
                              style={{
                                fontFamily: "Cormorant Garamond,serif",
                                fontSize: ".82rem",
                                color: "var(--white-dim)",
                                lineHeight: 1.6,
                                marginBottom: ".5rem",
                              }}
                            >
                              {entry.body.length > 90
                                ? entry.body.slice(0, 90) + "…"
                                : entry.body}
                            </p>
                            <span
                              style={{
                                fontFamily: "Montserrat,sans-serif",
                                fontSize: ".38rem",
                                letterSpacing: ".13em",
                                textTransform: "uppercase",
                                padding: ".2rem .6rem",
                                border: ".5px solid",
                                color: bs.color,
                                borderColor: bs.border,
                                display: "inline-block",
                              }}
                            >
                              {entry.status}
                            </span>
                          </div>
                        ) : (
                          /* Spacer placeholder so dot stays on spine */
                          <div style={{ flex: 1, minHeight: 170 }} />
                        )}

                        {/* Vertical connector — card to dot */}
                        <div
                          style={{
                            width: 0.5,
                            height: 28,
                            flexShrink: 0,
                            background: above
                              ? "linear-gradient(to bottom, rgba(201,166,107,0.2), rgba(201,166,107,0.5))"
                              : "linear-gradient(to top,   rgba(201,166,107,0.2), rgba(201,166,107,0.5))",
                          }}
                        />

                        {/* Dot sitting exactly on spine */}
                        <div
                          style={{
                            width: 20,
                            height: 20,
                            borderRadius: "50%",
                            flexShrink: 0,
                            border: `1.5px solid ${ds.bg}`,
                            background: "var(--black)",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            boxShadow: ds.shadow,
                            zIndex: 4,
                          }}
                        >
                          <div
                            style={{
                              width: 8,
                              height: 8,
                              borderRadius: "50%",
                              background: ds.bg,
                              animation: ds.pulse
                                ? "blink 1.5s infinite"
                                : undefined,
                            }}
                          />
                        </div>

                        {/* Vertical connector — dot to card */}
                        <div
                          style={{
                            width: 0.5,
                            height: 28,
                            flexShrink: 0,
                            background: above
                              ? "linear-gradient(to top,   rgba(201,166,107,0.2), rgba(201,166,107,0.5))"
                              : "linear-gradient(to bottom, rgba(201,166,107,0.2), rgba(201,166,107,0.5))",
                          }}
                        />

                        {/* Card below spine */}
                        {!above ? (
                          <div
                            className="tl-card"
                            style={{
                              width: "100%",
                              padding: "1.1rem",
                              border: ".5px solid rgba(201,166,107,0.1)",
                              background: "rgba(201,166,107,0.02)",
                              marginTop: ".4rem",
                              transition: "border-color .3s, background .3s",
                            }}
                          >
                            <div
                              style={{
                                fontFamily: "Montserrat,sans-serif",
                                fontSize: ".42rem",
                                letterSpacing: ".14em",
                                color: "rgba(201,166,107,0.35)",
                                marginBottom: ".35rem",
                                textTransform: "uppercase",
                              }}
                            >
                              {entry.date}
                            </div>
                            <div
                              style={{
                                fontFamily: "Cinzel,serif",
                                fontSize: ".7rem",
                                color: "var(--white)",
                                lineHeight: 1.4,
                                marginBottom: ".45rem",
                              }}
                            >
                              {entry.name}
                            </div>
                            <p
                              style={{
                                fontFamily: "Cormorant Garamond,serif",
                                fontSize: ".82rem",
                                color: "var(--white-dim)",
                                lineHeight: 1.6,
                                marginBottom: ".5rem",
                              }}
                            >
                              {entry.body.length > 90
                                ? entry.body.slice(0, 90) + "…"
                                : entry.body}
                            </p>
                            <span
                              style={{
                                fontFamily: "Montserrat,sans-serif",
                                fontSize: ".38rem",
                                letterSpacing: ".13em",
                                textTransform: "uppercase",
                                padding: ".2rem .6rem",
                                border: ".5px solid",
                                color: bs.color,
                                borderColor: bs.border,
                                display: "inline-block",
                              }}
                            >
                              {entry.status}
                            </span>
                          </div>
                        ) : (
                          <div style={{ flex: 1, minHeight: 170 }} />
                        )}
                      </div>
                    );
                  })}
                </div>
              );
            })}
          </div>
        </div>

        {/* Scroll hint */}
        <div style={{ textAlign: "center", marginTop: "1.5rem" }}>
          <span
            className="label-mono"
            style={{
              color: "rgba(201,166,107,0.18)",
              fontSize: ".45rem",
              letterSpacing: ".35em",
            }}
          >
            ← SCROLL TO TRAVERSE THE RECORD →
          </span>
        </div>
      </div>

      <Footer
        links={[
          { href: "/", label: "Sanctuary" },
          { href: "/registry", label: "The Registry" },
          { href: "/access", label: "System Access" },
        ]}
      />
      <style>{`
      .tl-scroll::-webkit-scrollbar { display: none; }
      .tl-card:hover { border-color: rgba(201,166,107,0.3) !important; background: rgba(201,166,107,0.05) !important; }
      .tl-item:hover .tl-name { color: var(--gold) !important; }
      `}</style>  
    </div>
  );
}
