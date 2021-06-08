import { FC, CSSProperties } from 'react';
import cn from 'classnames';
import styles from './Icons.module.scss';

type Props = {
  className?: string;
  style?: CSSProperties;
};

export const IconArrowDown: FC<Props> = ({ className, ...rest }) => (
  <svg className={cn(styles.icon, styles.iconArrowDown, className)} {...rest}>
    <path
      d="M2.5 4.5l3.5 3 3.5-3"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export const HeaderLogo: FC<Props> = ({ className, ...rest }) => (
  <svg className={cn(styles.icon, styles.HeaderLogo, className)} {...rest}>
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      fill="#0c1142"
      d="M17.6895 14.0285L24.8618 1.25458C25.0299 0.96945 25.0299 0.684318 24.8618 0.399185C24.6937 0.171079 24.4136 0 24.1334 0H9.34039C9.06022 0 8.78005 0.171079 8.61195 0.399185L0.991311 13.5723C0.823209 13.8574 0.823209 14.1996 0.991311 14.4277L8.61195 27.6008C8.78005 27.8859 9.06022 28 9.34039 28H24.1334C24.4136 28 24.6937 27.8289 24.8618 27.6008C25.0299 27.3157 25.0299 27.0306 24.8618 26.7454L17.6895 14.0285ZM16.7369 12.3177L10.7973 1.71079H22.7325L16.7369 12.3177ZM9.28436 2.56619L15.7283 14.0285L9.28436 25.4908L2.67233 14.0285L9.28436 2.56619ZM10.7973 26.2892L16.7369 15.6823L22.6765 26.2892H10.7973Z"
    ></path>
  </svg>
);

export const FooterLogo: FC<Props> = ({ className, ...rest }) => (
  <svg className={cn(styles.icon, styles.FooterLogo, className)} {...rest}>
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M111.48 15.6785C112.298 15.6785 112.96 14.9893 112.96 14.1391C112.96 13.2888 112.298 12.5996 111.48 12.5996C110.663 12.5996 110 13.2888 110 14.1391C110 14.9893 110.663 15.6785 111.48 15.6785Z"
      fill="white"
    />
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M26.3516 15.2734C25.6896 14.9898 25.1055 14.5847 24.6771 14.058C24.2098 13.5314 23.8593 12.9237 23.5867 12.2349C23.3141 11.5462 23.1973 10.7765 23.1973 9.96621C23.1973 9.15595 23.3141 8.3862 23.5477 7.69748C23.7814 7.00876 24.1319 6.36055 24.5992 5.87439C25.0665 5.34772 25.6117 4.94259 26.2348 4.659C26.8968 4.37541 27.5978 4.21336 28.4156 4.21336C29.1165 4.21336 29.7007 4.29438 30.2459 4.49695C30.7911 4.69951 31.2584 4.9831 31.6868 5.30721C32.1151 5.63131 32.4267 6.07696 32.6603 6.56311C32.9329 7.04927 33.0887 7.61645 33.1666 8.18363H30.4406C30.3627 7.69748 30.1291 7.29235 29.7786 6.96824C29.4281 6.64414 28.9997 6.48209 28.4935 6.48209C27.6367 6.48209 27.0136 6.80619 26.5853 7.41389C26.1569 8.02158 25.9622 8.87235 25.9622 9.92569C25.9622 10.979 26.1569 11.7893 26.5853 12.4375C26.9747 13.0857 27.6367 13.3693 28.4935 13.3693C29.0776 13.3693 29.5449 13.2072 29.8954 12.9237C30.2459 12.5996 30.4795 12.1539 30.5964 11.5057H33.3223C33.2834 12.0729 33.1276 12.6401 32.894 13.1262C32.6603 13.6124 32.3488 14.058 31.9204 14.4632C31.531 14.8278 31.0247 15.1519 30.4795 15.3544C29.8954 15.557 29.2723 15.6785 28.5713 15.6785C27.7536 15.7191 27.0136 15.557 26.3516 15.2734Z"
      fill="white"
    />
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M37.684 5.87439C38.0734 5.30721 38.5018 4.86157 38.9691 4.57798C39.4364 4.29438 40.0206 4.13233 40.7605 4.13233C41.3057 4.13233 41.8119 4.25387 42.2403 4.45644C42.6687 4.659 43.0581 4.94259 43.3696 5.30721C43.6812 5.67183 43.9148 6.11747 44.1095 6.60363C44.3042 7.08978 44.3821 7.65697 44.3821 8.26466V15.395H41.5783V8.66979C41.5783 8.0621 41.4225 7.57594 41.111 7.21132C40.7994 6.84671 40.3321 6.64414 39.748 6.64414C39.1249 6.64414 38.6186 6.88722 38.2292 7.33286C37.8398 7.77851 37.6061 8.3862 37.6061 9.15595V15.395H34.8022V0.121544H37.6061V5.87439H37.684Z"
      fill="white"
    />
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M48.9772 15.2734C48.3152 14.9898 47.7311 14.5847 47.2638 14.058C46.7964 13.5314 46.446 12.9237 46.2123 12.1944C45.9786 11.4652 45.8618 10.736 45.8618 9.9257C45.8618 9.11544 45.9786 8.34569 46.2512 7.65697C46.5238 6.96825 46.8743 6.36055 47.3027 5.83389C47.77 5.30722 48.3152 4.90209 48.9383 4.61849C49.5614 4.3349 50.2623 4.17285 51.0412 4.17285C51.8979 4.17285 52.6378 4.3349 53.2609 4.65901C53.9229 4.98311 54.4292 5.42876 54.8965 5.99594C55.3249 6.56312 55.6754 7.29235 55.909 8.0621C56.1427 8.87236 56.2595 9.76365 56.2595 10.736H48.6267C48.7436 11.5867 49.0162 12.2755 49.4445 12.7616C49.8729 13.2478 50.496 13.4908 51.3138 13.4908C51.859 13.4908 52.2874 13.3693 52.6378 13.1262C52.9494 12.8832 53.222 12.559 53.3388 12.1539H56.1037C56.0258 12.6401 55.8311 13.0857 55.5975 13.5314C55.3249 13.977 55.0133 14.3416 54.6239 14.6657C54.2345 14.9898 53.7282 15.2734 53.183 15.4355C52.6378 15.638 52.0148 15.7191 51.3527 15.7191C50.457 15.7191 49.6782 15.557 48.9772 15.2734ZM49.4056 7.00876C49.0162 7.41389 48.7825 8.02159 48.6267 8.71031H53.2999C53.2609 8.02159 53.0273 7.45441 52.6378 7.00876C52.2484 6.56312 51.7032 6.36055 51.0801 6.36055C50.3402 6.40107 49.795 6.60363 49.4056 7.00876Z"
      fill="white"
    />
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M60.4266 15.2734C59.7645 14.9898 59.1804 14.5847 58.752 14.058C58.2847 13.5314 57.9342 12.9237 57.6616 12.2349C57.389 11.5462 57.2722 10.7765 57.2722 9.96621C57.2722 9.15595 57.389 8.3862 57.6227 7.69748C57.8564 7.00876 58.2068 6.36055 58.6742 5.87439C59.1415 5.34772 59.6867 4.94259 60.3097 4.659C60.9718 4.37541 61.6727 4.21336 62.4905 4.21336C63.1915 4.21336 63.7756 4.29438 64.3208 4.49695C64.866 4.69951 65.3333 4.9831 65.7617 5.30721C66.1901 5.63131 66.5016 6.07696 66.7353 6.56311C67.0079 7.04927 67.1636 7.61645 67.2415 8.18363H64.5155C64.4377 7.69748 64.204 7.29235 63.8535 6.96824C63.503 6.64414 63.0747 6.48209 62.5684 6.48209C61.7117 6.48209 61.0886 6.80619 60.6602 7.41389C60.2319 8.02158 60.0371 8.87235 60.0371 9.92569C60.0371 10.979 60.2319 11.7893 60.6602 12.4375C61.0496 13.0857 61.7117 13.3693 62.5684 13.3693C63.1526 13.3693 63.6199 13.2072 63.9703 12.9237C64.3208 12.5996 64.5545 12.1539 64.6713 11.5057H67.3583C67.3194 12.0729 67.1636 12.6401 66.93 13.1262C66.6963 13.6124 66.3848 14.058 65.9564 14.4632C65.567 14.8278 65.0607 15.1519 64.5155 15.3544C63.9314 15.557 63.3083 15.6785 62.6074 15.6785C61.8285 15.7191 61.0886 15.557 60.4266 15.2734Z"
      fill="white"
    />
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M71.6809 11.7083V15.395H68.916V0.121544H71.6809V8.58877L75.4194 4.45644H78.7685L74.8742 8.62928L79.2358 15.395H75.8478L72.8882 10.4119L71.6809 11.7083Z"
      fill="white"
    />
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M82.3122 15.2734C81.6502 14.9898 81.066 14.5847 80.5598 14.058C80.0925 13.5314 79.703 12.9237 79.4304 12.2349C79.1578 11.5462 79.041 10.7765 79.041 9.96621C79.041 9.15595 79.1578 8.3862 79.4304 7.69748C79.703 7.00875 80.0925 6.36055 80.5598 5.87439C81.0271 5.34772 81.6112 4.94259 82.3122 4.659C82.9742 4.37541 83.7141 4.21336 84.5319 4.21336C85.3497 4.21336 86.0896 4.37541 86.7517 4.659C87.4137 4.94259 87.9978 5.34772 88.5041 5.87439C88.9714 6.40106 89.3608 7.00875 89.6334 7.69748C89.906 8.3862 90.0229 9.15595 90.0229 9.96621C90.0229 10.7765 89.906 11.5462 89.6334 12.2349C89.3608 12.9237 88.9714 13.5719 88.5041 14.058C88.0368 14.5847 87.4526 14.9898 86.7517 15.2734C86.0896 15.557 85.3497 15.7191 84.5319 15.7191C83.7141 15.7191 82.9742 15.557 82.3122 15.2734ZM86.518 12.5185C86.9853 11.8703 87.219 11.0195 87.219 9.92569C87.219 8.83184 86.9853 7.98107 86.518 7.33286C86.0507 6.68465 85.3887 6.32003 84.5319 6.32003C83.6752 6.32003 83.0132 6.64414 82.5459 7.33286C82.0785 7.98107 81.8449 8.87235 81.8449 9.92569C81.8449 10.979 82.0785 11.8703 82.5459 12.5185C83.0132 13.1667 83.6752 13.4908 84.5319 13.4908C85.3887 13.4908 86.0507 13.1667 86.518 12.5185Z"
      fill="white"
    />
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M98.2007 14.0985H98.1228C97.7723 14.5847 97.344 14.9898 96.9156 15.2734C96.4483 15.557 95.8641 15.6785 95.1242 15.6785C93.956 15.6785 93.0603 15.3139 92.3982 14.6252C91.7752 13.896 91.4636 12.9642 91.4636 11.7488V4.45644H94.2285V11.2626C94.2285 11.9108 94.3843 12.397 94.6569 12.7211C94.9295 13.0452 95.3968 13.2478 95.981 13.2478C96.643 13.2478 97.1493 13.0047 97.5387 12.559C97.9281 12.1134 98.1228 11.5057 98.1228 10.7765V4.45644H100.927V15.3949H98.2396V14.0985H98.2007Z"
      fill="white"
    />
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M103.614 4.45643V1.01283H106.34V4.45643H108.131V6.36054H106.34V12.1539C106.34 12.559 106.418 12.8426 106.612 13.0047C106.807 13.1667 107.041 13.2478 107.391 13.2478H107.936C108.014 13.2478 108.131 13.2478 108.209 13.2072V15.3949C108.053 15.3949 107.936 15.4355 107.742 15.4355C107.586 15.4355 107.391 15.476 107.196 15.476H106.457C106.106 15.476 105.795 15.4355 105.444 15.3544C105.094 15.2734 104.821 15.1519 104.548 14.9493C104.276 14.7467 104.042 14.4631 103.886 14.139C103.731 13.8149 103.614 13.3693 103.614 12.8426V6.36054H102.173V4.45643H103.614Z"
      fill="white"
    />
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M117.01 15.2329C116.426 14.9493 115.92 14.5442 115.491 14.0175C115.063 13.4908 114.751 12.8832 114.557 12.1944C114.362 11.5057 114.245 10.736 114.245 9.88519C114.245 9.03442 114.362 8.30518 114.557 7.57595C114.79 6.88723 115.102 6.23902 115.491 5.75286C115.92 5.22619 116.426 4.82106 117.01 4.53747C117.594 4.25388 118.295 4.09183 119.074 4.09183C120.242 4.09183 121.216 4.41593 121.956 5.02363C122.696 5.63132 123.163 6.52261 123.358 7.65697H122.112C121.956 6.84671 121.644 6.1985 121.099 5.79337C120.593 5.38824 119.931 5.18568 119.113 5.18568C118.49 5.18568 117.984 5.30722 117.516 5.5503C117.088 5.79337 116.699 6.11748 116.426 6.56312C116.153 6.96825 115.92 7.49492 115.803 8.0621C115.647 8.62929 115.608 9.23698 115.608 9.88519C115.608 10.5334 115.686 11.1411 115.842 11.7083C115.998 12.2755 116.192 12.7616 116.504 13.2073C116.776 13.6529 117.166 13.977 117.594 14.2201C118.023 14.4632 118.568 14.5847 119.152 14.5847C120.048 14.5847 120.787 14.3011 121.333 13.7744C121.878 13.2478 122.189 12.5185 122.306 11.6272H123.513C123.397 12.8832 122.968 13.8555 122.189 14.6252C121.45 15.3544 120.437 15.7191 119.152 15.7191C118.295 15.6785 117.594 15.5165 117.01 15.2329Z"
      fill="white"
    />
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M127.408 15.2329C126.785 14.9493 126.278 14.5442 125.85 14.0175C125.422 13.4908 125.11 12.8832 124.876 12.1944C124.643 11.5057 124.526 10.736 124.526 9.88519C124.526 9.03442 124.643 8.30518 124.876 7.57595C125.11 6.88723 125.422 6.23902 125.85 5.75286C126.278 5.22619 126.785 4.82106 127.408 4.53747C128.031 4.25388 128.693 4.09183 129.472 4.09183C130.25 4.09183 130.912 4.25388 131.536 4.53747C132.12 4.82106 132.665 5.22619 133.093 5.75286C133.522 6.27953 133.833 6.88723 134.067 7.57595C134.3 8.26467 134.378 9.03442 134.378 9.88519C134.378 10.736 134.262 11.4652 134.067 12.1944C133.833 12.8832 133.522 13.5314 133.093 14.0175C132.665 14.5442 132.159 14.9493 131.536 15.2329C130.951 15.5165 130.25 15.6786 129.472 15.6786C128.732 15.6786 128.031 15.5165 127.408 15.2329ZM131.029 14.2201C131.497 13.977 131.847 13.6529 132.159 13.2073C132.47 12.7616 132.704 12.2755 132.821 11.7083C132.976 11.1411 133.054 10.5334 133.054 9.88519C133.054 9.23698 132.976 8.62929 132.821 8.0621C132.665 7.49492 132.431 7.00877 132.159 6.56312C131.847 6.11748 131.497 5.79337 131.029 5.5503C130.562 5.30722 130.056 5.18568 129.472 5.18568C128.887 5.18568 128.342 5.30722 127.914 5.5503C127.486 5.79337 127.096 6.11748 126.785 6.56312C126.473 7.00877 126.239 7.49492 126.084 8.0621C125.928 8.62929 125.85 9.23698 125.85 9.88519C125.85 10.5334 125.928 11.1411 126.084 11.7083C126.239 12.2755 126.473 12.7616 126.785 13.2073C127.096 13.6529 127.486 13.977 127.914 14.2201C128.342 14.4632 128.887 14.5847 129.472 14.5847C130.056 14.5847 130.601 14.4632 131.029 14.2201Z"
      fill="white"
    />
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M137.455 4.33489V5.99593H137.494C137.844 5.42874 138.273 4.9831 138.779 4.61848C139.285 4.25387 139.947 4.09181 140.726 4.09181C141.388 4.09181 141.972 4.25387 142.479 4.57797C142.985 4.90207 143.335 5.42874 143.569 6.07695H143.608C143.958 5.42874 144.426 4.94259 145.01 4.57797C145.594 4.21335 146.256 4.0513 146.996 4.0513C147.463 4.0513 147.853 4.13233 148.242 4.29438C148.632 4.45643 148.982 4.659 149.255 4.94259C149.527 5.22618 149.761 5.59079 149.917 6.03644C150.072 6.48208 150.15 6.96824 150.15 7.49491V15.3949H148.904V7.65696C148.904 6.8467 148.709 6.239 148.281 5.83387C147.853 5.42874 147.307 5.26669 146.684 5.26669C146.295 5.26669 145.906 5.34772 145.594 5.46926C145.244 5.63131 144.932 5.83387 144.698 6.07695C144.465 6.32003 144.231 6.68465 144.075 7.04926C143.919 7.45439 143.842 7.85952 143.842 8.34568V15.3949H142.556V7.65696C142.556 6.8467 142.362 6.239 141.933 5.83387C141.544 5.42874 141.038 5.26669 140.415 5.26669C140.025 5.26669 139.675 5.34772 139.324 5.50977C138.974 5.67182 138.662 5.87439 138.351 6.15798C138.078 6.44157 137.844 6.76567 137.689 7.1708C137.533 7.53542 137.455 7.98106 137.455 8.42671V15.3949H136.17V4.33489H137.455Z"
      fill="white"
    />
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M12.6832 9.9662L17.6679 0.891286C17.7847 0.688721 17.7847 0.486156 17.6679 0.283591C17.5511 0.121539 17.3564 0 17.1616 0H6.8808C6.68608 0 6.49137 0.121539 6.37454 0.283591L1.07834 9.6421C0.961516 9.84466 0.961516 10.0877 1.07834 10.2498L6.37454 19.6083C6.49137 19.8109 6.68608 19.8919 6.8808 19.8919H17.1616C17.3564 19.8919 17.5511 19.7704 17.6679 19.6083C17.7847 19.4057 17.7847 19.2032 17.6679 19.0006L12.6832 9.9662ZM12.0212 8.75081L7.8933 1.21539H16.1881L12.0212 8.75081ZM6.84185 1.82309L11.3203 9.9662L6.84185 18.1093L2.24662 9.9662L6.84185 1.82309ZM7.8933 18.6765L12.0212 11.1411L16.1491 18.6765H7.8933Z"
      fill="white"
    />
  </svg>
);

export const IconFacebook: FC<Props> = ({ className, ...rest }) => (
  <svg className={cn(styles.icon, styles.IconFacebook, className)} {...rest}>
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M6 5.33H4V8h2v8h3.33V8h2.43L12 5.33H9.33v-1.1c0-.64.14-.9.75-.9H12V0H9.47C7.07 0 6 1.05 6 3.08v2.25z"
      fill="#fff"
    ></path>
  </svg>
);

export const IconTwitter: FC<Props> = ({ className, ...rest }) => (
  <svg className={cn(styles.icon, styles.IconTwitter, className)} {...rest}>
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M16 2.9c-.6.28-1.23.46-1.88.54.69-.43 1.2-1.09 1.44-1.86-.65.39-1.35.67-2.1.82a3.2 3.2 0 00-4.97.23 3.35 3.35 0 00-.61 2.83 9.21 9.21 0 01-6.76-3.51 3.39 3.39 0 001.01 4.48 3.13 3.13 0 01-1.49-.41 3.35 3.35 0 002.67 3.33c-.5.12-1 .12-1.5 0a3.32 3.32 0 003.06 2.39A6.56 6.56 0 010 13.14a9.17 9.17 0 0011.85-1.46 9.41 9.41 0 002.51-7.01A6.56 6.56 0 0016 2.9z"
      fill="#fff"
    ></path>
  </svg>
);

export const IconInstagram: FC<Props> = ({ className, ...rest }) => (
  <svg className={cn(styles.icon, styles.IconInstagram, className)} {...rest}>
    <path d="M8 10.67a2.67 2.67 0 110-5.34 2.67 2.67 0 010 5.34z"></path>
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M16 4.7A4.41 4.41 0 0011.3 0H4.7A4.41 4.41 0 000 4.7v6.6A4.43 4.43 0 004.7 16h6.6a4.41 4.41 0 004.7-4.7V8 4.7zm-8 7.4a4.1 4.1 0 110-8.2 4.1 4.1 0 010 8.2zM13.33 4H12V2.67h1.33V4z"
      fill="#fff"
    ></path>
  </svg>
);

export const IconYoutube: FC<Props> = ({ className, ...rest }) => (
  <svg className={cn(styles.icon, styles.IconYoutube, className)} {...rest}>
    <path d="M8 10.67a2.67 2.67 0 110-5.34 2.67 2.67 0 010 5.34z"></path>
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M13.08 1.47a99.32 99.32 0 00-10.16 0C.32 1.67 0 3.4 0 8c0 4.6.32 6.3 2.92 6.5 3.38.2 6.78.2 10.16 0C15.68 14.3 16 12.57 16 8c0-4.56-.32-6.33-2.92-6.53zm-7.75 9.2V5.33L12 8l-6.67 2.67z"
      fill="#fff"
    ></path>
  </svg>
);

export const IconGlassdoor: FC<Props> = ({ className, ...rest }) => (
  <svg className={cn(styles.icon, styles.IconGlassdoor, className)} {...rest}>
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M11.6 0c1.32 0 2.4.74 2.4 2H4v10H2V2.29A2.35 2.35 0 014.4 0h7.2zm0 14H2c0 1.26 1.08 2 2.4 2h7.2c1.32 0 2.4-.74 2.4-2V4h-2v10h-.4z"
      fill="#fff"
    ></path>
  </svg>
);

export const IconCheckout: FC<Props> = ({ className, ...rest }) => (
  <svg className={cn(styles.icon, styles.IconCheckout, className)} {...rest}>
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M4.33 13.84a2.17 2.17 0 11-4.34 0 2.17 2.17 0 014.34 0zM0 5.46v3.2A7.43 7.43 0 017.35 16h3.21A10.67 10.67 0 000 5.46zm0-2.24A12.81 12.81 0 0112.79 16H16A16 16 0 000 0v3.22z"
      fill="#fff"
    ></path>
  </svg>
);

export const IconLinkedin: FC<Props> = ({ className, ...rest }) => (
  <svg className={cn(styles.icon, styles.IconLinkedin, className)} {...rest}>
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M3.32 1.74a1.7 1.7 0 01-1.65 1.74A1.7 1.7 0 010 1.74 1.7 1.7 0 011.67 0a1.7 1.7 0 011.65 1.74zm0 3.13H0V16h3.33L3.32 4.87zm5.33 0H5.33V16h3.32v-5.84c0-3.25 4-3.52 4 0V16H16V8.95a4 4 0 00-7.35-2.57V4.87z"
      fill="#fff"
    ></path>
  </svg>
);
