const StatusMessage = ({ winner, gamingBoard }) => {
  const { squares, isXNext } = gamingBoard;
  const noMoveLeft = squares.every(squareValue => squareValue !== null);
  const nextPlayer = isXNext ? 'X' : 'O';

  const renderStatusMessage = () => {
    if (winner) {
      return (
        // <React.Fragment>
        <>
          Winner is{' '}
          <span className={winner === 'X' ? 'text-green' : 'text-orange'}>
            {winner}
          </span>
        </>
      );
    }
    if (!winner && noMoveLeft) {
      return <>Its a Tie , better luck next time</>;
    }
    if (!winner && !noMoveLeft) {
      return (
        <>
          {' '}
          Next player is{' '}
          <span className={isXNext ? 'text-green' : 'text-orange'}>
            {nextPlayer}
          </span>
        </>
      );
    }

    return null;
  };

  // const statusmessage = winner
  //   ? `winner is ${winner}`
  //   : `Next player is ${nextPlayer}`;
  return <h2 className="status-message">{renderStatusMessage()}</h2>;
};

export default StatusMessage;
