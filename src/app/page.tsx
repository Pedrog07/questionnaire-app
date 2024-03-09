'use client'
import { QuestionnaireContainer, RecommendationsContainer } from '../components'

export default function Home() {
  return (
    <div className="main-container">
      <div className="main-left">
        <QuestionnaireContainer />
      </div>
      <div className="main-right">
        <RecommendationsContainer />
      </div>
    </div>
  )
}
