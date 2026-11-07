import React from "react";

interface IconProps {
  className?: string;
  style?: React.CSSProperties;
}

/**
 * Official Brand Technology Icons (Simple Icons standard vectors)
 * Used in the Skills & Architecture showcase.
 */

export function Html5Icon({ className = "h-5 w-5", style }: IconProps) {
  return (
    <svg
      role="img"
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className}
      style={style}
      xmlns="http://www.w3.org/2000/svg"
      aria-label="HTML5 logo"
    >
      <path d="M1.5 0h21l-1.91 21.563L11.977 24l-8.564-2.438L1.5 0zm7.031 9.75l-.232-2.718 10.059.003.23-2.622L5.412 4.41l.698 8.01h9.126l-.326 3.426-2.91.804-2.955-.81-.188-2.11H6.248l.33 4.171L12 19.351l5.379-1.443.744-8.157H8.531z" />
    </svg>
  );
}

export function Css3Icon({ className = "h-5 w-5", style }: IconProps) {
  return (
    <svg
      role="img"
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className}
      style={style}
      xmlns="http://www.w3.org/2000/svg"
      aria-label="CSS3 logo"
    >
      <path d="M1.5 0h21l-1.9 21.56L12 24l-8.6-2.44L1.5 0zm4.12 4.41l.24 2.71h12.28l-.24 2.72H6.12l.24 2.72h9.12l-.33 3.43-3.15.85-3.15-.85-.2-2.15H5.97l.39 4.3 5.64 1.56 5.64-1.56.78-8.73.23-2.72.33-3.78H5.62z" />
    </svg>
  );
}

export function JavaScriptIcon({ className = "h-5 w-5", style }: IconProps) {
  return (
    <svg
      role="img"
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className}
      style={style}
      xmlns="http://www.w3.org/2000/svg"
      aria-label="JavaScript logo"
    >
      <path d="M0 0h24v24H0V0zm22.034 18.276c-.175-1.017-.888-1.798-2.87-2.614l-.647-.267c-1.258-.516-1.637-.872-1.637-1.488 0-.585.456-.995 1.22-.995.823 0 1.28.34 1.506.947l1.794-.972c-.443-.996-1.344-1.644-2.78-1.644-1.897 0-3.256 1.112-3.256 2.756 0 1.698 1.107 2.404 2.87 3.125l.647.268c1.373.567 1.841.973 1.841 1.643 0 .768-.606 1.19-1.528 1.19-.995 0-1.62-.486-1.92-1.238l-1.868.972c.492 1.258 1.62 1.944 3.328 1.944 2.19 0 3.51-1.187 3.51-2.912l-.001-.001-.35-.008zm-9.043.208c-.283.473-.733.782-1.383.782-.782 0-1.284-.486-1.284-1.615V11.23H8.34v6.49c0 2.052 1.127 3.13 2.946 3.13 1.283 0 2.21-.61 2.71-1.615l-1.005-.751z" />
    </svg>
  );
}

export function TypeScriptIcon({ className = "h-5 w-5", style }: IconProps) {
  return (
    <svg
      role="img"
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className}
      style={style}
      xmlns="http://www.w3.org/2000/svg"
      aria-label="TypeScript logo"
    >
      <path d="M1.125 0C.502 0 0 .502 0 1.125v21.75C0 23.498.502 24 1.125 24h21.75c.623 0 1.125-.502 1.125-1.125V1.125C24 .502 23.498 0 22.75 0H1.125zM17.463 15.467c-.34.22-.77.34-1.22.34-.85 0-1.38-.45-1.38-1.24 0-.89.65-1.32 1.93-1.69l.71-.21c.88-.26 1.34-.69 1.34-1.34 0-1.1-.96-1.74-2.55-1.74-.89 0-1.63.22-2.17.58l.49 1.19c.45-.29.98-.44 1.57-.44.83 0 1.29.38 1.29 1.01 0 .73-.55 1.1-1.64 1.43l-.75.23c-1.16.35-1.78.89-1.78 1.83 0 1.28 1.01 2.01 2.76 2.01 1.04 0 1.85-.25 2.45-.66l-.51-1.27zm-8.91 1.49H7.21v-7.1h-2.3V8.62h6.05v1.24h-2.41v7.1z" />
    </svg>
  );
}

export function ReactIcon({ className = "h-5 w-5", style }: IconProps) {
  return (
    <svg
      role="img"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
      className={className}
      style={style}
      xmlns="http://www.w3.org/2000/svg"
      aria-label="React.js logo"
    >
      <ellipse cx="12" cy="12" rx="10" ry="4.2" />
      <ellipse cx="12" cy="12" rx="10" ry="4.2" transform="rotate(60 12 12)" />
      <ellipse cx="12" cy="12" rx="10" ry="4.2" transform="rotate(120 12 12)" />
      <circle cx="12" cy="12" r="1.8" fill="currentColor" stroke="none" />
    </svg>
  );
}

