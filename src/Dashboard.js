import React, {PropTypes} from 'react';
import Radium from 'radium';

import Day from './Day';
import Time from './Time';
import Weather from './Weather';
import Travel from './Travel';
import News from './News';

const Dashboard = ({forecastioAPIKey, googleMapsAPIKey, nyTimesAPIKey, lat, lon}) => (
  <div style={{
    height: '100%',
    fontSize: 40,
    color: 'white',
    background: 'black',
    textAlign: 'center',
    fontWeight: 'lighter'
  }}>
    <Day/>
    <Time/>
    <Weather apiKey={forecastioAPIKey} latitude={lat} longitude={lon}/>
    <Travel apiKey={googleMapsAPIKey} latitude={lat} longitude={lon}/>
    <News apiKey={nyTimesAPIKey}/>
  </div>
);

Dashboard.propTypes = {
  forecastioAPIKey: PropTypes.string.isRequired,
  googleMapsAPIKey: PropTypes.string.isRequired,
  nyTimesAPIKey: PropTypes.string.isRequired,
  lat: PropTypes.number.isRequired,
  lon: PropTypes.number.isRequired
};

export default Radium(Dashboard);