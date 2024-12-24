"use client";

import { useState, useContext, createContext, useEffect } from "react";
import { User, useUserData } from "@/hooks/useUserData";
import { useRouter } from "next/navigation";

const AuthContext = createContext<{
  user: User | null | undefined;
  loading: boolean;
  logout: () => void;
}>({
  user: undefined,
  loading: false,
  logout: () => {},
});

export function AuthProvider({ children }: React.PropsWithChildren) {
  const router = useRouter();
  const [user, setUser] = useState<User | null>();
  const [loading, setLoading] = useState(true);
  const { data, isLoading, error } = useUserData();

  useEffect(() => {
    if (!isLoading) {
      setLoading(isLoading);
      setUser(error ? null : data);
    }
  }, [error, isLoading, data]);

  const logout = () => {
    setUser(null);
    router.push("/");
  };

  return (
    <AuthContext.Provider value={{ user, loading, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
}
