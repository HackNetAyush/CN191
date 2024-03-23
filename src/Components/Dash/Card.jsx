import React from 'react'

const Card = (props) => {
  function handlePost(){
    window.location.href = "./event/"+props.id;
  }
  return (
    <div className="rounded-lg border bg-card text-card-foreground shadow-sm max-w-[370px] cursor-pointer" data-v0-t="card" onClick = {handlePost}>
        <div className="p-6 flex flex-row items-center justify-between pb-2 space-y-0">
          <h3 className="whitespace-nowrap tracking-tight text-sm font-medium">{props.status}</h3>
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
            <path d="M21 13V6a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h8"></path>
            <line x1="16" x2="16" y1="2" y2="6"></line>
            <line x1="8" x2="8" y1="2" y2="6"></line>
            <line x1="3" x2="21" y1="10" y2="10"></line>
            <line x1="19" x2="19" y1="16" y2="22"></line>
            <line x1="16" x2="22" y1="19" y2="19"></line>
          </svg>
        </div>
        <div className="p-6 flex flex-col items-center justify-center gap-2">
          <img
            src={props.url}
            width="200"
            height="100"
            aspectRatio="1.5"
            className="rounded-md overflow-hidden object-cover"
            alt="Upcoming event"
            style={{aspectRatio: '200 / 100', objectFit: 'cover'}}
          />
          <p className="text-sm font-medium">{props.name}</p>
          <p className="text-xs text-gray-500 dark:text-gray-400">{props.date} - {props.time}</p>
        </div>
        <div className="items-center p-6 flex gap-2">
          <button className="inline-flex items-center justify-center whitespace-nowrap text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/90 h-9 rounded-md px-3">
            Details
          </button>
          {/* <button className="inline-flex items-center justify-center whitespace-nowrap text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-input bg-background hover:bg-accent hover:text-accent-foreground h-9 rounded-md px-3">
            Edit
          </button> */}
        </div>
      </div>
  )
}

export default Card