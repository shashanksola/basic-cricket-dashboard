// Write your code here

import {Component} from 'react'
import Loader from 'react-loader-spinner'
import LatestMatch from '../LatestMatch'

import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css'

class TeamMatches extends Component {
  state = {isLoading: true, teamData: {}}

  componentDidMount = () => {
    this.getTeamData()
  }

  getTeamData = async () => {
    const {match} = this.props
    const {params} = match
    const {id} = params
    const response = await fetch(`https://apis.ccbp.in/ipl/${id}`)
    const data = await response.json()

    const getRecentMatchesCamelCase = recent => [
      recent.map(each => ({
        umpires: each.umpires,
        result: each.result,
        manOfTheMatch: each.man_of_the_match,
        id: each.id,
        date: each.date,
        venue: each.venue,
        competingTeam: each.competing_team,
        competingTeamLogo: each.competing_team_logo,
      })),
    ]

    const updatedData = {
      teamBannerUrl: data.team_banner_url,
      latestMatchDetails: {
        umpires: data.latest_match_details.umpires,
        result: data.latest_match_details.result,
        manOfTheMatch: data.latest_match_details.man_of_the_match,
        id: data.latest_match_details.id,
        date: data.latest_match_details.date,
        venue: data.latest_match_details.venue,
        competingTeam: data.latest_match_details.competing_team,
        competingTeamLogo: data.latest_match_details.competing_team_logo,
        firstInnings: data.latest_match_details.first_innings,
        secondInnings: data.latest_match_details.second_innings,
        matchStatus: data.latest_match_details.match_status,
      },
      recentMatches: getRecentMatchesCamelCase(data.recent_matches)[0],
    }
    this.setState({isLoading: false, teamData: updatedData})
  }

  renderLatestMatch = () => {
    const {teamData} = this.state
    return <LatestMatch teamData={teamData} />
  }

  render() {
    const {isLoading} = this.state
    return (
      <div>
        {isLoading ? (
          <div>
            <Loader type="TailSpin" color="#00BFFF" height={50} width={50} />
          </div>
        ) : (
          this.renderLatestMatch()
        )}
      </div>
    )
  }
}

export default TeamMatches
