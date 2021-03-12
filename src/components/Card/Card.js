import React, { useEffect, useState } from 'react'

import './Card.scss'

import Delete from './../../assets/delete.png'
import PointCard from '../PointCard/PointCard'

const Card = ({ link, index, setRemoveIndex }) => {

  const [remove, setRemove] = useState('')
  const [point, setPoint] = useState(0)

  useEffect(() => {
    setRemove(false)
  }, [1])

  const onClickRemoveHandler = () => {
    alert("Do you want to remove?")
  }

  return (
    <div className='card-wrapper'>
      <div
        className='card-container'
        onMouseOver={() => setRemove(true)}
        onMouseOut={() => setRemove(false)}
      >
        <PointCard point={point} />
        <div className='link-container'>
          <h4> {link.name} <br /><h5>({link.url})</h5> </h4>
          <div>
            <button onClick={() => setPoint(point + 1)} type='button' class='btn btn-default' aria-label='Left Align'>
              <span class='glyphicon glyphicon-arrow-up' aria-hidden='true' /> <t /> Up Vote
            </button>
            <button onClick={() => { point === 0 ? setPoint(0) : setPoint(point - 1) }} type='button' class='btn btn-default' aria-label='Left Align'>
              <span class='glyphicon glyphicon-arrow-down' aria-hidden='true' /> <t /> Down Vote
            </button>
          </div>
        </div>
      </div>
      <img
        onClick={onClickRemoveHandler}
        src={Delete}
        border='0'
      />
    </div>
  )
}
export default Card
