const P = "#7c3aed";
const B = "#1d4ed8";
const LP = "#a78bfa";
const LB = "#93c5fd";

const ContactPage = () => {
  return (
    <main
      className="min-h-screen pt-16 md:pt-0 md:ml-sidebar-width flex flex-col page-industrial"
      style={{ background: "#08080f" }}
    >
      <div className="max-w-container-max mx-auto w-full px-margin-mobile md:px-unit-xl py-unit-xl flex-grow">
        {/* Hero Header */}
        <section className="mb-unit-xl pl-unit-md max-w-4xl" style={{ borderLeft: `3px solid ${P}` }}>
          <h1
            className="font-headline-lg text-headline-lg mb-unit-xs tracking-tighter"
            style={{
              background: `linear-gradient(90deg, ${LB} 0%, ${LP} 60%, ${P} 100%)`,
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}
          >
            ESTABLISH
            <br />
            CONNECTION
          </h1>
          <p className="font-label-mono uppercase tracking-[0.2em]" style={{ color: LP, opacity: 0.7 }}>
            PRECISION ENGINEERING REQUIRES DIRECT COMMUNICATION.
          </p>
        </section>

        {/* Contact Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-unit-md mb-unit-xl">

          {/* Email Block */}
          <div
            className="md:col-span-8 group p-unit-lg flex flex-col justify-between min-h-[360px] transition-all"
            style={{ background: "#0a0a14", border: `1px solid #1e1e3a` }}
            onMouseEnter={e => (e.currentTarget.style.borderColor = P)}
            onMouseLeave={e => (e.currentTarget.style.borderColor = "#1e1e3a")}
          >
            <div>
              <span className="font-label-mono uppercase mb-unit-sm block" style={{ color: LP }}>
                01 / Electronic Mail
              </span>
              <h2
                className="font-headline-lg text-headline-lg-mobile md:text-headline-lg break-all"
                style={{ color: LB }}
              >
                HELLO@JANEWEI.COM
              </h2>
            </div>
            <div className="flex justify-between items-end">
              <p className="font-body-sm text-on-surface-variant max-w-xs">
                Direct inbox monitored 0900-1800 CST. Standard response time within 24 operational hours.
              </p>
              <button
                className="font-label-mono uppercase flex items-center gap-2 px-unit-md py-unit-sm transition-all"
                style={{ background: `linear-gradient(90deg, ${B}, ${P})`, color: "#fff" }}
              >
                <span>Copy</span>
                <span className="material-symbols-outlined text-sm">content_copy</span>
              </button>
            </div>
          </div>

          {/* WeChat Block */}
          <div
            className="md:col-span-4 group p-unit-lg flex flex-col justify-between min-h-[360px] transition-all"
            style={{ background: "#0a0a14", border: `1px solid #1e1e3a` }}
            onMouseEnter={e => (e.currentTarget.style.borderColor = LP)}
            onMouseLeave={e => (e.currentTarget.style.borderColor = "#1e1e3a")}
          >
            <div>
              <span className="font-label-mono uppercase mb-unit-sm block" style={{ color: LP }}>
                02 / WeChat ID
              </span>
              <h2 className="font-headline-md text-headline-md" style={{ color: LB }}>
                JANEWEI_PRO
              </h2>
            </div>
            <div className="flex flex-col gap-unit-md items-center md:items-start">
              <div
                className="w-32 h-32 flex items-center justify-center relative overflow-hidden"
                style={{ border: `1px solid #2e2e5a`, background: "#0d0d1f" }}
              >
                <div
                  className="absolute inset-2 flex items-center justify-center"
                  style={{ border: `1px dashed #2e2e5a` }}
                >
                  <span className="material-symbols-outlined text-4xl" style={{ color: P, opacity: 0.4 }}>
                    qr_code_2
                  </span>
                </div>
              </div>
              <p className="font-label-mono text-[10px] uppercase leading-tight" style={{ color: LP, opacity: 0.6 }}>
                SCAN FOR INSTANT<br />MESSAGING INTERFACE
              </p>
            </div>
          </div>

          {/* Physical Node */}
          <div
            className="md:col-span-12 p-unit-lg relative overflow-hidden transition-all"
            style={{ background: "#0a0a14", border: `1px solid #1e1e3a` }}
          >
            <div
              className="absolute inset-0 pointer-events-none"
              style={{ background: `radial-gradient(circle at 80% 50%, rgba(29,78,216,0.08) 0%, transparent 70%)` }}
            />
            <div className="flex flex-col md:flex-row justify-between items-start md:items-end relative z-10">
              <div className="mb-unit-lg md:mb-0">
                <span className="font-label-mono uppercase mb-unit-sm block" style={{ color: LP }}>
                  03 / Physical Node
                </span>
                <address className="not-italic font-headline-md text-headline-md leading-tight text-white">
                  SHANGHAI HEADQUARTERS<br />
                  JING'AN DISTRICT, UNIT 804<br />
                  200040, PRC.
                </address>
              </div>
              <button
                className="font-label-mono uppercase flex items-center justify-center gap-4 px-unit-lg py-unit-md transition-all"
                style={{ border: `1px solid ${P}`, color: LP, background: "transparent" }}
                onMouseEnter={e => { e.currentTarget.style.background = P; e.currentTarget.style.color = "#fff"; }}
                onMouseLeave={e => { e.currentTarget.style.background = "transparent"; e.currentTarget.style.color = LP; }}
              >
                <span>Get Directions</span>
                <span className="material-symbols-outlined">north_east</span>
              </button>
            </div>
          </div>

          {/* Contact Form */}
          <div
            className="md:col-span-12 p-unit-lg"
            style={{ background: "#08080f", border: `1px solid #1e1e3a` }}
          >
            <div className="max-w-4xl mx-auto py-unit-lg">
              <h3 className="font-headline-md text-headline-md mb-unit-lg uppercase tracking-tight text-center md:text-left" style={{ color: LP }}>
                Direct Inquiry
              </h3>
              <form
                className="flex flex-col gap-unit-xl"
                onSubmit={(e) => { e.preventDefault(); alert("Message transmission sequence initiated."); }}
              >
                <div className="grid grid-cols-1 md:grid-cols-2 gap-unit-xl">
                  {[
                    { label: "Sender Identity", placeholder: "FULL NAME", type: "text" },
                    { label: "Contact Vector", placeholder: "EMAIL ADDRESS", type: "email" },
                  ].map(({ label, placeholder, type }) => (
                    <div key={label} className="flex flex-col gap-unit-xs">
                      <label className="font-label-mono text-[10px] uppercase" style={{ color: LP }}>
                        {label}
                      </label>
                      <input
                        className="bg-transparent focus:outline-none font-body-lg placeholder:opacity-20 py-4 text-on-background"
                        style={{ borderBottom: `1px solid #2e2e5a` }}
                        onFocus={e => (e.currentTarget.style.borderBottomColor = P)}
                        onBlur={e => (e.currentTarget.style.borderBottomColor = "#2e2e5a")}
                        placeholder={placeholder}
                        type={type}
                      />
                    </div>
                  ))}
                </div>
                <div className="flex flex-col gap-unit-xs">
                  <label className="font-label-mono text-[10px] uppercase" style={{ color: LP }}>
                    Protocol Requirements
                  </label>
                  <textarea
                    className="bg-transparent focus:outline-none font-body-lg placeholder:opacity-20 py-4 resize-none text-on-background"
                    style={{ borderBottom: `1px solid #2e2e5a` }}
                    onFocus={e => (e.currentTarget.style.borderBottomColor = P)}
                    onBlur={e => (e.currentTarget.style.borderBottomColor = "#2e2e5a")}
                    placeholder="PROJECT SCOPE AND SPECIFICATIONS"
                    rows={4}
                  />
                </div>
                <div className="flex justify-center md:justify-end">
                  <button
                    type="submit"
                    className="w-full md:w-auto px-unit-xl py-unit-md font-headline-md uppercase tracking-widest text-white transition-all"
                    style={{ background: `linear-gradient(135deg, ${B}, ${P})` }}
                    onMouseEnter={e => (e.currentTarget.style.opacity = "0.85")}
                    onMouseLeave={e => (e.currentTarget.style.opacity = "1")}
                  >
                    Transmit
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer
        className="w-full max-w-container-max mx-auto px-unit-xl py-unit-md flex flex-col md:flex-row justify-between items-center gap-unit-sm"
        style={{ borderTop: `1px solid #1e1e3a` }}
      >
        <span className="font-label-mono text-label-mono uppercase text-on-surface-variant">
          © 2024 JANE WEI. BUILT TO LAST.
        </span>
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
        <span className="font-display-jw text-body-sm" style={{ color: "#2e2e4a" }}>JW</span>
      </footer>
    </main>
  );
};

export default ContactPage;
