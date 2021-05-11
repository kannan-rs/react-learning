import React, { Component } from 'react'
import GetListFromAPI from './GetListFromAPI'
import PostToAPI from './PostToAPI'

class PostManagement extends Component {
    render() {
        return (
            <div>
                <PostToAPI />
                <GetListFromAPI />
            </div>
        )
    }
}

export default PostManagement
