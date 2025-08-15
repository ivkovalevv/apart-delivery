import React from "react";

const ShowPasswordSVG = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
    width="24"
    height="24"
    fill="none"
    viewBox="0 0 24 24"
  >
    <path fill="url(#pattern0_494_77)" d="M0 0h24v24H0z"></path>
    <defs>
      <pattern
        id="pattern0_494_77"
        width="1"
        height="1"
        patternContentUnits="objectBoundingBox"
      >
        <use xlinkHref="#image0_494_77" transform="scale(.01563)"></use>
      </pattern>
      <image
        xlinkHref="data:image/png;base64,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"
        id="image0_494_77"
        width="64"
        height="64"
        preserveAspectRatio="none"
      ></image>
    </defs>
  </svg>
);

export default ShowPasswordSVG;