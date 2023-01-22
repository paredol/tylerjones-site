import { useEffect, useRef, useState } from "react";
import SliderBar from "./SliderBar";

export default function Slider() {
  const [hash, setHash] = useState(window.location.hash);
  const photos = [
    "https://via.placeholder.com/400x320/8ff.webp",
    "https://via.placeholder.com/300x520/04f.webp",
    "https://via.placeholder.com/820x420/ff9.webp",
    "https://via.placeholder.com/600x320/1f1.webp",
    "https://via.placeholder.com/400x320/8ff.webp",
    "https://via.placeholder.com/300x520/04f.webp",
    "https://via.placeholder.com/820x420/ff9.webp",
  ];

  return (
    <div className="flex h-full w-full flex-row items-center gap-x-4">
      <div className="scrollbar-hide h-full w-[95%] snap-y snap-mandatory snap-start overflow-scroll scroll-smooth md:h-screen">
        {photos.map((photo, index) => (
          <Image
            src={photo as string}
            id={`${index}`}
            key={index}
            setHash={setHash}
          />
        ))}
      </div>
      <SliderBar photos={photos} hash={hash} setHash={setHash} />
    </div>
  );
}

function Image({
  src,
  id,
  setHash,
}: {
  src: string;
  id: string;
  setHash: (hash: string) => void;
}) {
  const options = {
    root: null,
    rootMargin: "5px",
    threshold: 0.1,
  };

  const observer = new IntersectionObserver((entries) => {
    for (const entry of entries) {
      if (entry.isIntersecting) {
        setHash(`#${entry.target.id}`);
        // update the route
        window.history.pushState({}, "", `#${entry.target.id}`);
      }
    }
  }, options);
  const myRef = useRef(null);

  useEffect(() => {
    observer.observe(myRef.current);
    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <img
      ref={myRef}
      src={src}
      id={id}
      className="h-full w-full snap-start object-contain"
    />
  );
}
