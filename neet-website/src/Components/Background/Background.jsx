// ✅ Background.jsx (Tailwind CSS version)
import video1 from '../../assets/video1.mp4';
import image1 from '../../assets/image1.png';
import image2 from '../../assets/image2.png';
import image3 from '../../assets/image3.png';

const Background = ({ playStatus, heroCount }) => {
  const baseClasses = "fixed top-0 left-0 w-screen h-screen object-cover -z-10 pointer-events-none animate-fadeIn";

  if (playStatus) {
    return (
      <video className={baseClasses} autoPlay loop playsInline>
        <source src={video1} type="video/mp4" />
      </video>
    );
  }

  const imageSources = [image1, image2, image3];
  return <img className={baseClasses} src={imageSources[heroCount]} alt="background" />;
};

export default Background;
