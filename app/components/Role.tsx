import { memo } from "react";

interface RoleProps {
  styles?: string;
}

function Role({ styles = "" }: RoleProps) {
  return (
    <div
      className={`glass rounded-2xl p-6 flex items-center justify-center ${styles}`}
      role="region"
      aria-label="Professional Role"
    >
      <div className="text-center space-y-2">
        <h1 className="text-white text-xl md:text-2xl font-display font-bold tracking-tight">
          Frontend Developer
        </h1>
        <p className="text-white/60 text-sm font-medium">
          Digital Strategist & Engineer
        </p>
      </div>
    </div>
  );
}

export default memo(Role);
