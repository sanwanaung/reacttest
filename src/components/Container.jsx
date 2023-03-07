import Description from "./Description";
import Image from "./image";
import Title from "./Title";

const details = {
  title: "Improve your front-end skills by building projects",
  description:
    "Scan the QR code to visit Frontend Mentor and take your coding skills to the next level",
};

const Container = () => {
  return (
    <div className="container">
      <Image />
      <Title details={details} />
      <Description details={details} />
    </div>
  );
};

export default Container;
