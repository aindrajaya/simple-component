import React from 'react'
import ReactDOM from 'react-dom'
import faker from 'faker'

import CommenDetail from './CommentDetail'
import ApprovalCard from './ApprovalCard'

//exercise
import Messages from './Exercise1'
import AddDocument from './Exercise21'
import InfoDocument from './Exercise22'
import Segment from './Exercise2'

const App = () => {
    return (
        <div className="ui container comments">
            <ApprovalCard>
                <CommenDetail 
                    author="Sam" 
                    timeAgo="Today at 3:44PM" 
                    content="Helloo I'am a master on it" 
                    avatar={faker.image.avatar()}
                    />
            </ApprovalCard>

            <ApprovalCard>
                <CommenDetail 
                    author="Jane" 
                    timeAgo="Today at 7:44PM" 
                    content="Helloo I'am a master on it before you" 
                    avatar={faker.image.avatar()}
                    />
            </ApprovalCard>

            <ApprovalCard>
                <CommenDetail 
                    author="Tabuti" 
                    timeAgo="Yesterday at 2:44PM" 
                    content="Helloo I'am not a master on it" 
                    avatar={faker.image.avatar()}
                    />
            </ApprovalCard>
            {/* 1. Exercise Solution */}
            <Messages title="Hello this is a Messges Title" paragraph="hello this is a paragraph content and this is the paragarph have senteces"/>

            {/* 2. Exercise Solution */}
            
                <AddDocument text="No document are listed for this customer"/>
            
            
        
                <InfoDocument header="For Your Information" desc="Ya begitula namanya juga pemberitahuan ya harusnya dibaca dan dipahami betul karena pemberitahuan itu penting untuk dipahaim agar tidak salah arah ya to"/>
            

        </div>
    )
}

ReactDOM.render(<App />, document.querySelector('#root'))