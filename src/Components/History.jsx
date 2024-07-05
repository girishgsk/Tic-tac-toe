const History = ({ history, moveTo, currentMove }) => {
  return (
    <div className="history-wrapper">
      <ul className="history">
        {history.map((_, index) => (
          <li key={index}>
            <button
              className={`btn-move ${currentMove === index ? 'active' : ''}`}
              type="button"
              onClick={() => moveTo(index)}
            >
              {index === 0 ? 'Go to the start ' : `Go to the move #${index}`}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default History;
