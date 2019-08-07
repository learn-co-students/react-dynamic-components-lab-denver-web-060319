import React from 'react'
import BlogPost from './BlogPost'
// import ColorBox from './ColorBox'

class Comment extends React.Component {
    constructor(props) {
        super(props)
    }
    
    render() {
        return(
            <div className="comment">
                {this.props.commentText}
            </div>
        )
    }
}

export default Comment;

