"use client";

import { Provider } from "react-redux";
import { store } from "../redux/Store";
import AuthListener from "../component/AuthListner";
import { Toaster } from 'react-hot-toast';


export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body style={{boxSizing:"border-box", margin:"0" ,padding:"0"}} >
        <Provider store={store}>
          <AuthListener />
          {children}
          <Toaster position="top-center" />
        </Provider>
      </body>
    </html>
  );
}
