import { useEffect, useState } from "react";

export default function GoogleReviews() {
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    const fetchReviews = async () => {
      const apiKey = "YOUR_GOOGLE_PLACES_API_KEY"; // Replace with your API key
      const placeId = "ChIJN1t_tDeuEmsRUsoyG83frY4"; // Replace with your place ID

      const response = await fetch(
        `https://maps.googleapis.com/maps/api/place/details/json?place_id=${placeId}&fields=reviews&key=${apiKey}`
      );
      const data = await response.json();

      if (data.result?.reviews) {
        setReviews(data.result.reviews);
      }
    };

    fetchReviews();
  }, []);

  return (
    <div>
      <h2>Google Reviews</h2>
      {reviews.map((review, index) => (
        <div key={index} className="border p-4 my-2">
          <p><strong>{review.author_name}</strong> - ⭐ {review.rating}</p>
          <p>{review.text}</p>
        </div>
      ))}
    </div>
  );
}
