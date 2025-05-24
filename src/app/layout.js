"use client";
import { Toaster } from "react-hot-toast";
import "./globals.css";
import { AuthProvider } from "@/service/AuthProvider";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body style={{ boxSizing: "border-box", margin: "0", padding: "0" }}>
        <AuthProvider>
          {children}
          <Toaster position="top-center" />
        </AuthProvider>
      </body>
    </html>
  );
}
