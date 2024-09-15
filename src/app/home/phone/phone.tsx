import React from 'react'
import { GetPhones } from '@/service/query/get-phones'
import { PhoneCard } from '@/components/phone-card'

export const Phone = async () => {
    const data = await GetPhones()

  return (
    <div className='flex items-center justify-center flex-wrap gap-3'>
        {data.slice(0,8).map((item)  => <PhoneCard key={item.id} {...item} />)}
    </div>
  )
}
