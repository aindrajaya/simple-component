import React from 'react'
import ReactDOM from 'react-dom'
import faker from 'faker'

import CommenDetail from './CommentDetail'

const App = () => {
    return (
        <div className="ui container comments">
            <CommenDetail 
                author="Sam" 
                timeAgo="Today at 3:44PM" 
                content="Helloo I'am a master on it" 
                avatar={faker.image.avatar()}
                />

            <CommenDetail 
                author="Jane" 
                timeAgo="Today at 7:44PM" 
                content="Helloo I'am a master on it before you" 
                avatar={faker.image.avatar()}
                />

            <CommenDetail 
                author="Tabuti" 
                timeAgo="Yesterday at 2:44PM" 
                content="Helloo I'am not a master on it" 
                avatar={faker.image.avatar()}
                />
        </div>
    )
}

ReactDOM.render(<App />, document.querySelector('#root'))