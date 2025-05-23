"use client";
import React, { useState } from "react";
import { sendPasswordResetEmail } from "firebase/auth";
import { auth } from "@/lib/firebase/Firebase";
import Card from "@/component/common-ui/card/Card";
import toast from "react-hot-toast";
import Input from "@/component/common-ui/input/Input";
import Button from "@/component/common-ui/button/Button";
import { useRouter } from "next/navigation";

export default function ForgotPassword() {
  const [email, setEmail] = useState("");
  const router=useRouter();

 
  const handleSubmit = async (e) => {
    e.preventDefault();


    try {
      await sendPasswordResetEmail(auth, email);
      toast.success("Reset Password has been sent to Email");
      router.push('/login');

    } catch (err) {
      setError(err.message);
      toast.error("Oops !! Error");
    }
  };

  return (
    <div
      style={{
        width: "100vw",
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Card size="authBox">
        <div style={{ display: "flex", gap: "10px", flexDirection: "column" }}>
          <h2>Forgot Password</h2>
          <form onSubmit={handleSubmit}>
            <Input
              label="Email"
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <Button  size="small" type="primary">Send Reset Link</Button>
          </form>
        </div>
      </Card>
    </div>
  );
}
