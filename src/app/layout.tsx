import type { Metadata } from "next";
import "@/styles/globals.css";
import { Banner } from "@/components/Banner";
import { missingConfigs } from "@/lib/config-status";

export const metadata: Metadata = {
  title: "10x Next.js Starter",
  description: "A production-ready Next.js starter with authentication, modern tooling, and a cosmic developer experience.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        {missingConfigs.map((cfg, i) => (
          <Banner key={i} variant="error">
            <strong>Uwaga:</strong> {cfg.message}
            {cfg.docsUrl && (
              <>
                {" "}
                <a href={cfg.docsUrl} target="_blank" rel="noopener noreferrer">
                  {cfg.docsLabel ?? "Dokumentacja"}
                </a>
                .
              </>
            )}
          </Banner>
        ))}
        {children}
      </body>
    </html>
  );
}
