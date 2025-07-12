const Hero = ({ title, backgroundImage, backgroundPositionY }) => {
  const heroStyle = {
    backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.7)), url(${backgroundImage})`,
    backgroundPosition: backgroundPositionY
      ? `center ${backgroundPositionY}`
      : 'center'
  };

  return (
    <section className="hero-interna" style={heroStyle}>
      <h1 className="hero-interna__title">{title}</h1>
    </section>
  );
};

export default Hero;