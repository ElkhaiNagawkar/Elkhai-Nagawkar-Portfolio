import React from "react";

export default function Name(props) {
  const name = document.querySelector(".name");

  window.onload = function () {
    if (name) {
      name.classList.remove("name--fade");

      if (props.theme === "dark") {
        name.classList.remove("dark--mode--name--fade");
      }
    }
  };

  if (props.theme === "dark") {
    name?.classList.add("dark--mode--name--fade");
    name?.classList.remove("name--fade");
  } else {
    name?.classList.remove("dark--mode--name--fade");
    name?.classList.add("name--fade");
    name?.classList.remove("light--glow--animation");
  }

  return (
    <svg
      className={`name light--glow--animation`}
      width="1137"
      height="144"
      viewBox="0 0 1137 144"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M1106.18 113H1107.18V112V76.288C1107.18 72.1027 1107.86 68.9839 1109.07 66.6698C1110.28 64.3776 1112.03 62.8125 1114.32 61.7724C1118.99 59.649 1125.86 59.7122 1134.6 60.5791L1135.7 60.6881V59.584V33.952V32.952H1134.7C1123.24 32.952 1111.77 37.3055 1105.17 45.1838V34.528V33.528H1104.17H1081.56H1080.56V34.528V112V113H1081.56H1106.18Z"
        stroke={`${props.theme === "dark" ? "#C2C2C6" : "#6E715F"}`}
        strokeWidth="2"
      />
      <path
        d="M1046.78 112V113H1047.78H1067.65H1068.65V112V64.192C1068.65 54.1797 1065.45 46.114 1059.4 40.5598C1053.37 35.0161 1044.64 32.088 1033.81 32.088C1024.03 32.088 1015.65 35.1065 1009.52 40.4907C1003.39 45.8782 999.572 53.579 998.833 62.8163L998.747 63.896H999.83H1022.01H1022.89L1023 63.0226C1023.41 59.807 1024.56 57.4237 1026.3 55.8423C1028.03 54.2646 1030.47 53.384 1033.67 53.384C1036.95 53.384 1039.37 54.2709 1040.97 55.8196C1042.56 57.3639 1043.47 59.7022 1043.47 62.896V65.4663C1040.36 65.0045 1036.83 64.776 1033.09 64.776C1021.91 64.776 1013.08 66.842 1007.01 70.9415C1000.89 75.0794 997.678 81.2301 997.678 89.104C997.678 96.7072 1000.48 103.07 1005.43 107.523C1010.36 111.967 1017.35 114.44 1025.61 114.44C1034.75 114.44 1041.39 112.158 1046.78 106.998V112ZM1031.37 95.448C1028.5 95.448 1026.38 94.7304 1025 93.5462C1023.63 92.38 1022.86 90.661 1022.86 88.384C1022.86 86.0549 1023.81 84.3641 1025.67 83.202C1027.6 81.996 1030.58 81.32 1034.68 81.32C1037.54 81.32 1040.17 81.56 1043.47 82.1584V86.224C1043.47 89.108 1042.37 91.3645 1040.38 92.925C1038.36 94.5087 1035.33 95.448 1031.37 95.448Z"
        stroke={`${props.theme === "dark" ? "#C2C2C6" : "#6E715F"}`}
        strokeWidth="2"
      />
      <path
        d="M943.408 113H944.408V112V79.8551L967.649 112.579L967.948 113H968.464H999.856H1001.94L1000.64 111.374L968.443 71.2395L996.612 35.1433L997.873 33.528H995.824H967.456H966.962L966.662 33.9199L944.408 62.9703V8.60803V7.60803H943.408H918.784H917.784V8.60803V112V113H918.784H943.408Z"
        stroke={`${props.theme === "dark" ? "#C2C2C6" : "#6E715F"}`}
        strokeWidth="2"
      />
      <path
        d="M864.062 112.263L864.263 113H865.027H889.507H890.264L890.469 112.272L912.357 34.8L912.717 33.5281H911.395H887.203H886.425L886.234 34.2817L876.403 72.9496L866.572 34.2817L866.381 33.5281H865.603H840.979H840.212L840.013 34.2694L829.628 73.0485L819.772 34.2817L819.581 33.5281H818.803H794.755H793.436L793.792 34.7983L815.536 112.27L815.741 113H816.499H841.123H841.887L842.088 112.263L853.075 71.8884L864.062 112.263Z"
        stroke={`${props.theme === "dark" ? "#C2C2C6" : "#6E715F"}`}
        strokeWidth="2"
      />
      <path
        d="M770.133 112V113H771.133H791.005H792.005V112V64.192C792.005 54.1797 788.796 46.114 782.754 40.5598C776.723 35.0161 767.994 32.088 757.165 32.088C747.382 32.088 739.001 35.1065 732.871 40.4907C726.738 45.8782 722.923 53.579 722.185 62.8163L722.098 63.896H723.181H745.357H746.238L746.349 63.0226C746.76 59.807 747.907 57.4237 749.648 55.8423C751.385 54.2646 753.824 53.384 757.021 53.384C760.303 53.384 762.721 54.2709 764.317 55.8196C765.908 57.3639 766.821 59.7022 766.821 62.896V65.4663C763.712 65.0045 760.185 64.776 756.445 64.776C745.259 64.776 736.426 66.842 730.361 70.9415C724.24 75.0794 721.029 81.2301 721.029 89.104C721.029 96.7072 723.832 103.07 728.776 107.523C733.71 111.967 740.697 114.44 748.957 114.44C758.104 114.44 764.742 112.158 770.133 106.998V112ZM754.717 95.448C751.848 95.448 749.732 94.7304 748.347 93.5462C746.984 92.38 746.213 90.661 746.213 88.384C746.213 86.0549 747.16 84.3641 749.019 83.202C750.949 81.996 753.933 81.32 758.029 81.32C760.894 81.32 763.52 81.56 766.821 82.1584V86.224C766.821 89.108 765.721 91.3645 763.73 92.925C761.71 94.5087 758.678 95.448 754.717 95.448Z"
        stroke={`${props.theme === "dark" ? "#C2C2C6" : "#6E715F"}`}
        strokeWidth="2"
      />
      <path
        d="M635.609 110.424H634.56L634.61 111.472C635.056 120.752 639.075 128.472 645.764 133.857C652.439 139.231 661.711 142.232 672.617 142.232C684.669 142.232 694.539 138.981 701.41 132.966C708.297 126.938 712.065 118.225 712.065 107.536V34.528V33.528H711.065H688.457H687.457V34.528V39.9981C681.69 34.5323 674.806 32.088 665.705 32.088C646.018 32.088 632.161 48.2235 632.161 70.528C632.161 92.1445 647.199 108.968 666.713 108.968C674.21 108.968 681.002 106.266 685.441 101.557V107.824C685.441 112.346 684.294 115.619 682.198 117.763C680.106 119.903 676.911 121.08 672.473 121.08C668.815 121.08 666.041 120.184 664.092 118.573C662.153 116.97 660.913 114.563 660.505 111.3L660.396 110.424H659.513H635.609ZM671.753 85.512C667.842 85.512 664.708 84.0714 662.538 81.5568C660.355 79.0266 659.073 75.3185 659.073 70.672C659.073 65.9499 660.357 62.1667 662.545 59.582C664.717 57.0146 667.85 55.544 671.753 55.544C675.815 55.544 679.137 57.026 681.451 59.5883C683.774 62.1599 685.153 65.9007 685.153 70.528C685.153 75.0803 683.775 78.8237 681.449 81.4161C679.131 83.9989 675.808 85.512 671.753 85.512Z"
        stroke={`${props.theme === "dark" ? "#C2C2C6" : "#6E715F"}`}
        strokeWidth="2"
      />
      <path
        d="M603.279 112V113H604.279H624.151H625.151V112V64.192C625.151 54.1797 621.942 46.114 615.9 40.5598C609.869 35.0161 601.14 32.088 590.311 32.088C580.528 32.088 572.147 35.1065 566.017 40.4907C559.884 45.8782 556.069 53.579 555.33 62.8163L555.244 63.896H556.327H578.503H579.384L579.495 63.0226C579.906 59.807 581.052 57.4237 582.793 55.8423C584.53 54.2646 586.97 53.384 590.167 53.384C593.449 53.384 595.867 54.2709 597.463 55.8196C599.054 57.3639 599.967 59.7022 599.967 62.896V65.4663C596.858 65.0045 593.331 64.776 589.591 64.776C578.405 64.776 569.572 66.842 563.507 70.9415C557.385 75.0794 554.175 81.2301 554.175 89.104C554.175 96.7072 556.978 103.07 561.922 107.523C566.856 111.967 573.842 114.44 582.103 114.44C591.25 114.44 597.888 112.158 603.279 106.998V112ZM587.863 95.448C584.994 95.448 582.877 94.7304 581.493 93.5462C580.13 92.38 579.359 90.661 579.359 88.384C579.359 86.0549 580.306 84.3641 582.165 83.202C584.095 81.996 587.079 81.32 591.175 81.32C594.04 81.32 596.666 81.56 599.967 82.1584V86.224C599.967 89.108 598.867 91.3645 596.876 92.925C594.856 94.5087 591.823 95.448 587.863 95.448Z"
        stroke={`${props.theme === "dark" ? "#C2C2C6" : "#6E715F"}`}
        strokeWidth="2"
      />
      <path
        d="M515.128 112.538L515.423 113H515.971H542.179H543.179V112V8.60803V7.60803H542.179H517.267H516.267V8.60803V64.9439L479.95 8.06984L479.655 7.60803H479.107H449.875H448.875V8.60803V112V113H449.875H474.787H475.787V112V50.9129L515.128 112.538Z"
        stroke={`${props.theme === "dark" ? "#C2C2C6" : "#6E715F"}`}
        strokeWidth="2"
      />
      <path
        d="M404.488 113H405.488V112V34.528V33.528H404.488H379.864H378.864V34.528V112V113H379.864H404.488ZM391.96 31.496C401.76 31.496 408.8 25.2504 408.8 16.528C408.8 12.1461 407.064 8.34531 404.058 5.64953C401.059 2.96001 396.85 1.41602 391.96 1.41602C387.07 1.41602 382.862 2.96001 379.862 5.64953C376.856 8.34531 375.12 12.1461 375.12 16.528C375.12 25.2504 382.16 31.496 391.96 31.496Z"
        stroke={`${props.theme === "dark" ? "#C2C2C6" : "#6E715F"}`}
        strokeWidth="2"
      />
      <path
        d="M345.086 112V113H346.086H365.958H366.958V112V64.192C366.958 54.1797 363.749 46.114 357.707 40.5598C351.676 35.0161 342.947 32.088 332.118 32.088C322.335 32.088 313.953 35.1065 307.824 40.4907C301.691 45.8782 297.876 53.579 297.137 62.8163L297.051 63.896H298.134H320.31H321.19L321.302 63.0226C321.712 59.807 322.859 57.4237 324.6 55.8423C326.337 54.2646 328.777 53.384 331.974 53.384C335.256 53.384 337.674 54.2709 339.27 55.8196C340.861 57.3639 341.774 59.7022 341.774 62.896V65.4663C338.665 65.0045 335.138 64.776 331.398 64.776C320.212 64.776 311.379 66.842 305.314 70.9415C299.192 75.0794 295.982 81.2301 295.982 89.104C295.982 96.7072 298.785 103.07 303.729 107.523C308.663 111.967 315.649 114.44 323.91 114.44C333.057 114.44 339.695 112.158 345.086 106.998V112ZM329.67 95.448C326.801 95.448 324.684 94.7304 323.3 93.5462C321.937 92.38 321.166 90.661 321.166 88.384C321.166 86.0549 322.113 84.3641 323.972 83.202C325.902 81.996 328.886 81.32 332.982 81.32C335.847 81.32 338.473 81.56 341.774 82.1584V86.224C341.774 89.108 340.673 91.3645 338.683 92.925C336.663 94.5087 333.63 95.448 329.67 95.448Z"
        stroke={`${props.theme === "dark" ? "#C2C2C6" : "#6E715F"}`}
        strokeWidth="2"
      />
      <path
        d="M239.602 113H240.602V112V71.248C240.602 65.5591 241.938 61.8223 243.861 59.5238C245.768 57.2459 248.348 56.264 251.122 56.264C254.597 56.264 257.002 57.4806 258.585 59.7278C260.212 62.0389 261.066 65.5753 261.066 70.384V112V113H262.066H286.69H287.69V112V62.176C287.69 52.5552 284.934 45.016 280.112 39.874C275.285 34.7267 268.488 32.088 260.626 32.088C255.594 32.088 251.584 33.0522 248.095 34.8245C245.319 36.2352 242.91 38.1396 240.602 40.4112V8.60803V7.60803H239.602H214.978H213.978V8.60803V112V113H214.978H239.602Z"
        stroke={`${props.theme === "dark" ? "#C2C2C6" : "#6E715F"}`}
        strokeWidth="2"
      />
      <path
        d="M151.605 113H152.605V112V79.8551L175.846 112.579L176.145 113H176.661H208.053H210.137L208.833 111.374L176.64 71.2395L204.809 35.1433L206.07 33.528H204.021H175.653H175.159L174.859 33.9199L152.605 62.9702V8.60803V7.60803H151.605H126.981H125.981V8.60803V112V113H126.981H151.605Z"
        stroke={`${props.theme === "dark" ? "#C2C2C6" : "#6E715F"}`}
        strokeWidth="2"
      />
      <path
        d="M112.27 113H113.27V112V8.60803V7.60803H112.27H87.3585H86.3585V8.60803V112V113H87.3585H112.27Z"
        stroke={`${props.theme === "dark" ? "#C2C2C6" : "#6E715F"}`}
        strokeWidth="2"
      />
      <path
        d="M76.2321 88.384V87.384H75.2321H30.2961V71.672H70.0481H71.0481V70.672V47.056V46.056H70.0481H30.2961V33.224H74.2241H75.2241V32.224V8.60803V7.60803H74.2241H2.08008H1.08008V8.60803V112V113H2.08008H75.2321H76.2321V112V88.384Z"
        stroke={`${props.theme === "dark" ? "#C2C2C6" : "#6E715F"}`}
        strokeWidth="2"
      />
    </svg>
  );
}
