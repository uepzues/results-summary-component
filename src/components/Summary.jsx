import PropTypes from "prop-types";
function Summary(props) {
  return (
    <>
      <section className="summary">
        <div className={`summary__bar ${props.color}`}>
          <div className="summary__group">
            <img src={props.icon} alt="category icon" />
            <div className={`summary__category ${props.color}`}>{props.category}</div>
          </div>
          <div className="summary__rating">
            {props.score} / <span>100</span>
          </div>
        </div>
      </section>
    </>
  );
}

Summary.propTypes = {
  icon: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
  score: PropTypes.number.isRequired,
  color: PropTypes.string.isRequired,

};

export default Summary;
