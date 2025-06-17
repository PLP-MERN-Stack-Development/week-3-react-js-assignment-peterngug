const images = [
  "/images/photo1.jpg",
  "/images/photo2.jpg",
  "/images/photo3.png",
  "/images/photo4.jpg",
  // Add more image paths as needed
]

function BackgroundMarquee() {
  return (
    <div className="fixed inset-0 z-0 overflow-hidden pointer-events-none">
      <div className="marquee flex h-screen">
        {[...images, ...images].map((src, idx) => (
          <img
            key={idx}
            src={src}
            alt=""
            className="h-screen w-auto min-w-[100vw] object-cover mx-0"
            draggable={false}
            style={{ flexShrink: 0 }}
          />
        ))}
      </div>
      <style>{`
        .marquee {
          animation: marquee 70s linear infinite; /* Slower speed */
          width: max-content;
        }
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
      `}</style>
    </div>
  )
}

export default BackgroundMarquee