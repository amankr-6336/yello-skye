"use client";

import { useState } from "react";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../lib/firebase/Firebase.js";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";
import Button from "@/component/common-ui/button/Button.js";
import Input from "@/component/common-ui/input/Input.js";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const handleLogin = async (e) => {
    e.preventDefault();
    setError("");
    setLoading(true); // ✅ Start loader

    try {
      const response = await signInWithEmailAndPassword(auth, email, password);
      console.log(response);
      toast.success("Login successful! 🎉 Redirecting...");
      setTimeout(() => router.push("/dashboard"), 1000);
    } catch (err) {
      const friendlyMessage = getFriendlyError(err.code);
      setError(friendlyMessage);
      toast.error(friendlyMessage);
    } finally {
      setLoading(false);
    }
  };

  const getFriendlyError = (code) => {
    switch (code) {
      case "auth/invalid-email":
        return "Please enter a valid email address.";
      case "auth/user-disabled":
        return "This user account has been disabled.";
      case "auth/user-not-found":
        return "No account found with this email address.";
      case "auth/wrong-password":
        return "Incorrect password. Please try again.";
      case "auth/too-many-requests":
        return "Too many failed attempts. Please wait and try again later.";
      case "auth/missing-password":
        return "Please enter your password.";
      case "auth/internal-error":
        return "An internal error occurred. Please try again.";
      case "auth/network-request-failed":
        return "Network error. Please check your internet connection.";
      case "auth/invalid-credential":
        return "Invalid login credentials. Please try again.";
      default:
        return "Something went wrong. Please try again.";
    }
  };

  return (
    <div style={{ maxWidth: 400, margin: "auto", paddingTop: 100 }}>
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
        {error && <p style={{ color: "red" }}>{error}</p>}
        <Button size="small" type="primary">
          {loading ? "Logging in..." : "Login"}
        </Button>
      </form>
    </div>
  );
}
