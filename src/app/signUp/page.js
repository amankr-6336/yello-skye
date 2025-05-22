"use client";

import { useState } from "react";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth } from "../../lib/firebase/Firebase";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";
import Input from "@/component/common-ui/input/Input";
import Button from "@/component/common-ui/button/Button";

export default function SignupPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [userName, setUserName] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const handleSignup = async (e) => {
    e.preventDefault();
    setError("");

    try {
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      await updateProfile(userCredential.user, {
        displayName: userName,
      });

      toast.success("Signup successful! 🎉 Redirecting...");
      console.log(userCredential);
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
      case "auth/email-already-in-use":
        return "Email is already in use.";
      case "auth/invalid-email":
        return "Invalid email address.";
      case "auth/weak-password":
        return "Password should be at least 6 characters.";
      default:
        return "Something went wrong. Please try again.";
    }
  };

  return (
    <div style={{ maxWidth: 400, margin: "auto", paddingTop: 100 }}>
      <h2>Sign Up</h2>
      <form onSubmit={handleSignup}>
        <Input
          label="Name"
          type="text"
          placeholder="Name"
          value={userName}
          onChange={(e) => setUserName(e.target.value)}
        />
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
          {loading ? "Signing in..." : "SignIn"}
        </Button>
      </form>
    </div>
  );
}
