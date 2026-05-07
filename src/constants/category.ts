export const CATEGORY_MAP = {
  JavaScript: [],
  TypeScript: [],
  React: [
    "Core",
    "State-Management",
    "Architecture",
    "TanStack-Query",
    "Form",
    "Integration",
  ],
  "Next.js": [],
  TroubleShooting: [],
  Testing: [],
  Performance: [],
  CSS: [],
  Node: [],
  JWT: [],
  Web3: [],
  Nginx: [],
  Algorithm: [],
  Spring: [],
} as const;

export type MainCategory = keyof typeof CATEGORY_MAP;

export type Category = MainCategory | "ALL";

export const CATEGORY_BG_COLORS: Record<MainCategory, string> = {
  JavaScript: "bg-yellow-100",
  TypeScript: "bg-blue-100",

  React: "bg-cyan-100",
  "Next.js": "bg-neutral-200",

  TroubleShooting: "bg-rose-100",

  CSS: "bg-indigo-100",
  Performance: "bg-red-100",
  Testing: "bg-orange-100",

  Node: "bg-green-100",
  JWT: "bg-amber-100",

  Web3: "bg-violet-100",
  Nginx: "bg-emerald-100",

  Algorithm: "bg-slate-200",
  Spring: "bg-lime-100",
};