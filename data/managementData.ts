import {Manager} from "./interfaces/manager";

export const management = [
    {
        slug: 'manager-one',
        name: 'Roel',
        one_liner: 'Owner',
        imageUrl: '/Vortex_Gaming_Logo.png',
    },
    {
        slug: 'manager-two',
        name: 'Spekkie',
        one_liner: 'Web Developer',
        imageUrl: '/Vortex_Gaming_Logo.png',
    },
    {
        slug: 'manager-three',
        name: 'Spartacus',
        one_liner: 'Manager',
        imageUrl: '/Vortex_Gaming_Logo.png',
    },
];

export const managers: Record<string, Manager> = {
    'manager-one': {
        name: 'Roel',
        role: 'Owner',
        bio:
            'After competing in eSports myself for two years, I discovered my true passion lies in management. While I enjoyed my time as a player, I found even more fulfillment in building, guiding, and supporting teams behind the scenes. Over the years, I have organized multiple tournaments, worked as an admin, and steadily built up valuable experience in the competitive scene. Though I am always learning and growing, I am proud of how far we have come - and even more excited about what is ahead. This is what I love to do.',
        imageUrl: '/Vortex_Gaming_Logo.png',
        socials: [
            {platform: 'Twitter', url: 'https://twitter.com/RoelCOC'},
        ],
    },
    'manager-two':{
        name: 'Spekkie',
        role: 'Web Developer',
        bio: 'N/A',
        imageUrl: '/Vortex_Gaming_Logo.png',
        socials: [
            {platform: 'Twitter', url: 'https://twitter.com/CSpekkie'},
            {platform: 'Twitch', url: 'https://twitch.tv/spekkie1313'},
        ],
    },
    'manager-three': {
        name: 'Spartacus',
        role: 'Manager',
        bio: 'After spending 5 years as a professional eSports player, I have continued my career in the field of management. I currently oversee two teams, TC Champions and Vortex Gaming. Thanks to the experience I gained during my playing years, my priority is to contribute to the strategic and mental development of these teams. My goal is not just to build winning rosters, but to establish sustainable success and a strong team culture.',
        imageUrl: '/Vortex_Gaming_Logo.png',
        socials: [
            {platform: 'Twitter', url: 'https://twitter.com/CocSpartacus'},
            {platform: 'Instagram', url: 'https://instagram.com/coc_spartacus'},
        ],
    }
}
