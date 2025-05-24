"use client";

import { useState } from "react";
import Link from "next/link";
// Auth function and files
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../lib/firebase/Firebase.js";
import { useRouter } from "next/navigation";
// components
import toast from "react-hot-toast";
import Button from "@/component/common-ui/button/Button.js";
import Input from "@/component/common-ui/input/Input.js";
import Card from "@/component/common-ui/card/Card.js";
// services error message data
import { getFriendlyErrorLogin } from "@/service/ErrorMessage.js";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  // logic and handle login of User
  const handleLogin = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const response = await signInWithEmailAndPassword(auth, email, password);
      toast.success("Login successful! 🎉");
      setTimeout(() => router.push("/dashboard/project"), 500);
    } catch (err) {
      const friendlyMessage = getFriendlyErrorLogin(err.code);
      toast.error(friendlyMessage);
    } finally {
      setLoading(false);
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
          <h2>Login</h2>
          <form onSubmit={handleLogin}>
            <Input
              label="Email"
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <Input
              label="Password"
              type="password"
              placeholder="Password (6+ characters)"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </form>
          <div style={{ textAlign: "right", color: "grey" }}>
            <Link href="/forgot-password">Forgot Password?</Link>
          </div>

          <Button size="small" type="primary" onClick={handleLogin}>
            {loading ? "Logging in..." : "Login"}
          </Button>

          <div style={{ display: "flex", justifyContent: "center" }}>
            <p>Do you have an Account ? </p>{" "}
            <Link href="/signUp" style={{ color: "blue", marginLeft: "5px" }}>
              {" "}
              SignUp
            </Link>
          </div>
        </div>
      </Card>
    </div>
  );
}
