import StrengthCarousel from "./StrengthCarousel";

export default function Strengths() {
  return (
    <section id="strengths" className="py-24 container mx-auto px-4">
      <h2 className="text-6xl font-bold mb-8 text-white tracking-tighter text-center">
        My Strengths
      </h2>
      <p className="text-gray-400 text-lg text-center">
        display key strengths and skills that are needy for company.
        <br />
        continue update...
      </p>
      <StrengthCarousel />
    </section>
  );
}
