import React from 'react';


const TeamInfo = ({info}) => {
    return (
        <div className='teamInfo row'>
            <div className='col-sm-9'>
                <p>Country: {info.teamCountry}</p>
                <p>founded: {info.founded}</p>
            </div>
            <div className='col-sm-3'>
                <img width={120} height={87} src={info.logo} alt="Team Logo"/>
            </div>
            <div className='col-sm-9'>
                <p>Venue name: {info.venueName}</p>
                <p>address: {info.venueAddress}</p>
                <p>city: {info.venueCity}</p>
                <p>capacity: {info.venueCapacity}</p>
                <p>surface: {info.venueSurface}</p>
            </div>
            <div className='col-sm-3'>
                <img width={120} height={90} src={info.venueImg} alt="Team Logo"/>
            </div>
        </div>
    );
};

export default TeamInfo;