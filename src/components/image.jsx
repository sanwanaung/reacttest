import image from "./../images/image-qr-code.png";

const Image = () => {
  return (
    <div className="image-container">
      <img src={image} alt="img/png" className="img" />
    </div>
  );
};

export default Image;
