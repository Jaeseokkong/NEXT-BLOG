import React from 'react'

type HeadingLevel = 1 | 2 | 3 | 4 | 5 | 6;

interface HeadingProps {
    level: HeadingLevel;
    children: React.ReactElement;
}

export default function Heading({ level = 1, children }: HeadingProps) {
    const Tag = `h${level}` as const;
    return (
        <Tag className="font-bold">{children}</Tag>
    )
}
