import React, {useState} from 'react'

let timeOut = null;

const debounceCall = (callback = () => {}) => {
    if (!!timeOut) {
        clearTimeout(timeOut);
        timeOut = setTimeout(() => {callback()}, 500);
    } else {
        timeOut = setTimeout(() => {callback()}, 500);
    }
}

const Search = ({ getQuery }) => {
 const [text, setText] = useState('')

 const onChange= (q) => {
     setText(q)
     debounceCall(() => {getQuery(q)})
 }
    return (
        <section className='search'>
            <form onSubmit={(event) => {event.preventDefault();console.log('submitted');getQuery(text)}}>
                <input type='text' 
                className='form-control'
                placeholder="I'm looking for"
                value={text}
                onChange={(e) => onChange(e.target.value)}
                autoFocus />
            </form>
        </section>
    )
}

export default Search
