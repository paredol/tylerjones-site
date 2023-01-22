import { useEffect } from "react";

export default function SliderBar({
  photos,
  hash,
  setHash,
}: {
  photos: string[];
  hash: string;
  setHash: (hash: string) => void;
}) {
  // scroll to the anchor that matches the hash
  useEffect(() => {
    const elem = hash.split("#")[1];
    const anchor = document.getElementById(`${elem}`);
    if (anchor) anchor.scrollIntoView({ behavior: "smooth" });
  }, []);

  // log the current anchor on scroll

  return (
    <div className="flex w-[5%] flex-row items-center gap-4 justify-self-end md:flex-col">
      {photos.map((photo, index) => {
        return (
          <a
            onClick={() => setHash(`#${index}`)}
            key={index}
            data-anchor={`#${index}`}
            href={`#${index}`}
            className={`aspect-square ${
              `#${index}` === hash
                ? "h-6 w-6 bg-green-500 dark:bg-white"
                : " h-3 w-3"
            } rounded-full bg-black hover:bg-green-500 dark:bg-purple-500 hover:dark:bg-white`}
          />
        );
      })}
    </div>
  );
}
