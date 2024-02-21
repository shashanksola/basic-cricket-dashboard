// Write your code here

import {Link} from 'react-router-dom'

const TeamCard = props => {
  const {team} = props
  const {name, id, teamImageUrl} = team

  return (
    <Link to={`/team-matches/${id}`}>
      <div>
        <img src={teamImageUrl} alt="name" />
        <h1>{name}</h1>
      </div>
    </Link>
  )
}

export default TeamCard
