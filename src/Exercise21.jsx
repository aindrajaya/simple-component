import React from 'react'
import Segment from './Exercise2'

const AddDocument = (props) => {
    return(
        <Segment>
            <div className="ui icon header">
                <i className="pdf file outline icon"></i>
                    {props.text}
            </div>
            <div className="ui primary button">Add Document</div>
        </Segment>
    )
}

export default AddDocument