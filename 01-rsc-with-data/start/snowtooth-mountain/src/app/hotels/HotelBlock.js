"use client";

import Image from "next/image";

export default function HotelBlock({
  id,
  name,
  capacity,
}) {
  const imageLoader = ({ src }) => {
    return `./hotels/${src}.jpeg`;
  };

  return (
    <div className="bg-white rounded-lg p-4 shadow">
      <h2 className="text-gray-600">{name}</h2>
      <p className="text-gray-600">Capacity: {capacity}</p>
      <Image
        loader={imageLoader}
        src={id}
        alt={`${name}`}
        width={150}
        height={150}
        className="mt-4"
      />
    </div>
  );
}