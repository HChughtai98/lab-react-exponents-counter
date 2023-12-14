const ExponentFour = ({ count }) => (
  <div className="exponent-counter-container">
    <p className="exponent-label">n⁴</p>
    <p className="exponent-result">
      {count} * {count}= <span className="total">{count * count}</span>
    </p>
  </div>
);

export default ExponentFour;
