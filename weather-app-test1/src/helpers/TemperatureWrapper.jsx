import React from 'react';

const TemperatureWrapper = ( temp ) => {

    if(temp > 0) {
        return `+${ temp }`;
    } else {
        return temp;
    }
}

export default TemperatureWrapper;