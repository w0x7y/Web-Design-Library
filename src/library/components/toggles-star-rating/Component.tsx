export default function TogglesStarRating() {
  return (
    <fieldset aria-describedby="toggles-star-rating-hint" className="group/rating w-72 text-neutral-900 sm:w-80">
      <legend className="text-sm font-semibold">Rate your experience</legend>
      <p id="toggles-star-rating-hint" className="mt-1 text-sm text-neutral-500">Choose from 1 to 5 stars</p>
      <div className="mt-3 flex items-center gap-3">
        <div className="-ml-1 flex">
          <label className="group/star relative flex size-9 cursor-pointer items-center justify-center rounded-md text-neutral-500 transition-colors hover:bg-neutral-100 has-checked:text-neutral-900 has-[~label_:checked]:text-neutral-900 has-[:focus-visible]:outline-2 has-[:focus-visible]:outline-offset-2 has-[:focus-visible]:outline-neutral-900">
            <input type="radio" id="toggles-star-rating-1" name="toggles-star-rating-score" value="1" className="sr-only focus-visible:outline-hidden" />
            <span className="sr-only">1 star</span>
            <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" className="size-7 group-has-checked/star:fill-current group-has-[~label_:checked]/star:fill-current"><path d="M12 3.5l2.6 5.3 5.9.9-4.25 4.1 1 5.8L12 16.85 6.75 19.6l1-5.8L3.5 9.7l5.9-.9z" /></svg>
          </label>
          <label className="group/star relative flex size-9 cursor-pointer items-center justify-center rounded-md text-neutral-500 transition-colors hover:bg-neutral-100 has-checked:text-neutral-900 has-[~label_:checked]:text-neutral-900 has-[:focus-visible]:outline-2 has-[:focus-visible]:outline-offset-2 has-[:focus-visible]:outline-neutral-900">
            <input type="radio" id="toggles-star-rating-2" name="toggles-star-rating-score" value="2" className="sr-only focus-visible:outline-hidden" />
            <span className="sr-only">2 stars</span>
            <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" className="size-7 group-has-checked/star:fill-current group-has-[~label_:checked]/star:fill-current"><path d="M12 3.5l2.6 5.3 5.9.9-4.25 4.1 1 5.8L12 16.85 6.75 19.6l1-5.8L3.5 9.7l5.9-.9z" /></svg>
          </label>
          <label className="group/star relative flex size-9 cursor-pointer items-center justify-center rounded-md text-neutral-500 transition-colors hover:bg-neutral-100 has-checked:text-neutral-900 has-[~label_:checked]:text-neutral-900 has-[:focus-visible]:outline-2 has-[:focus-visible]:outline-offset-2 has-[:focus-visible]:outline-neutral-900">
            <input type="radio" id="toggles-star-rating-3" name="toggles-star-rating-score" value="3" className="sr-only focus-visible:outline-hidden" />
            <span className="sr-only">3 stars</span>
            <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" className="size-7 group-has-checked/star:fill-current group-has-[~label_:checked]/star:fill-current"><path d="M12 3.5l2.6 5.3 5.9.9-4.25 4.1 1 5.8L12 16.85 6.75 19.6l1-5.8L3.5 9.7l5.9-.9z" /></svg>
          </label>
          <label className="group/star relative flex size-9 cursor-pointer items-center justify-center rounded-md text-neutral-500 transition-colors hover:bg-neutral-100 has-checked:text-neutral-900 has-[~label_:checked]:text-neutral-900 has-[:focus-visible]:outline-2 has-[:focus-visible]:outline-offset-2 has-[:focus-visible]:outline-neutral-900">
            <input type="radio" id="toggles-star-rating-4" name="toggles-star-rating-score" value="4" defaultChecked className="sr-only focus-visible:outline-hidden" />
            <span className="sr-only">4 stars</span>
            <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" className="size-7 group-has-checked/star:fill-current group-has-[~label_:checked]/star:fill-current"><path d="M12 3.5l2.6 5.3 5.9.9-4.25 4.1 1 5.8L12 16.85 6.75 19.6l1-5.8L3.5 9.7l5.9-.9z" /></svg>
          </label>
          <label className="group/star relative flex size-9 cursor-pointer items-center justify-center rounded-md text-neutral-500 transition-colors hover:bg-neutral-100 has-checked:text-neutral-900 has-[~label_:checked]:text-neutral-900 has-[:focus-visible]:outline-2 has-[:focus-visible]:outline-offset-2 has-[:focus-visible]:outline-neutral-900">
            <input type="radio" id="toggles-star-rating-5" name="toggles-star-rating-score" value="5" className="sr-only focus-visible:outline-hidden" />
            <span className="sr-only">5 stars</span>
            <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" className="size-7 group-has-checked/star:fill-current group-has-[~label_:checked]/star:fill-current"><path d="M12 3.5l2.6 5.3 5.9.9-4.25 4.1 1 5.8L12 16.85 6.75 19.6l1-5.8L3.5 9.7l5.9-.9z" /></svg>
          </label>
        </div>
        <p aria-hidden="true" className="text-sm font-medium">
          <span className="text-neutral-500 group-has-checked/rating:hidden">Not rated</span>
          <span className="hidden group-has-[#toggles-star-rating-1:checked]/rating:inline">Poor</span>
          <span className="hidden group-has-[#toggles-star-rating-2:checked]/rating:inline">Fair</span>
          <span className="hidden group-has-[#toggles-star-rating-3:checked]/rating:inline">Good</span>
          <span className="hidden group-has-[#toggles-star-rating-4:checked]/rating:inline">Very good</span>
          <span className="hidden group-has-[#toggles-star-rating-5:checked]/rating:inline">Excellent</span>
        </p>
      </div>
    </fieldset>
  )
}
