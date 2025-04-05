"use client"

import { useState, useEffect, useCallback } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"

// Simple utility function to conditionally join class names
function classNames(...classes: (string | boolean | undefined)[]) {
  return classes.filter(Boolean).join(" ")
}

interface Testimonial {
  id: number
  name: string
  
  content: string
}

interface TestimonialSliderProps {
  testimonials?: Testimonial[]
  autoPlay?: boolean
  autoPlayInterval?: number
  className?: string
}

// Default testimonials data built into the component
const defaultTestimonials = [
  {
    id: 1,
    name: "Khaleed Chowdhury",
    content:
      "Brither Drip was very hospitable and made the experience for cutting hair a treat! Thank you so much Signature Cutz for the gresh cut!",
  },
  {
    id: 2,
    name: "Tia Perrault",
    content:
      "Awesome experience! Flew into town for a wedding and needed my son to get a haircut last minute. Called em up and they said to come through. I don't remember the barbers name but he was dope. Thanks so much!!",
  },
  {
    id: 3,
    name: "Danielle",
    content:
      "Perfect place to go for anyone. Loved the environment and people",
  },
  {
    id: 4,
    name: "Langston McElroy",
    content:
      "I brought my toddler here for a haircut after he absolutely hated the other two places we took him to in the past. Jerome at Signature Cutz did a great job of calming him down and affirming him - he ended up having a good experience, and he got a great edge-up too!",
  },
  {
    id: 5,
    name: "Angelica Adisa",
    content:
      "Keem is an awesome, ethical, and dedicated Barber! Thanks for doing my two sons hair even after you were tired and wanted to go home. Had to tip to show my appreciation because I appreciate your work ethic!!! We will definitely be back for cuts again.",
  },
]

export function TestimonialSlider({
  testimonials = defaultTestimonials,
  autoPlay = true,
  autoPlayInterval = 5000,
  className,
}: TestimonialSliderProps) {
  const [activeIndex, setActiveIndex] = useState(0)

  const nextTestimonial = useCallback(() => {
    setActiveIndex((current) => (current === testimonials.length - 1 ? 0 : current + 1))
  }, [testimonials.length])

  const prevTestimonial = useCallback(() => {
    setActiveIndex((current) => (current === 0 ? testimonials.length - 1 : current - 1))
  }, [testimonials.length])

  useEffect(() => {
    if (!autoPlay) return

    const interval = setInterval(nextTestimonial, autoPlayInterval)
    return () => clearInterval(interval)
  }, [autoPlay, autoPlayInterval, nextTestimonial])

  return (
    <div className={classNames("relative w-full overflow-hidden bg-white py-20", className || "")}>
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
        <div className="text-center mb-8">
          <h2 className="text-3xl font-semibold text-gray-900">What Our Clients Say</h2>
          <p className="text-lg text-gray-600 mt-2">Hear directly from the people who have experienced the impact of our product.</p>
        </div>

        <div className="relative">
          <div className="overflow-hidden">
            <div
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${activeIndex * 100}%)` }}
            >
              {testimonials.map((testimonial) => (
                <div key={testimonial.id} className="w-full flex-shrink-0 px-4">
                  <div className="flex flex-col items-center text-center">
                    <blockquote className="mb-4">
                      <p className="text-lg italic text-gray-700">{testimonial.content}</p>
                    </blockquote>
                    <div>
                      <p className="text-lg font-medium text-gray-900">{testimonial.name}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <button
            onClick={prevTestimonial}
            className="absolute left-0 top-1/2 -translate-y-1/2 rounded-full bg-white p-2 shadow-md hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-300"
            aria-label="Previous testimonial"
          >
            <ChevronLeft className="h-6 w-6 text-gray-700" />
          </button>

          <button
            onClick={nextTestimonial}
            className="absolute right-0 top-1/2 -translate-y-1/2 rounded-full bg-white p-2 shadow-md hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-300"
            aria-label="Next testimonial"
          >
            <ChevronRight className="h-6 w-6 text-gray-700" />
          </button>
        </div>

        <div className="mt-8 flex justify-center space-x-2">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => setActiveIndex(index)}
              className={classNames("h-2 w-2 rounded-full", activeIndex === index ? "bg-gray-800" : "bg-gray-300")}
              aria-label={`Go to testimonial ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </div>
  )
}
