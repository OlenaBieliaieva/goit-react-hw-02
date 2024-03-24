import css from "./Feedback.module.css";

export const Feedback = ({
  good,
  neutral,
  bad,
  totalFeedback,
  positiveResult,
}) => {
  //   const positiveResult = total === 0 ? 0 : Math.round((good / total) * 100);
  return (
    <div className={css.feedback}>
      <p>Good: {good}</p>
      <p>Neutral: {neutral}</p>
      <p>Bad: {bad}</p>
      <p>Total: {totalFeedback}</p>
      <p>Positive feedback: {positiveResult}%</p>
    </div>
  );
};
