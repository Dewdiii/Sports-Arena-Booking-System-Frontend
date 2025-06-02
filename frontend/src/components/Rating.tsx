export default function RatingDisplay({ rating }: { rating: number }) {
  const roundedRating = Math.round(rating * 10) / 10; // Round to one decimal place
  const fullStars = Math.floor(rating);
  const hasHalfStar = rating % 1 >= 0.5;

  return (
    <div className="bg-teal-700 inline-flex items-center p-2 rounded">
      <span className="text-white text-3xl font-bold mr-2">
        {roundedRating}
      </span>
      <div className="flex">
        {[...Array(5)].map((_, index) => (
          <Star
            key={index}
            size={24}
            className={
              index < fullStars
                ? "text-yellow-400 fill-current"
                : "text-gray-400"
            }
          />
        ))}
        {hasHalfStar && (
          <div className="relative -ml-6">
            <Star size={24} className="text-gray-400" />
            <div className="absolute inset-0 overflow-hidden w-1/2">
              <Star size={24} className="text-yellow-400 fill-current" />
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

function Star(props: React.SVGProps<SVGSVGElement> & { size: number }) {
  return (
    <svg
      width="28"
      height="26"
      viewBox="0 0 28 26"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M14 20.8958L22.343 26L20.129 16.38L27.5 9.90737L17.7935 9.07263L14 0L10.2065 9.07263L0.5 9.90737L7.871 16.38L5.657 26L14 20.8958Z"
        fill="white"
      />
    </svg>
  );
}
