import MarqueeItem from "./MarqueeItem";

const Marquee = () => {
  const upperMarquee = [
    '/images/homeimage/seoil.jpg',
    '/images/homeimage/samjin.jpg',
    '/images/homeimage/cjfoods.jpg',
    '/images/homeimage/dhi.jpg',
    '/images/homeimage/cheil.jpg',
    '/images/homeimage/posco.jpg',
    '/images/homeimage/hansae.jpg',
    '/images/homeimage/juahn.jpg',
  ];

  const lowerMarquee = [
    '/images/homeimage/lgelec.jpg',
    '/images/homeimage/saea.jpg',
    '/images/homeimage/samick.jpg',
    '/images/homeimage/ceramic.jpg',
    '/images/homeimage/hankook.jpg',
    '/images/homeimage/bumjin.jpg',
    '/images/homeimage/wintex.jpg',
    '/images/homeimage/pan.jpg',
  ];

  return (
    <div className="container mx-auto">
      <MarqueeItem images={upperMarquee} from={0} to={"-100%"} />
      <MarqueeItem images={lowerMarquee} from={"-100%"} to={0} />
    </div>
  );
};

export default Marquee;