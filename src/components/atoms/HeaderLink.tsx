import { Link } from 'lucide-react'
import React from 'react'

interface HeaderLinkProps {
    name: string
    href: string;
}

export default function HeaderLink({ href, name }: HeaderLinkProps) {
    return (
        <Link href={href} className="hover:underline">{name}</Link>
    )
}
