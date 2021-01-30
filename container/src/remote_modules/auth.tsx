import React, { useEffect, useRef } from "react";
import { mount } from "auth/AuthPage";
import { useHistory } from "react-router-dom";

const Auth = () => {
  const history = useHistory();
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    mount(ref.current, history);
  }, []);

  return <div ref={ref} style={{ height: "100%" }} />;
};

export default Auth;
