import { ReactNode } from "react";

export default function LegalLayout({ children }: { children: ReactNode }) {
  return (
    <div className="bg-background-dark min-h-screen">
      <main className="max-w-3xl mx-auto p-8 text-white">{children}</main>
    </div>
  );
} 