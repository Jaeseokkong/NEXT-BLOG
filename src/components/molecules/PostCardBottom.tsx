import MoreButton from "../atoms/MoreButton";
import Text from "../atoms/Text";
import Title from "../atoms/Title";

interface PostCardBottomProps {
    category: string;
    title: string;
    date: string;
}

export default function PostCardBottom({ category, title, date }: PostCardBottomProps) {
    return (
        <div className="flex flex-col p-4 flex-1">
            <Text as="span" size="xs" className="text-indigo-500 dark:text-indigo-400 font-medium uppercase tracking-wide mb-1">{category} </Text>
            <Title>{title}</Title>
            <div className="mt-auto pt-4 flex justify-between items-center text-xs text-zinc-400">
                <span>📅 {date}</span>
                <MoreButton>더 보기</MoreButton>
            </div>
        </div>
    )
}
