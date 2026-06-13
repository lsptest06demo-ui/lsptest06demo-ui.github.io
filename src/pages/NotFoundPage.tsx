import { Link } from "react-router-dom";

const NotFoundPage = () => {
  return (
    <div className="min-h-screen bg-background flex flex-col items-center justify-center text-center px-unit-xl md:ml-sidebar-width">
      <p className="font-label-mono text-label-mono text-tertiary uppercase tracking-widest mb-unit-md">
        404 // NODE NOT FOUND
      </p>
      <h1 className="font-display-jw text-display-jw leading-none mb-unit-lg neon-text-highlight">
        404
      </h1>
      <p className="font-body-lg text-on-surface-variant mb-unit-xl">
        The requested system node does not exist or has been decommissioned.
      </p>
      <Link
        to="/"
        className="bg-on-background text-background px-12 py-5 font-label-mono text-label-mono uppercase tracking-[0.2em] hover:bg-tertiary-fixed-dim transition-colors"
      >
        Return to Base
      </Link>
    </div>
  );
};

export default NotFoundPage;
