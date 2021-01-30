import React, { useEffect, useRef } from "react";
import { render } from "react-dom";
import { mount } from "header/HeaderComponent";
type DomRenderTarget = HTMLElement | null;

declare global {
    interface Window {
        containerContext: boolean;
        mountHeader: (el: DomRenderTarget) => void;
    }
}

const Container = () => {
    const ref = useRef(null);

    useEffect(() => {
        mount(ref.current);
    }, []);

    return (
        <div>
            <div ref={ref} />
            <h1>Container</h1>
        </div>
    );
};

window.containerContext = true;
render(<Container />, document.getElementById("root"));
