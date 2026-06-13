import { useNavigate } from "react-router-dom";

const HomePage = () => {
  const navigate = useNavigate();
  return (
    <main className="ml-0 md:ml-sidebar-width min-h-screen">
      {/* Hero Section */}
      <section
        className="relative h-screen flex flex-col justify-center px-unit-xl overflow-hidden border-b border-outline-variant"
        style={{
          backgroundImage:
            "url('https://www.transparenttextures.com/patterns/carbon-fibre.png')",
        }}
      >
        {/* Background radial accent */}
        <div className="absolute right-0 top-0 w-2/3 h-full opacity-20 pointer-events-none">
          <div className="w-full h-full bg-[radial-gradient(circle_at_70%_30%,_#2a4386_0%,_transparent_70%)]" />
        </div>

        <div className="max-w-container-max mx-auto w-full relative z-10">
          <div className="inline-block px-4 py-1.5 mb-unit-lg" style={{ background: "#0f172a", border: "1px solid #4f46e5" }}>
            <span className="font-label-mono text-label-mono uppercase tracking-[0.3em]" style={{ color: "#a78bfa" }}>
              EST. 2024 // SYSTEM READY
            </span>
          </div>

          <h1 className="font-display-jw text-4xl md:text-6xl lg:text-7xl leading-tight mb-unit-lg tracking-[-0.04em]">
            <span style={{ background: "linear-gradient(90deg, #93c5fd 0%, #1d4ed8 100%)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>
              WELCOME TO{" "}
            </span>
            <span style={{ background: "linear-gradient(90deg, #a78bfa 0%, #7c3aed 50%, #4f46e5 100%)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>
              JANE WEI'S
            </span>
            <br />
            <span style={{ background: "linear-gradient(90deg, #1e3a8a 0%, #4f46e5 50%, #7c3aed 100%)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>
              HOMEPAGE
            </span>
          </h1>

          <div
            className="relative max-w-3xl mb-unit-xl overflow-hidden"
            style={{ border: "1px solid #1e1e3a" }}
          >
            {/* Industrial background image */}
            <div
              className="absolute inset-0"
              style={{
                backgroundImage: "url('https://images.unsplash.com/photo-1518770660439-4636190af475?w=1200&q=80')",
                backgroundSize: "cover",
                backgroundPosition: "center",
                filter: "grayscale(60%) brightness(0.3)",
              }}
            />
            {/* Blue-purple gradient overlay */}
            <div
              className="absolute inset-0"
              style={{
                background: "linear-gradient(135deg, rgba(29,78,216,0.55) 0%, rgba(124,58,237,0.45) 100%)",
              }}
            />
            {/* Text content */}
            <div className="relative z-10 px-8 py-6">
              <p
                className="font-label-mono text-[10px] uppercase tracking-[0.3em] mb-3"
                style={{ color: "#a78bfa", opacity: 0.8 }}
              >
                // SYSTEM STATEMENT
              </p>
              <p className="font-body-lg text-headline-md font-light leading-relaxed" style={{ color: "#dde6ff" }}>
                Built to last. Designed to impress.
              </p>
            </div>
          </div>

          <div className="flex flex-wrap gap-gutter">
            <button
              onClick={() => navigate("/contact")}
              className="relative overflow-hidden group px-12 py-5 font-label-mono text-label-mono uppercase font-bold tracking-[0.2em] transition-all active:scale-95 text-white"
              style={{ background: "linear-gradient(135deg, #4f46e5 0%, #7c3aed 100%)" }}
              onMouseEnter={e => (e.currentTarget.style.background = "linear-gradient(135deg, #4338ca 0%, #6d28d9 100%)")}
              onMouseLeave={e => (e.currentTarget.style.background = "linear-gradient(135deg, #4f46e5 0%, #7c3aed 100%)")}
            >
              Contact Me
            </button>
            <button
              onClick={() => navigate("/agents")}
              className="px-12 py-5 font-label-mono text-label-mono uppercase tracking-[0.2em] transition-colors bg-transparent"
              style={{ border: "1px solid #4f46e5", color: "#a78bfa" }}
              onMouseEnter={e => { e.currentTarget.style.borderColor = "#7c3aed"; e.currentTarget.style.color = "#c4b5fd"; }}
              onMouseLeave={e => { e.currentTarget.style.borderColor = "#4f46e5"; e.currentTarget.style.color = "#a78bfa"; }}
            >
              My Agents
            </button>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-unit-lg left-unit-xl">
          <div className="flex items-center gap-unit-md">
            <div className="w-[1px] h-16 bg-outline-variant relative overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-1/2 animate-bounce" style={{ background: "#7c3aed" }} />
            </div>
            <span className="font-label-mono text-[10px] uppercase tracking-[0.3em]" style={{ color: "#6d28d9" }}>
              Scroll to explore system
            </span>
          </div>
        </div>
      </section>

      {/* Bento Grid Section */}
      <section className="py-unit-xl px-unit-xl max-w-container-max mx-auto">
        <div className="grid grid-cols-12 gap-gutter">
          {/* Large Feature Card */}
          <div className="col-span-8 group relative h-[600px] border border-outline-variant overflow-hidden bg-surface-container-low">
            <img
              alt="Architectural precision"
              className="absolute inset-0 w-full h-full object-cover opacity-50 group-hover:scale-105 transition-transform duration-1000"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuD9sD0o3sPylESj7ZTp7rzwrCMes9-emS4l0__xQtdRPGCg1PhK1dnRNWIqY2_o1kUNMyyLdC-jgAD6nuVKsWWaETJ_-vIn1z8INuMxrrp1qFHjmzVMoagSb7k7QUWy76FcwbPuavZA9F6_Eg6fiwvAwI7OhP8jLiK7xni10MbXD6-sb6wAc2UdT9jBMTpDAK6njEcX2_b7xWjcm_YKPKi3AamZXJ9Hjkpu2PAsKNCpeq-uj5mTGgU06-N0DbQUXc5-kR5NfoWYNUQ"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background via-background/20 to-transparent" />
            <div className="absolute bottom-0 left-0 p-unit-xl">
              <h3 className="font-headline-md text-4xl mb-4">
                Structural Integrity
              </h3>
              <p className="font-body-lg text-on-surface-variant max-w-md">
                Our core philosophy is rooted in the durability of high-grade
                materials and logical flow.
              </p>
            </div>
          </div>

          {/* Vertical Stats Cards */}
          <div className="col-span-4 flex flex-col gap-gutter">
            <div className="flex-1 border border-outline-variant p-unit-xl bg-surface-container-low royal-blue-glow transition-all flex flex-col justify-center">
              <span className="material-symbols-outlined text-5xl mb-6" style={{ color: "#7c3aed" }}>
                memory
              </span>
              <div className="text-6xl font-display-jw mb-2" style={{ background: "linear-gradient(90deg, #93c5fd, #7c3aed)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>
                99.9%
              </div>
              <div className="font-label-mono text-label-mono uppercase tracking-widest" style={{ color: "#4f46e5" }}>
                Uptime Precision
              </div>
            </div>
            <div className="flex-1 border p-unit-xl bg-surface-container-low transition-all flex flex-col justify-center" style={{ borderColor: "#4f46e5" }}>
              <span className="material-symbols-outlined text-5xl mb-6" style={{ color: "#7c3aed" }}>
                speed
              </span>
              <div className="text-6xl font-display-jw mb-2" style={{ background: "linear-gradient(90deg, #93c5fd, #7c3aed)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>
                42ms
              </div>
              <div className="font-label-mono text-label-mono uppercase tracking-widest" style={{ color: "#4f46e5" }}>
                Response Velocity
              </div>
            </div>
          </div>

          {/* Small Info Cards */}
          {[
            {
              label: "System Design",
              text: "Scalable frameworks for enterprise-level deployments and digital infrastructure.",
            },
            {
              label: "User Interface",
              text: "Brutalist aesthetics combined with modern corporate efficiency and ergonomic flows.",
            },
            {
              label: "Consultation",
              text: "Strategic alignment sessions to calibrate your digital presence for longevity.",
            },
          ].map(({ label, text }) => (
            <div
              key={label}
              className="col-span-4 border border-outline-variant p-unit-lg bg-surface-container-low hover:bg-surface-container-highest transition-all group"
            >
              <div className="w-12 h-1 mb-6 group-hover:w-full transition-all duration-500" style={{ background: "#7c3aed" }} />
              <h4 className="font-label-mono text-label-mono uppercase mb-4 tracking-widest" style={{ color: "#a78bfa" }}>
                {label}
              </h4>
              <p className="font-body-sm text-on-surface-variant leading-relaxed">
                {text}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="w-full max-w-container-max mx-auto px-unit-xl py-unit-xl flex flex-row justify-between items-center border-t border-outline-variant">
        <div className="flex items-center gap-8">
          <span className="font-display-jw text-xl text-outline">JW</span>
          <div className="h-4 w-[1px] bg-outline-variant" />
          <span className="font-label-mono text-label-mono uppercase text-on-surface-variant tracking-[0.2em]">
            © 2024 JANE WEI. BUILT TO LAST.
          </span>
        </div>
        <div className="flex gap-unit-xl">
          {["WeChat", "Email", "LinkedIn"].map((link) => (
            <a
              key={link}
              href="#"
              className="font-label-mono text-label-mono uppercase text-on-surface-variant hover:text-tertiary transition-colors tracking-widest"
            >
              {link}
            </a>
          ))}
        </div>
      </footer>
    </main>
  );
};

export default HomePage;
