// Write your code here

import './index.css'

const MatchCard = props => {
  const {match} = props
  console.log(match)
  const wl = match.result.includes(match.competingTeam) ? 'Lost' : 'Won'
  return (
    <li className="prev-match">
      <img
        src={match.competingTeamLogo}
        alt={`competing team ${match.competingTeam}`}
      />
      <p>{match.competingTeam}</p>
      <p>{match.result}</p>
      <p style={wl === 'Lost' ? {color: 'red'} : {color: 'green'}}>
        {match.matchStatus}
      </p>
    </li>
  )
}

export default MatchCard
