import React, { useEffect, useRef } from "react";
import { mount } from "header/HeaderComponent";
import { useHistory } from "react-router-dom";

const Header = () => {
  const history = useHistory();
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    mount(ref.current, history);
  }, []);

  return <div ref={ref} />;
};

export default Header;
