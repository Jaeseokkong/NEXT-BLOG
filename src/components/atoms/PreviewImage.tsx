import Image from 'next/image'
import React from 'react'

export default function PreviewImage() {
    return (
        <div className="relative h-40 w-full overflow-hidden">
            {hasImage ? (
            <>
                <Image
                src={post.image!}
                alt={post.title}
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
                {post.category}
                </span>
            </div>
            )}
        </div>
    )
}
