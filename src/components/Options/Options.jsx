import css from "./Options.module.css";

export const Options = ({
  totalFeedback,
  handleAddGoodReviewClick,
  handleAddNeutralReviewClick,
  handleAddBadReviewClick,
  handleResetFeedbackClick,
}) => {
  return (
    <div className={css.wrap}>
      <button className={css.btn} onClick={handleAddGoodReviewClick}>
        Good
      </button>
      <button className={css.btn} onClick={handleAddNeutralReviewClick}>
        Neutral
      </button>
      <button className={css.btn} onClick={handleAddBadReviewClick}>
        Bad
      </button>
      {totalFeedback > 0 ? (
        <button className={css.btn} onClick={handleResetFeedbackClick}>
          Reset
        </button>
      ) : null}
    </div>
  );
};
