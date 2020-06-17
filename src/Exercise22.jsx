import React from 'react'
import Segment from './Exercise2'

const InfoDocument = (props) => {
    return(
        <Segment>
            <h4 className="ui header">{props.header}</h4>
            <p>{props.desc}</p>
        </Segment>
    )
}

export default InfoDocument