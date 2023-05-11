import { FaArrowRight } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const ServiceCard = ({ service }) => {
  const { title, img, price } = service;
  console.log(service);
  return (
    <div className="card w-full bg-base-100 shadow-xl">
      <figure className="px-10 pt-10">
        <img src={img} alt="Shoes" className="rounded-xl" />
      </figure>
      <div className="card-body ">
        <h3 className="card-title">{title}</h3>
        <div className="card-actions flex items-center justify-between">
          <h5 className="text-red-500 font-bold">Price: ${price}</h5>
          <Link to={'/details'} className='text-red-500 p-2'><FaArrowRight /></Link>
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;
