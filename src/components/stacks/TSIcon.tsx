import StackBase, { stackBaseProp } from "./StackBase";

export default function TSIcon({ x, y, className }: stackBaseProp) {
  return (
    <StackBase className={className}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        x="0px"
        y="0px"
        width={x}
        height={y}
        viewBox="0,0,256,256"
      >
        <defs>
          <linearGradient
            x1="15.189"
            y1="-0.208"
            x2="32.276"
            y2="46.737"
            gradientUnits="userSpaceOnUse"
            id="color-1_wpZmKzk11AzJ_gr1"
          >
            <stop offset="0" stop-color="#007ad9"></stop>
            <stop offset="1" stop-color="#007ad9"></stop>
          </linearGradient>
        </defs>
        <g
          fill="#007ad9"
          fill-rule="nonzero"
          stroke="none"
          stroke-width="1"
          stroke-linecap="butt"
          stroke-linejoin="miter"
          stroke-miterlimit="10"
          stroke-dasharray=""
          stroke-dashoffset="0"
          font-family="none"
          font-weight="none"
          font-size="none"
          text-anchor="none"
        >
          <path
            d="M46.08,230.4c-11.31079,0 -20.48,-9.16921 -20.48,-20.48v-163.84c0,-11.31079 9.16921,-20.48 20.48,-20.48h163.84c11.31079,0 20.48,9.16921 20.48,20.48v163.84c0,11.31079 -9.16921,20.48 -20.48,20.48z"
            id="shape"
          ></path>
        </g>
        <g
          fill="none"
          fill-rule="nonzero"
          stroke="none"
          stroke-width="1"
          stroke-linecap="butt"
          stroke-linejoin="miter"
          stroke-miterlimit="10"
          stroke-dasharray=""
          stroke-dashoffset="0"
          font-family="none"
          font-weight="none"
          font-size="none"
          text-anchor="none"
        >
          <g transform="scale(5.33333,5.33333)">
            <rect
              x="6"
              y="6"
              width="36"
              height="36"
              fill="url(#color-1_wpZmKzk11AzJ_gr1)"
            ></rect>
            <path
              d="M27.49,22h-13.263v3.264h4.757v14.736h3.769v-14.736h4.737z"
              fill="#ffffff"
            ></path>
            <path
              d="M39.194,26.084c0,0 -1.787,-1.192 -3.807,-1.192c-2.02,0 -2.747,0.96 -2.747,1.986c0,2.648 7.381,2.383 7.381,7.712c0,8.209 -11.254,4.568 -11.254,4.568v-3.938c0,0 2.152,1.622 4.733,1.622c2.581,0 2.483,-1.688 2.483,-1.92c0,-2.449 -7.315,-2.449 -7.315,-7.878c0,-7.381 10.658,-4.469 10.658,-4.469z"
              fill="#ffffff"
            ></path>
          </g>
        </g>
      </svg>
    </StackBase>
  );
}
