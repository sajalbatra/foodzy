import Slider from "react-slick";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import breakfastImg from "../assets/breakfast.svg"; // Importing SVGs
import burgerImg from "../assets/burger.svg";
import "../styles/sliderStyles.css"; // Import custom styles for arrows and dots

const seasonalSpecials = [
  {
    image: breakfastImg,
    title: "Breakfast Special",
    ingredients: "Eggs, Toast, Bacon, Avocado",
    description: "Start your day with our delicious breakfast special.",
  },
  {
    image: burgerImg,
    title: "Burger Special",
    ingredients: "Beef, Lettuce, Tomato, Cheese",
    description: "Indulge in our juicy and flavorful burgers.",
  },
  {
    image: breakfastImg,
    title: "Evening Snacks",
    ingredients: "Chips, Salsa, Guacamole",
    description: "Enjoy our tasty snacks for a perfect evening.",
  },
];

const SeasonalSpecials = () => {
  const settings = {
    dots: true,
    arrows: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000, 
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
  };

  return (
    <div className="mt-10 flex flex-col items-center justify-center bg-gray-200 py-8"> {/* Gray background */}
      <h2 className="text-3xl font-bold text-center mb-8">Seasonal Specials</h2>
      <div className="w-[90%] md:w-[70%] lg:w-[50%]"> {/* Adjusted width for better centering */}
        <Slider {...settings}>
          {seasonalSpecials.map((item, index) => (
            <div key={index} className="flex justify-center">
              <div className="flex flex-row items-center bg-white rounded-lg shadow-lg w-[900px] h-[320px] p-4 box-border">
                <div className="w-[40%] h-full">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="h-full w-full object-cover rounded-md"
                  />
                </div>
                <div className="flex flex-col justify-center p-4 w-[60%] text-left">
                  <h3 className="text-2xl font-bold mb-2">{item.title}</h3>
                  <p className="text-lg font-semibold mb-2">Ingredients: {item.ingredients}</p>
                  <p className="text-sm text-gray-600">{item.description}</p>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

// Custom arrows for navigation
const SampleNextArrow = (props: any) => {
  const { className, onClick } = props;
  return (
    <div
      className={`${className} arrow arrow-right`}
      onClick={onClick}
    />
  );
};

const SamplePrevArrow = (props: any) => {
  const { className, onClick } = props;
  return (
    <div
      className={`${className} arrow arrow-left`}
      onClick={onClick}
    />
  );
};

export default SeasonalSpecials;
