const Footer = () => {
  return (
    <footer className="w-full max-w-container-max mx-auto px-unit-xl py-unit-md flex flex-col md:flex-row justify-between items-center gap-unit-sm border-t border-outline-variant">
      <div className="font-display-jw text-body-sm text-outline">JW</div>
      <div className="font-label-mono text-[10px] uppercase text-on-surface-variant">
        © 2024 JANE WEI. BUILT TO LAST.
      </div>
      <div className="flex gap-unit-lg">
        <a
          href="#"
          className="font-label-mono text-[10px] uppercase text-on-surface-variant hover:text-tertiary-fixed-dim transition-opacity duration-200"
        >
          WeChat
        </a>
        <a
          href="#"
          className="font-label-mono text-[10px] uppercase text-on-surface-variant hover:text-tertiary-fixed-dim transition-opacity duration-200"
        >
          Email
        </a>
        <a
          href="#"
          className="font-label-mono text-[10px] uppercase text-on-surface-variant hover:text-tertiary-fixed-dim transition-opacity duration-200"
        >
          LinkedIn
        </a>
      </div>
    </footer>
  );
};

export default Footer;
