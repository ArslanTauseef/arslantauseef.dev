import * as React from "react";
const MainLogo = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    width={357}
    height={365}
    viewBox="0 0 357 365"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path d="M26.69 257.003H189v37H0zm31.977-52H154v37H33z" fill="#fff" />
    <path d="m76.805 180.592 5.078-69.975L258 329.288h-62.14z" fill="url(#a)" />
    <defs>
      <linearGradient
        id="a"
        x1={172.005}
        y1={213.721}
        x2={106.706}
        y2={269.112}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#5ce3ea" />
        <stop offset={0.5} stopColor="#458abe" />
        <stop offset={1} stopColor="#2e3192" />
      </linearGradient>
    </defs>
  </svg>
);
export default MainLogo;
