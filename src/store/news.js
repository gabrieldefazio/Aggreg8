import { GOOGLE_KEY } from '../../.env'
import { NYTIMES_KEY } from '../../.env'
import axios from 'axios'


/**
 |--------------------------------------------------
 | Types
 |--------------------------------------------------
 */

export const FETCH_BBC_NEWS = 'FETCH_BBC_NEWS';
export const GET_BBC_NEWS = 'GET_BBC_NEWS'

/**
 |--------------------------------------------------
 | Thunk Creators
 |--------------------------------------------------
 */

export const fetchBBCNews = () => dispatch => {
  console.log('GOOGLEKEY',GOOGLE_KEY)
  axios.get(`https://newsapi.org/v2/top-headlines?sources=bbc-news&apiKey=${GOOGLE_KEY}`)
    .then(res => res.data)
    .then(bbcNews => {
      const action = getBBCNews(bbcNews);
      dispatch(action);
    })
    .catch()
  
}

/**
 |--------------------------------------------------
 | Actions
 |--------------------------------------------------
 */

export function getBBCNews (payload) {
  const action = { type: GET_BBC_NEWS, payload };
  return action;
}

/**
 |--------------------------------------------------
 | Reducer
 |--------------------------------------------------
 */

const INITIAL_STATE = {
  bbcNewsFeed:[]
}

const reducer = (state = INITIAL_STATE, action = {}) => {
    switch(action.type){
      case GET_BBC_NEWS:
          return {...state, bbcNewsFeed: action.payload}
        default: 
            return state;
    }
}

export default reducer;