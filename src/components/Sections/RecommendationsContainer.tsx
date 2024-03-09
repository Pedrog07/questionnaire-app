import { useContext } from 'react'
import { TopicsContext } from '..'

export const RecommendationsContainer = () => {
  const { currentTopic, goBack } = useContext(TopicsContext)
  return (
    <div className="flex flex-col">
      <button
        onClick={() => {
          goBack!(currentTopic!)
        }}
      >
        go back
      </button>
    </div>
  )
}
