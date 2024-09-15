'use client';
import React, { useEffect, useState } from 'react';
import { NextPage } from 'next';
import { GetPhones } from '@/service/query/get-phones';

// Interfeysni yangilash
interface phonesType {
  img: string;
  title: string;
  rame: string;
  color: string;
  brand: string;
  price: string;
  id: number;
}

interface phoneProps {
  params: { phon_id: string };
}

const BookDetail: NextPage<phoneProps> = ({ params }) => {
  const [book, setBook] = useState<phonesType | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const phones: phonesType[] = await GetPhones();
        const foundBook = phones.find((item) => item.id === Number(params.phon_id));
        setBook(foundBook || null);
      } catch (error) {
        console.error('Error fetching phones:', error);
        setBook(null);
      }
    };

    fetchData();
  }, [params.phon_id]);

  if (!book) {
    return <div>Kitob topilmadi</div>;
  }

  return (
    <div>
      <div className='flex items-center h-[100vh] w-[100%]'>
        <h1>{book.title}</h1>
        <p>{book.price}</p>
      </div>
    </div>
  );
};

export default BookDetail;
