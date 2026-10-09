const frostParticles = [
  "top-[5%] text-[18px] [animation-delay:-0.8s] [animation-duration:8.4s]",
  "top-[11%] text-2xl [animation-delay:-2.6s] [animation-duration:7.2s]",
  "top-[17%] text-[14px] [animation-delay:-1.8s] [animation-duration:9.6s]",
  "top-[23%] text-3xl [animation-delay:-3.4s] [animation-duration:7.6s]",
  "top-[29%] text-lg [animation-delay:-0.4s] [animation-duration:8.8s]",
  "top-[35%] text-[15px] [animation-delay:-2.2s] [animation-duration:10.4s]",
  "top-[41%] text-2xl [animation-delay:-1.2s] [animation-duration:8s]",
  "top-[47%] text-[14px] [animation-delay:-3.8s] [animation-duration:6.8s]",
  "top-[53%] text-xl [animation-delay:-1.6s] [animation-duration:9.2s]",
  "top-[59%] text-[18px] [animation-delay:-3s] [animation-duration:7.2s]",
  "top-[65%] text-4xl [animation-delay:-0.6s] [animation-duration:10s]",
  "top-[71%] text-[15px] [animation-delay:-2.4s] [animation-duration:8s]",
  "top-[77%] text-2xl [animation-delay:-1s] [animation-duration:7.6s]",
  "top-[83%] text-lg [animation-delay:-3.6s] [animation-duration:8.8s]",
  "top-[89%] text-2xl [animation-delay:-1.4s] [animation-duration:9.6s]",
  "top-[95%] text-[16px] [animation-delay:-2s] [animation-duration:7.2s]",
  "top-[8%] text-xl [animation-delay:-0.7s] [animation-duration:10.4s]",
  "top-[15%] text-[14px] [animation-delay:-3.2s] [animation-duration:7.6s]",
  "top-[26%] text-2xl [animation-delay:-1.7s] [animation-duration:8.4s]",
  "top-[32%] text-[16px] [animation-delay:-2.8s] [animation-duration:6.8s]",
  "top-[44%] text-3xl [animation-delay:-0.5s] [animation-duration:10s]",
  "top-[50%] text-[15px] [animation-delay:-3.5s] [animation-duration:8s]",
  "top-[62%] text-2xl [animation-delay:-1.1s] [animation-duration:9.2s]",
  "top-[68%] text-[18px] [animation-delay:-2.9s] [animation-duration:7.2s]",
  "top-[74%] text-2xl [animation-delay:-1.9s] [animation-duration:8.8s]",
  "top-[80%] text-[14px] [animation-delay:-3.3s] [animation-duration:7.6s]",
  "top-[92%] text-xl [animation-delay:-0.9s] [animation-duration:9.6s]",
  "top-[98%] text-[16px] [animation-delay:-3.1s] [animation-duration:8.4s]",
] as const;

const frostSilhouettes = ["❄", "❅", "❆", "✻", "❄", "❅"] as const;

export function FrostWindBackground() {
  return (
    <>
      <div
        aria-hidden="true"
        className="atmosphere-winter pointer-events-none fixed inset-0 z-0 overflow-hidden"
      />
      <div
        aria-hidden="true"
        className="frost-wind frost-wind-strong pointer-events-none fixed inset-0 z-20 overflow-hidden"
      >
        {frostParticles.map((className, index) => {
          const silhouette = frostSilhouettes[index % frostSilhouettes.length] ?? "❄";

          return (
            <span
              key={className}
              className={`frost-particle ${index >= 14 ? "hidden md:block" : ""} ${className}`}
            >
              <span className={`frost-twinkle frost-twinkle-${(index % 4) + 1}`}>{silhouette}</span>
            </span>
          );
        })}
      </div>
    </>
  );
}
