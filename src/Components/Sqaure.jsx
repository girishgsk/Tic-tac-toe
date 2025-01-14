import PropTypes from 'prop-types';
const Square = ({ value, onClick, isWinningSquare }) => {
  const colorClassName = value === 'X' ? 'text-green' : 'text-orange';
  const winningClassName = isWinningSquare ? 'winning' : '';
  return (
    <button
      type="button"
      className={`square ${colorClassName} ${winningClassName}`}
      onClick={onClick}
    >
      {value}
    </button>
  );
};

Square.propTypes = {
  value: PropTypes.any,
  onClick: PropTypes.any,
  // Change 'any' to the appropriate data type expected for 'value'
};
export default Square;
