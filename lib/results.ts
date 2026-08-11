export type LeagueResult = {
  id: string;
  date: string;
  time: string;
  homeTeam: string;
  awayTeam: string;
  venue: string;
  field: string;
  homeScore?: number;
  awayScore?: number;
};

export const leagueScheduleUrl = "https://app.leaguelinq.com/MVSL/league/01kxq4w3g8kafd646zpc1mgvv8/schedule";

export const leagueResults: LeagueResult[] = [
  {
    id: "wobbly-wanderers-vs-stallions",
    date: "2026-08-09",
    time: "1:00 PM",
    homeTeam: "Wobbly Wanderers FC",
    awayTeam: "Stallions FC",
    venue: "Highnoon",
    field: "Field 1",
  },
  {
    id: "alianza-vs-kaiser",
    date: "2026-08-09",
    time: "1:00 PM",
    homeTeam: "Alianza FC",
    awayTeam: "Kaiser FC",
    venue: "Highnoon",
    field: "Field 3",
  },
  {
    id: "elite-vs-international-united",
    date: "2026-08-09",
    time: "3:00 PM",
    homeTeam: "Elite FC",
    awayTeam: "International United",
    venue: "Highnoon",
    field: "Field 1",
    homeScore: 7,
    awayScore: 7,
  },
  {
    id: "cuervos-vs-pistoleros",
    date: "2026-08-09",
    time: "3:00 PM",
    homeTeam: "Cuervos",
    awayTeam: "Pistoleros FC",
    venue: "Highnoon",
    field: "Field 3",
    homeScore: 0,
    awayScore: 8,
  },
  {
    id: "warriors-vs-real-sosobad",
    date: "2026-08-09",
    time: "5:00 PM",
    homeTeam: "WARRIORS",
    awayTeam: "Real Sosobad",
    venue: "Highnoon",
    field: "Field 1",
    homeScore: 2,
    awayScore: 6,
  },
  {
    id: "deming-vs-gansitos",
    date: "2026-08-09",
    time: "5:00 PM",
    homeTeam: "Deming FC",
    awayTeam: "Gansitos",
    venue: "Highnoon",
    field: "Field 3",
  },
];

export function formatResultDate(date: string) {
  return new Intl.DateTimeFormat("en-US", {
    weekday: "long",
    month: "short",
    day: "numeric",
  }).format(new Date(`${date}T12:00:00`));
}
