import React from 'react'

import './PointCard.scss'

export default function PointCard({ point }) {
  return (
    <div className="point-card">
      <h1 className="point" ><b>{point}</b></h1>
      <p>POINTS</p>
    </div>
  )
}
