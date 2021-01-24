import React, { useEffect, useRef } from "react";
import { mount } from "header/HeaderComponent";

const Header = () => {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    mount(ref.current);
  }, []);

  return <div ref={ref} />;
};

export default Header;
