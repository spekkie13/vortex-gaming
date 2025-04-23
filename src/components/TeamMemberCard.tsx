import Image from 'next/image';
import Link from 'next/link';

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

export default function TeamMemberCard({ name, one_liner, imageUrl, socials = [] }: TeamMemberCardProps) {
    return (
        <div className="border rounded-lg p-4 text-center bg-gray-50 dark:bg-gray-800">
            <Image
                src={imageUrl}
                alt={name}
                width={96}
                height={96}
                className="mx-auto rounded-full"
            />
            <h3 className="mt-4 text-lg font-semibold text-primary dark:text-white">{name}</h3>
            <p className="text-sm text-gray-600 dark:text-gray-300">{one_liner}</p>
            {socials.length > 0 && (
                <div className="mt-2 flex justify-center space-x-4">
                    {socials.map((social) => (
                        <Link key={social.platform} href={social.url}>
                            <a target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-accent">
                                {social.platform}
                            </a>
                        </Link>
                    ))}
                </div>
            )}
        </div>
    );
}
