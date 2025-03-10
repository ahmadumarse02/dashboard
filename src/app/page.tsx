import Navbar from '@/components/Navbar'
import Slidebar from '@/components/Slidebar'
import React from 'react'
import HomePage from './(pages)/dashboard/page'

function page() {
  return (
    <>
    <div>
        <aside className="fixed left-0 top-0 h-screen w-56 bg-[#E4E4E4] shadow-md z-50">
          <Slidebar />
        </aside>
        <div className={"flex flex-col flex-1 ml-56"}>
          <header className="fixed top-0 left-56 right-0 bg-white shadow-md z-50">
            <Navbar />
          </header>
          <main className={"mt-16"}><HomePage /></main>
        </div>
      </div>
    </>
  )
}

export default page