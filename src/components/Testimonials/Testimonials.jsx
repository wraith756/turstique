import React from "react";
import Slider from "react-slick";

const TestimonialData = [
  {
    id: 1,
    name: "Safecure Services",
    text: "Trustique Assist delivered an exceptional custom software solution that perfectly matched our business needs. Their AI-driven approach streamlined our operations and improved efficiency beyond expectations. Truly a reliable tech partner!",
    img: "../../../public/SafecureServicesLogo.jpg",
  },
  {
    id: 2,
    name: "Pushpanjali Food products",
    text: "Our new website, designed by Trustique Assist, is fast, modern, and highly engaging. The team blended creativity with functionality, giving us a strong digital presence that attracts clients effortlessly.",
    img: "../../../public/pushpanjaliLogo.jpg",
  },
  {
    id: 3,
    name: " Qualidens Assist",
    text: "Trustique Assist provided highly trained and professional manpower for our event. The team ensured safety, smooth coordination, and a stress-free experience throughout. Their professionalism is unmatched",
    img: "../../../public/QualidensLogo.jpg",
  },
  {
    id: 5,
    name: "Safesence Tech Services",
    text: "From design to deployment, Trustique Assist handled everything flawlessly. Their attention to detail, user-friendly layouts, and SEO-focused approach have significantly boosted our online visibility. Excellent service!",
    img: "../../../public/safesenceLogo.jpg",
  },
];

const Testimonials = () => {
  const settings = {
    dots: true,
    arrows: false,
    infinite: true,
    speed: 500,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    cssEase: "linear",
    pauseOnHover: true,
    pauseOnFocus: true,
    responsive: [
      {
        breakpoint: 10000,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <>
      <style>
        {`
          @keyframes runningGradient {
            0% { background-position: 0% 50%; }
            50% { background-position: 100% 50%; }
            100% { background-position: 0% 50%; }
          }

          @keyframes pulseGlow {
            0%, 100% {
              box-shadow: 0 0 8px 2px rgba(0, 188, 212, 0.4);
            }
            50% {
              box-shadow: 0 0 20px 6px rgba(0, 188, 212, 0.8);
            }
          }

          @keyframes floatUpDown {
            0%, 100% {
              transform: translateY(0);
            }
            50% {
              transform: translateY(-8px);
            }
          }

          .testimonial-card {
            transition: transform 0.3s ease, box-shadow 0.3s ease;
            will-change: transform, box-shadow;
          }

          .testimonial-card:hover {
            animation: pulseGlow 3.5s ease-in-out infinite,
                       floatUpDown 6s ease-in-out infinite;
            transform: scale(1.03);
            box-shadow: 0 0 30px 8px rgba(0, 188, 212, 0.85);
            cursor: pointer;
            z-index: 5;
          }
        `}
      </style>

      <div
        className="min-h-screen w-full flex flex-col justify-center"
        style={{
          background:
            "linear-gradient(270deg, #000000, #06131a, #0a1f29, #000000)",
          backgroundSize: "800% 800%",
          animation: "runningGradient 25s ease infinite",
        }}
      >
        <div className="container mx-auto px-4">
          {/* header section */}
          <div className="text-center mb-10 max-w-[700px] mx-auto">
            <h2
              data-aos="fade-up"
              className="text-4xl md:text-5xl font-bold text-[#00BCD4] dark:text-[#00BCD4] mb-3"
            >
              What our customers are saying
            </h2>

            <p
              data-aos="fade-up"
              className="text-md text-gray-300 max-w-md mx-auto"
            >
              Trustique Assist has been our go-to partner for reliable security
              and tech solutions.
            </p>
          </div>

          {/* Testimonial cards */}
          <div data-aos="zoom-in">
            <Slider {...settings}>
              {TestimonialData.map((data) => (
                <div key={data.id} className="my-6 px-2">
                  <div className="testimonial-card flex flex-col items-center text-center gap-4 shadow-lg py-8 px-6 h-[330px] rounded-xl bg-black/60 dark:bg-gray-900/80 border border-cyan-500 relative transition-all duration-300">
                    <div className="mb-4">
                      <img
                        src={data.img}
                        alt={data.name}
                        className="rounded-full w-20 h-20 object-cover mx-auto border-2 border-cyan-400"
                      />
                    </div>
                    <div className="space-y-3">
                      <p className="text-base text-cyan-200">{data.text}</p>
                      <h3 className="text-lg font-bold text-cyan-400">
                        {data.name}
                      </h3>
                    </div>
                    <p className="text-cyan-900/20 text-9xl font-serif absolute top-0 right-3 select-none pointer-events-none">
                      ,,
                    </p>
                  </div>
                </div>
              ))}
            </Slider>
          </div>
        </div>
      </div>
    </>
  );
};

export default Testimonials;
