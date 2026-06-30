function QuestionCard({ question, answer, details }) {
  return (
    <div className="bg-white rounded-2xl shadow-lg p-6 mb-6">

      <h3 className="text-xl font-bold text-blue-700 mb-4">
        {question}
      </h3>

      <div className="bg-blue-50 rounded-xl p-4 mb-4">
        <h4 className="font-semibold mb-2">
          Short Answer
        </h4>

        <p>{answer}</p>
      </div>

      <details className="bg-gray-100 rounded-xl p-4">

        <summary className="cursor-pointer font-semibold">
          📖 More Details
        </summary>

        <p className="mt-4 leading-7">
          {details}
        </p>

      </details>

    </div>
  );
}

export default QuestionCard;