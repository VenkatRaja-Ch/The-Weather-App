import React from 'react';
import NextDaysForecastItems from './NextDayForecastItems';
import PropTypes from 'prop-types'

const NextDaysForecast = ({data}) => {

    return (
    <ul>
        <li>
            {/* {data.list.map( (day) => (
                <NextDaysForecastItems />
            ))} */}
        </li>
    </ul>
    )
    
};


NextDaysForecast.propTypes = {
    date: PropTypes.array.isRequired,
}

export default NextDaysForecast;