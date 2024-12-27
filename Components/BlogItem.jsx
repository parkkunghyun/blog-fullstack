import { assets, blog_data } from "@/Assets/assets"
import Image from "next/image"
import Link from "next/link"


const BlogItem = ({title, description, category, image, id}) => {
  return (
      <div className="max-w-[330px] sm:max-w-[300px] bg-white border border-black hover:shadow-[-7px_7px_0px_#000000]">
          <Link href={`/blogs/${id}`}>
            <Image className="border-b border-black"
                  src={image} width={400} height={400} alt="" />
          </Link>
          <p className="inline-block px-1 mt-5 ml-5 text-sm text-white bg-black">{category}</p>
          <div className="p-5">
              <h5 className="mb-2 text-lg font-medium tracking-tight text-gray-900">{title}</h5>
              <p className="mb-3 text-sm tracking-tight text-gray-700">{description}</p>
              <div className="flex items-center py-2 font-semibold text-center ">
                  <span>Read more</span>
                  <Image src={assets.arrow} width={12} className="mt-0.5 ml-2" alt="" />
              </div>
            </div>
            
      </div>
  )
}

export default BlogItem