"use client";

import { useState, useEffect, useRef } from "react";

const initialTestimonials = [
  {
    id: 1,
    name: "Sarah Mitchell",
    role: "Interior Designer",
    location: "Toronto, ON",
    rating: 5,
    text: "Hilyah completely transformed my client’s living space. The craftsmanship, detailing, and overall finish feel truly premium. Every piece adds warmth and elegance to the home.",
    initials: "SM",
  },
  {
    id: 2,
    name: "Daniel Carter",
    role: "Homeowner",
    location: "Vancouver, BC",
    rating: 5,
    text: "We furnished our entire home with Hilyah and the experience was exceptional from start to finish. The quality is outstanding and everything still looks brand new years later.",
    initials: "DC",
  },
  {
    id: 3,
    name: "Olivia Bennett",
    role: "Architect",
    location: "Calgary, AB",
    rating: 5,
    text: "As an architect, I’m very selective about the brands I recommend to clients. Hilyah stands out for its timeless designs, attention to detail, and custom furniture options.",
    initials: "OB",
  },
  {
    id: 4,
    name: "Michael Thompson",
    role: "Business Owner",
    location: "Ottawa, ON",
    rating: 5,
    text: "We used Hilyah furniture for both our office and home. The team understood our vision perfectly and delivered something even better than we imagined. Absolutely professional service.",
    initials: "MT",
  },
  {
    id: 5,
    name: "Emily Parker",
    role: "Lifestyle Blogger",
    location: "Montreal, QC",
    rating: 5,
    text: "Every Hilyah piece photographs beautifully and looks even better in person. I constantly receive compliments and questions about where the furniture is from.",
    initials: "EP",
  },
];

const StarIcon = ({ filled, onClick }) => (
  <svg
    width="22"
    height="22"
    viewBox="0 0 24 24"
    fill={filled ? "#C8A96E" : "none"}
    stroke="#C8A96E"
    strokeWidth="1.5"
    className={`inline-block ${
      onClick
        ? "cursor-pointer hover:scale-110 transition-transform"
        : ""
    }`}
    onClick={onClick}
  >
    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
  </svg>
);

const QuoteIcon = () => (
  <svg
    width="40"
    height="32"
    viewBox="0 0 36 28"
    fill="none"
    className="opacity-20"
  >
    <path
      d="M0 28V17.6C0 14.1333 0.8 10.9333 2.4 8C4.05333 5.01333 6.56 2.56 9.92 0.64L12.48 4.48C10.24 5.81333 8.53333 7.38667 7.36 9.2C6.24 11.0133 5.65333 13.12 5.6 15.52H11.2V28H0ZM20.8 28V17.6C20.8 14.1333 21.6 10.9333 23.2 8C24.8533 5.01333 27.36 2.56 30.72 0.64L33.28 4.48C31.04 5.81333 29.3333 7.38667 28.16 9.2C27.04 11.0133 26.4533 13.12 26.4 15.52H32V28H20.8Z"
      fill="#C8A96E"
    />
  </svg>
);

