import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { fetchStatus, getQuote } from './Redux/slices/quoteSlice';

import './index.scss';

const App = () => {
  const dispatch = useDispatch()
  const { quote, author, status } = useSelector(state => state.quoteSlice)

  useEffect(() => {
    dispatch(getQuote())
  }, [])

  return (
    <article id="quote-box">
      <h1>RANDOME QUOTES</h1>
      {status === fetchStatus.SUCCESS && <>
        <p id="text">{quote}</p>
        <p id="author">{author}</p>
      </>}
      <a target="_blank" href="http://twitter.com/intent/tweet" id="tweet-quote"><img src="./tweeterIcon.png" alt="" /></a>
      <button id="new-quote" onClick={() => dispatch(getQuote())}>New quote</button>
    </article>
  )
}

export default App



