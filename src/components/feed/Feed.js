import React, {useState, useEffect} from "react";

import Amplify, { API, graphqlOperation } from 'aws-amplify';
import * as subscriptions from '../../graphql/subscriptions';

import { listPosts } from '../../graphql/queries'

import Post from "../post/Post";
import Share from "../share/Share";
import "./Feed.scss";
import moment from "moment";

export default function Feed() {

  const [posts, setPosts] = useState([]);

  // Subscribe to creation of Todo
  const subscription = API.graphql(
    graphqlOperation(subscriptions.onCreatePost)
  ).subscribe({
    next: ({ provider, value }) => {
      getPosts()
    },
    error: error => console.warn(error)
  });

  function getPosts(){
    API.graphql({ query: listPosts }).then(response => {
      const sortedArray = response.data.listPosts.items.sort((a,b) => {
        return moment(a.date, 'MMMM Do YYYY, h:mm:ss a').unix() - moment(b.date, 'MMMM Do YYYY, h:mm:ss a').unix()
      })
      setPosts(sortedArray.reverse())  
    }).catch(error => {
      console.log(error)
    });
  }

  useEffect(() => {
    getPosts();
  }, []);

  return (
    <div className="feed">
      <div className="feedWrapper">
        <h2> You have 1,110 dabs to give away </h2>
        <Share />
        {posts.map((p) => (
          <Post key={p.id} post={p} />
        ))}
      </div>
    </div>
  );
}