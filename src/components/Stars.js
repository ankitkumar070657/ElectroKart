import { FaStar, FaStarHalfAlt } from "react-icons/fa";
import { AiOutlineStar } from "react-icons/ai";


const Star = ({ stars, reviews, name }) => {
  const ratingStar = Array.from({ length: 5 }, (elem, index) => {
    let number = index + 0.5;

    return (
      <span key={index}>
        {stars >= index + 1 ? (
          <FaStar size="1rem" className="text-yellow-500" />
        ) : stars >= number ? (
          <FaStarHalfAlt size="1rem" className="text-yellow-500" />
        ) : (
          <AiOutlineStar size="1rem" className="text-yellow-600" />
        )}
      </span>
    );
  });

  return (
      <div className="flex flex-row-reverse justify-between mx-2">
      <div className="flex items-center mx-4">
      {ratingStar}
      ({stars})
      <p>({reviews} reviews)</p>
      </div>
     <div className=" py-2 font-bold"> {name}</div>
    </div>
  );
};

export default Star;
