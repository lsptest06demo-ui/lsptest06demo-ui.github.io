const P = "#7c3aed";
const B = "#1d4ed8";
const LP = "#a78bfa";
const LB = "#93c5fd";

const agents = [
  {
    unit: "Unit-01",
    icon: "bolt",
    name: "Vector.Alpha",
    desc: "Proprietary logistics optimization agent specializing in high-frequency spectral analysis and load balancing.",
    action: "Initialize",
    img: "https://lh3.googleusercontent.com/aida-public/AB6AXuC9sLXuUphyQjcXD47hPdi9WTgZmltMo38TxUUg-QGOaFJKgyHvHcWNUlEft9C43a7S6xwrbLgMLmUuRLKQYYvVBN5l3xYic9uGbpkeD5ai7uYmzaHNH-BjBpWSaK3vfRD0bXOM7TW5hf9Owf9zDPgz7mmZU0vgu1K_mVT1Rrlsc_P9e1a2JU6e4-0JUsqW6YiMgjo-dPkjA9oeJ75CFM5Snmgs3LrxrK6k8l4myraI17Wq_jL0j5oGz_8oxkST1scGZmnom5nwijE",
  },
  {
    unit: "Unit-02",
    icon: "security",
    name: "Shield.Gate",
    desc: "Autonomous defensive architecture designed for real-time threat mitigation and data integrity verification.",
    action: "Deploy",
    img: "https://lh3.googleusercontent.com/aida-public/AB6AXuBT-ebuH8ERvvsWTkTPyAgzXT6MW841jieoI-jo2xOYP8fxzhnKjdH-WjrpPqbQEqRUZVtyosEAdZHl0DaGFCa0kBjtAAa740aszbmGOQrAe1xtD_hu9n0QwrEqkOJ7ioT04n_tsRaSww_gihq-VXkvMX6xTGXAO7Hp81Fw4uHO5u5KQweaa211LlHZiS51cViKWnou99ksZt_Mm2ZezjcD1t30atssONrkwoT1alioVMlJhAJowN_30WBK63TwOFo81p3CoUsk32g",
  },
  {
    unit: "Unit-03",
    icon: "analytics",
    name: "Matrix.Sync",
    desc: "Multi-dimensional synchronization engine for cross-platform data synthesis and predictive modeling.",
    action: "Connect",
    img: "https://lh3.googleusercontent.com/aida-public/AB6AXuBSCASPyyTE9k8vUSEEQXYQA1t6VIw1DWimLpH4t4-Uj0VxDdldhYWVXWK24qGx5Sl5-c401DqOL_dNdD1mT7WSaPdY7x9cTuN9zVM83wBGCPiIoMP4zauW5YjB5JZPTaB2bDv1RGImVKoN6mtV5s8vMOuE1OYNategz7kjVRGCglvKeqJU3YPpbZnDpUinidoixmcJwndCc8GCyuIG2fmpcdoA15nUXfu3DgqNund0euOSX67XKRVDaemp-IqFYPaY6wtDNPe-QcM",
  },
];

