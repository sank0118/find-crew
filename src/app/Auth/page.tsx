import { useSearchParams } from "react-router-dom";
import { twMerge } from "tailwind-merge";
import { isMobile } from "react-device-detect";
import { useEffect, useRef, useState } from "react";

export default function AuthPage() {
  const params = useSearchParams()[0].get("target");
  const [x, setX] = useState("");

  const extracter = (params: string | null) => {
    if (!params) {
      return [];
    }
    const copy = params.replace(",", "");
    const split = copy.split(" ");
    return split.splice(0, 2);
  };

  const targets = extracter(params);

  const content = useSearchParams()[0].get("content");

  const ref1 = useRef<HTMLDivElement>(null);
  const ref4 = useRef<HTMLDivElement>(null);
  const ref3 = useRef<HTMLDivElement>(null);
  const ref2 = useRef<HTMLDivElement>(null);

  const containerRef = useRef<HTMLDivElement>(null);

  const refs = [ref1, ref2, ref3, ref4];
  const items = [1, 2, 3, 4];

  const [currentIndex, setCurrentIndex] = useState(1);

  useEffect(() => {
    const onScroll = () => {
      const clientHeight = containerRef.current?.clientHeight;
      const scroll = window.screenY;

      console.log(clientHeight, scroll);
    };
    window.addEventListener("scroll", onScroll);
    return window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div
      className={
        (twMerge("w-full h-screen snap-mandatory  "),
        isMobile ? "snap-x overflow-x-auto flex" : "snap-y overflow-y-auto")
      }
    >
      <div className="fixed w-full top-[50%] left-0 translate-y-[50%]">
        <button
          className="w-10 h-auto px-2.5 absolute bottom-0 left-0 "
          onClick={() => {
            if (currentIndex === 0) {
              return;
            }
          }}
        >
          이전
        </button>
        <button className="w-10 h-auto px-2.5 absolute bottom-0 right-0">
          다음
        </button>
      </div>
      {items.map((item, index) => (
        <div
          key={item}
          ref={refs[index]}
          className={twMerge(
            "min-w-full h-full border-2 snap-start text-white",
            isMobile ? "bg-theme" : "bg-black"
          )}
          draggable
          onDragStart={(e) => {
            setCurrentIndex(index);
            setX(e.clientX);
          }}
          onDragOver={(e) => {}}
        >
          slide{item}
        </div>
      ))}
    </div>
  );
}
