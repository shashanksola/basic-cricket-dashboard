// Write your code here

import './index.css'
import MatchCard from '../MatchCard'

const LatestMatch = props => {
  const {teamData} = props
  const {latestMatchDetails, teamBannerUrl, recentMatches} = teamData
  return (
    <div>
      <img src={teamBannerUrl} alt="team banner" />
      <h1>Latest Matches</h1>
      <div className="last-match">
        <div>
          <p>{latestMatchDetails.competingTeam}</p>
          <p>{latestMatchDetails.date}</p>
          <p>{latestMatchDetails.venue}</p>
          <p>{latestMatchDetails.result}</p>
        </div>
        <img
          src={latestMatchDetails.competingTeamLogo}
          alt={`latest match ${latestMatchDetails.competingTeam}`}
        />
        <div>
          <p>First Innings</p>
          <p>{latestMatchDetails.firstInnings}</p>
          <p>Second Innings</p>
          <p>{latestMatchDetails.secondInnings}</p>
          <p>Man Of The Match</p>
          <p>{latestMatchDetails.manOfTheMatch}</p>
          <p>Umpires</p>
          <p>{latestMatchDetails.umpires}</p>
        </div>
      </div>
      <ul className="prev-match-container">
        {recentMatches.map(each => (
          <MatchCard key={each.id} match={each} />
        ))}
      </ul>
    </div>
  )
}

export default LatestMatch
