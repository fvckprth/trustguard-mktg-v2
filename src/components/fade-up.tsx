import type { CSSProperties, ReactNode } from "react";

interface FadeUpProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  style?: CSSProperties;
}

export function FadeUp({ children, className = "", delay: _delay = 0, style }: FadeUpProps) {
  void _delay;
  return (
    <div className={className} style={style}>
      {children}
    </div>
  );
}
