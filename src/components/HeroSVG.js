import React, {useEffect, useRef} from 'react'
import {gsap} from 'gsap';

const HeroSVG = () => {

    let logo = useRef(null);


    useEffect(() => {
        const element = logo.current;

         gsap.fromTo(
            element,
            {
                opacity: 0,
                x: 200,
                duration: 2
            },
            {
                opacity: 1,
                x: 0 
            }
    )
    }, [])

    return (
        <svg viewBox="0 0 1079 751" fill="none" ref={logo} className="w-3/6 h-3/6 hidden md:block">
        <g id="Group 1">
          <path id="Vector" opacity="0.1" d="M930.93 417.77C896.83 473.54 902.86 549.29 917.47 609.02C922.36 629.02 928.01 650.11 923.66 672.52C918.34 699.92 899.28 721.52 880.03 733.88C844.93 756.43 804.97 755.97 776.03 732.69C750.98 712.57 734.58 677.37 709.03 658.34C666.22 626.49 607.26 646.16 555.97 676.34C519.68 697.68 479.74 724.69 446.37 709.64C422.89 699.05 408.37 668.95 401.64 636.15C398.4 620.32 396.48 603.02 388.95 590.97C384.47 583.81 378.29 579.03 371.88 575.12C313.37 539.45 233.88 569.82 177.49 529.39C139.4 502.08 117.91 445.45 111.04 384.82C104.17 324.19 110.25 259.24 117.83 195.29C123.25 149.85 130.53 101.19 154.17 64.14C179.17 24.95 218.41 7.33001 252.43 10.84C286.45 14.35 315.91 36.18 341.27 62.84C372.97 96.16 401.49 138.77 442.65 149.38C470.65 156.61 501.37 147.97 531.2 143.03C581.07 134.77 630.2 136.87 678.96 139.68C725.65 142.37 772.63 145.79 816.08 162.31C846.83 174 870.36 198.51 899.03 214.39C917.72 224.74 938.85 225.97 956.25 239.81C977.68 256.81 996.15 288.41 987.37 328.42C979.02 366.47 949.02 388.18 930.93 417.77Z" fill="#6C63FF" />
          <path id="Vector_2" d="M294.3 247.41C294.3 247.41 147.16 214.51 334.38 22.02C334.38 22.02 415.08 98.51 385.48 193.59C373.58 231.82 335.28 255.42 296.48 247.86L294.3 247.41Z" fill="#6C63FF" />
          <path id="Vector_3" opacity="0.4" d="M294.3 247.41C291.07 246.69 150.3 211.26 334.38 22.02C334.38 22.02 415.08 98.51 385.48 193.59C373.58 231.82 335.28 255.42 296.48 247.86L294.3 247.41Z" fill="white" />
          <path id="Vector_4" d="M296.25 248.51C296.25 248.51 373.97 131.43 334.4 22.03" stroke="#535461" strokeMiterlimit={10} />
          <path id="Vector_5" d="M899.61 361.1C899.61 361.1 874.25 258.99 912.68 186.29C928.82 155.78 935.23 121.02 929.84 86.93C927.253 70.7591 923.189 54.8593 917.7 39.43" stroke="#535461" strokeWidth={2} strokeMiterlimit={10} />
          <path id="Vector_6" d="M944.15 267.72C933.9 274.64 891.64 276.16 891.64 276.16C891.64 276.16 908.83 237.53 919.08 230.6C924.004 227.401 929.986 226.264 935.741 227.432C941.495 228.6 946.56 231.981 949.846 236.847C953.133 241.713 954.377 247.674 953.312 253.448C952.246 259.222 948.956 264.347 944.15 267.72Z" fill="#6C63FF" />
          <path id="Vector_7" d="M882.44 90.29C890.93 99.29 931.85 109.97 931.85 109.97C931.85 109.97 923.49 68.52 915 59.53C910.891 55.341 905.302 52.9317 899.435 52.8201C893.568 52.7084 887.892 54.9035 883.626 58.9331C879.361 62.9628 876.847 68.5054 876.625 74.3691C876.403 80.2329 878.491 85.9495 882.44 90.29V90.29Z" fill="#6C63FF" />
          <path id="Vector_8" d="M854.58 192.74C865.38 198.74 907.58 196.74 907.58 196.74C907.58 196.74 887.25 159.68 876.44 153.65C871.269 150.919 865.235 150.318 859.627 151.976C854.019 153.634 849.282 157.42 846.428 162.524C843.574 167.628 842.828 173.646 844.352 179.292C845.875 184.938 849.546 189.764 854.58 192.74V192.74Z" fill="#6C63FF" />
          <path id="Vector_9" d="M841.17 296.07C850.79 303.84 892.76 308.97 892.76 308.97C892.76 308.97 878.94 268.97 869.32 261.23C864.687 257.636 858.829 256.002 853.004 256.679C847.18 257.357 841.853 260.291 838.168 264.852C834.482 269.413 832.733 275.237 833.294 281.074C833.855 286.911 836.683 292.295 841.17 296.07V296.07Z" fill="#6C63FF" />
          <path id="Vector_10" d="M944.15 267.72C933.9 274.64 891.64 276.16 891.64 276.16C891.64 276.16 908.83 237.53 919.08 230.6C924.004 227.401 929.986 226.264 935.741 227.432C941.495 228.6 946.56 231.981 949.846 236.847C953.133 241.713 954.377 247.674 953.312 253.448C952.246 259.222 948.956 264.347 944.15 267.72Z" fill="#FC6681" />
          <path id="Vector_11" d="M882.44 90.29C890.93 99.29 931.85 109.97 931.85 109.97C931.85 109.97 923.49 68.52 915 59.53C910.891 55.341 905.302 52.9317 899.435 52.8201C893.568 52.7084 887.892 54.9035 883.626 58.9331C879.361 62.9628 876.847 68.5054 876.625 74.3691C876.403 80.2329 878.491 85.9495 882.44 90.29V90.29Z" fill="#FC6681" />
          <path id="Vector_12" d="M854.58 192.74C865.38 198.74 907.58 196.74 907.58 196.74C907.58 196.74 887.25 159.68 876.44 153.65C871.269 150.919 865.235 150.318 859.627 151.976C854.019 153.634 849.282 157.42 846.428 162.524C843.574 167.628 842.828 173.646 844.352 179.292C845.875 184.938 849.546 189.764 854.58 192.74V192.74Z" fill="#FC6681" />
          <path id="Vector_13" d="M841.17 296.07C850.79 303.84 892.76 308.97 892.76 308.97C892.76 308.97 878.94 268.97 869.32 261.23C864.687 257.636 858.829 256.002 853.004 256.679C847.18 257.357 841.853 260.291 838.168 264.852C834.482 269.413 832.733 275.237 833.294 281.074C833.855 286.911 836.683 292.295 841.17 296.07V296.07Z" fill="#FC6681" />
          <path id="Vector_14" d="M806.77 295.15C806.77 295.15 913.13 206.02 936.77 161.07C960.41 116.12 990.54 77.4 990.54 77.4" stroke="#535461" strokeWidth={2} strokeMiterlimit={10} />
          <path id="Vector_15" d="M906.25 128.29L932.73 167.95C932.73 167.95 880.99 171.71 906.25 128.29Z" fill="#6C63FF" />
          <path id="Vector_16" d="M328.86 318.03C328.86 318.03 371.86 286.03 317.86 174.03C317.86 174.03 245.86 85.03 317.86 1.03C317.86 1.03 160.86 5.03 163.86 151.03C166.86 297.03 242.36 318.03 242.36 318.03H328.86Z" fill="#6C63FF" />
          <path id="Vector_17" d="M288.7 318.03C288.7 318.03 277.87 241.03 248.87 194.03C243.142 184.524 239.024 174.138 236.68 163.29C226.99 120.66 240.81 76.08 272.12 45.57L317.87 1" stroke="#535461" strokeWidth={2} strokeMiterlimit={10} />
          <path id="Vector_18" d="M418.41 60.98C418.41 60.98 428.29 73.9 413.85 93.4C399.41 112.9 387.51 129.4 392.32 141.52C392.32 141.52 414.1 105.3 431.83 104.79C449.56 104.28 437.91 82.76 418.41 60.98Z" fill="#6C63FF" />
          <path id="Vector_19" opacity="0.1" d="M418.41 60.98C419.265 62.2286 419.938 63.5922 420.41 65.03C437.71 85.35 446.92 104.32 430.3 104.8C414.81 105.24 396.23 132.94 391.78 139.93C391.927 140.469 392.104 141 392.31 141.52C392.31 141.52 414.09 105.3 431.82 104.79C449.55 104.28 437.91 82.76 418.41 60.98Z" fill="black" />
          <path id="Vector_20" d="M366.25 60.98C366.25 60.98 356.37 73.9 370.81 93.4C385.25 112.9 397.15 129.4 392.34 141.52C392.34 141.52 370.56 105.3 352.83 104.79C335.1 104.28 346.73 82.76 366.25 60.98Z" fill="#6C63FF" />
          <path id="Vector_21" opacity="0.1" d="M366.25 60.98C365.395 62.2286 364.722 63.5922 364.25 65.03C346.95 85.35 337.74 104.32 354.36 104.8C369.85 105.24 388.43 132.94 392.88 139.93C392.733 140.469 392.556 141 392.35 141.52C392.35 141.52 370.54 105.29 352.81 104.8C335.08 104.31 346.73 82.76 366.25 60.98Z" fill="black" />
          <path id="Vector_22" d="M1078.5 615.9L990.89 230.42H958.34C957.04 215.69 956.17 201.42 955.84 187.98C955.84 187.98 837.84 213.8 743.74 139.1C649.64 64.4 539.01 145.56 539.01 145.56L538.58 145.25V145.1V145.29C530.9 139.85 424.92 67.22 334.31 139.16C240.25 213.86 122.21 188.04 122.21 188.04C121.88 201.65 121 216.04 119.67 230.91H89.47L0 617.29C0 617.29 363.7 630.91 491.15 618.35C495.72 628.01 515.42 635.27 539.02 635.27C565.54 635.27 587.11 626.1 587.86 614.67C687.07 622.22 900.55 634.29 1078.5 615.9Z" fill="url(#paint0_linear)" />
          <path id="Vector_23" d="M98.84 233.81L11.25 612.15C11.25 612.15 493.42 630.21 532.25 604.93C532.25 604.93 831.58 635.18 1067.25 610.8L981.47 233.37L98.84 233.81Z" fill="#E2E2EC" />
          <path id="Vector_24" opacity="0.1" d="M128.64 246.88L46.98 599.61C46.98 599.61 496.52 616.45 532.72 592.88C532.72 592.88 811.79 621.08 1031.51 598.35L951.51 246.46L128.64 246.88Z" fill="black" />
          <path id="Vector_25" d="M947.16 191.83C947.16 191.83 831.58 217.11 739.48 143.97C647.38 70.83 539.02 150.29 539.02 150.29C539.02 150.29 430.67 70.83 338.57 143.97C246.47 217.11 130.89 191.83 130.89 191.83C127.25 339.01 58.66 577.39 58.66 577.39C58.66 577.39 185.07 611.7 352.12 542.18C519.17 472.66 539.03 566.56 539.03 566.56C539.03 566.56 558.89 472.65 725.94 542.18C892.99 611.71 1019.4 577.39 1019.4 577.39C1019.4 577.39 950.77 339.01 947.16 191.83Z" fill="#F1F2FB" />
          <path id="Vector_26" opacity="0.1" d="M316 569.29C316 569.29 468.6 534.98 539 585.54C539 585.54 606.72 524.14 763.83 572" fill="black" />
          <path id="Vector_27" d="M539.02 629.76C565.452 629.76 586.88 620.461 586.88 608.99C586.88 597.519 565.452 588.22 539.02 588.22C512.588 588.22 491.16 597.519 491.16 608.99C491.16 620.461 512.588 629.76 539.02 629.76Z" fill="#E8EAF8" />
          <path id="Vector_28" opacity="0.1" d="M538.57 149.84C538.57 149.84 572.88 324.11 539.47 569.71Z" fill="black" />
          <path id="Vector_29" opacity="0.1" d="M163.95 246.46C163.95 246.46 235.82 263.16 298.03 246.46C360.24 229.76 474.46 175.13 512.03 246.46" stroke="black" strokeWidth={4} strokeMiterlimit={10} />
          <path id="Vector_30" opacity="0.1" d="M163.95 277.16C163.95 277.16 235.82 293.86 298.03 277.16C360.24 260.46 494.94 261.36 512.03 277.16" stroke="black" strokeWidth={4} strokeMiterlimit={10} />
          <path id="Vector_31" opacity="0.1" d="M163.95 331.29C163.95 331.29 235.82 347.99 298.03 331.29C360.24 314.59 474.46 259.96 512.03 331.29" stroke="black" strokeWidth={4} strokeMiterlimit={10} />
          <path id="Vector_32" opacity="0.1" d="M163.95 362.03C163.95 362.03 235.82 378.73 298.03 362.03C360.24 345.33 494.94 346.23 512.03 362.03" stroke="black" strokeWidth={4} strokeMiterlimit={10} />
          <path id="Vector_33" opacity="0.1" d="M914.1 246.46C914.1 246.46 842.23 263.16 780.02 246.46C717.81 229.76 603.59 175.13 566.02 246.46" stroke="black" strokeWidth={4} strokeMiterlimit={10} />
          <path id="Vector_34" opacity="0.1" d="M914.1 277.16C914.1 277.16 842.23 293.86 780.02 277.16C717.81 260.46 583.11 261.36 566.02 277.16" stroke="black" strokeWidth={4} strokeMiterlimit={10} />
          <path id="Vector_35" opacity="0.1" d="M914.1 331.29C914.1 331.29 842.23 347.99 780.02 331.29C717.81 314.59 603.59 259.96 566.02 331.29" stroke="black" strokeWidth={4} strokeMiterlimit={10} />
          <path id="Vector_36" opacity="0.1" d="M914.1 362.03C914.1 362.03 842.23 378.73 780.02 362.03C717.81 345.33 583.11 346.23 566.02 362.03" stroke="black" strokeWidth={4} strokeMiterlimit={10} />
          <path id="Vector_37" d="M915.56 687.08C918.56 684.79 921.41 682.08 922.28 678.81C922.726 677.073 922.488 675.231 921.615 673.664C920.742 672.098 919.302 670.926 917.59 670.39C913.28 669.05 908.68 671.48 905.18 673.94C901.68 676.4 897.69 679.21 893.12 678.69C897.85 675.27 900.12 669.69 898.8 664.69C898.578 663.601 898.026 662.606 897.22 661.84C894.83 659.75 890.49 660.65 887.63 662.29C878.52 667.52 875.98 677.61 875.93 686.7C875.01 683.42 875.79 680.01 875.76 676.64C875.73 673.27 874.61 669.55 871.13 667.74C868.904 666.778 866.494 666.317 864.07 666.39C859.98 666.27 855.41 666.6 852.62 669.05C849.15 672.05 850.05 677.18 853.07 680.52C856.09 683.86 860.69 685.96 864.92 688.27C868.15 690.03 871.41 692.08 873.39 694.86C873.643 695.229 873.855 695.624 874.02 696.04H899.69C905.33 693.72 910.661 690.711 915.56 687.08V687.08Z" fill="#6C63FF" />
          <path id="Vector_38" d="M738.07 326.98C738.07 326.98 738.32 328.42 738.74 330.98C738.52 331.38 738.3 331.78 738.07 332.17C729.87 345.97 728.61 365.85 729.38 382.17C730.098 395.333 732.405 408.361 736.25 420.97C740.94 437.358 743.297 454.325 743.25 471.37C746.495 474.879 750.395 477.719 754.73 479.73C754.95 480.4 755.18 481.08 755.38 481.73C759.159 494.325 761.714 507.255 763.01 520.34L765.59 553C765.59 553 785.36 626.92 791.37 640.67C795.65 650.45 794.71 670.67 793.81 681.51C791.24 688.8 788.11 695.75 785.35 696.51C780.35 697.93 775.35 709.97 782.63 716.02C783.175 716.473 783.761 716.874 784.38 717.22L784.67 717.38L785.2 717.65L785.98 718L786.38 718.15L787.21 718.43L787.57 718.54C787.96 718.65 788.36 718.76 788.79 718.86C793.859 719.857 799.117 719.025 803.63 716.51C809.11 715.69 813.98 712.75 817.63 709.78L817.53 714.99H823.53L823.25 704.58C824.33 703.37 824.93 702.58 824.93 702.58C824.93 702.58 825.11 696.29 825.8 688.97L825.36 712.46H831.36L829.74 669.11C830.043 668.462 830.444 667.865 830.93 667.34C835.93 662.34 827.29 646.21 822.82 643.52C824.82 632.92 832.45 617.61 841.25 588.26C854.14 545.26 837.81 503.17 837.81 503.17V470.17C842.14 468.31 844.69 467.04 844.69 467.04C844.69 467.04 838.69 431.8 844.69 406.88C848.58 390.77 849.59 376.46 846.34 362.77C850.66 347.89 854.15 336.4 854.15 336.4L860.15 274.52C861.68 265.23 862.71 257.28 863.37 250.52C863.48 249.68 863.56 248.83 863.6 247.99C864.7 235.4 864.46 226.99 863.74 221.49C864.09 218.969 864.21 216.422 864.1 213.88C864.239 212.575 864.293 211.262 864.26 209.95C865.12 208.95 865.96 207.95 866.76 206.95C868.889 204.306 870.698 201.419 872.15 198.35C878.76 185.88 878.95 170.65 869.72 159.66C864.04 152.89 862.27 145.6 857.36 138.39C852.87 131.79 852.02 123.88 850.94 116.28C849.603 106.833 847.767 97.4632 845.44 88.21C844.75 85.49 840.97 83.82 839.09 81.56C835.46 77.19 824.86 77.34 818.75 76.37C808.49 74.74 797.38 73.22 788.04 77.25C781.54 80.06 776.87 85.17 771.79 89.68C766.32 94.53 755.12 96.87 753.38 102.68C751.83 104.9 751.75 107.68 754.38 111.4C756.92 114.98 760.92 117.54 764.65 120.22C765.13 120.56 765.58 120.92 766.05 121.22C764.786 128.937 766.032 136.856 769.605 143.812C773.179 150.768 778.89 156.393 785.9 159.86C785.8 160.51 785.69 161.15 785.57 161.78C784.473 167.387 782.962 172.906 781.05 178.29C779.94 181.61 767.1 187.41 758.05 191.13C757.003 190.055 755.757 189.196 754.38 188.6C747.5 186.88 724.3 199.77 722.58 204.07C722.1 205.27 723.36 208.59 725.41 212.77C725.546 214.675 725.857 216.563 726.34 218.41C725.83 227.21 726.75 241.41 731.18 264.24L738.07 326.98ZM834.57 336.65C834.25 336.04 833.92 335.42 833.57 334.78C824.02 315.47 818.35 284.25 832.03 265.63C833.25 265.76 834.47 265.88 835.69 265.96C836.5 291.3 836.03 332.96 836.03 332.96C836.03 332.96 835.49 334.36 834.57 336.65ZM800.48 483.83C802.42 493.58 804.7 504.91 806.83 515.21C809.363 527.204 809.192 539.611 806.33 551.53L798.25 527.29L796.37 484.64L796.25 482.89C797.55 482.67 798.84 482.433 800.12 482.18L800.48 483.83Z" fill="url(#paint1_linear)" />
          <path id="Vector_39" d="M806.72 513.35C809.214 525.155 809.047 537.368 806.23 549.1C805.726 551.33 805.058 553.519 804.23 555.65L806.51 648.35L806.77 658.86C808.882 659.304 811.019 659.618 813.17 659.8C815.165 660.007 817.175 660.007 819.17 659.8C821.17 659.55 822.93 658.95 823.87 657.8C824.81 656.65 825.01 654.8 823.68 652.11C822.217 649.154 821.651 645.834 822.05 642.56C822.13 641.64 822.28 640.67 822.46 639.67C824.46 629.24 831.93 614.16 840.6 585.28C853.29 542.98 837.22 501.53 837.22 501.53V462.59L795.77 458.36C795.77 458.36 797.77 468.84 800.52 482.46C802.38 492.06 804.62 503.21 806.72 513.35Z" fill="#FDC2CC" />
          <path id="Vector_40" opacity="0.1" d="M806.72 513.35C809.214 525.155 809.047 537.368 806.23 549.1C805.726 551.33 805.058 553.519 804.23 555.65L806.51 648.35L806.77 658.86C808.882 659.304 811.019 659.618 813.17 659.8C815.165 660.007 817.175 660.007 819.17 659.8C821.17 659.55 822.93 658.95 823.87 657.8C824.81 656.65 825.01 654.8 823.68 652.11C822.217 649.154 821.651 645.834 822.05 642.56C822.13 641.64 822.28 640.67 822.46 639.67C824.46 629.24 831.93 614.16 840.6 585.28C853.29 542.98 837.22 501.53 837.22 501.53V462.59L795.77 458.36C795.77 458.36 797.77 468.84 800.52 482.46C802.38 492.06 804.62 503.21 806.72 513.35Z" fill="black" />
          <path id="Vector_41" d="M749.19 462.59C751.924 468.352 754.221 474.313 756.06 480.42C759.78 492.816 762.295 505.541 763.57 518.42L766.11 550.57C766.11 550.57 785.57 623.32 791.49 636.86C795.7 646.49 794.78 666.39 793.89 677.08C793.53 681.42 793.18 684.24 793.18 684.24L801.81 673.67L813.12 659.8L818.28 653.47L819.41 652.09C818.045 649.253 816.94 646.297 816.11 643.26C816.11 643.26 816.11 643.26 816.11 643.26C813.493 633.996 811.769 624.503 810.96 614.91C808.42 588.69 807.58 553.15 807.58 553.15L806.24 549.15L798.24 525.24L796.39 483.24L795.7 467.69L749.19 462.59Z" fill="#FDC2CC" />
          <path id="Vector_42" d="M814.63 645.08C810.068 651.026 806.656 657.772 804.57 664.97C801.88 674.12 797.15 688.18 793.18 689.31C787.26 691 781.34 707.92 796.56 711.31C811.78 714.7 824.48 697.77 824.48 697.77C824.48 697.77 825.33 668.16 830.4 663.09C835.47 658.02 826.17 641.09 821.94 639.4C820.25 638.71 817.39 641.51 814.63 645.08Z" fill="#5F5D7E" />
          <path id="Vector_43" opacity="0.1" d="M791.49 708.77C795.469 709.604 799.606 709.227 803.37 707.69C808.005 705.835 812.022 702.711 814.962 698.676C817.902 694.642 819.644 689.86 819.99 684.88C820.71 675.82 822.23 663.64 825.32 660.55C829.32 656.55 824.32 645.15 820.02 639.7C820.297 639.514 820.612 639.39 820.942 639.339C821.272 639.287 821.609 639.308 821.93 639.4C826.16 641.09 835.47 658.01 830.39 663.09C825.31 668.17 824.47 697.77 824.47 697.77C824.47 697.77 811.8 714.69 796.57 711.29C794.355 710.862 792.276 709.905 790.51 708.5C790.83 708.6 791.15 708.69 791.49 708.77Z" fill="black" />
          <path id="Vector_44" d="M829.2 663.8L830.83 707.5H824.91L825.73 663.83C825.753 663.39 825.949 662.976 826.274 662.679C826.6 662.381 827.029 662.224 827.47 662.24C827.904 662.226 828.327 662.381 828.649 662.671C828.972 662.962 829.169 663.367 829.2 663.8V663.8Z" fill="#5F5D7E" />
          <path id="Vector_45" opacity="0.15" d="M829.2 663.8L830.83 707.5H824.91L825.73 663.83C825.753 663.39 825.949 662.976 826.274 662.679C826.6 662.381 827.029 662.224 827.47 662.24C827.904 662.226 828.327 662.381 828.649 662.671C828.972 662.962 829.169 663.367 829.2 663.8V663.8Z" fill="black" />
          <path id="Vector_46" d="M807.02 647.62C802.458 653.566 799.046 660.312 796.96 667.51C794.27 676.66 789.54 690.72 785.57 691.85C779.65 693.54 773.73 710.46 788.95 713.85C804.17 717.24 816.87 700.29 816.87 700.29C816.87 700.29 817.72 670.68 822.79 665.61C827.86 660.54 818.56 643.61 814.33 641.92C812.62 641.29 809.78 644.05 807.02 647.62Z" fill="#5F5D7E" />
          <path id="Vector_47" opacity="0.1" d="M783.88 711.29C787.859 712.124 791.997 711.747 795.76 710.21C800.395 708.355 804.412 705.231 807.352 701.196C810.292 697.162 812.034 692.38 812.38 687.4C813.1 678.34 814.62 666.16 817.71 663.07C821.71 659.07 816.71 647.67 812.41 642.22C812.687 642.034 813.002 641.91 813.332 641.859C813.662 641.807 813.999 641.828 814.32 641.92C818.55 643.61 827.86 660.53 822.78 665.61C817.7 670.69 816.87 700.29 816.87 700.29C816.87 700.29 804.18 717.21 788.95 713.83C786.735 713.402 784.656 712.445 782.89 711.04C783.25 711.14 783.54 711.23 783.88 711.29Z" fill="black" />
          <path id="Vector_48" d="M821.58 666.29L823.21 709.99H817.25L818.07 666.32C818.093 665.88 818.289 665.466 818.614 665.169C818.94 664.871 819.369 664.714 819.81 664.73V664.73C820.251 664.705 820.684 664.855 821.015 665.147C821.346 665.439 821.549 665.85 821.58 666.29V666.29Z" fill="#5F5D7E" />
          <path id="Vector_49" opacity="0.15" d="M821.58 666.29L823.21 709.99H817.25L818.07 666.32C818.093 665.88 818.289 665.466 818.614 665.169C818.94 664.871 819.369 664.714 819.81 664.73V664.73C820.251 664.705 820.684 664.855 821.015 665.147C821.346 665.439 821.549 665.85 821.58 666.29V666.29Z" fill="black" />
          <path id="Vector_50" d="M750.04 197.81L783.88 251.11L823.64 256.19C823.64 256.19 848.17 207.97 847.33 205.43C846.49 202.89 833.79 197.82 821.95 188.51C810.11 179.2 824.49 140.29 824.49 140.29L785.58 143.67C785.73 144.19 785.88 144.67 785.99 145.25C787.54 151.82 786.99 159.11 785.8 165.52C784.715 171.029 783.224 176.451 781.34 181.74C779.65 186.81 750.04 197.81 750.04 197.81Z" fill="#FDC2CC" />
          <path id="Vector_51" opacity="0.1" d="M795.72 458.36C795.72 458.36 797.72 468.84 800.47 482.46C813.065 479.78 825.362 475.855 837.18 470.74V462.59L795.72 458.36Z" fill="black" />
          <path id="Vector_52" opacity="0.1" d="M749.19 462.59C751.924 468.352 754.221 474.313 756.06 480.42C767.83 485.73 782.47 485.58 796.4 483.21L795.71 467.66L749.19 462.59Z" fill="black" />
          <path id="Vector_53" d="M739.04 333.16C730.97 346.75 729.73 366.3 730.49 382.42C731.197 395.373 733.467 408.192 737.25 420.6C741.87 436.73 744.193 453.431 744.15 470.21C772.91 501.51 843.97 465.98 843.97 465.98C843.97 465.98 838.05 431.3 843.97 406.76C848.09 389.7 848.97 374.67 844.79 360.27C842.866 353.69 840.028 347.412 836.36 341.62C835.24 339.84 834.15 337.87 833.1 335.76C823.3 315.94 817.64 283.38 833.4 265.42C835.038 263.551 836.883 261.873 838.9 260.42C852.64 250.47 858.9 239.42 861.54 230.07C863.191 224.261 863.533 218.157 862.54 212.2C860.85 202.89 837.16 194.43 837.16 194.43C838.01 222.35 802.48 246.03 802.48 246.03C802.48 246.03 761.87 193.58 755.11 191.89C748.35 190.2 725.5 202.89 723.81 207.12C722.12 211.35 742.42 242.65 742.42 242.65C742.42 242.65 755.12 306.09 739.04 333.16Z" fill="#D39999" />
          <path id="Vector_54" opacity="0.1" d="M838.87 260.41C852.61 250.46 858.87 239.41 861.51 230.06C860.85 216.06 857.51 213.89 857.51 213.89C857.51 213.89 829.56 240.95 832.1 250.29C832.68 252.44 833.1 258.06 833.37 265.45C835.006 263.567 836.851 261.876 838.87 260.41V260.41Z" fill="black" />
          <path id="Vector_55" opacity="0.1" d="M791.49 453.29C797.41 471.06 827.02 439.75 827.87 426.22C828.41 417.56 837.96 383.61 844.76 360.28C842.836 353.7 839.999 347.422 836.33 341.63C835.21 339.85 834.12 337.88 833.07 335.77C829.86 343.66 816.97 376 817.72 385.62C818.57 396.62 812.64 412.69 812.64 412.69C812.64 412.69 785.57 435.52 791.49 453.29Z" fill="black" />
          <path id="Vector_56" d="M859.17 213.88C859.17 213.88 868.48 219.8 859.17 276.48L853.25 337.39C853.25 337.39 830.41 412.68 829.56 426.22C828.71 439.76 799.11 471.05 793.18 453.29C787.25 435.53 814.33 412.68 814.33 412.68C814.33 412.68 820.25 396.61 819.41 385.61C818.57 374.61 835.48 334.01 835.48 334.01C835.48 334.01 836.33 259.57 833.79 250.26C831.25 240.95 859.17 213.88 859.17 213.88Z" fill="#FDC2CC" />
          <path id="Vector_57" opacity="0.1" d="M733.97 207.11C733.97 207.11 722.97 209.65 733.97 266.33L740.74 328.09C740.74 328.09 755.97 416.92 755.12 427.09C754.27 437.26 788.12 463.47 790.65 449.09C793.18 434.71 773.73 411.02 773.73 411.02C773.73 411.02 765.25 392.38 765.25 357.69L763.56 329.77L751.73 229.11L733.97 207.11Z" fill="black" />
          <path id="Vector_58" d="M732.25 207.11C732.25 207.11 721.25 209.65 732.25 266.33L739.02 328.09C739.02 328.09 754.25 416.92 753.4 427.09C752.55 437.26 786.4 463.47 788.93 449.09C791.46 434.71 772.01 411.02 772.01 411.02C772.01 411.02 763.55 392.41 763.55 357.72L761.86 329.8L750.04 229.11L732.25 207.11Z" fill="#FDC2CC" />
          <path id="Vector_59" opacity="0.1" d="M726.78 210.07C726.78 210.07 721.7 237.14 757.23 246.45C792.76 255.76 753 214.29 753 214.29C753 214.29 739.47 194 726.78 210.07Z" fill="black" />
          <path id="Vector_60" d="M727.62 209.23C727.62 209.23 722.55 236.29 758.08 245.6C793.61 254.91 753.85 213.45 753.85 213.45C753.85 213.45 740.31 193.15 727.62 209.23Z" fill="#D39999" />
          <path id="Vector_61" opacity="0.1" d="M862.98 210.07C862.98 210.07 868.06 237.14 832.53 246.45C797 255.76 836.75 214.29 836.75 214.29C836.75 214.29 850.25 194 862.98 210.07Z" fill="black" />
          <path id="Vector_62" d="M862.13 209.23C862.13 209.23 867.25 236.29 831.68 245.6C796.11 254.91 835.91 213.45 835.91 213.45C835.91 213.45 849.44 193.15 862.13 209.23Z" fill="#D39999" />
          <path id="Vector_63" opacity="0.1" d="M785.8 165.51C790.47 166.87 795.7 155.93 801.22 155.93C807.07 155.93 812.58 167.64 817.46 165.16C818.883 157.274 820.95 149.518 823.64 141.97L785.99 145.29C787.53 151.82 786.99 159.1 785.8 165.51Z" fill="black" />
          <path id="Vector_64" d="M802.07 167.35C821.925 167.35 838.02 151.255 838.02 131.4C838.02 111.545 821.925 95.45 802.07 95.45C782.215 95.45 766.12 111.545 766.12 131.4C766.12 151.255 782.215 167.35 802.07 167.35Z" fill="#FDC2CC" />
          <path id="Vector_65" opacity="0.1" d="M755.09 115.88C757.59 119.4 761.53 121.88 765.2 124.56C769.737 127.81 774.022 131.396 778.02 135.29C780.845 137.871 783.262 140.865 785.19 144.17C788.04 149.49 788.42 155.51 788.76 161.37L792.25 221.9C792.48 225.9 792.71 229.99 791.69 233.9C790.656 237.231 789.201 240.417 787.36 243.38C782.75 251.56 778.01 259.9 770.59 266.38C768.11 268.53 765.09 271.31 766.4 274.13C767.46 276.4 770.72 277.13 773.52 277.46C785.27 279.04 798.29 280.39 808.18 274.66C811.91 272.5 815 269.4 819.18 268.06C825 266.21 831.42 268.14 837.62 268.13C844.2 268.13 850.48 265.94 856.62 263.78C857.798 263.482 858.876 262.875 859.74 262.02C860.23 261.309 860.536 260.488 860.63 259.63C861.56 254.72 862.44 249.63 860.92 244.82C859.27 239.61 854.92 235.1 854.43 229.72C853.79 222.24 860.69 216.15 865.65 210C876.21 196.91 878.56 178.06 867.72 165.15C862.13 158.49 860.38 151.31 855.55 144.22C851.13 137.73 850.29 129.94 849.23 122.46C847.911 113.161 846.102 103.938 843.81 94.83C843.14 92.15 839.41 90.51 837.56 88.28C833.98 83.98 823.56 84.13 817.56 83.17C807.46 81.57 796.56 80.07 787.33 84.04C780.93 86.8 776.33 91.84 771.33 96.27C764.25 102.59 747.07 104.57 755.09 115.88Z" fill="black" />
          <path id="Vector_66" d="M755.94 114.19C758.44 117.71 762.38 120.19 766.05 122.87C770.587 126.126 774.873 129.72 778.87 133.62C781.695 136.201 784.112 139.195 786.04 142.5C788.89 147.82 789.27 153.84 789.61 159.7L793.13 220.21C793.36 224.21 793.59 228.3 792.57 232.21C791.536 235.541 790.081 238.727 788.24 241.69C783.63 249.87 778.89 258.21 771.47 264.69C768.99 266.84 765.97 269.62 767.28 272.44C768.34 274.71 771.6 275.44 774.4 275.77C786.15 277.35 799.17 278.7 809.06 272.97C812.79 270.81 815.88 267.71 820.06 266.37C825.88 264.52 832.3 266.45 838.5 266.44C845.08 266.44 851.36 264.25 857.5 262.09C858.678 261.792 859.756 261.185 860.62 260.33C861.11 259.619 861.416 258.798 861.51 257.94C862.44 253.03 863.32 247.94 861.8 243.13C860.15 237.92 855.8 233.41 855.31 228.03C854.67 220.55 861.57 214.46 866.53 208.31C877.09 195.22 879.44 176.37 868.6 163.46C863.01 156.8 861.26 149.62 856.43 142.53C852.01 136.04 851.17 128.25 850.11 120.77C848.791 111.471 846.982 102.248 844.69 93.14C844.02 90.46 840.29 88.82 838.44 86.59C834.86 82.29 824.44 82.44 818.44 81.48C808.34 79.88 797.44 78.38 788.21 82.35C781.81 85.11 777.21 90.15 772.21 94.58C765.05 100.9 747.92 102.88 755.94 114.19Z" fill="#865A61" />
        </g>
        <defs>
          <linearGradient id="paint0_linear" x1="539.25" y1="635.26" x2="539.25" y2="107.52" gradientUnits="userSpaceOnUse">
            <stop stopColor="#808080" stopOpacity="0.25" />
            <stop offset="0.54" stopColor="#808080" stopOpacity="0.12" />
            <stop offset={1} stopColor="#808080" stopOpacity="0.1" />
          </linearGradient>
          <linearGradient id="paint1_linear" x1={-139074} y1={521593} x2={-139074} y2={106065} gradientUnits="userSpaceOnUse">
            <stop stopColor="#808080" stopOpacity="0.25" />
            <stop offset="0.54" stopColor="#808080" stopOpacity="0.12" />
            <stop offset={1} stopColor="#808080" stopOpacity="0.1" />
          </linearGradient>
        </defs>
      </svg>
    )
}

export default HeroSVG
