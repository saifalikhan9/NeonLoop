import React, { useState, useEffect } from 'react';
import axios from 'axios';

const ReviewPage = () => {
  const [reviews, setReviews] = useState([]);
  const [reviewText, setReviewText] = useState('');
  const [rating, setRating] = useState(0);
  const [photo, setPhoto] = useState(null);

  useEffect(() => {
    // Fetch existing reviews from the API
    const fetchReviews = async () => {
      try {
        const response = await axios.get('https://businessprofileperformance.googleapis.com');
        setReviews(response.data);
      } catch (error) {
        console.error('Error fetching reviews:', error);
      }
    };
    fetchReviews();
  }, []);

  const handleReviewSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData();
    formData.append('review', reviewText);
    formData.append('rating', rating);
    if (photo) {
      formData.append('photo', photo);
    }

    try {
      const response = await axios.post('https://businessprofileperformance.googleapis.com', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
      setReviews([response.data, ...reviews]);
      setReviewText('');
      setRating(0);
      setPhoto(null);
    } catch (error) {
      console.error('Error submitting review:', error);
    }
  };

  return (
    <div className="max-w-2xl mx-auto p-4 bg-gray-900 text-white">
      <h1 className="text-2xl font-bold mb-4">Customer Reviews</h1>
      <form onSubmit={handleReviewSubmit} className="mb-4">
        <div className="mb-2">
          <label htmlFor="reviewText" className="block text-sm font-medium text-gray-300">
            Write a Review
          </label>
          <textarea
            id="reviewText"
            value={reviewText}
            onChange={(e) => setReviewText(e.target.value)}
            className="mt-1 block w-full rounded-md border-gray-700 bg-gray-800 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-500 focus:ring-opacity-50"
            rows="4"
          ></textarea>
        </div>
        <div className="mb-2">
          <label htmlFor="rating" className="block text-sm font-medium text-gray-300">
            Rating
          </label>
          <select
            id="rating"
            value={rating}
            onChange={(e) => setRating(Number(e.target.value))}
            className="mt-1 block w-full rounded-md border-gray-700 bg-gray-800 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-500 focus:ring-opacity-50"
          >
            <option value="0">Select rating</option>
            <option value="1">1 - Poor</option>
            <option value="2">2 - Fair</option>
            <option value="3">3 - Good</option>
            <option value="4">4 - Very Good</option>
            <option value="5">5 - Excellent</option>
          </select>
        </div>
        <div className="mb-4">
          <label htmlFor="photo" className="block text-sm font-medium text-gray-300">
            Upload Photo (optional)
          </label>
          <input
            type="file"
            id="photo"
            onChange={(e) => setPhoto(e.target.files[0])}
            className="mt-1 block w-full rounded-md border-gray-700 bg-gray-800 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-500 focus:ring-opacity-50"
          />
        </div>
        <button
          type="submit"
          className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
        >
          Submit Review
        </button>
      </form>
      <div>
        <h2 className="text-xl font-bold mb-2">Existing Reviews</h2>
        {reviews.length === 0 ? (
          <p>No reviews yet.</p>
        ) : (
          <ul className="space-y-4">
            {reviews.map((review) => (
              <li key={review.id} className="border p-4 rounded-md shadow-sm border-gray-700">
                <div className="flex items-center mb-2">
                  <span className="text-sm font-medium">{review.rating} Stars</span>
                  <span className="ml-2 text-gray-400">{new Date(review.createdAt).toLocaleDateString()}</span>
                </div>
                <p>{review.text}</p>
                {review.photoUrl && (
                  <img src={review.photoUrl} alt="Review" className="mt-2 w-full max-h-64 object-cover" />
                )}
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default ReviewPage;
