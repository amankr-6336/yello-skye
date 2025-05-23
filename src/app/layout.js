"use client";

import { Provider } from "react-redux";
import { store } from "../redux/Store";
import { Toaster } from "react-hot-toast";
import "./globals.css";
import { AuthProvider} from "@/service/AuthProvider";


export default function RootLayout({ children }) {
 
 
  return (
    <html lang="en">
      <body style={{ boxSizing: "border-box", margin: "0", padding: "0" }}>
        <Provider store={store}>
          <AuthProvider>
            {children}
            <Toaster position="top-center" />
          </AuthProvider>
        </Provider>
      </body>
    </html>
  );
}
