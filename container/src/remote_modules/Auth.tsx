import React, { useEffect, useRef } from "react";
import { mount } from "auth/AuthModule";

const Auth = ({ history }: any) => {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    mount(ref.current, history);
  }, []);

  return <div ref={ref} style={{ height: "100%" }} />;
};

export default Auth;
