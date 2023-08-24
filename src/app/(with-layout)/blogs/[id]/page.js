// "use client"
import LoadBlogsData from '../../../../utils/LoadBlogsData';
import LoadSingleBlogData from '../../../../utils/LoadSingleBlogData';
//dynamic title
export const generateMetadata=async({params})=>{
    const {title}=await LoadSingleBlogData(params.id);
    return {
        title:title,
    };
}
export const generateStaticParams=async ()=>{
    const blogs=await LoadBlogsData();
    return blogs.map(({id})=>{id:id.toString()})
}
import React from 'react';
// import {useParams, useSearchParams} from "next/navigation"
const SingleBlog =async ({params}) => {
//   const [year, id]=params.segments ||[]; 
//   const params2=useParams();
//   const searchParams2=useSearchParams();
//   console.log(params2.segments);
const {id, title, body}=await LoadSingleBlogData(params.id);
    return (
        <div className='border, border-blue-500 p-2 my-2'>
           <h2 className='text-2xl'>{id}. {title}</h2>
           <p>{body}</p>
        </div>
    );
};

export default SingleBlog;