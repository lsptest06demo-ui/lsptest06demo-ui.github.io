import { NavLink } from "react-router-dom";

const navItems = [
  { to: "/", label: "Home", icon: "home" },
  { to: "/about", label: "About", icon: "person" },
  { to: "/contact", label: "Contact", icon: "mail" },
  { to: "/agents", label: "Agents", icon: "groups" },
];

const BottomNav = () => {
  return (
    <nav className="md:hidden fixed bottom-0 left-0 w-full h-16 z-50 flex justify-around items-stretch bg-surface-container-lowest border-t border-outline-variant">
      {navItems.map(({ to, icon }) => (
        <NavLink
          key={to}
          to={to}
          end={to === "/"}
          className={({ isActive }) =>
            `flex flex-col items-center justify-center h-full w-full transition-transform duration-150 active:scale-90 ${
              isActive
                ? "bg-tertiary-fixed text-on-tertiary-fixed"
                : "text-on-surface-variant active:bg-surface-container-highest"
            }`
          }
        >
          {({ isActive }) => (
            <span
              className="material-symbols-outlined"
              style={{
                fontVariationSettings: isActive ? "'FILL' 1" : "'FILL' 0",
              }}
            >
              {icon}
            </span>
          )}
        </NavLink>
      ))}
    </nav>
  );
};

export default BottomNav;
