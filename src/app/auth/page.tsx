import AuthClient from "./AuthClient";

export const metadata = {
  title: "Sign In | AJAY Sync Hub",
  description: "Sign in to access the PM-AJAY project management platform",
};

export default function AuthPage() {
  return <AuthClient />;
}
