import React, { Fragment } from 'react';
import { shape } from 'prop-types';
import Bar from './Bar';

// props.data
const Bars = ({ data }) => (
    <Fragment>
        {data.stats.map(bar => <Bar key={bar.stat.name} data={bar} />)}
    </Fragment>
);


Bars.defaultProps = {
    data: {},
};

Bars.propTypes = {
    data: shape({}),
};

export default Bars;
