import React from 'react'
import { DropdownButton } from '../components/DragdownButton'
import { questions } from '../data/faq';

export const FAQPage = () => {
  return (
    <div id='faq-container'>
        <h1>
            Frequently Asked Questions
        </h1>
        <div id="faq">
            {questions.map((question) => 
                <DropdownButton
                title={question.title}
                content={question.content}
                />
            )}
        </div>
    </div>
  )
}
