const HeroBanner = ({ slide }) => (
    <div className="relative h-96 w-full md:h-[500px]">
        <img
            src={slide.image}
            alt={slide.title}
            className="h-full w-full rounded-lg object-cover"
        />
        <div className="absolute inset-0 flex flex-col items-center justify-center rounded-lg bg-black/30 p-4 text-center">
            <h2 className="text-3xl font-bold text-white md:text-5xl">{slide.title}</h2>
            <p className="mt-2 text-lg text-white md:text-2xl">{slide.subtitle}</p>
        </div>
    </div>
);

export default HeroBanner;
