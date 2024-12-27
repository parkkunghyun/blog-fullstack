"use client";


import BlogList from '@/Components/BlogList';
import Footer from '@/Components/Footer';
import Header from '@/Components/Header'
import React from 'react'

const UI = () => {
  return (
      <div>
          <Header />
          <BlogList />
          <Footer/>
    </div>
  )
}

export default UI