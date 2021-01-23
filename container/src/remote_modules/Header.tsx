import React, { useEffect, useRef } from "react";
import { mount } from "header/HeaderComponent";

const Header = ({ history }: any) => {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    mount(ref.current, history);
  }, []);

  return <div ref={ref} />;
};

export default Header;
