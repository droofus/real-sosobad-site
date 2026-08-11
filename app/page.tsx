import { formatMatchDate, getMatchMonth, matches, rsvpUrl, team } from "@/lib/schedule";

function TeamMark() {
  return <div className="team-mark">{team.shortName}</div>;
}

function MatchCard({ match, isNext }: { match: (typeof matches)[number]; isNext: boolean }) {
  const responseUrl = match.rsvpUrl ?? rsvpUrl;

  return (
    <article className={`match-card ${isNext ? "next-match" : ""}`}>
      <div className="match-date">
        <span>{formatMatchDate(match.date).split(" ")[0]}</span>
        <strong>{new Date(`${match.date}T12:00:00`).getDate()}</strong>
        <span>{new Intl.DateTimeFormat("en-US", { month: "short" }).format(new Date(`${match.date}T12:00:00`))}</span>
      </div>

      <div className="match-main">
        <div className="match-kicker">
          {isNext ? <span className="next-pill">NEXT MATCH</span> : <span>{match.home ? "HOME MATCH" : "AWAY MATCH"}</span>}
          <span>{match.time}</span>
        </div>
        <h3>{match.home ? team.name : match.opponent}</h3>
        <div className="versus-row">
          <TeamMark />
          <span>vs</span>
          <div className="opponent-mark">{match.opponent.split(" ").map((word) => word[0]).join("").slice(0, 3)}</div>
          <strong>{match.home ? match.opponent : team.name}</strong>
        </div>
        <div className="location-line">
          <span className="location-pin" aria-hidden="true">⌖</span>
          <span>{match.venue} · {match.field}</span>
          <a href={match.mapUrl} target="_blank" rel="noreferrer">Map ↗</a>
        </div>
      </div>

      <div className="rsvp-area">
        {responseUrl ? (
          <a className="rsvp-button" href={responseUrl} target="_blank" rel="noreferrer">
            RSVP for this match <span>↗</span>
          </a>
        ) : (
          <span className="rsvp-button disabled">RSVP link coming soon</span>
        )}
        <span className="rsvp-note">Takes about 10 seconds</span>
      </div>
    </article>
  );
}

export default function Home() {
  const months = [...new Set(matches.map((match) => getMatchMonth(match.date)))];
  const today = new Date();
  today.setHours(0, 0, 0, 0);
  const nextMatch = matches.find((match) => new Date(`${match.date}T12:00:00`) >= today);

  return (
    <main>
      <nav className="nav shell">
        <a className="brand" href="#top" aria-label={`${team.name} home`}>
          <TeamMark />
          <span>{team.name}</span>
        </a>
        <div className="nav-links">
          <a href="#schedule">Schedule</a>
          <a href="#team">Team info</a>
          <a className="nav-cta" href="#schedule">View schedule <span>↓</span></a>
        </div>
      </nav>

      <section className="hero shell" id="top">
        <div className="hero-copy">
          <p className="eyebrow"><span className="status-dot" /> {team.season} · {team.league}</p>
          <h1>Show up.<br /><em>Play together.</em></h1>
          <p className="hero-description">Everything we need for match day, in one place. Check the schedule, find the field, and let the team know if you&apos;re in.</p>
          <a className="hero-link" href="#schedule">See upcoming matches <span>↓</span></a>
        </div>
        <div className="hero-stamp" aria-hidden="true">
          <span>{team.shortName}</span>
          <small>EST.</small>
          <b>2026</b>
        </div>
      </section>

      <section className="schedule-section shell" id="schedule">
        <div className="section-heading">
          <div>
            <p className="eyebrow">THE FIXTURES</p>
            <h2>Upcoming matches</h2>
          </div>
          <p className="section-note">Please RSVP for every match<br />so we know who&apos;s making it.</p>
        </div>

        {months.map((month) => (
          <div className="month-group" key={month}>
            <h3 className="month-label">{month}</h3>
            <div className="matches-list">
              {matches.filter((match) => getMatchMonth(match.date) === month).map((match) => (
                <MatchCard key={match.id} match={match} isNext={match.id === nextMatch?.id} />
              ))}
            </div>
          </div>
        ))}
      </section>

      <section className="team-section" id="team">
        <div className="shell team-grid">
          <div>
            <p className="eyebrow">THE TEAM</p>
            <h2>Good games<br /><em>start here.</em></h2>
          </div>
          <div className="team-copy">
            <p>This is our home base for the season. Keep it bookmarked for match times, field details, and quick availability check-ins.</p>
            <div className="team-stats">
              <div><strong>{matches.length}</strong><span>matches ahead</span></div>
              <div><strong>11</strong><span>players on field</span></div>
              <div><strong>01</strong><span>team, all in</span></div>
            </div>
          </div>
        </div>
      </section>

      <footer className="footer shell">
        <span>{team.name} · {team.season}</span>
        <span>Built for match day.</span>
      </footer>
    </main>
  );
}
