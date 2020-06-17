import React from 'react'

const Messages = (props) => {
    return(
        <div className="ui message">
            <div className="header">{props.title}</div>
            <p>{props.paragraph}</p>
        </div>
    )
}

export default Messages