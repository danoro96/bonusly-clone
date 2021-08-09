import React, {useState} from "react";

import "./share.scss";

import { API } from "aws-amplify";

import { createPost } from '../../graphql/mutations'

import { Auth } from 'aws-amplify'

import moment from 'moment'

export default function Share() {

  const [gifs, setGifs] = useState([]);
  const [desc, updateDesc] = useState('');
  const [term, updateTerm] = useState('');
  const [currentGif, setCurrentGif] = useState('');

  const todoDetails = {
    date: moment().format('MMMM Do YYYY, h:mm:ss a'),
    desc: desc,
    username: Auth.user.attributes.email,
    userId: Auth.user.attributes.sub,
    like: 0,
    comment: 0,
    gifUrl: currentGif
  };

  async function fetchGifs() {
    try {
      const API_KEY = 'P7JPlKma1GfHXUT78N3COrz6nY76fcuW';
      const BASE_URL = 'http://api.giphy.com/v1/gifs/search';
      const resJson = await fetch(`${BASE_URL}?api_key=${API_KEY}&q=${term}&limit=5`);
      const res = await resJson.json();
      setGifs(res.data);
    } catch (error) {
      console.warn(error);
    }
  }

  function createPostNow(){
    try {
      API.graphql({ query: createPost, variables: {input: todoDetails}})
    } catch (err) {
      return { error: err.errors[0] }
    }
  }

  function chooseGif(gif) {
    setCurrentGif(gif.target.src)
    document.getElementById('gifInput').value = ''
    updateTerm('')
    setGifs([])
  }

  const handleInputDesc = (e) => {
    if(e.target.value === ''){
      setDesc('')
    }else{
      updateDesc(e.target.value);
    }
  }

  const handleInput = (e) => {
    if(e.target.value === ''){
      setGifs([])
    }else{
      updateTerm(e.target.value);
      fetchGifs();
    }
  }

  return (
    <div className="share">
      
      <div className="shareWrapper">
        <div className="shareTop">
          <button className="shareButton"> + Amount </button>
          <button className="shareButton"> @ Recipient </button>
          <button className="shareButton"> # Hashtag </button>
        </div>
        <div className="shareMiddle">
          <input
            placeholder="Who do you want to recognize today?"
            className="shareInput"
            onChange={handleInputDesc}
          />
          <img className="gif-item" src={currentGif}/>
        </div>
        <hr className="shareHr"/>
        <div className="shareBottom">
          <button className="shareButton" onClick={createPostNow}>Share</button>
        </div>
      </div>

      <div>
        <input
          id="gifInput"
          className="shareInput"
          placeholder="Search Giphy"
          onChange={handleInput}
        />
        <div className="gifContainer">
          {gifs.map((item) => (
            <img className="gif-item" key={item.id} src={item.images.original.url} onClick={(item) => chooseGif(item)}/>
          ))}
        </div>
      </div>

    </div>
  );
}
