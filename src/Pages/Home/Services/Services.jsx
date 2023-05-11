import { useEffect, useState } from "react";
import ServiceCard from "./ServiceCard";

const Services = () => {
  const [services, setServices] = useState([]);

  useEffect(() => {
    fetch("../../../../public/services.json")
      .then((res) => res.json())
      .then((data) => setServices(data));
  }, []);

  return (
    <div className="my-10">
      <div className="text-center mb-10">
        <h5 className="text-error font-bold">Service</h5>
        <h2 className="text-5xl font-bold py-5">Our Service Area</h2>
        <p className="w-1/2 mx-auto">
          the majority have suffered alteration in some form, by injected
          humour, or randomised words which do not look even slightly
          believable.{" "}
        </p>
      </div>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
        {services.map(service => (
          <ServiceCard
          key={service._id}
          service={service}
          ></ServiceCard>
        ))}
      </div>
    </div>
  );
};

export default Services;
