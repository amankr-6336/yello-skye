  export const getFriendlyErrorSignup = (code) => {
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

   export const getFriendlyErrorLogin = (code) => {
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