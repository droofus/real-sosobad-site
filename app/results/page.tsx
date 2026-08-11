import Link from "next/link";
import { team } from "@/lib/schedule";
import { formatResultDate, leagueResults, leagueScheduleUrl } from "@/lib/results";

function TeamMark() {
  return <div className="team-mark">{team.shortName}</div>;
}

function ResultCard({ result }: { result: (typeof leagueResults)[number] }) {
  const hasScore = result.homeScore !== undefined && result.awayScore !== undefined;
  const homeWon = hasScore && result.homeScore! > result.awayScore!;
  const awayWon = hasScore && result.awayScore! > result.homeScore!;

  return (
    <article className={`result-card ${hasScore ? "recorded-result" : "pending-result"}`}>
      <div className="result-date">
        <span>{formatResultDate(result.date)}</span>
        <strong>{result.time}</strong>
      </div>
      <div className="result-teams">
        <div className={homeWon ? "winning-team" : ""}>
          <span>{result.homeTeam}</span>
          {hasScore && <strong>{result.homeScore}</strong>}
        </div>
        <div className="result-vs">vs</div>
        <div className={awayWon ? "winning-team" : ""}>
          <span>{result.awayTeam}</span>
          {hasScore && <strong>{result.awayScore}</strong>}
        </div>
      </div>
      <div className="result-meta">
        <span>{result.venue} · {result.field}</span>
        <b>{hasScore ? result.homeScore === result.awayScore ? "DRAW" : "FINAL" : "SCORE PENDING"}</b>
      </div>
    </article>
  );
}

export default function ResultsPage() {
  return (
    <main>
      <nav className="nav shell">
        <Link className="brand" href="/" aria-label={`${team.name} home`}>
          <TeamMark />
          <span>{team.name}</span>
        </Link>
        <div className="nav-links">
          <Link href="/#schedule">Schedule</Link>
          <Link href="/results">Results</Link>
          <Link className="nav-cta" href="/">Home <span>↗</span></Link>
        </div>
      </nav>

      <section className="results-hero shell">
        <Link className="back-link" href="/">← Back to team site</Link>
        <p className="eyebrow"><span className="status-dot" /> {team.league}</p>
        <h1>All <em>results.</em></h1>
        <p>Every completed league fixture in one place. Scores are shown as they are entered on the league schedule.</p>
      </section>

      <section className="results-section shell">
        <div className="section-heading results-heading">
          <div>
            <p className="eyebrow">THE LEAGUE</p>
            <h2>Match results</h2>
          </div>
          <a className="source-link" href={leagueScheduleUrl} target="_blank" rel="noreferrer">Open league schedule ↗</a>
        </div>
        <div className="results-list">
          {leagueResults.map((result) => <ResultCard key={result.id} result={result} />)}
        </div>
      </section>

      <footer className="footer shell">
        <span>{team.name} · {team.season}</span>
        <span>League-wide results.</span>
      </footer>
    </main>
  );
}
