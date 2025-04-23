"use client";

import Image from 'next/image';

interface SocialLink {
    platform: string;
    url: string;
}

interface TeamMemberCardProps {
    name: string;
    one_liner: string;
    imageUrl: string;
    socials?: SocialLink[];
}

export default function TeamMemberCard({
                                           name,
                                           one_liner,
                                           imageUrl,
                                           socials = [],
                                       }: TeamMemberCardProps) {
    return (
        <div
            className="
        bg-white dark:bg-gray-800
        border border-gray-200 dark:border-gray-700
        rounded-lg p-4 text-center
        transition-colors transition-shadow
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

            {socials.length > 0 && (
                <div className="mt-3 flex justify-center space-x-4">
                    {socials.map(({ platform, url }) => (
                        <a
                            key={platform}
                            href={url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-gray-500 hover:text-accent transition-colors"
                        >
                            {platform}
                        </a>
                    ))}
                </div>
            )}
        </div>
    );
}
