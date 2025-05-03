export interface Account {
    tag: string;
    name: string;
}

export type StatsType = 'offense' | 'defense';

export interface StatBlock {
    stats_type:   StatsType;
    avg_stars:    number;
    avg_perc:     number;
    avg_duration: number;
    attacks:      number;
    triples:      number;
    doubles:      number;
    singles:      number;
    zeros:        number;
}

export interface PlayerStatsResponse {
    id:            number | null;
    name:          string;
    accounts:      Account[];
    picture_url:   string | null;
    twitter:       string | null;
    stats_offense: StatBlock;
    stats_defense: StatBlock;
}
