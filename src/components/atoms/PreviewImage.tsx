import { categoryBgColors } from '@/lib/categoryColors';
import Image from 'next/image'
import React from 'react'

interface PreviewImageProps {
    image?: string;
    title: string;
    category: string;
}

export default function PreviewImage({ image, title, category }: PreviewImageProps) {

    const bgColor = categoryBgColors[category] ?? "bg-gray-100";

    return (
        <div className="relative h-40 w-full overflow-hidden">
            {!!image ? (
            <>
                <Image
                src={image!}
                alt={title}
                fill
                className="object-cover transition-transform duration-500 ease-out group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300" />
            </>
            ) : (
            <div
                className={`${bgColor} flex items-center justify-center h-full text-center transition-all duration-500 group-hover:scale-105`}
            >
                <span className="text-sm font-medium text-zinc-800 opacity-80">
                {category}
                </span>
            </div>
            )}
        </div>
    )
}