export function NextjsIcon({ className = "h-5 w-5", style }: IconProps) {
  return (
    <svg
      role="img"
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className}
      style={style}
      xmlns="http://www.w3.org/2000/svg"
      aria-label="Next.js logo"
    >
      <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.823 18.258l-6.528-8.498v8.498H9.375V6.75h1.92l6.528 8.528V6.75h1.92v11.508h-1.92z" />
    </svg>
  );
}

export function TailwindIcon({ className = "h-5 w-5", style }: IconProps) {
  return (
    <svg
      role="img"
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className}
      style={style}
      xmlns="http://www.w3.org/2000/svg"
      aria-label="Tailwind CSS logo"
    >
      <path d="M12.001 4.8c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624C13.666 10.618 15.027 12 18.001 12c3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C16.337 6.182 14.976 4.8 12.001 4.8zm-6 7.2c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624 1.177 1.194 2.538 2.576 5.512 2.576 3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C10.337 13.382 8.976 12 6.001 12z" />
    </svg>
  );
}

export function NodejsIcon({ className = "h-5 w-5", style }: IconProps) {
  return (
    <svg
      role="img"
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className}
      style={style}
      xmlns="http://www.w3.org/2000/svg"
      aria-label="Node.js logo"
    >
      <path d="M12 0a1.5 1.5 0 0 0-.75.2L1.87 5.61A1.5 1.5 0 0 0 1.12 6.9v10.2a1.5 1.5 0 0 0 .75 1.3l9.38 5.41a1.5 1.5 0 0 0 1.5 0l9.38-5.41a1.5 1.5 0 0 0 .75-1.3V6.9a1.5 1.5 0 0 0-.75-1.3L12.75.2A1.5 1.5 0 0 0 12 0zm-.18 4.25c3.27 0 5.92 2.15 5.92 5.42 0 3.28-2.65 5.42-5.92 5.42-3.27 0-5.92-2.14-5.92-5.42 0-3.27 2.65-5.42 5.92-5.42zm0 2.22c-1.92 0-3.48 1.43-3.48 3.2 0 1.77 1.56 3.2 3.48 3.2 1.92 0 3.48-1.43 3.48-3.2 0-1.77-1.56-3.2-3.48-3.2z" />
    </svg>
  );
}

export function ExpressIcon({ className = "h-5 w-5", style }: IconProps) {
  return (
    <svg
      role="img"
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className}
      style={style}
      xmlns="http://www.w3.org/2000/svg"
      aria-label="Express.js logo"
    >
      <path d="M24 10.608v3.197h-5.234c-.05 1.134.333 1.95 1.332 2.046.786.076 1.487-.333 1.776-.906l3.12 1.272C23.82 18.23 21.84 20 18.57 20c-4.468 0-6.953-2.99-6.953-7.07 0-4.08 2.584-7.14 6.744-7.14 4.195 0 6.577 3.03 6.577 7.07l-.938.748zm-5.234-1.89h1.968c-.135-.908-.828-1.547-1.83-1.547-1.026 0-1.782.64-1.92 1.547l1.782.001zM11.41 19.68H7.398l-2.09-3.77-2.09 3.77H-.808l3.69-6.07-3.48-5.73h4.01l1.88 3.5 1.88-3.5h4.01l-3.48 5.73 3.69 6.07z" />
    </svg>
  );
}

export function MongoDbIcon({ className = "h-5 w-5", style }: IconProps) {
  return (
    <svg
      role="img"
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className}
      style={style}
      xmlns="http://www.w3.org/2000/svg"
      aria-label="MongoDB logo"
    >
      <path d="M17.193 9.555c-1.233-4.321-4.324-7.509-4.821-8.992a.834.834 0 0 0-1.585.004c-.663 1.93-3.64 5.759-4.78 9.17-1.322 3.953-.404 8.01 2.215 10.748a7.803 7.803 0 0 0 3.777 2.062.836.836 0 0 0 .998-.567c.602-2.18.36-4.502.34-4.83-.02-.323-.178-.507-.367-.552-.522-.123-1.638-.56-2.158-1.464-.672-1.168-.537-2.73.4-3.896.797-.995 1.947-1.465 3.328-1.36.27.02.473.23.473.501v7.915c0 .35.21.65.53.77a.832.832 0 0 0 .97-.33c1.55-2.22 1.82-5.49.88-9.176z" />
    </svg>
  );
}

