// Write your code here

import {Component} from 'react'
import Loader from 'react-loader-spinner'
import TeamCard from '../TeamCard'

import './index.css'

import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css'

class Home extends Component {
  state = {isLoading: true, dashboardData: []}

  componentDidMount = () => {
    this.getDashboardData()
  }

  getDashboardData = async () => {
    const response = await fetch('https://apis.ccbp.in/ipl')
    const data = await response.json()

    const teamData = data.teams

    const getConvertedData = each => {
      const newTeam = {
        name: each.name,
        id: each.id,
        teamImageUrl: each.team_image_url,
      }
      return newTeam
    }

    const updatedData = teamData.map(each => getConvertedData(each))

    this.setState({isLoading: false, dashboardData: updatedData})
  }

  renderDashboard = () => {
    const {dashboardData} = this.state

    return (
      <div className="bg-container">
        <h1>
          <img
            src="https://assets.ccbp.in/frontend/react-js/ipl-logo-img.png"
            alt="ipl logo"
          />
          IPL DashBoard
        </h1>
        <ul>
          {dashboardData.map(each => (
            <TeamCard key={each.id} team={each} />
          ))}
        </ul>
      </div>
    )
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
          this.renderDashboard()
        )}
      </div>
    )
  }
}

export default Home
