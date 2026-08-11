export type Match = {
  id: string;
  date: string;
  time: string;
  opponent: string;
  venue: string;
  field: string;
  home: boolean;
  mapUrl: string;
  rsvpUrl?: string;
};

export const team = {
  name: "Real Sosobad",
  shortName: "RS",
  league: "MVSL • Fall 2026 Men’s Open 11v11",
  season: "Fall 2026",
  colors: ["#e8ff63", "#12251f"],
};

export const rsvpUrl = "https://docs.google.com/forms/d/e/1FAIpQLSehvf9RUzwqz8c2lWxDxqe21RITHrYvsIv_8xFXL9s7XpO4qQ/viewform";

const rsvpMatchField = "entry.207435959";

function formatRSVPDate(date: string) {
  return new Intl.DateTimeFormat("en-US", {
    weekday: "long",
    month: "short",
    day: "numeric",
  }).format(new Date(`${date}T12:00:00`));
}

export function getMatchRsvpUrl(match: Match) {
  const url = new URL(rsvpUrl);
  url.searchParams.set("usp", "pp_url");
  url.searchParams.set(
    rsvpMatchField,
    `${formatRSVPDate(match.date)} · ${match.time} · ${match.field} · ${match.venue} · ${match.opponent}`,
  );
  return url.toString();
}

export const matches: Match[] = [
  {
    id: "real-sosobad-vs-stallions",
    date: "2026-08-18",
    time: "7:00 PM",
    opponent: "Stallions FC",
    venue: "Highnoon",
    field: "Field 1",
    home: true,
    mapUrl: "https://www.google.com/maps/search/?api=1&query=Highnoon+Soccer+Complex%2C+2004+Bruins+Ln%2C+Las+Cruces%2C+NM+88007",
  },
  {
    id: "real-sosobad-vs-pistoleros",
    date: "2026-08-25",
    time: "7:00 PM",
    opponent: "Pistoleros FC",
    venue: "Highnoon",
    field: "Field 1",
    home: true,
    mapUrl: "https://www.google.com/maps/search/?api=1&query=Highnoon+Soccer+Complex%2C+2004+Bruins+Ln%2C+Las+Cruces%2C+NM+88007",
  },
  {
    id: "real-sosobad-vs-deming",
    date: "2026-08-30",
    time: "1:00 PM",
    opponent: "Deming FC",
    venue: "Highnoon",
    field: "Field 1",
    home: true,
    mapUrl: "https://www.google.com/maps/search/?api=1&query=Highnoon+Soccer+Complex%2C+2004+Bruins+Ln%2C+Las+Cruces%2C+NM+88007",
  },
  {
    id: "real-sosobad-vs-elite",
    date: "2026-09-13",
    time: "5:00 PM",
    opponent: "Elite FC",
    venue: "PVD",
    field: "Field 1",
    home: true,
    mapUrl: "https://www.google.com/maps/search/?api=1&query=PVD+Fields%2C+1440+E+Hadley%2C+Las+Cruces%2C+NM",
  },
  {
    id: "real-sosobad-at-international-united",
    date: "2026-09-20",
    time: "1:00 PM",
    opponent: "International United",
    venue: "Highnoon",
    field: "Field 1",
    home: false,
    mapUrl: "https://www.google.com/maps/search/?api=1&query=Highnoon+Soccer+Complex%2C+2004+Bruins+Ln%2C+Las+Cruces%2C+NM+88007",
  },
  {
    id: "real-sosobad-at-kaiser",
    date: "2026-09-27",
    time: "3:00 PM",
    opponent: "Kaiser FC",
    venue: "Highnoon",
    field: "Field 1",
    home: false,
    mapUrl: "https://www.google.com/maps/search/?api=1&query=Highnoon+Soccer+Complex%2C+2004+Bruins+Ln%2C+Las+Cruces%2C+NM+88007",
  },
  {
    id: "real-sosobad-at-gansitos",
    date: "2026-10-04",
    time: "5:00 PM",
    opponent: "Gansitos",
    venue: "Highnoon",
    field: "Field 1",
    home: false,
    mapUrl: "https://www.google.com/maps/search/?api=1&query=Highnoon+Soccer+Complex%2C+2004+Bruins+Ln%2C+Las+Cruces%2C+NM+88007",
  },
  {
    id: "real-sosobad-at-cuervos",
    date: "2026-10-11",
    time: "1:00 PM",
    opponent: "Cuervos",
    venue: "Highnoon",
    field: "Field 1",
    home: false,
    mapUrl: "https://www.google.com/maps/search/?api=1&query=Highnoon+Soccer+Complex%2C+2004+Bruins+Ln%2C+Las+Cruces%2C+NM+88007",
  },
];

export function formatMatchDate(date: string) {
  return new Intl.DateTimeFormat("en-US", {
    weekday: "short",
    month: "short",
    day: "numeric",
  }).format(new Date(`${date}T12:00:00`));
}

export function getMatchMonth(date: string) {
  return new Intl.DateTimeFormat("en-US", {
    month: "long",
    year: "numeric",
  }).format(new Date(`${date}T12:00:00`));
}
