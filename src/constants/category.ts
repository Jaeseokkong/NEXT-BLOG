export const categoryBgColors: Record<string, string> = {
    CSS: "bg-indigo-100",
    GraphQL: "bg-rose-100",
    JWT: "bg-amber-100",
    "Next.js": "bg-zinc-200",
    Nginx: "bg-emerald-100",
    Node: "bg-green-200",
    Performance: "bg-red-100",
    React: "bg-sky-100",
    Spring: "bg-lime-200",
    TypeScript: "bg-blue-100",
    Web3: "bg-purple-100",
    images: "bg-indigo-100",
};

export type Category =
  | { main: "Algorithm" }
  | { main: "CSS" }
  | { main: "GraphQL" }
  | { main: "JWT" }
  | { main: "JavaScript" }
  | { main: "Next.js" }
  | { main: "Nginx" }
  | { main: "Node" }
  | { main: "Performance" }
  | { main: "React", sub: "Architecture" | "Core" | "Form" | "Integration" | "State-Management" | "TanStack-Query"}
  | { main: "Spring" }
  | { main: "Testing"}
  | { main: "TypeScript"}
  | { main: "Web3"};