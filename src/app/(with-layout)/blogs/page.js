import Link from 'next/link';

import React from 'react';
export const metadata = {
    title: 'Blogs ||Learn-next',
    description: 'next app',
  }
//   const blogs=[
//     {
//         id:1,
//         year:2016,
//         title:"title 1",
//     },
//     {
//         id:2,
//         year:2016,
//         title:"title 2",
//     },
//     {
//         id:4,
//         year:2016,
//         title:"title 4",
//     },
//     {
//         id:5,
//         year:2016,
//         title:"title 5",
//     },
//     {
//         id:6,
//         year:2016,
//         title:"title 6",
//     },
//   ]
const BlogsPage = async() => {
// href={{pathName:`/blogs/${year}/${id}`, query:{title:title}}}

   const res=await fetch("https://jsonplaceholder.typicode.com/posts",{
    cache:"force-cache",
   });
   const blogs=await res.json();
    return (
        <div className='container mx-auto p-2 mt-10'>
            {
                blogs.map(({id, body, title})=>(
              <div key={id} className=' border-2 border-blue-600 p-2  my-2'>
                <h2 className='text-2xl'>{id}. {title}</h2>
                <p>{body}</p>
              <Link className='inline-block mt-5'  key={id} href={`/blogs/${id}`} >
                <button className='text-white px-2 py-1 bg-blue-500'>Details</button>
                </Link>  
              
              </div>
            ))}
        </div>
    );
};

export default BlogsPage;