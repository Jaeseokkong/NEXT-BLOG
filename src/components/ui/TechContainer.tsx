import TechBox from "./TechBox";

interface TechContainerProps {
  techList: string[];
}

export default function TechContainer({ techList }: TechContainerProps) {
  return (
    <div className="flex flex-wrap gap-2 text-sm text-zinc-600 dark:text-zinc-300">
      {techList.map(techName => (
        <TechBox key={techName} techName={techName}/>
      ))}
    </div>
  )
}