import React from "react";
import CountrySelection from "./CountrySelection";
import TeamInfo from "./TeamInfo";
import {API_KEY, base_url} from "../utils/Constants";

class Data extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            teamCountry: null,
            founded: null,
            logo: "https://thumbs.dreamstime.com/b/%D1%84-%D0%B0%D0%B3-%D0%BE%D0%BE%D0%BD-85457247.jpg",
            venueName: null,
            venueAddress: null,
            venueCity: null,
            venueCapacity: null,
            venueSurface: null,
            venueIng: 'https://media.api-sports.io/football/venues/1327.png'
        }
    }

    getTeamInfo = (country) => {
        fetch(`${base_url}teams?country=${country}&name=${country}`, {
            "method": "GET",
            "headers": {
                "x-rapidapi-host": "v3.football.api-sports.io",
                "x-rapidapi-key": API_KEY
            }
        })
            .then(response => response.json())
            .then(json => json.response[0].team)
            .then(team => {
                this.setState({
                        teamCountry: team.country,
                        founded: team.founded,
                        logo: team.logo
                })
            })
            .catch((err) =>
                console.log("err response", err)
            )

        fetch(`${base_url}teams?country=${country}&name=${country}`, {
            "method": "GET",
            "headers": {
                "x-rapidapi-host": "v3.football.api-sports.io",
                "x-rapidapi-key": API_KEY
            }
        })
            .then(response => response.json())
            .then(json => json.response[0].venue)
            .then(venue => {
                this.setState({
                        venueName: venue.name,
                        venueAddress: venue.address,
                        venueCity: venue.city,
                        venueCapacity: venue.capacity,
                        venueSurface: venue.surface,
                        venueImg: venue.image
                })
            })
            .catch((err) =>
                console.log("err response", err)
            )
    }

    render() {
        return (
            <div>
                <CountrySelection updateInfo={this.getTeamInfo}/>
                <TeamInfo info={this.state}/>
            </div>
        );
    }
}

export default Data;