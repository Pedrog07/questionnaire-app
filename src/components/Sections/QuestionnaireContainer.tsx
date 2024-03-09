import { useContext } from 'react'
import { QuestionsContainer, TopicsContext } from '..'
import { capitalize } from '@/utils'

export const QuestionnaireContainer = () => {
  const { currentTopic, selectTopic } = useContext(TopicsContext)
  return (
    <div className="flex flex-col">
      <h1 className="text-2xl font-bold">{capitalize(currentTopic!.id)}</h1>
      <p className="mt-4 text-lg">{currentTopic?.description}</p>

      <QuestionsContainer />

      <button
        onClick={() => {
          selectTopic!(currentTopic?.children[0] as string, currentTopic!)
        }}
      >
        Next
      </button>
    </div>
  )
}
