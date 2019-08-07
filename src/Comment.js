// add Comment component here
import React, { Component } from 'react'

class Comment extends Component {

    render(prop){
        return ( 
            <div className='comment'>
                {this.props.commentText}
            </div>
        )
    }
}

export default Comment;