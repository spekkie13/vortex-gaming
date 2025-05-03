import { PlayerStatsResponse } from "../../../data/models/playerStats";

const BASE_URL = 'https://api.competitiveclash.network';

export async function fetchPlayerStats(tag: string): Promise<PlayerStatsResponse> {
    const res = await fetch(
        `${BASE_URL}/players/basicinfo?player=${encodeURIComponent(tag)}`,
        { cache: 'no-store' }
    );
    if (!res.ok) {
        throw new Error(`API error (${res.status}): ${res.statusText}`);
    }
    return (await res.json()) as PlayerStatsResponse;
}
