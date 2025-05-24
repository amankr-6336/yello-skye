"use client";

import { useState } from "react";
import Link from "next/link";
// auth function and file
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth } from "../../lib/firebase/Firebase";
import { useRouter } from "next/navigation";
// components
import Input from "@/component/common-ui/input/Input";
import Button from "@/component/common-ui/button/Button";
import Card from "@/component/common-ui/card/Card";
// services and dependencies
import { getFriendlyErrorSignup } from "@/service/ErrorMessage";
import toast from "react-hot-toast";

export default function SignupPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [userName, setUserName] = useState("");
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  // signUp logic
  const handleSignup = async (e) => {
    e.preventDefault();

    try {
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      // to send name also along with the email and password
      await updateProfile(userCredential.user, {
        displayName: userName,
      });
      toast.success("Signup successful! 🎉");
      setTimeout(() => router.push("/dashboard/project"), 500);
    } catch (err) {
      const friendlyMessage = getFriendlyErrorSignup(err.code);
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
          </form>
          <Button size="small" type="primary" onClick={handleSignup}>
            {loading ? "Signing in..." : "SignIn"}
          </Button>
          <div style={{ display: "flex", justifyContent: "center" }}>
            <p>Already have an Account ? </p>{" "}
            <Link href="/login" style={{ color: "blue", marginLeft: "5px" }}>
              {" "}
              Login
            </Link>
          </div>
        </div>
      </Card>
    </div>
  );
}
