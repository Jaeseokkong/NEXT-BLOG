import PostCardCategory from "../atoms/PostCardCategory";
import PostCardDate from "../atoms/PostCardDate";
import PostCardTitle from "../atoms/PostCardTitle";

interface PostCardBottomProps {
    category: string;
    title: string;
    date: string;
}

export default function PostCardBottom({ category, title, date }: PostCardBottomProps) {
    return (
        <div className="flex flex-col p-4 flex-1">
            <PostCardCategory category={category} />
            <PostCardTitle title={title}/>
            <PostCardDate date={date} />
        </div>
    )
}
