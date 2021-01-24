import React, { useEffect, useRef } from "react";
import { mount } from "auth/AuthPage";

const Auth = () => {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    mount(ref.current);
  }, []);

  return <div ref={ref} style={{ height: "100%" }} />;
};

export default Auth;
