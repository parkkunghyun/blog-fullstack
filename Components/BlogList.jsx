"use client";

import { blog_data } from "@/Assets/assets"
import BlogItem from "./BlogItem"
import { useState } from "react"


const BlogList = () => {
    const [menu, setMenu] = useState("All");

  return (
      <div>
          <div className="flex justify-center gap-6 my-10 ">
              <button onClick={() => setMenu("All")}
                  className={menu === 'All' ? "px-4 py-1 text-white bg-black rounded-sm" : ""}>All</button>
              <button className={menu === 'Technology' ? "px-4 py-1 text-white bg-black rounded-sm" : ""}
                  onClick={() => setMenu("Technology")} >Technology</button>
              <button onClick={() => setMenu("Startup")}
                  className={menu === 'Startup' ? "px-4 py-1 text-white bg-black rounded-sm" : ""}>Startup</button>
              <button onClick={() => setMenu("Lifestyle")}
                  className={menu === 'Lifestyle' ? "px-4 py-1 text-white bg-black rounded-sm" : ""}>LifeStyle</button>
          </div>
          <div className="flex flex-wrap justify-around gap-1 mb-16 gap-y-10 xl:mx-24">
              {
                  blog_data.filter((item) => menu === "All" ? true : item.category === menu).map((item) => (
                      <BlogItem key={item.id} id={item.id} image={item.image} title={item.title} description={item.description} category={item.category}  />
                  ))
              }
          </div>
    </div>
  )
}

export default BlogList