import "./App.css";
import { Description } from "./components/Description/Description";
import { Options } from "./components/Options/Options";
import { Feedback } from "./components/Feedback/Feedback";
import { Notification } from "./components/Notification/Notification";
import { useState, useEffect } from "react";

function App() {
  let reviews = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  const [reviewsState, setReviewsState] = useState(() => {
    const storageReviews = window.localStorage.getItem("reviews");
    if (storageReviews !== null) {
      const savedReviews = JSON.parse(storageReviews);
      if (savedReviews !== null) {
        return savedReviews;
      }
    }
    return reviews;
  });

  useEffect(() => {
    window.localStorage.setItem(
      "reviews",
      JSON.stringify({
        good: reviewsState.good,
        neutral: reviewsState.neutral,
        bad: reviewsState.bad,
      })
    );
  }, [reviewsState.good, reviewsState.neutral, reviewsState.bad]);

  const totalFeedback =
    reviewsState.good + reviewsState.neutral + reviewsState.bad;

  let positiveResult;

  positiveResult = countPositiveResult();

  const updateFeedback = (feedbackType) => {
    switch (feedbackType) {
      case "good":
        setReviewsState({ ...reviewsState, good: reviewsState.good + 1 });
        break;
      case "neutral":
        setReviewsState({ ...reviewsState, neutral: reviewsState.neutral + 1 });
        break;
      case "bad":
        setReviewsState({ ...reviewsState, bad: reviewsState.bad + 1 });
        break;
      default:
        break;
    }
  };

  const resetFeedback = () => {
    setReviewsState({ good: 0, neutral: 0, bad: 0 });
  };

  function countPositiveResult() {
    positiveResult = Math.round(
      ((reviewsState.good + reviewsState.neutral) / totalFeedback) * 100
    );
    return positiveResult;
  }

  return (
    <div>
      <Description />
      <Options
        totalFeedback={totalFeedback}
        handleAddGoodReviewClick={() => updateFeedback("good")}
        handleAddNeutralReviewClick={() => updateFeedback("neutral")}
        handleAddBadReviewClick={() => updateFeedback("bad")}
        handleResetFeedbackClick={() => resetFeedback()}
      />
      {totalFeedback === 0 ? (
        <Notification />
      ) : (
        <Feedback
          good={reviewsState.good}
          neutral={reviewsState.neutral}
          bad={reviewsState.bad}
          totalFeedback={totalFeedback}
          positiveResult={positiveResult}
        />
      )}
    </div>
  );
}

export default App;
