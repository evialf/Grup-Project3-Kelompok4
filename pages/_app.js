import { useMemo, useEffect, useState } from "react";
import "tailwindcss/tailwind.css";
import "../styles/globals.css";
import { RoleContext, TokenContext } from "../utils/context";

function MyApp({ Component, pageProps }) {
  const [token, setToken] = useState(null);
  const [role, setRole] = useState(null);
  const jwtToken = useMemo(() => ({ token, setToken }), [token]);
  const roleUser = useMemo(() => ({ role, setRole }), [role]);
  useEffect(() => {
    const getToken = localStorage.getItem("token") || "0";
    setToken(getToken);
    const getRole = localStorage.getItem("role") || "admin";
    setRole(getRole);
  }, [token, role]);

  if (token) {
    return (
      <TokenContext.Provider value={jwtToken}>
        <RoleContext.Provider value={roleUser}>
          <Component {...pageProps} />
        </RoleContext.Provider>
      </TokenContext.Provider>
    );
  }
}

export default MyApp;