const MyAgentsPage = () => {
  return (
    <main
      className="min-h-screen pt-24 md:pt-unit-xl md:ml-sidebar-width px-margin-mobile md:px-unit-xl pb-32 page-industrial"
      style={{ background: "#08080f" }}
    >
      {/* Header */}
      <header className="max-w-container-max mx-auto mb-unit-xl">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-unit-md mb-unit-lg">
          <div>
            <p className="font-label-mono text-label-mono uppercase mb-unit-xs tracking-widest" style={{ color: LP }}>
              Precision Engineering
            </p>
            <h1
              className="font-headline-lg-mobile md:font-headline-lg text-headline-lg-mobile md:text-headline-lg uppercase"
              style={{
                background: `linear-gradient(90deg, ${LB} 0%, ${LP} 60%, ${P} 100%)`,
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              Autonomous Agents
            </h1>
          </div>
          <div className="h-[1px] flex-1 mx-unit-lg hidden md:block mb-4" style={{ background: "#1e1e3a" }} />
          <div className="font-label-mono" style={{ color: "#2e2e5a" }}>
            [ COLLECTION_VER_04 ]
          </div>
        </div>
        <p className="max-w-2xl font-body-lg text-on-surface-variant">
          Highly calibrated neural architectures designed for specialized industrial workflows.
          Each agent is built with structural integrity and tactical focus.
        </p>
      </header>

      {/* Agents Grid */}
      <section className="max-w-container-max mx-auto grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-unit-lg">
        {agents.map(({ unit, icon, name, desc, action, img }) => (
          <div
            key={unit}
            className="agent-card group relative flex flex-col transition-all duration-500 hover:scale-[1.02]"
            style={{
              background: "#0a0a14",
              border: `1px solid transparent`,
              backgroundImage: `linear-gradient(#0a0a14, #0a0a14), linear-gradient(135deg, ${B}, ${P})`,
              backgroundOrigin: "border-box",
              backgroundClip: "padding-box, border-box",
            }}
          >
            {/* Card Header */}
            <div className="p-unit-md flex justify-between items-center" style={{ borderBottom: `1px solid #1e1e3a` }}>
              <span className="font-label-mono text-label-mono uppercase" style={{ color: LP }}>
                {unit}
              </span>
              <span
                className="material-symbols-outlined"
                style={{ fontVariationSettings: "'FILL' 1", color: P }}
              >
                {icon}
              </span>
            </div>

            {/* Image */}
            <div className="relative h-[280px] overflow-hidden" style={{ background: "#050510" }}>
              <div className="fish-overlay absolute inset-0 z-10 flex items-center justify-center">
                <span className="text-6xl">🐟💨</span>
              </div>
              <img
                className="w-full h-full object-cover opacity-50 group-hover:opacity-15 transition-opacity duration-700"
                src={img}
                alt={name}
              />
              {/* Blue/purple tint overlay */}
              <div
                className="absolute inset-0 pointer-events-none"
                style={{ background: `linear-gradient(180deg, rgba(29,78,216,0.15) 0%, rgba(124,58,237,0.25) 100%)` }}
              />
            </div>

            {/* Card Body */}
            <div className="p-unit-lg flex flex-col flex-1">
              <h3 className="font-headline-md text-headline-md uppercase mb-unit-sm" style={{ color: LB }}>
                {name}
              </h3>
              <p className="font-body-sm text-on-surface-variant mb-unit-xl flex-1">{desc}</p>
              <button
                className="w-full py-unit-md font-label-mono uppercase text-label-mono text-white transition-all"
                style={{ background: `linear-gradient(90deg, ${B}, ${P})` }}
                onMouseEnter={e => (e.currentTarget.style.opacity = "0.8")}
                onMouseLeave={e => (e.currentTarget.style.opacity = "1")}
              >
                {action}
              </button>
            </div>
          </div>
        ))}
      </section>

      {/* Status Bar */}
      <div
        className="max-w-container-max mx-auto mt-unit-xl p-unit-md flex flex-wrap justify-between items-center font-label-mono text-[10px] uppercase tracking-widest sticky bottom-8 z-40 backdrop-blur-md"
        style={{ border: `1px solid #1e1e3a`, background: "rgba(8,8,15,0.85)", color: LP }}
      >
        <div className="flex gap-unit-lg">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 animate-pulse" style={{ background: P }} />
            SYSTEMS_NOMINAL
          </div>
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 opacity-50" style={{ background: B }} />
            LATENCY: 4ms
          </div>
        </div>
        <div className="flex items-center gap-unit-md mt-4 md:mt-0">
          <span>CORE_LOAD: [||||||||||&nbsp;&nbsp;] 82%</span>
          <span className="material-symbols-outlined text-[14px]">memory</span>
        </div>
      </div>

      {/* Footer */}
      <footer
        className="w-full max-w-container-max mx-auto px-unit-xl py-unit-md flex flex-col md:flex-row justify-between items-center gap-unit-sm mt-unit-xl"
        style={{ borderTop: `1px solid #1e1e3a`, background: "#08080f" }}
      >
        <div className="font-display-jw text-body-sm" style={{ color: "#2e2e4a" }}>JANE WEI</div>
        <div className="font-label-mono text-label-mono uppercase text-on-surface-variant">
          © 2024 JANE WEI. BUILT TO LAST.
        </div>
        <div className="flex gap-unit-lg">
          {["WeChat", "Email", "LinkedIn"].map((link) => (
            <a
              key={link}
              href="#"
              className="font-label-mono text-label-mono uppercase text-on-surface-variant transition-colors"
              onMouseEnter={e => (e.currentTarget.style.color = LP)}
              onMouseLeave={e => (e.currentTarget.style.color = "")}
            >
              {link}
            </a>
          ))}
        </div>
      </footer>
    </main>
  );
};

export default MyAgentsPage;
