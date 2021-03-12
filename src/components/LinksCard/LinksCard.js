import React, { useState, useEffect } from 'react'

import { Pagination } from '@material-ui/lab'

import './LinksCard.scss'

import SubmitLink from './../SubmitLink/SubmitLink'
import Card from './../Card/Card'

export default function LinksCard({ listLinks, setListLinks }) {
  const [page, setPage] = useState(1)
  const [removeIndex, setRemoveIndex] = useState(0)

  const handleChange = (event, value) => {
    setPage(value)
  }

  useEffect(() => {
    console.log(removeIndex)
  },[removeIndex])
  return (
    <div className='links-container'>
      <SubmitLink />
      <div className='line' />
      {
        listLinks.slice(
          (page - 1) * 5,
          page * 5
        )
          .map((link, index) =>
            <Card link={link} index={index} setRemoveIndex={setRemoveIndex} />
          )
      }
      <div className="pagination-wrapper">
        <Pagination count={listLinks.length} page={page} onChange={handleChange} />

      </div>
    </div>
  )
}

