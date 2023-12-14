const ExponentSix = ({ count }) => (
  <div className="exponent-counter-container">
    <p className="exponent-label">n⁶</p>
    <p className="exponent-result">
      {count} * {count}= <span className="total">{count * count}</span>
    </p>
  </div>
);

export default ExponentSix;
