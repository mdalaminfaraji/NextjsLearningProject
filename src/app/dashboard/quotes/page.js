"use client"
import React from 'react';
import { usePathname } from 'next/navigation'
import SearchQuotes from './SearchQuotes';
import FilterQuotes from './FilterQuotes';
import QuotesList from './QuotesList';
const allQuotes=[ 
       {
        id:1,
        requested:"July 15, 2023",
        customerInfo:"ABC houses",
        requestedServices:"Evaes Guards install",
        address:" abc address",
        status:"Converted"
      },
       {
        id:2,
        requested:"July 15, 2023",
        customerInfo:"ABC houses",
        requestedServices:"Evaes Guards install",
        address:" abc address",
        status:"Converted"
      },
       {
        id:3,
        requested:"July 15, 2023",
        customerInfo:"ABC houses",
        requestedServices:"Evaes Guards install",
        address:" abc address",
        status:"Converted"
      },
       {
        id:4,
        requested:"July 15, 2023",
        customerInfo:"ABC houses",
        requestedServices:"Evaes Guards install",
        address:" abc address",
        status:"Converted"
      },
       {
        id:5,
        requested:"July 15, 2023",
        customerInfo:"ABC houses",
        requestedServices:"Evaes Guards install",
        address:" abc address",
        status:"Converted"
      },
]




const QuotesPage = () => {
    const pathname = usePathname()
    console.log(pathname);
    return (
        <div>
          <div>
            <SearchQuotes></SearchQuotes>
            <FilterQuotes></FilterQuotes>
          </div>
            <QuotesList AllQuotes={allQuotes}></QuotesList>
        </div>
    );
};

export default QuotesPage;