import React from 'react'
import Card from './Card'

const Dashboard = () => {
  return (

    <div className='w-full h-full flex items-center justify-center'>
      <div className="flex flex-col w-full h-full">
  <header className="flex items-center h-16 px-4 border-b shrink-0 md:px-6">
    <nav className="flex-col hidden gap-6 text-lg font-medium md:flex md:flex-row md:items-center md:gap-5 md:text-sm lg:gap-6">
      <a className="flex items-center gap-2 text-lg font-semibold md:text-base" href="#">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="w-6 h-6"
        >
          <path d="M3 9h18v10a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V9Z"></path>
          <path d="m3 9 2.45-4.9A2 2 0 0 1 7.24 3h9.52a2 2 0 0 1 1.8 1.1L21 9"></path>
          <path d="M12 3v6"></path>
        </svg>
        <span className="sr-only">Acme Inc</span>
      </a>
      <a className="text-gray-500 dark:text-gray-400" href="#">
        Upcoming
      </a>
      <a className="text-gray-500 dark:text-gray-400" href="#">
        Ongoing
      </a>
      <a className="text-gray-500 dark:text-gray-400" href="#">
        Past
      </a>
    </nav>
    <div className="flex items-center w-full gap-4 md:ml-auto md:gap-2 lg:gap-4">
      <form className="flex-1 ml-auto sm:flex-initial">
        <div className="relative">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="absolute left-2.5 top-2.5 h-4 w-4 text-gray-500 dark:text-gray-400"
          >
            <circle cx="11" cy="11" r="8"></circle>
            <path d="m21 21-4.3-4.3"></path>
          </svg>
          <input
            className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 pl-8 sm:w-[300px] md:w-[200px] lg:w-[300px]"
            placeholder="Search events..."
            type="search"
          />
        </div>
      </form>
      <button className="inline-flex items-center justify-center whitespace-nowrap text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 hover:bg-accent hover:text-accent-foreground h-10 w-10 rounded-full">
        <img
          src="/placeholder.svg"
          width="32"
          height="32"
          className="rounded-full"
          alt="Avatar"
          style={{aspectRatio: '32 / 32', objectFit: 'cover'}}
        />
        <span className="sr-only">Toggle user menu</span>
      </button>
    </div>
  </header>



  <main className="flex flex-1 flex-col gap-4 p-4 md:gap-8 md:p-10 overflow-y-scroll">
    <div className="grid gap-4 md:grid-cols-4">

      <Card url="https://wallpapercave.com/wp/wp7488226.jpg" when="Ongoing" />
      <Card url="https://wallpapercave.com/wp/wp7488226.jpg" />
      <Card url="https://wallpapercave.com/wp/wp7488226.jpg" />
      <Card url="https://wallpapercave.com/wp/wp7488226.jpg" />
      <Card url="https://wallpapercave.com/wp/wp7488226.jpg" />
      <Card url="https://wallpapercave.com/wp/wp7488226.jpg" />
      <Card url="https://wallpapercave.com/wp/wp7488226.jpg" />
      <Card url="https://wallpapercave.com/wp/wp7488226.jpg" />
      <Card url="https://wallpapercave.com/wp/wp7488226.jpg" />
      <Card url="https://wallpapercave.com/wp/wp7488226.jpg" />
      <Card url="https://wallpapercave.com/wp/wp7488226.jpg" />
      <Card url="https://wallpapercave.com/wp/wp7488226.jpg" />
      <Card url="https://wallpapercave.com/wp/wp7488226.jpg" />
      <Card url="https://wallpapercave.com/wp/wp7488226.jpg" />
      



      <div className="rounded-lg border bg-card text-card-foreground shadow-sm max-w-[370px]" data-v0-t="card">
        <div className="p-6 flex flex-row items-center justify-between pb-2 space-y-0">
          <h3 className="whitespace-nowrap tracking-tight text-sm font-medium">Ongoing</h3>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="w-4 h-4 text-gray-500 dark:text-gray-400"
          >
            <rect width="18" height="18" x="3" y="4" rx="2" ry="2"></rect>
            <line x1="16" x2="16" y1="2" y2="6"></line>
            <line x1="8" x2="8" y1="2" y2="6"></line>
            <line x1="3" x2="21" y1="10" y2="10"></line>
            <path d="m9 16 2 2 4-4"></path>
          </svg>
        </div>
        <div className="p-6 flex flex-col items-center justify-center gap-2">
          <img
            src="https://wallpapercave.com/wp/wp7488226.jpg"
            width="200"
            height="100"
            aspectRatio="1.5"
            className="rounded-md overflow-hidden object-cover"
            alt="Ongoing event"
            style={{aspectRatio: '200 / 100', objectFit: 'cover'}}
          />
          <p className="text-sm font-medium">Workshop: UX Design</p>
          <p className="text-xs text-gray-500 dark:text-gray-400">Live Now - Join the session</p>
        </div>
        <div className="items-center p-6 flex gap-2">
          <button className="inline-flex items-center justify-center whitespace-nowrap text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/90 h-9 rounded-md px-3">
            Details
          </button>
        </div>
      </div>


    </div>
  </main>


</div>
    </div>


    
  )
}

export default Dashboard