import heroImg from "../img/hero-img.png";

export default function Hero() {
  return (
    <section className="hero">
      <img src={heroImg} alt="hero image" className="hero-img"></img>
      <h1 className="hero--heading">Online Experiences</h1>
      <h3 className="hero--sub-heading">
        Join unique interactive activities led by one-of-a-kind hosts—all
        without leaving home.
      </h3>
    </section>
  );
}
