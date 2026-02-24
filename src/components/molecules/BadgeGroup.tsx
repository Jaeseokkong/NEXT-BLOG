import Badge from "../atoms/Badge";

interface BadgeGroupProps {
  labels: string[];
}

export default function BadgeGroup({ labels }: BadgeGroupProps) {
  return (
    <div className="flex flex-wrap gap-2">
      {labels.map((label) => (
        <Badge key={label} label={label} />
      ))}
    </div>
  );
}
