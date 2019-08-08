// add Comment component here
import React, {Component} from 'react'


export default class Comment extends Component {
    



    render(props){
        return(
        <div className="comment">
            <p>{this.props.commentText}</p>
         </div>
        )
    }
}







