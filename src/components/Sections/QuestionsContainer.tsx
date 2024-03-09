import { useContext } from 'react'
import { TopicsContext } from '..'

export const QuestionsContainer = () => {
  const { currentTopic, startQuestionnaire } = useContext(TopicsContext)
  return (
    <div className="flex flex-col">
      {!!currentTopic?.questions?.length && (
        <button
          onClick={() => {
            startQuestionnaire!()
          }}
        >
          START
        </button>
      )}
    </div>
  )
}
