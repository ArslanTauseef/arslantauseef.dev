import React from "react";
import "./NavButtons.css";


interface NavButtonProps {
  variant?: "primary" | "secondary" | "tertiary" | "quaternary";
  size?: "small" | "medium" | "large";
  disabled?: boolean;
  onClick?: (e: React.MouseEvent<HTMLAnchorElement>) => void;
  children?: React.ReactNode;
  href?: "/" | "/Projects" | "/About" | "/Contact";
  onMouseMove?: (pos: {x: number, y:number}) => void;
}

export const NavButtons = ({
  variant = "primary",
  size = "medium",
  onClick,
  children,
  href,
  onMouseMove,
}: NavButtonProps) => {
    
  return (
    <a
      className={`nav-btn nav-btn--${variant} nav-btn--${size}`}
      href={href}
      onClick={onClick}
      style={{ position: "relative", overflow: "hidden" }}
    >
      {children}
    </a>
  );
};
