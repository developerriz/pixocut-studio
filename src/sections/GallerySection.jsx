import { memo, useEffect, useRef, useState } from "react";
import bananaImage from "../assets/banana.jpg";
import bananaNoBg from "../assets/banana.png";
import boyImage from "../assets/boy.jpg";
import boyNoBg from "../assets/boy.png";
import chairImage from "../assets/chair.jpg";
import chairNoBg from "../assets/chair.png";
import controllerImage from "../assets/controller.jpg";
import controllerNoBg from "../assets/controller.png";
import foodImage from "../assets/food.jpg";
import foodNoBg from "../assets/food.png";
import footImage from "../assets/foot.jpg";
import footNoBg from "../assets/foot.png";
import girlOneImage from "../assets/girl1.jpg";
import girlOneNoBg from "../assets/girl1.png";
import girlTwoImage from "../assets/girl2.jpg";
import girlTwoNoBg from "../assets/girl2.png";
import manOneImage from "../assets/man1.jpg";
import manOneNoBg from "../assets/man1.png";
import manTwoImage from "../assets/man2.jpg";
import manTwoNoBg from "../assets/man2.png";
import sneakerImage from "../assets/sneaker.jpg";
import sneakerNoBg from "../assets/sneaker.png";
import supercarOneImage from "../assets/supercar1.jpg";
import supercarOneNoBg from "../assets/supercar1.png";
import supercarTwoImage from "../assets/supercar2.jpg";
import supercarTwoNoBg from "../assets/supercar2.png";
import supercarThreeImage from "../assets/supercar3.jpg";
import supercarThreeNoBg from "../assets/supercar3.png";
import suvImage from "../assets/suv.jpg";
import suvNoBg from "../assets/suv.png";
import timerImage from "../assets/timer.jpg";
import timerNoBg from "../assets/timer.png";
import toyImage from "../assets/toy.jpg";
import toyNoBg from "../assets/toy.png";
import toycarImage from "../assets/toycar.jpg";
import toycarNoBg from "../assets/toycar.png";
import tshirtImage from "../assets/tshirt.jpg";
import tshirtNoBg from "../assets/tshirt.png";

const GALLERY_ITEMS = [
  {
    id: 1,
    title: "Banana Product",
    original: bananaImage,
    processed: bananaNoBg,
  },
  {
    id: 2,
    title: "Street Portrait",
    original: boyImage,
    processed: boyNoBg,
  },
  {
    id: 3,
    title: "Chair Cutout",
    original: chairImage,
    processed: chairNoBg,
  },
  {
    id: 4,
    title: "Gaming Controller",
    original: controllerImage,
    processed: controllerNoBg,
  },
  {
    id: 5,
    title: "Food Bowl",
    original: foodImage,
    processed: foodNoBg,
  },
  {
    id: 6,
    title: "Footwear Detail",
    original: footImage,
    processed: footNoBg,
  },
  {
    id: 7,
    title: "Business Portrait",
    original: manOneImage,
    processed: manOneNoBg,
  },
  {
    id: 8,
    title: "Full Body Portrait",
    original: manTwoImage,
    processed: manTwoNoBg,
  },
  {
    id: 9,
    title: "Outdoor Portrait",
    original: girlOneImage,
    processed: girlOneNoBg,
  },
  {
    id: 10,
    title: "Studio Lighting",
    original: girlTwoImage,
    processed: girlTwoNoBg,
  },
  {
    id: 11,
    title: "Sneaker Product",
    original: sneakerImage,
    processed: sneakerNoBg,
  },
  {
    id: 12,
    title: "Supercar Shot",
    original: supercarOneImage,
    processed: supercarOneNoBg,
  },
  {
    id: 13,
    title: "Urban Audi",
    original: supercarTwoImage,
    processed: supercarTwoNoBg,
  },
  {
    id: 14,
    title: "Race Car Wide",
    original: supercarThreeImage,
    processed: supercarThreeNoBg,
  },
  {
    id: 15,
    title: "SUV Vehicle",
    original: suvImage,
    processed: suvNoBg,
  },
  {
    id: 16,
    title: "Classic Timer",
    original: timerImage,
    processed: timerNoBg,
  },
  {
    id: 17,
    title: "Mini Figure",
    original: toyImage,
    processed: toyNoBg,
  },
  {
    id: 18,
    title: "Toy Car",
    original: toycarImage,
    processed: toycarNoBg,
  },
  {
    id: 19,
    title: "T-Shirt Product",
    original: tshirtImage,
    processed: tshirtNoBg,
  },
];

const galleryImageProps = {
  loading: "lazy",
  decoding: "async",
  fetchPriority: "low",
  sizes: "(min-width: 1280px) 23vw, (min-width: 768px) 46vw, 92vw",
};

