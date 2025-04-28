"use client";

import Image from 'next/image';

interface TeamMemberCardProps {
    name: string;
    one_liner: string;
    imageUrl: string;
}

export default function MemberCard({
                                           name,
                                           one_liner,
                                           imageUrl,
                                       }: TeamMemberCardProps) {
    return (
        <div
            className="
        bg-white dark:bg-gray-800
        border border-gray-200 dark:border-gray-700
        rounded-lg p-4 text-center
        transition-colors
        hover:shadow-lg
      "
        >
            <Image
                src={imageUrl}
                alt={`${name} avatar`}
                width={96}
                height={96}
                className="mx-auto rounded-full"
            />

            <h3 className="mt-4 text-lg font-semibold text-gray-900 dark:text-gray-100">
                {name}
            </h3>
            <p className="text-sm text-gray-600 dark:text-gray-300">
                {one_liner}
            </p>
        </div>
    );
}
