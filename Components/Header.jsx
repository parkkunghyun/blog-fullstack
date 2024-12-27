import { assets } from "@/Assets/assets"
import Image from "next/image"
import Link from "next/link"

const Header = () => {
  return (
      <div className="p-5 md:px-12 lg:px-28">
          <div className="flex items-center justify-between">
              <Link href={"/"}>
                <Image src={assets.logo} width={180} alt=""
                    className="w-[130px] sm:w-auto" />
              </Link>
              
              <button className="flex shadow-[-7px_7px_0px_#000000] items-center gap-2 px-3 py-1 font-medium border border-black border-solid sm:py-3 sm:px-6">
                  Get started
                  <Image className="" src={assets.arrow} alt="" />
              </button>
          </div>

          <div className="my-8 text-center">
              <h1 className="">Latest Blogs</h1>
              <p className="mt-10 max-w-[740px] m-auto text-xs sm:text-base">Lorem Ipsum is simply dummy text of the printing and typesetting industry.but also the leap into electronic typesetting, remaining essentially unchanged.</p>

              <form className="shadow-[-7px_7px_0px_#000000] flex justify-between max-w-[500px] scale-75 sm:scale-100 mx-auto mt-10 border border-black">
                  <input
                      className="flex-1 pl-4 outline-none"
                      type="email" placeholder="구독할 Email을 입력해주세요." />
                  <button type="submit" className="p-4 border-l border-black sm:px-8 active:text-white active:bg-gray-600">Subscribe</button>
              </form>
          </div>
    </div>
  )
}

export default Header