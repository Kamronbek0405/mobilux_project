import Link from 'next/link';
import React from 'react';

interface phonesType {
  img: string;
  title: string;
  rame: string;
  color: string;
  brand: string;
  price: string;
  id: number;
}

export const PhoneCard: React.FC<phonesType> = ({ img, title, rame, color, brand, price, id }) => {
  return (
    <div className="w-[300px] border-2 px-5 py-2">
      <img src={img} alt={title} className="w-[250px] h-[250px]" />
      <h3 className="phone-card-title">{title}</h3>
      <p className="phone-card-ram">RAM: {rame}</p>
      <p className="phone-card-color">Color: {color}</p>
      <p className="phone-card-brand">Brand: {brand}</p>
      <p className="phone-card-price">Price: {price}</p>
      <Link href={`/phones/${id}`} >
       otish
      </Link>
    </div>
  );
};
