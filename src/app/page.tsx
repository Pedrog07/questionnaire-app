'use client'
import { useContext } from 'react'
import {
  QuestionnaireContainer,
  RecommendationsContainer,
  TopicsContext,
} from '../components'

export default function Home() {
  const { currentTopic: { startedQuestionnaire = false } = {} } =
    useContext(TopicsContext)
  return (
    <div className="main-container">
      <div
        className={`main-left transition-[width] duration-300 ${
          startedQuestionnaire ? 'w-full ' : ''
        }`}
      >
        <QuestionnaireContainer />
      </div>
      <div className={`main-right ${startedQuestionnaire ? 'hidden' : ''}`}>
        <RecommendationsContainer />
      </div>
    </div>
  )
}