const SplitHoverCard = memo(function SplitHoverCard({ item }) {
  const [splitPos, setSplitPos] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const [isNearViewport, setIsNearViewport] = useState(false);
  const [shouldLoadProcessed, setShouldLoadProcessed] = useState(false);
  const frameRef = useRef(null);
  const cardRef = useRef(null);

  useEffect(() => {
    return () => {
      if (frameRef.current) {
        cancelAnimationFrame(frameRef.current);
      }
    };
  }, []);

  useEffect(() => {
    const node = cardRef.current;
    if (!node || isNearViewport) return undefined;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        setIsNearViewport(true);
        observer.disconnect();
      },
      { rootMargin: "300px 0px" },
    );

    observer.observe(node);

    return () => {
      observer.disconnect();
    };
  }, [isNearViewport]);

  const startAnimation = () => {
    if (frameRef.current) {
      cancelAnimationFrame(frameRef.current);
    }

    setIsHovered(true);
    setShouldLoadProcessed(true);
    const cycleDuration = 4000;
    const startTime = performance.now();

    const animate = (time) => {
      const elapsed = time - startTime;
      const wave =
        (Math.sin((2 * Math.PI * elapsed) / cycleDuration - Math.PI / 2) + 1) /
        2;
      setSplitPos(wave * 100);
      frameRef.current = requestAnimationFrame(animate);
    };

    frameRef.current = requestAnimationFrame(animate);
  };

  const stopAnimation = () => {
    setIsHovered(false);
    if (frameRef.current) {
      cancelAnimationFrame(frameRef.current);
      frameRef.current = null;
    }
    setSplitPos(0);
  };

  return (
    <article
      ref={cardRef}
      className="group relative mb-5 break-inside-avoid overflow-hidden rounded-[22px] border border-violet-500/20 bg-[rgba(16,13,34,0.75)]"
      onMouseEnter={startAnimation}
      onMouseLeave={stopAnimation}
      onFocus={startAnimation}
      onBlur={stopAnimation}
      onTouchStart={() => setShouldLoadProcessed(true)}
      style={{
        contentVisibility: "auto",
        containIntrinsicSize: "420px",
      }}
    >
      <div className="relative overflow-hidden">
        <img
          src={isNearViewport ? item.original : undefined}
          {...galleryImageProps}
          alt=""
          aria-hidden="true"
          className="block w-full opacity-0"
        />

        <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(rgba(132,146,175,.1)_1px,transparent_1px),linear-gradient(90deg,rgba(132,146,175,.1)_1px,transparent_1px)] bg-[size:26px_26px]" />

        <div
          className="absolute inset-0"
          style={{ clipPath: `inset(${splitPos}% 0 0 0)` }}
        >
          <img
            src={isNearViewport ? item.original : undefined}
            {...galleryImageProps}
            alt={`${item.title} original`}
            className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
          />
        </div>

        <div
          className="absolute inset-0"
          style={{ clipPath: `inset(0 0 ${100 - splitPos}% 0)` }}
        >
          {shouldLoadProcessed ? (
            <img
              src={item.processed}
              {...galleryImageProps}
              alt={`${item.title} background removed`}
              className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
            />
          ) : (
            <div className="h-full w-full bg-[linear-gradient(180deg,rgba(99,102,241,.16),rgba(15,23,42,.08))]" />
          )}
        </div>

        <div
          className="pointer-events-none absolute left-0 right-0 z-10 h-0 -translate-y-1/2"
          style={{ top: `${splitPos}%` }}
        >
          <div className="absolute left-0 top-1/2 h-[3px] w-full -translate-y-1/2 bg-gradient-to-r from-white/85 via-violet-300 to-cyan-400 shadow-[0_0_22px_rgba(34,211,238,.3)]" />
          <div
            className={`absolute left-1/2 top-1/2 flex h-10 w-10 -translate-x-1/2 -translate-y-1/2 items-center justify-center gap-0.5 rounded-full border border-white/70 bg-white/95 text-xs font-bold text-slate-900 shadow-[0_10px_24px_rgba(15,23,42,.22)] transition-opacity duration-200 ${
              isHovered ? "opacity-100" : "opacity-0"
            }`}
          >
            <span>{`\u02C4`}</span>
            <span>{`\u02C5`}</span>
          </div>
        </div>

        <div className="pointer-events-none absolute inset-x-0 bottom-0 bg-gradient-to-t from-[rgba(8,6,22,.82)] via-[rgba(8,6,22,.25)] to-transparent p-4">
          <div className="inline-flex rounded-full border border-white/20 bg-black/35 px-2.5 py-1 text-[11px] uppercase tracking-wider text-white/85 backdrop-blur-sm">
            Hover Split Preview
          </div>
          <p className="mt-2 font-syne text-base font-semibold text-white">
            {item.title}
          </p>
        </div>
      </div>
    </article>
  );
});

function GallerySection() {
  return (
    <section className="page-shell relative z-10 py-16">
      <div className="mb-10 text-center">
        <span className="mb-4 inline-flex items-center gap-1.5 rounded-full border border-violet-500/30 bg-violet-600/15 px-3.5 py-1.5 text-xs text-violet-300">
          Gallery
        </span>
        <h2 className="font-syne text-[clamp(30px,4vw,46px)] font-extrabold text-[#F0EEFF]">
          AI{" "}
          <span className="bg-gradient-to-br from-violet-500 via-blue-500 to-cyan-400 bg-clip-text text-transparent">
            Gallery
          </span>
        </h2>
        <p className="mt-3 text-sm text-[#8B85A8]">
          Hover any image card to run the same split reveal effect as Split
          Preview.
        </p>
      </div>

      <div className="columns-1 gap-5 md:columns-2 xl:columns-4">
        {GALLERY_ITEMS.map((item) => (
          <SplitHoverCard key={item.id} item={item} />
        ))}
      </div>
    </section>
  );
}

export default GallerySection;
