import type { SVGProps } from "react"

type IconName =
  | "arrow-right"
  | "arrow-up"
  | "arrow-up-right"
  | "close"
  | "code"
  | "linkedin"
  | "mail"
  | "menu"

interface IconProps extends SVGProps<SVGSVGElement> {
  name: IconName
  size?: number
}

export const Icon = ({ name, size = 20, ...props }: IconProps) => {
  const paths: Record<IconName, React.ReactNode> = {
    "arrow-right": <path d="M5 12h14m-5-5 5 5-5 5" />,
    "arrow-up": <path d="m6 11 6-6 6 6M12 5v14" />,
    "arrow-up-right": <path d="M7 17 17 7M8 7h9v9" />,
    close: <path d="m6 6 12 12M18 6 6 18" />,
    code: <path d="m8 9-3 3 3 3m8-6 3 3-3 3m-2-9-4 12" />,
    linkedin: <path d="M6 10v8M6 6.5v.01M10.5 18v-8m0 3.5c.8-2.2 6.5-2.8 6.5 1.7V18" />,
    mail: <path d="M4 6h16v12H4zM4 7l8 6 8-6" />,
    menu: <path d="M4 7h16M4 12h16M4 17h16" />,
  }

  return (
    <svg
      aria-hidden="true"
      fill="none"
      height={size}
      viewBox="0 0 24 24"
      width={size}
      {...props}
    >
      <g stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.8">
        {paths[name]}
      </g>
    </svg>
  )
}
