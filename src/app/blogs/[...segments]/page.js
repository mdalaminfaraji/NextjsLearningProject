"use client"
import React from 'react';
import {useParams, useSearchParams} from "next/navigation"
const SingleBlog = ({params}) => {
  const [year, id]=params.segments ||[]; 
  const params2=useParams();
  const searchParams2=useSearchParams();
  console.log(params2.segments);
    return (
        <div>
            SingleBlog {year|| new Date().getFullYear()} for {id}
        </div>
    );
};

export default SingleBlog;