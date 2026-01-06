import React from 'react'

interface HeadingProps {
    level: number;
    children: React.ReactElement;
}

export default function Heading({ level = 1, children }: HeadingProps) {
    const Tag = `h${level}` as const;
    return (
        <Tag className="font-bold">{children}</Tag>
    )
}
