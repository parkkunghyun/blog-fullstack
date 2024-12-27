"use client";
import { assets, blog_data } from "@/Assets/assets";
import Footer from "@/Components/Footer";
import Image from "next/image";
import Link from "next/link";
import { use, useEffect, useState } from "react";

const BlogDetailPage = ({ params }) => {
  const [data, setData] = useState(null);
  const { id } = use(params);

  const fetchBlogData = () => {
     for (let i = 0; i < blog_data.length; i++) {
      if (blog_data[i].id === Number(id)) {
        setData(blog_data[i]);
        console.log(blog_data[i]); // 설정된 값을 바로 확인
        break
      }
    }
  }

  useEffect(() => {
    fetchBlogData();
  }, []);

  return (
    data ? <>
      <div className="px-5 py-5 bg-gray-200 md:px-12 lg:px-28">
        <div className="flex items-center justify-between">
          <Link href={"/"}>
            <Image className="w-[130px] sm:w-auto" src={assets.logo} alt="" width={180} />
          </Link>
          <button className="flex items-center gap-2 font-medium py-1 px-3 sm:py-3 sm:px-6 border border-black shadow-[-7px_7px_0px_#000000]">
            Get started
            <Image src={assets.arrow} alt="" />
          </button>
          
       
      </div>

      <div className="my-24 text-center">
          <h1 className="max-w-[700px] mx-auto">{data.title}</h1>
          <Image
            className="mx-auto mt-6 border border-white rounded-full"
            src={data.author_img} alt="" width={60} height={60} />
          <p className="pb-2 mx-auto mt-1 text-lg">{data.author}</p>
        </div>
      </div>
      <div className="mx-5 max-w-[800px] md:mx-auto mt-[-100px] mb-10">
        <Image className="border-4 border-white rounded-sm"
          src={data.image} width={1280} height={720} alt="" />
        <h1 className="my-8 text-[26px] font-semibold">Introduction:</h1>
        <p>{data.description}</p>
        <h3 className="my-5 text-[18px] font-semibold">Step1: Self-Reflaction an Goal Setting</h3>
        <p className="my-3">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
        <p className="my-3">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>


        <h3 className="my-5 text-[18px] font-semibold">Step2: Self-Reflaction an Goal Setting</h3>
        <p className="my-3">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
        <p className="my-3">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>

        <h3 className="my-5 text-[18px] font-semibold">Step3: Self-Reflaction an Goal Setting</h3>
        <p className="my-3">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
        <p className="my-3">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
      
        <h3 className="my-5 text-[18px] font-semibold">Conclusion:</h3>
        <p className="my-3">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type s</p>

        <div className="my-24">
          <p className="my-4 font-semibold text-black ">Share this article on social media</p>
          <div className="flex">
            <Image className="cursor-pointer hover:scale-105" src={assets.facebook_icon} alt="" width={50} />
            <Image className="cursor-pointer hover:scale-105" src={assets.twitter_icon} alt="" width={50} />
            <Image className="cursor-pointer hover:scale-105" src={assets.googleplus_icon} alt="" width={50}/>
          </div>
        </div>
      </div>
      <Footer/>
    </> : <></>
  )
}

export default BlogDetailPage;