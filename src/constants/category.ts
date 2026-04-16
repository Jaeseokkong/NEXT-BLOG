export const CATEGORY_MAP = {
    Algorithm: [],
    CSS: [],
    JWT: [],
    JavaScript: [],
    "Next.js": [],
    Nginx: [],
    Node: [],
    Performance: [],
    React: [
      "Architecture",
      "Core",
      "Form",
      "Integration",
      "State-Management",
      "TanStack-Query",
    ],
    Spring: [],
    Testing: [],
    TypeScript: [],
    Web3: [],
} as const;

export type MainCategory = keyof typeof CATEGORY_MAP;

export const CATEGORY_BG_COLORS: Record<MainCategory, string> = {
    Algorithm: "bg-gray-100",
    CSS: "bg-indigo-100",
    JWT: "bg-amber-100",
    JavaScript: "bg-yellow-100",
    "Next.js": "bg-zinc-200",
    Nginx: "bg-emerald-100",
    Node: "bg-green-200",
    Performance: "bg-red-100",
    React: "bg-sky-100",
    Spring: "bg-lime-200",
    Testing: "bg-orange-100",
    TypeScript: "bg-blue-100",
    Web3: "bg-purple-100",
};