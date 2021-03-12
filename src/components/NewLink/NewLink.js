import React, { useState, useEffect } from 'react'
import { withRouter, Link } from 'react-router-dom'


import { makeStyles } from '@material-ui/core/styles'
import TextField from '@material-ui/core/TextField'

import './NewLink.scss'

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
      width: '25ch'
    }
  }
}))

const links = [
  {name: 'link1', url: 'url1'}
]

const NewLink = ({ setListLinks, listLinks }) => {
  const classes = useStyles()

  const [linkname, setLinkname] = useState('')
  const [url, setUrl] = useState('')

  const onClickHandler = () => {
    const newArr = listLinks.slice();
    newArr.splice(0, 0, { name: linkname, url: url});
    alert("Eklendi")
    setListLinks(newArr);
  }

  return (
    <div className='newlink-container'>
      
      <div className='return-list'>
        <Link to={{ pathname: '/' }}>
          <span class='glyphicon glyphicon-arrow-left' aria-hidden='true'> Return to List</span>
        </Link>
      </div>
      <h1>Add New Link</h1>
      <form className={classes.root} noValidate autoComplete='off'>
        <p>Link Name: </p>
        <TextField
          onChange={e => setLinkname(e.target.value)}
          id='outlined-basic'
          placeholder='e.g Alphabet'
          variant='outlined'
        />
      </form>
      <form className={classes.root} noValidate autoComplete='off'>
        <p>Link URL: </p>
        <TextField
          onChange={e => setUrl(e.target.value)}
          id='outlined-basic'
          placeholder='e.g http://abc.xyz'
          variant='outlined'
        />
      </form>
      <div className='btn-wrapper'>
        <button type="submit"
          onClick={onClickHandler}
          type='button' class='btn btn-dark'
        >ADD
        </button>
      </div>
    </div>
  )
}
export default withRouter(NewLink)
