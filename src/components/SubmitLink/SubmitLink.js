import React from 'react'
import { Link } from 'react-router-dom'

import './SubmitLink.scss'

const SubmitLink = () => {
  return (
    <div className='button-container'>
      <Link 
        to={{ pathname: '/newlink'}}

      >
        <button
          className='add-button'
        ><span class='glyphicon glyphicon-plus' aria-hidden='true' />
        </button>
      </Link>
      <h2 className='submit-link'>SUBMIT A LINK</h2>
    </div>
  )
}

export default SubmitLink
