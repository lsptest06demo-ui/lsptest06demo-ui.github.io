const P = "#7c3aed";   // purple
const B = "#1d4ed8";   // deep blue
const LP = "#a78bfa";  // light purple
const LB = "#93c5fd";  // light blue

const AboutPage = () => {
  return (
    <main
      className="md:ml-sidebar-width min-h-screen pt-20 pb-32 md:pt-0 page-industrial"
      style={{ background: "#08080f" }}
    >
      {/* Hero Branding */}
      <section className="max-w-container-max mx-auto px-margin-mobile md:px-unit-xl py-unit-xl">
        <div
          className="relative overflow-hidden h-[400px] md:h-[500px] p-unit-lg flex flex-col justify-end"
          style={{ border: `1px solid #1e1e3a` }}
        >
          {/* Industrial background image */}
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: "url('https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?w=1400&q=80')",
              backgroundSize: "cover",
              backgroundPosition: "center 40%",
              filter: "grayscale(50%) brightness(0.25)",
            }}
          />
          {/* Blue-purple gradient overlay + bottom fade for text readability */}
          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              background: `
                linear-gradient(180deg, rgba(8,8,15,0.3) 0%, rgba(8,8,15,0.85) 70%, rgba(8,8,15,0.98) 100%),
                radial-gradient(circle at 70% 30%, rgba(29,78,216,0.25) 0%, transparent 60%)
              `,
            }}
          />
          <div className="relative z-10">
            <p className="font-label-mono uppercase mb-2" style={{ color: LP }}>
              Portfolio Identity v2024
            </p>
            <h1
              className="font-display-jw text-headline-lg md:text-[80px] uppercase leading-none mb-4"
              style={{
                background: `linear-gradient(90deg, ${LB} 0%, ${LP} 60%, ${P} 100%)`,
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              Jane Wei
            </h1>
            <div className="flex flex-wrap gap-4 items-center">
              <span
                className="px-4 py-1 font-label-mono"
                style={{ background: "#0f0f1f", border: `1px solid #2e2e5a`, color: LP }}
              >
                PRECISION ENGINEERING
              </span>
              <span
                className="px-4 py-1 font-label-mono font-bold"
                style={{ background: `linear-gradient(90deg, ${B}, ${P})`, color: "#fff" }}
              >
                BUILT TO LAST
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* The Good & The Bad */}
      <section className="max-w-container-max mx-auto px-margin-mobile md:px-unit-xl mb-unit-xl">
        <div className="grid grid-cols-1 xl:grid-cols-2 gap-unit-xl">

          {/* THE GOOD PART */}
          <div className="space-y-unit-md">
            <div className="flex items-center gap-4">
              <div className="h-12 w-2" style={{ background: `linear-gradient(180deg, ${LB}, ${P})` }} />
              <h2 className="font-headline-lg text-white uppercase tracking-tighter">The Good Part</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-unit-sm">
              {/* Main card */}
              <div
                className="md:col-span-2 group relative p-unit-lg transition-colors overflow-hidden"
                style={{ background: "#0d0d1f", border: `1px solid #1e1e3a` }}
                onMouseEnter={e => (e.currentTarget.style.borderColor = P)}
                onMouseLeave={e => (e.currentTarget.style.borderColor = "#1e1e3a")}
              >
                <div className="flex justify-between items-start mb-unit-xl">
                  <div>
                    <span className="font-label-mono" style={{ color: LB }}>01 / ARCHITECTURE</span>
                    <h3 className="font-headline-md mt-2 text-white">Systems that breathe.</h3>
                  </div>
                  <span className="material-symbols-outlined text-4xl group-hover:scale-110 transition-transform" style={{ color: LP }}>
                    bolt
                  </span>
                </div>
                <p className="font-body-lg text-on-surface-variant">
                  For over a decade, I've specialized in building digital infrastructures that treat
                  code like structural steel. If it doesn't scale effortlessly, it wasn't engineered correctly.
                </p>
                <div className="mt-8 flex gap-8">
                  {[["124", "Projects"], ["99.9%", "Uptime"]].map(([val, lbl]) => (
                    <div key={lbl}>
                      <div className="text-headline-md font-bold" style={{ color: LP }}>{val}</div>
                      <div className="font-label-mono text-xs opacity-50 uppercase">{lbl}</div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Image card */}
              <div className="h-64 relative overflow-hidden" style={{ border: `1px solid #1e1e3a` }}>
                <img
                  className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuDSmIZm3KyQoqSU2Z349rr3asVjAvwg4pV6kcUY9gs09VJWvw_G5bC-N_1NN6E8IBsGiWdq2vYStVFCKesVfa-tM9uGdzMDYXswT-xtgVyphBo6jR1EXs6VXqzPAgZIZxFJUWHx9Hj0e-XnwyLNLhq4Y3tL20A7m7qeMTaK-cmCQCt3vsO3ZFBQcM0nM0q8NYJkIPD20pCX7GZqjwy2YpYBdWScGTbe0L4xSKUcBSTrL4EUk0RGAVshbcC8zgtzZUoxktAEpVeqy1Q"
                  alt="Precision engineering"
                />
                <div className="absolute inset-0 pointer-events-none" style={{ background: "rgba(29,78,216,0.1)" }} />
              </div>

              {/* Precision card */}
              <div className="p-unit-lg flex flex-col justify-between" style={{ background: "#0d0d1f", border: `1px solid #1e1e3a` }}>
                <span className="material-symbols-outlined text-4xl mb-4" style={{ color: P }}>
                  precision_manufacturing
                </span>
                <p className="font-body-sm text-on-surface-variant">
                  Every pixel is measured. Every interaction is intentional. Functional clarity over fluff.
                </p>
              </div>

              {/* Recognition banner */}
              <div
                className="md:col-span-2 p-unit-lg flex flex-col md:flex-row justify-between items-center group transition-all cursor-pointer"
                style={{ background: `linear-gradient(90deg, ${B}, ${P})`, border: `1px solid ${P}` }}
              >
                <div className="text-white">
                  <span className="font-label-mono text-xs block mb-1 opacity-70">RECOGNITION</span>
                  <h4 className="font-headline-md leading-tight">Design Engineering Excellence '23</h4>
                </div>
                <button
                  className="font-label-mono px-6 py-3 uppercase text-sm transition-all mt-4 md:mt-0"
                  style={{ background: "#08080f", color: LP, border: `1px solid ${LP}` }}
                >
                  Case Study
                </button>
              </div>
            </div>
          </div>

          {/* THE BAD PART */}
          <div className="space-y-unit-md">
            <div className="flex items-center gap-4">
              <div className="h-12 w-2" style={{ background: `linear-gradient(180deg, ${B}, #0ea5e9)` }} />
              <h2 className="font-headline-lg text-white uppercase tracking-tighter">The Bad Part</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-unit-sm">
              {/* Failure card */}
              <div
                className="p-unit-lg flex flex-col"
                style={{ background: "#0a0a14", border: `1px solid #1e1e3a`, borderTop: `4px solid ${B}` }}
              >
                <span className="font-label-mono uppercase text-xs" style={{ color: LB }}>Failure Analysis</span>
                <h3 className="font-headline-md mt-4 mb-4 text-white">Zero Compromise.</h3>
                <p className="font-body-sm text-on-surface-variant flex-1">
                  My insistence on precision often clashes with "move fast and break things."
                  I have killed functional products because they lacked structural integrity. A costly flaw.
                </p>
              </div>

              {/* Load metrics */}
              <div className="p-unit-lg relative overflow-hidden" style={{ background: "#0d0d1f", border: `1px solid #1e1e3a` }}>
                <h3 className="font-label-mono text-white mb-6 uppercase tracking-widest opacity-40">Load Metrics</h3>
                <div className="space-y-6 relative z-10">
                  {[["SOCIAL BATTERY", 15, B], ["PERFECTIONISM TAX", 85, P]].map(([lbl, pct, color]) => (
                    <div key={lbl as string} className="border-l-2 pl-4" style={{ borderColor: "#1e1e3a" }}>
                      <span className="font-label-mono text-[10px] block text-on-surface-variant opacity-60">{lbl}</span>
                      <div className="h-1.5 w-full mt-2" style={{ background: "#1a1a2e" }}>
                        <div className="h-full" style={{ width: `${pct}%`, background: color as string }} />
                      </div>
                    </div>
                  ))}
                </div>
                <span className="material-symbols-outlined absolute -right-4 -bottom-4 text-8xl opacity-5">warning</span>
              </div>

              {/* Hard truths */}
              <div className="md:col-span-2 p-unit-lg" style={{ background: "#0d0d1f", border: `1px solid #1e1e3a` }}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                  <div>
                    <h4 className="font-label-mono uppercase mb-4 text-xs" style={{ color: LP }}>Hard Truths</h4>
                    <ul className="space-y-3 font-body-sm text-on-surface-variant">
                      {[
                        "Will argue font weights.",
                        "Rejects standard frameworks.",
                        "Notifications permanently muted.",
                      ].map((t) => (
                        <li key={t} className="flex items-start gap-2">
                          <span style={{ color: LB }} className="font-bold">/</span> {t}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="opacity-25">
                    <blockquote className="font-display-jw text-headline-md leading-none uppercase italic text-center text-white">
                      "Built to last, <br /> even if it hurts."
                    </blockquote>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Timeline */}
      <section className="max-w-container-max mx-auto px-margin-mobile md:px-unit-xl mb-unit-xl">
        <div className="py-unit-xl flex flex-col lg:flex-row gap-unit-xl" style={{ borderTop: `1px solid #1e1e3a`, borderBottom: `1px solid #1e1e3a` }}>
          <div className="lg:w-1/4">
            <h2 className="font-label-mono sticky top-unit-lg uppercase tracking-widest" style={{ color: LP }}>
              TECHNICAL LINEAGE
            </h2>
          </div>
          <div className="lg:w-3/4 grid grid-cols-1 md:grid-cols-3 gap-12">
            {[
              { period: "2020 — PRESENT", role: "Lead Architect", desc: "Developing monolithic systems for industrial automation clients. Ensuring peak performance under critical load conditions." },
              { period: "2016 — 2020", role: "Product Engineer", desc: "Designing physical interface paradigms for high-frequency trading terminals. Low latency UX for high-stakes environments." },
              { period: "EARLY DAYS", role: "Systems Dev", desc: "Breaking and rebuilding things until they finally made sense. Foundational exposure to assembly and low-level kernel optimization." },
            ].map(({ period, role, desc }) => (
              <div key={role} className="space-y-4">
                <div className="font-label-mono text-xs opacity-40" style={{ color: LB }}>{period}</div>
                <h4 className="font-headline-md text-white">{role}</h4>
                <p className="font-body-sm text-on-surface-variant">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="w-full max-w-container-max mx-auto px-unit-xl py-unit-md flex flex-col md:flex-row justify-between items-center gap-unit-sm" style={{ borderTop: `1px solid #1e1e3a` }}>
        <div className="font-display-jw text-body-sm" style={{ color: "#2e2e4a" }}>JW</div>
        <div className="font-label-mono text-[10px] uppercase text-on-surface-variant">© 2024 JANE WEI. BUILT TO LAST.</div>
        <div className="flex gap-unit-lg">
          {["WeChat", "Email", "LinkedIn"].map((link) => (
            <a key={link} href="#" className="font-label-mono text-[10px] uppercase text-on-surface-variant transition-colors"
              onMouseEnter={e => (e.currentTarget.style.color = LP)}
              onMouseLeave={e => (e.currentTarget.style.color = "")}
            >{link}</a>
          ))}
        </div>
      </footer>
    </main>
  );
};

export default AboutPage;
