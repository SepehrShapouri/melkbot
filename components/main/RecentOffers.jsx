import { OFFERS } from '@/lib/constants';
import { Building, Landmark } from 'lucide-react';
import React from 'react'

function RecentOffers() {
  return (
    <div className="flex flex-col gap-[0.5rem] ">
    {OFFERS.map((offer, index) => {
      return (
        <div
          className="w-full bg-zinc-50 dark:bg-slate-900  py-[1rem] px-[1rem] rounded-md"
          key={index}
        >
          <div className="flex items-center gap-[0.5rem]">
            <div className="aspect-square w-[50px] h-[50px] rounded-lg flex items-center justify-center cursor-pointer bg-[#C0DBFE] dark:bg-[#263A8A] ">
              {offer.property_type == "land" ? (
                <Landmark className=" text-[#1D4ED8] dark:text-[#93C5FD]" />
              ) : (
                <Building className=" text-[#1D4ED8] dark:text-[#93C5FD]" />
              )}
            </div>
            <span>
              <h2>{offer.title}</h2>
              <p>{offer.desc}</p>
            </span>
          </div>
        </div>
      );
    })}
  </div>
  )
}

export default RecentOffers