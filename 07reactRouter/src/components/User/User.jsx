import React from 'react'
import {useParams} from 'react-router-dom'


export default function User() {
    const {userId} = useParams()
  return (
    <div className='bg-black text-white p-8 m-3 text-3xl '> User : {userId}</div>
  )
}

 