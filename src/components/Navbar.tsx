import { NavLink } from "react-router-dom";

const navItems = [
  { to: "/", label: "Home", icon: "home" },
  { to: "/about", label: "About", icon: "person" },
  { to: "/contact", label: "Contact", icon: "mail" },
  { to: "/agents", label: "Agents", icon: "groups" },
];

const Navbar = () => {
  return (
    <>
      {/* Desktop Sidebar */}
      <aside
        className="hidden md:flex flex-col items-center py-unit-xl fixed left-0 top-0 h-full w-sidebar-width z-50"
        style={{ background: "#08080f", borderRight: "1px solid #1e1e3a" }}
      >
        <div className="mb-unit-xl">
          <span
            className="font-display-jw text-headline-md leading-none tracking-tighter"
            style={{
              background: "linear-gradient(135deg, #93c5fd 0%, #7c3aed 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}
          >
            JW
          </span>
        </div>

        <nav className="flex flex-col gap-unit-lg flex-1 w-full">
          {navItems.map(({ to, label, icon }) => (
            <NavLink
              key={to}
              to={to}
              end={to === "/"}
              className={({ isActive }) =>
                `relative group flex flex-col items-center justify-center w-full py-4 transition-all ${
                  isActive ? "bg-[#0f0f1f]" : "opacity-40 hover:opacity-80"
                }`
              }
              style={({ isActive }) =>
                isActive ? { borderLeft: "3px solid #7c3aed" } : {}
              }
            >
              {({ isActive }) => (
                <>
                  <span
                    className="material-symbols-outlined mb-1"
                    style={{
                      fontVariationSettings: "'FILL' 1",
                      color: isActive ? "#a78bfa" : "#6b7280",
                    }}
                  >
                    {icon}
                  </span>
                  <span
                    className="font-label-mono text-[10px] uppercase"
                    style={{ color: isActive ? "#a78bfa" : "#6b7280" }}
                  >
                    {label}
                  </span>
                </>
              )}
            </NavLink>
          ))}
        </nav>

        <div className="mt-auto">
          <span
            className="font-label-mono text-[10px] rotate-90 whitespace-nowrap"
            style={{ color: "#2e2e4a" }}
          >
            v1.0.4
          </span>
        </div>
      </aside>

      {/* Mobile Top Bar */}
      <header
        className="md:hidden flex justify-between items-center px-margin-mobile h-16 w-full fixed top-0 z-50 tap-highlight-none"
        style={{ background: "#08080f", borderBottom: "1px solid #1e1e3a" }}
      >
        <span className="material-symbols-outlined" style={{ color: "#7c3aed" }}>
          menu
        </span>
        <span
          className="font-display-jw text-headline-md"
          style={{
            background: "linear-gradient(135deg, #93c5fd 0%, #7c3aed 100%)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            backgroundClip: "text",
          }}
        >
          JW
        </span>
        <span className="material-symbols-outlined" style={{ color: "#7c3aed" }}>
          settings
        </span>
      </header>
    </>
  );
};

export default Navbar;