export default function TestimonialsSection() {
  const [testimonials, setTestimonials] =
    useState(initialTestimonials);

  const [activeIndex, setActiveIndex] = useState(0);
  const [animating, setAnimating] = useState(false);
  const [direction, setDirection] = useState("next");
  const [showForm, setShowForm] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const [form, setForm] = useState({
    name: "",
    role: "",
    location: "",
    rating: 5,
    text: "",
  });

  const [errors, setErrors] = useState({});
  const intervalRef = useRef(null);

  const goTo = (index, dir = "next") => {
    if (animating || index === activeIndex) return;

    setDirection(dir);
    setAnimating(true);

    setTimeout(() => {
      setActiveIndex(index);
      setAnimating(false);
    }, 350);
  };

  const next = () =>
    goTo((activeIndex + 1) % testimonials.length, "next");

  const prev = () =>
    goTo(
      (activeIndex - 1 + testimonials.length) %
        testimonials.length,
      "prev"
    );

  useEffect(() => {
    if (!showForm) {
      intervalRef.current = setInterval(next, 5000);
    }

    return () => clearInterval(intervalRef.current);
  }, [activeIndex, showForm, testimonials.length]);

  const validate = () => {
    const e = {};

    if (!form.name.trim()) {
      e.name = "Please enter your name";
    }

    if (
      !form.text.trim() ||
      form.text.trim().length < 20
    ) {
      e.text = "Please write at least 20 characters";
    }

    return e;
  };

  const handleSubmit = () => {
    const e = validate();

    if (Object.keys(e).length) {
      setErrors(e);
      return;
    }

    const initials = form.name
      .trim()
      .split(" ")
      .map((w) => w[0])
      .join("")
      .toUpperCase()
      .slice(0, 2);

    const newEntry = {
      id: Date.now(),
      name: form.name.trim(),
      role: form.role.trim() || "Customer",
      location: form.location.trim() || "Canada",
      rating: form.rating,
      text: form.text.trim(),
      initials,
    };

    setTestimonials((prev) => [...prev, newEntry]);
    setActiveIndex(testimonials.length);

    setSubmitted(true);
    setShowForm(false);

    setForm({
      name: "",
      role: "",
      location: "",
      rating: 5,
      text: "",
    });

    setErrors({});

    setTimeout(() => setSubmitted(false), 4000);
  };

  const t = testimonials[activeIndex] || testimonials[0];

  return (
    <section className="bg-[#FAFAF8] py-20 px-6 text-center relative overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-20 h-0.5 bg-gradient-to-r from-transparent via-[#C8A96E] to-transparent" />

      {submitted && (
        <div className="fixed top-6 right-6 z-50 bg-[#1A1208] text-[#C8A96E] font-sans text-sm px-5 py-3 rounded shadow-lg border border-[#C8A96E]/30">
          Thank you! Your review has been added successfully.
        </div>
      )}

      <div className="mb-14">
        <span className="block font-sans text-[11px] font-semibold tracking-[3px] uppercase text-[#C8A96E] mb-4">
          Happy Customers
        </span>

        <h2 className="font-serif text-5xl font-light tracking-tight text-[#1A1208] mb-3 leading-tight">
          Voices of Trust
        </h2>

        <p className="font-sans text-[15px] text-[#7A6A50] tracking-wide">
          From modern homes to luxury interiors — every
          Hilyah piece tells a story.
        </p>
      </div>

      <div className="relative max-w-2xl mx-auto mb-10">
        <button
          onClick={prev}
          aria-label="Previous"
          className="absolute left-[-18px] top-1/2 -translate-y-1/2 z-10 w-10 h-10 rounded-full bg-white border border-[#E8DCC8] text-[#8B7355] flex items-center justify-center hover:border-[#C8A96E] hover:text-[#C8A96E] transition-colors duration-200"
        >
          <svg
            width="18"
            height="18"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
          >
            <path d="M15 18l-6-6 6-6" />
          </svg>
        </button>

        <div
          className="bg-white border border-[#E8DCC8] rounded-sm px-12 py-11 relative shadow-[0_4px_40px_rgba(200,169,110,0.08)]"
          style={{
            opacity: animating ? 0 : 1,
            transform: animating
              ? `translateY(${
                  direction === "next"
                    ? "14px"
                    : "-14px"
                })`
              : "translateY(0)",
            transition:
              "opacity 0.35s ease, transform 0.35s ease",
          }}
        >
          <div className="absolute top-7 left-8">
            <QuoteIcon />
          </div>

          <div className="flex justify-center gap-1 mb-5">
            {Array.from({ length: t.rating }).map(
              (_, i) => (
                <StarIcon key={i} filled />
              )
            )}
          </div>

          <p className="font-serif text-xl font-light italic leading-relaxed text-[#2C1F0E] mb-8 tracking-wide">
            "{t.text}"
          </p>

          <div className="flex items-center justify-center gap-4">
            <div className="w-12 h-12 rounded-full bg-[#C8A96E]/10 border border-[#C8A96E]/30 flex items-center justify-center font-serif text-base font-semibold text-[#C8A96E] flex-shrink-0">
              {t.initials}
            </div>

            <div className="text-left">
              <p className="font-serif text-lg font-semibold text-[#1A1208] leading-tight mb-0.5">
                {t.name}
              </p>

              <p className="font-sans text-xs text-[#9A8A70] tracking-wider">
                {t.role} · {t.location}
              </p>
            </div>
          </div>
        </div>

        <button
          onClick={next}
          aria-label="Next"
          className="absolute right-[-18px] top-1/2 -translate-y-1/2 z-10 w-10 h-10 rounded-full bg-white border border-[#E8DCC8] text-[#8B7355] flex items-center justify-center hover:border-[#C8A96E] hover:text-[#C8A96E] transition-colors duration-200"
        >
          <svg
            width="18"
            height="18"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
          >
            <path d="M9 18l6-6-6-6" />
          </svg>
        </button>
      </div>

      <div className="flex justify-center items-center gap-2 mb-10">
        {testimonials.map((_, i) => (
          <button
            key={i}
            onClick={() =>
              goTo(
                i,
                i > activeIndex ? "next" : "prev"
              )
            }
            aria-label={`Testimonial ${i + 1}`}
            className="h-2 rounded-full border-none cursor-pointer transition-all duration-300"
            style={{
              width: i === activeIndex ? "28px" : "8px",
              background:
                i === activeIndex
                  ? "#C8A96E"
                  : "rgba(200,169,110,0.3)",
            }}
          />
        ))}
      </div>

      <div className="mb-14">
        <button
          onClick={() => setShowForm((f) => !f)}
          className="font-sans text-sm font-medium tracking-[2px] uppercase text-[#C8A96E] border border-[#C8A96E]/50 px-8 py-3 rounded-sm hover:bg-[#C8A96E] hover:text-white transition-all duration-300"
        >
          {showForm
            ? "Close Form"
            : "+ Share Your Experience"}
        </button>
      </div>

      {showForm && (
        <div className="max-w-xl mx-auto mb-14 bg-white border border-[#E8DCC8] rounded-sm p-8 text-left shadow-[0_4px_30px_rgba(200,169,110,0.07)]">
          <h3 className="font-serif text-2xl font-light text-[#1A1208] mb-1">
            Share Your Experience
          </h3>

          <p className="font-sans text-xs text-[#9A8A70] tracking-wide mb-7">
            Your feedback means a lot to us
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
            <div>
              <label className="block font-sans text-[11px] font-semibold uppercase tracking-[2px] text-[#7A6A50] mb-2">
                Your Name *
              </label>

              <input
                type="text"
                placeholder="Example: Sarah Mitchell"
                value={form.name}
                onChange={(e) => {
                  setForm((f) => ({
                    ...f,
                    name: e.target.value,
                  }));

                  setErrors((er) => ({
                    ...er,
                    name: "",
                  }));
                }}
                className="w-full font-sans text-sm text-[#2C1F0E] bg-[#FAFAF8] border border-[#E8DCC8] rounded-sm px-4 py-2.5 outline-none focus:border-[#C8A96E] transition-colors"
              />

              {errors.name && (
                <p className="font-sans text-xs text-red-400 mt-1">
                  {errors.name}
                </p>
              )}
            </div>

            <div>
              <label className="block font-sans text-[11px] font-semibold uppercase tracking-[2px] text-[#7A6A50] mb-2">
                Profession / Role
              </label>

              <input
                type="text"
                placeholder="Example: Homeowner"
                value={form.role}
                onChange={(e) =>
                  setForm((f) => ({
                    ...f,
                    role: e.target.value,
                  }))
                }
                className="w-full font-sans text-sm text-[#2C1F0E] bg-[#FAFAF8] border border-[#E8DCC8] rounded-sm px-4 py-2.5 outline-none focus:border-[#C8A96E] transition-colors"
              />
            </div>
          </div>

          <div className="mb-4">
            <label className="block font-sans text-[11px] font-semibold uppercase tracking-[2px] text-[#7A6A50] mb-2">
              City / Location
            </label>

            <input
              type="text"
              placeholder="Example: Toronto, ON"
              value={form.location}
              onChange={(e) =>
                setForm((f) => ({
                  ...f,
                  location: e.target.value,
                }))
              }
              className="w-full font-sans text-sm text-[#2C1F0E] bg-[#FAFAF8] border border-[#E8DCC8] rounded-sm px-4 py-2.5 outline-none focus:border-[#C8A96E] transition-colors"
            />
          </div>

          <div className="mb-4">
            <label className="block font-sans text-[11px] font-semibold uppercase tracking-[2px] text-[#7A6A50] mb-2">
              Rating
            </label>

            <div className="flex gap-1">
              {[1, 2, 3, 4, 5].map((star) => (
                <StarIcon
                  key={star}
                  filled={star <= form.rating}
                  onClick={() =>
                    setForm((f) => ({
                      ...f,
                      rating: star,
                    }))
                  }
                />
              ))}
            </div>
          </div>

          <div className="mb-6">
            <label className="block font-sans text-[11px] font-semibold uppercase tracking-[2px] text-[#7A6A50] mb-2">
              Your Experience *
            </label>

            <textarea
              rows={4}
              placeholder="Share your experience with Hilyah..."
              value={form.text}
              onChange={(e) => {
                setForm((f) => ({
                  ...f,
                  text: e.target.value,
                }));

                setErrors((er) => ({
                  ...er,
                  text: "",
                }));
              }}
              className="w-full font-sans text-sm text-[#2C1F0E] bg-[#FAFAF8] border border-[#E8DCC8] rounded-sm px-4 py-3 outline-none focus:border-[#C8A96E] transition-colors resize-none leading-relaxed"
            />

            <div className="flex justify-between items-center mt-1">
              {errors.text ? (
                <p className="font-sans text-xs text-red-400">
                  {errors.text}
                </p>
              ) : (
                <span />
              )}

              <span className="font-sans text-xs text-[#9A8A70]">
                {form.text.length} characters
              </span>
            </div>
          </div>

          <button
            onClick={handleSubmit}
            className="w-full font-sans text-sm font-semibold tracking-[2px] uppercase bg-[#1A1208] text-[#C8A96E] py-3.5 rounded-sm hover:bg-[#C8A96E] hover:text-white transition-all duration-300"
          >
            Submit Review
          </button>
        </div>
      )}

      <div className="flex justify-center gap-16 border-t border-[#E8DCC8] pt-10">
        {[
          {
            value: `${testimonials.length}+`,
            label: "Happy Customers",
          },
          {
            value: "4.9",
            label: "Average Rating",
          },
          {
            value: "12+",
            label: "Years of Experience",
          },
        ].map((s) => (
          <div
            key={s.label}
            className="flex flex-col gap-1.5"
          >
            <span className="font-serif text-3xl font-light text-[#C8A96E] leading-none">
              {s.value}
            </span>

            <span className="font-sans text-[11px] font-medium tracking-[2px] uppercase text-[#9A8A70]">
              {s.label}
            </span>
          </div>
        ))}
      </div>

      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-20 h-0.5 bg-gradient-to-r from-transparent via-[#C8A96E] to-transparent" />
    </section>
  );
}