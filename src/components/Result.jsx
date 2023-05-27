function Result() {
  return (
    <>
      <section className="resultCard">
        <h1>Your Result</h1>
        <div className="resultCard__box">
          <div className="resultCard__num">76</div>
          <span className="resultCard__total">of 100</span>
        </div>
        <div className="resultCard__text">
          <h2>Great</h2>
          <p>
            You scored higher than 65% of the people who have taken these tests.
          </p>
        </div>
      </section>
    </>
  );
}
export default Result;
