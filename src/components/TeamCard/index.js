// Write your code here

import {Link} from 'react-router-dom'

const TeamCard = props => {
  const {team} = props
  const {name, id, teamImageUrl} = team

  return (
    <Link to={`/team-matches/${id}`}>
      <li>
        <img src={teamImageUrl} alt={name} />
        <p>{name}</p>
      </li>
    </Link>
  )
}

export default TeamCard
