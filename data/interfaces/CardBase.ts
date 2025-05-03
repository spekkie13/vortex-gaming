export interface CardBase {
    name: string;
    bio: string;
    imageUrl: string;
    socials?: { platform: string; url: string }[];
}
