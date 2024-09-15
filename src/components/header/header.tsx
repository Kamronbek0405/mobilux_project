import { Logo } from '@/icon/logo'
import React from 'react'
import { Input } from '../ui/input'
import { Search } from '@/icon/search'
import { Button } from '../ui/button'
import { Turn } from '@/icon/turn'
import { SelectLanguage } from '../ui/select-language'
import { User } from '@/icon/user'

export const Header = () => {
  return (
    <div className='max-w-[1535px] p-5  flex  items-center justify-between  shadow-lg shadow-gray-300 '>
        <span>
            <Logo/>
        </span>
        <label className='w-[800px] h-[50px] py-3  flex items-center  border-green-400 border-2 rounded-lg justify-between ' >
           <div className='flex items-center gap-3'>
           <span className='w-[40px] h-[40px] flex items-center  justify-center op' >
             <Search/>
            </span>
            <div className='w-[300px] h-[35px]  '>
            <Input type='search' placeholder='Qidirish'  className='border-none '/>
            </div>
           </div>
            <Button size={'lg'} startIcon={<Turn/>} variant={"default"} >Filter</Button>
        </label>
        <div>
           <SelectLanguage  className='w-[78px] h-[38px] bg-slate-100 rounded-lg px-1 '/>
        </div>
        <Button variant={"secondary"} size={"lg"} endIcon={<User/>}>Kirish</Button>
</div>

  )
}
