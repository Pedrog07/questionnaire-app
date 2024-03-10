import { TopicsContextValue } from '@/components'

interface QuestionProps {
  question: { position: number; data: any }
  saveAnswer: (questionId: string, answer: 'A' | 'B' | 'C') => void
}

export const Question = ({ question, saveAnswer }: QuestionProps) => {
  const getOptionBg = (answer: string, option: any) => {
    return answer
      ? answer === option.label
        ? option.points > 0
          ? 'bg-correct'
          : 'bg-wrong'
        : 'bg-option'
      : 'bg-option'
  }
  return (
    <div className="flex flex-col mt-8">
      <p className="text-xl">
        {question.position + 1}
        {') '}
        {question.data.question}
      </p>
      <p className="mt-4">{question.data.description}</p>

      <ul className="mt-4 pl-6">
        {' '}
        {question.data.options.map((option: any, index: number) => {
          return (
            <li
              key={index}
              className={`mt-4 max-w-[60%] select-none ${getOptionBg(
                question.data.answer,
                option
              )} p-1 rounded cursor-pointer`}
              onClick={
                !question.data.answer
                  ? () => {
                      saveAnswer(question.data.id, option.label)
                    }
                  : undefined
              }
            >
              <p>
                {option.label}
                {') '}
                {option.description}
              </p>
              {question.data.answer && question.data.answer === option.label && (
                <p className="mt-6">{option.explanation}</p>
              )}
            </li>
          )
        })}
      </ul>
    </div>
  )
}
