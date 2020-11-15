import React from "react";
import {API_KEY, base_url, periodDay} from "../utils/Constants";

class CountrySelection extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            countries: ['wait...'],
        };
    }

    handleGetCountry = (e) => {
        e.preventDefault();
        this.props.updateInfo(e.currentTarget.country.value);
    };

    fillCountries(url) {
        fetch(url, {
            "method": "GET",
            "headers": {
                "x-rapidapi-host": "v3.football.api-sports.io",
                "x-rapidapi-key": API_KEY
            }
        })
            .then(response => response.json())
            .then(json => json.response)
            .then(arr => arr.map(item => item.name))
            .then(country => {
                this.setState({countries: country});
                let info = {
                    listCountries: country,
                    time: Date.now()
                };
                localStorage.setItem('countries', JSON.stringify(info));
            });
    };

    componentDidMount() {
        let countries = JSON.parse(localStorage.getItem('countries'));
        if (!countries || (Date.now() - countries.time) > periodDay) {
            this.fillCountries(`${base_url}countries`);
        } else {
            this.setState({countries: countries.listCountries});
        }
    }

    render() {
        return (
            <div>
                <form onSubmit={this.handleGetCountry}>
                    <select id="country" name="country">{
                        this.state.countries.map((item, index) => <option value={item} key={index}>{item}</option>)
                    }
                    </select>
                    <button type='Submit'>Select</button>
                </form>
            </div>
        );
    }
}

export default CountrySelection;