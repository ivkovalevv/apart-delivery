import React from "react";

const HidePasswordSVG = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
    width="24"
    height="24"
    fill="none"
    viewBox="0 0 24 24"
  >
    <path fill="url(#pattern0_494_76)" d="M0 0h24v24H0z"></path>
    <defs>
      <pattern
        id="pattern0_494_76"
        width="1"
        height="1"
        patternContentUnits="objectBoundingBox"
      >
        <use xlinkHref="#image0_494_76" transform="scale(.01563)"></use>
      </pattern>
      <image
        xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAACXBIWXMAAA7DAAAOwwHHb6hkAAAAGXRFWHRTb2Z0d2FyZQB3d3cuaW5rc2NhcGUub3Jnm+48GgAABb5JREFUeJztmltsVFUUhv+1zwxtldhh1BBuM3sfKwTbxBjQYIgP4hMPCgYLUVAIKgRjREUgwAsPJkYFoyFKRLmIYCICNoHgCwlRX4wGDcqDadrugyKYYGYmLRkz7cwsHzrTtMPMmXPryOV8SZOey157/Wtfzlq7BUJCQkJCQkJCQm5N6P92ICiklIuJaBcAFIvFNRcuXPjGSbvI+LrVGKSUy4joEEp6hBB7AMxw0laMp2ONoFJ8CXba/oYOQA3xeWZ+xamNhiwB0zRnMvMjRNTBzB0AEgBaSz9MRClmTgH4i4jOATgnhPixp6ent5ZNG/ErLMvqcurbuG2CUsp5RLScmRcS0T0ezfwO4CQzH7Ms64dRtu3Ef+mmg0ADMHXq1NuampqeZ+a1RNQepG0AZ4noQ2YuANiLAMQDAQWgvb19YjabXQ9gPYC7g7DpAs/iAf8BIKXUUwB2YHhdN5oCEa3s6+s77NWA5wAkEon7DMPYC2CeVxs+8TXyZbx8Bg2l1FbDMH7GDS4ecDkDksnkFMMwDjPzo3479kFV8YlEwjQMY3s0Gn29u7v7H6fGHM+AZDL5sBDiF5/iBwEcKX0eZ2ez2Ym5XO52IpoJ4DkAJwEUbNrbiT8D4NmhoaGzSqmHnDrkaAaYpvk0M+8D0OzUcCXMfDwSiWyyS24AoK2trb1QKBwDMKviUT3xozfhHIA1WuuD9fyqNwPINM3tzHwY3sUXAWyyLGtJPfEAkM/nOwBUJk5uxANAE4ADSqlt9fozbJ4JKeVeAK/C3+dys9b6XScvusnwbMSXIQAL4vH4lHQ6fQo1CqRaATCUUgeIaKUTx2vBzMcty1rv5N2AxY9mbiwWS2QymROoEoRqATCklAeJaIUTx20YjEQii1OpVLrei+MoHgBARA/EYrEZmUzmJCqCcM0eIKXcRUTPODVuQ5eTNT/e4ssQ0Wql1AeV98cEQEq5mYjWuTVeo8O6JalSqrOK+AIRraoUr5RKGoZxGv5S7peVUhtH3xgJgFJqKRG95cN4JWftHkoplwH4AteO/PLK3L6tre0OAN8BUAH49bZSamn5YiQARPQeAiyPo9Ho5VrP3NbzhmEwgiu2CMDO8sW4HYkNDAxUzeiCPMwIgpEAMPNrGE5aAqG5uXla5T2v4nO53DW2fFAEsKF8MRIArfVXzLyhahMPMPOYStHPyBPRg0H5heHE7Ej5YswSsCzrfSJ6J6COOsu/BDDtFwXk0y6t9Y7RN6ptemSa5j5mXuWzs4JhGPfn8/kOP+JLJ8rnAUR9+vOZ1no1KpZ51VQ4nU6fiMfjkwHM9dGhYObHiOgFeB95isVi+wHM9uEHAHyqtX4RVfa4WrUAp9PpU/F4vAXAfB8d34Wxy8zVbq+U2grAV2LGzLsty1oHl8UQACCdTp+eNGnSEIAF8J8juBp50zS3AHjTR79MRNu01ltsO3JiyTTNJcx8AMBEj864XfM7ADzusS8AyAJYqbU+Wu9Fx9EtndR8DeBel85UFW+aZmtLS0sBAK5evTpDCDEXw7v9E/C34V0mokV9fX0/OXnZ1fSSUsaEEPuZebHDJoFXdXYQUZcQYk1PT88Vx228dKSU6gSwG8CdNq9V/aOFUioJ4AyCKWzK9APYqLXe47ah541t+vTp0yZMmPAJMy+s8riRI/8tM6+yLMvy0tj2K2BHf3//QGtra4GIlmBsIBsl/k8ieklr/UYmk8l4NeL5/wNK6e3naLz4vwHszOVyH126dCnr15inJdCoY6wKfiWijwcHB/dfvHjxX5+2RnA9A9yInzNnTjSVSu2Bd/HdRHSKiA719vbanjB5xe1n0FNVV5oF8zFcW8wCkAQwGcOJVQFApvTzB4DfmPl8JBL53smhql8cByCZTD4phDiC6+QkJygcH4kJIXbjJhMPOA8AwUdVdz3jNABcLBbXArgC4DIzd94M4kNCQkJCQkJCQm5l/gP21uRjDD4loAAAAABJRU5ErkJggg=="
        id="image0_494_76"
        width="64"
        height="64"
        preserveAspectRatio="none"
      ></image>
    </defs>
  </svg>
);

export default HidePasswordSVG;