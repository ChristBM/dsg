import React from 'react'
import { HiCheckCircle } from 'react-icons/hi'

export default function AlertMessage( { type, language } ) {
	return (
    <div className='alertmessage'>
      {type === 'copied' ? <HiCheckCircle color='#0aff53' size='20px'/>: null}
      <p className='alertmessage_text'>{language ? 'Copied': 'Copiado'}</p>
      <style jsx>{`
        .alertmessage {
          display: flex;
          width: auto;
          min-width: 50px;
          height: 30px;
          padding: 15px 10px;
          border-radius: 5px;
          border: 2px solid #FFF;
          position: fixed;
          top: 125px;
          left: 50%;
          z-index: 11;
          transform: translate(-50%, 50%);
          justify-content: center;
          align-items: center;
          gap: 5px;
          background-color: #030303;
        }
        .alertmessage_text {
          color: #fff;
          font-size: 1.6rem;
        }
      `}</style>
    </div>
  )
}
