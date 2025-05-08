export const ExpandIconSvg = ({ ...props }) => (
  <svg
    width="100%"
    height="100%"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M14 10L21 3M21 3H15M21 3V9M10 14L3 21M3 21H9M3 21L3 15"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export const CloseIconSvg = ({ ...props }) => (
  <svg
    width="100%"
    height="100%"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M17 7L7 17M7 7L17 17"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export const MinimizeIconSvg = ({ ...props }) => (
  <svg
    width="100%"
    height="100%"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M4 14H10M10 14V20M10 14L3 21M20 10H14M14 10V4M14 10L21 3"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export const PlusIconSvg = ({ ...props }) => (
  <svg
    width="100%"
    height="100%"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M12 5V19M5 12H19"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export const MinimizeSidebarSvg = ({ ...props }) => (
  <svg width="100%" height="100%" version="1.1" viewBox="0 0 20 20" {...props}>
    <path
      d="M4 16V4H2v12h2zm9-1-1.5-1.5L14 11H6V9h8l-2.5-2.5L13 5l5 5-5 5z"
      fill="currentColor"
    />
  </svg>
);

export const ExpandSidebarSvg = ({ ...props }) => (
  <svg width="100%" height="100%" viewBox="0 0 20 20" {...props}>
    <path
      d="M16 16V4h2v12h-2zM6 9l2.501-2.5-1.5-1.5-5 5 5 5 1.5-1.5-2.5-2.5h8V9H6z"
      fill="currentColor"
    />
  </svg>
);