export function GitIcon({ className = "h-5 w-5", style }: IconProps) {
  return (
    <svg
      role="img"
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className}
      style={style}
      xmlns="http://www.w3.org/2000/svg"
      aria-label="Git logo"
    >
      <path d="M23.546 10.93L13.067.452a1.493 1.493 0 0 0-2.112 0l-2.11 2.112 2.67 2.67a1.775 1.775 0 0 1 2.247 2.25l2.57 2.57a1.775 1.775 0 1 1-.95.95l-2.5-2.502a1.775 1.775 0 0 1-1.99-.44l-2.5 2.5a1.775 1.775 0 1 1-1.06-.31l-.01-.01 2.47-2.47a1.775 1.775 0 0 1-.3-1.93L6.96 5.86 1.455 11.365a1.493 1.493 0 0 0 0 2.112l10.48 10.478a1.493 1.493 0 0 0 2.11 0l9.497-9.497a1.493 1.493 0 0 0 .004-2.528z" />
    </svg>
  );
}

export function GithubTechIcon({ className = "h-5 w-5", style }: IconProps) {
  return (
    <svg
      role="img"
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className}
      style={style}
      xmlns="http://www.w3.org/2000/svg"
      aria-label="GitHub logo"
    >
      <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
    </svg>
  );
}

export function VsCodeIcon({ className = "h-5 w-5", style }: IconProps) {
  return (
    <svg
      role="img"
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className}
      style={style}
      xmlns="http://www.w3.org/2000/svg"
      aria-label="Visual Studio Code logo"
    >
      <path d="M23.15 2.587L18.21.21a1.494 1.494 0 0 0-1.705.29l-9.46 8.63-4.12-3.128a.999.999 0 0 0-1.276.057L.327 7.261A1 1 0 0 0 .326 8.74L3.899 12 .326 15.26a1 1 0 0 0 .001 1.479L1.65 17.94a.999.999 0 0 0 1.276.057l4.12-3.128 9.46 8.63a1.492 1.492 0 0 0 1.704.29l4.94-2.377A1.5 1.5 0 0 0 24 20.06V3.939a1.5 1.5 0 0 0-.85-1.352zm-5.146 14.861L10.826 12l7.178-5.448v10.896z" />
    </svg>
  );
}

/**
 * Registry mapping skill names to their official vector brand icons and signature brand colors.
 */
export const techIconMap: Record<
  string,
  {
    Icon: React.ComponentType<{ className?: string; style?: React.CSSProperties }>;
    brandColor: string;
    badgeBg: string;
  }
> = {
  HTML: {
    Icon: Html5Icon,
    brandColor: "#E34F26",
    badgeBg: "rgba(227, 79, 38, 0.1)",
  },
  HTML5: {
    Icon: Html5Icon,
    brandColor: "#E34F26",
    badgeBg: "rgba(227, 79, 38, 0.1)",
  },
  CSS: {
    Icon: Css3Icon,
    brandColor: "#1572B6",
    badgeBg: "rgba(21, 114, 182, 0.1)",
  },
  CSS3: {
    Icon: Css3Icon,
    brandColor: "#1572B6",
    badgeBg: "rgba(21, 114, 182, 0.1)",
  },
  JavaScript: {
    Icon: JavaScriptIcon,
    brandColor: "#F7DF1E",
    badgeBg: "rgba(247, 223, 30, 0.1)",
  },
  TypeScript: {
    Icon: TypeScriptIcon,
    brandColor: "#3178C6",
    badgeBg: "rgba(49, 120, 198, 0.1)",
  },
  "React.js": {
    Icon: ReactIcon,
    brandColor: "#61DAFB",
    badgeBg: "rgba(97, 218, 251, 0.1)",
  },
  "Next.js": {
    Icon: NextjsIcon,
    brandColor: "currentColor",
    badgeBg: "rgba(128, 128, 128, 0.1)",
  },
  "Tailwind CSS": {
    Icon: TailwindIcon,
    brandColor: "#06B6D4",
    badgeBg: "rgba(6, 182, 212, 0.1)",
  },
  "Node.js": {
    Icon: NodejsIcon,
    brandColor: "#5FA04E",
    badgeBg: "rgba(95, 160, 78, 0.1)",
  },
  "Express.js": {
    Icon: ExpressIcon,
    brandColor: "currentColor",
    badgeBg: "rgba(128, 128, 128, 0.1)",
  },
  MongoDB: {
    Icon: MongoDbIcon,
    brandColor: "#47A248",
    badgeBg: "rgba(71, 162, 72, 0.1)",
  },
  Git: {
    Icon: GitIcon,
    brandColor: "#F05032",
    badgeBg: "rgba(240, 80, 50, 0.1)",
  },
  GitHub: {
    Icon: GithubTechIcon,
    brandColor: "currentColor",
    badgeBg: "rgba(128, 128, 128, 0.1)",
  },
  "VS Code": {
    Icon: VsCodeIcon,
    brandColor: "#007ACC",
    badgeBg: "rgba(0, 122, 204, 0.1)",
  },
};
