// Write your code here
import './index.css'

const LatestMatch = props => {
  const {latestMatchDetails} = props
  const {
    umpires,
    result,
    manOfTheMatch,
    date,
    venue,
    competingTeam,
    competingTeamLogo,
    firstInnings,
    secondInnings,
  } = latestMatchDetails
  return (
    <div className="latest-card-bg-container">
      <div className="first-container">
        <p className="competig-team-heading">{competingTeam}</p>
        <p className="date">{date}</p>
        <p className="venue-result">{venue}</p>
        <p className="venue-result">{result}</p>
      </div>
      <img
        src={competingTeamLogo}
        alt={`latest match ${competingTeam}`}
        className="compete-logo"
      />
      <hr className="lower-border-css" />
      <div className="last-container">
        <p className="questin-type">First Innings</p>
        <p className="answer-type">{firstInnings}</p>
        <p className="questin-type">Second Innings</p>
        <p className="answer-type">{secondInnings}</p>
        <p className="questin-type">Man Of The Match</p>
        <p className="answer-type">{manOfTheMatch}</p>
        <p className="questin-type">Umpires</p>
        <p className="answer-type">{umpires}</p>
      </div>
    </div>
  )
}

export default LatestMatch
