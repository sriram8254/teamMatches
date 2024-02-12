// Write your code here
import './index.css'

const MatchCard = props => {
  const {matchDetails} = props
  const {competingTeamLogo, competingTeam, result, matchStatus} = matchDetails
  const resultColor = matchStatus === 'Won' ? 'green-color' : 'red-color'
  return (
    <li className="match-result-bg-container">
      <img
        src={competingTeamLogo}
        alt={`competing team ${competingTeam}`}
        className="compete-img"
      />
      <p className="result-heading">{competingTeam}</p>
      <p className="match-result-desc">{result}</p>
      <p className={`match-result-desc2 ${resultColor}`}>{matchStatus}</p>
    </li>
  )
}

export default MatchCard
