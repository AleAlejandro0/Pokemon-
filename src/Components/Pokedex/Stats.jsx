import React from 'react'

const Stats = ({statInfo}) => {
  return (
    <li className='powers__list'>
      <h4 className='powers__title'>{statInfo.stat.name}</h4>
      <p className='powers__number'>{statInfo.base_stat}</p>
    </li>
  )
}

export default Stats