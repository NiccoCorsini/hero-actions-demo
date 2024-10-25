import { SvgIconProps } from "../../definitions/componentsProps/svg";

const SvgIcon = ({ pathD, color, width, height }: SvgIconProps) => (
  <svg
    width={width}
    height={height || width}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d={pathD}
      fill={color || "white"}
    />
  </svg>
);
export default SvgIcon;
