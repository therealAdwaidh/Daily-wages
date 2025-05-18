import { ReactNode } from 'react';
import classNames from 'classnames';

export function Card({ className, children }: { className?: string; children: ReactNode }) {
  return (
    <div className={classNames("bg-white rounded-2xl shadow p-4", className)}>
      {children}
    </div>
  );
}

export function CardContent({ children, className }: { children: ReactNode; className?: string }) {
  return (
    <div className={classNames("w-full", className)}>
      {children}
    </div>
  );
}
