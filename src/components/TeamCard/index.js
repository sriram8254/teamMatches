// Write your code here
import {Link} from 'react-router-dom'
import './index.css'

const TeamCard = props => {
  const {teamDetails} = props
  const {id, name, teamImageUrl} = teamDetails
  return (
    <Link to={`/team-matches/${id}`} className="team-item-link">
      <li className="team-item-container">
        <img src={teamImageUrl} alt={`${name}`} className="img-css" />
        <p className="team-heading">{name}</p>
      </li>
    </Link>
  )
}

export default TeamCard
