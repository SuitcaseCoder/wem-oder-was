import React from 'react'
import VocabWord from './VocabWord'

function VocabList({vocab}) {
    console.log(vocab);

  return (
    <>
        <div className="list">
            {vocab.map((word)=>(
               <VocabWord 
                    id={word.id}
                    article={word.article}
                    word={word.word}
                /> 
            ))}
        </div>
    </>
  )
}

export default VocabList