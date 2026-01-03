import { motion, type SVGMotionProps } from "motion/react";

const Polygons = (props: SVGMotionProps<SVGSVGElement>) => (
  <motion.svg
    className="SVGPolygon"
    width={378}
    height={413}
    viewBox="0 0 378 413"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <g id="Polygons">
      <motion.path
        animate={{
          rotate: [0, 15, -15, 0],
          filter: [
            "drop-shadow(0 0 0 rgba(80,243,255,0))",
            "drop-shadow(0 0 20px rgba(255, 255, 255, 1))",
            "drop-shadow(0 0 20px rgba(255, 255, 255, 1))",
            "drop-shadow(0 0 0 rgba(80,243,255,0))",
          ],
          transition: { duration: 1, repeat: Infinity, repeatDelay: 5 },
        }}
        id="DNarrow"
        d="M214.541 364.832c-11.358 19.651-39.724 19.651-51.082 0L28.183 130.781c-11.367-19.666 2.825-44.261 25.54-44.261h270.554c22.715 0 36.907 24.595 25.54 44.261z"
        fill="url(#paint0_linear_1_3)"
        stroke="#929292"
        strokeWidth={3}
      />
      <motion.g
        animate={{
          rotate: [0, -15, 15, 0],
          filter: [
            "drop-shadow(0 0 0 rgba(80,243,255,0))",
            "drop-shadow(0 0 20px rgba(255, 255, 255, 1))",
            "drop-shadow(0 0 20px rgba(255, 255, 255, 1))",
            "drop-shadow(0 0 0 rgba(80,243,255,0))",
          ],
          transition: { duration: 1, repeat: Infinity, repeatDelay: 5 },
        }}
        id="UParrow"
        filter="url(#filter0_d_1_3)"
      >
        <path
          d="M215.842 46.437c-11.935-20.65-41.744-20.65-53.679 0L26.886 280.487C14.941 301.154 29.856 327 53.726 327H324.28c23.87 0 38.784-25.846 26.839-46.513z"
          fill="url(#paint1_linear_1_3)"
        />
        <path
          d="M214.544 47.188c-11.358-19.651-39.725-19.651-51.082 0L28.185 281.238C16.818 300.905 31.01 325.5 53.725 325.5H324.28c22.715 0 36.907-24.595 25.54-44.262z"
          stroke="#fff"
          strokeWidth={3}
        />
      </motion.g>
    </g>
    <defs>
      <linearGradient
        id="paint0_linear_1_3"
        x1={189.002}
        y1={386.01}
        x2={189.002}
        y2={52.51}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#efefef" />
        <stop offset={1} stopColor="#e9e9e9" />
      </linearGradient>
      <linearGradient
        id="paint1_linear_1_3"
        x1={189.003}
        y1={0}
        x2={189.003}
        y2={327}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#4a4a4a" />
        <stop offset={1} />
      </linearGradient>
      <filter
        id="filter0_d_1_3"
        x={18.679}
        y={30.949}
        width={340.647}
        height={304.051}
        filterUnits="userSpaceOnUse"
        colorInterpolationFilters="sRGB"
      >
        <feFlood floodOpacity={0} result="BackgroundImageFix" />
        <feColorMatrix
          in="SourceAlpha"
          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
          result="hardAlpha"
        />
        <feOffset dy={4} />
        <feGaussianBlur stdDeviation={2} />
        <feComposite in2="hardAlpha" operator="out" />
        <feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" />
        <feBlend in2="BackgroundImageFix" result="effect1_dropShadow_1_3" />
        <feBlend
          in="SourceGraphic"
          in2="effect1_dropShadow_1_3"
          result="shape"
        />
      </filter>
    </defs>
  </motion.svg>
);
export default Polygons;
