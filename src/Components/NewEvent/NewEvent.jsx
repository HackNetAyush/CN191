import React, {useState, useEffect} from 'react'
import { auth } from '../../Firebase/config';
import { signInWithEmailAndPassword,onAuthStateChanged, createUserWithEmailAndPassword,updateProfile } from 'firebase/auth';
import { Navigate, useNavigate  } from 'react-router-dom'
import { ref, push, set } from 'firebase/database';
import { db } from '../../Firebase/config';

const NewEvent = () => {

  const [mode, setMode] = useState("signup")

  const navigate = useNavigate();

  const [status, setStatus] = useState("");
  const [name, setName] = useState("");
  const [time, setTime] = useState("");
  const [date, setDate] = useState("");
  const [imgURL, setimgURL] = useState(null);
  const [tagline, setTagline] = useState(null);
  const [description, setDescription] = useState(null)
  const [venue, setVenue] = useState(null)


  const handleDate = (e) =>{
    setDate(e.target.value)
  }

  const handleimgURL = (e) =>{
    setimgURL(e.target.value)
  }

  const handleName = (e) =>{
    setName(e.target.value)
  }

  const handleStatus = (e) =>{
    setStatus(e.target.value)
  }

  const handleTime = (e) =>{
    setTime(e.target.value)
  }

  const handleTagline = (e) =>{
    setTagline(e.target.value)
  }

  const handleDescription = (e) =>{
    setDescription(e.target.value)
  }

  const handleVenue = (e) =>{ 
    setVenue(e.target.value)
  }


  function handleCancel(){
    window.location.href = "./dashboard"
  }


  function handleAddEvent() {
    let newEventData = {
        name,
        status,
        date,
        time,
        imgURL,
        tagline,
        description,
        venue
    }
    try {
      const eventsRef = ref(db, 'events');
      const newEventRef = push(eventsRef); // Generates a unique key for the new event
      set(newEventRef, newEventData); // Uploads the new event data to Firebase
      console.log('Event added successfully!');
    } catch (error) {
      console.error('Error adding event:', error);
    }
  }

  

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setUser(user);
      console.log(user)

      if(user){
        console.log("Newwww...  ",user)
        window.location.href = "./dashboard";
      }
    });

    

    return () => unsubscribe();
  }, []);


 

  return (

    <div className='w-full h-full flex items-center justify-center fixed z-10 bg-white'>
      <div
  className="rounded-lg border bg-card text-card-foreground shadow-sm w-full max-w-sm overflow-y-auto p-[10px] h-[95%]"
  data-v0-t="card"
>
  <div className="flex flex-col p-6 text-center space-y-2">
    
    <h3 className="whitespace-nowrap tracking-tight text-2xl font-bold">Add new event</h3>
    <p className="text-sm text-muted-foreground">Want to organize an event in university? Post them here!</p>
  </div>
  <div className="p-6 space-y-4">

    <div className="space-y-2">
      <label
        className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
        htmlFor="name"
      >
        Event Name
      </label>
      <input
        className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
        id="name"
        placeholder="Event Name"
        required="true"
        type="text"
        value={name}
        onChange={handleName}
        
      />
    </div>

    <div className="space-y-2">
      <label
        className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
        htmlFor="name"
      >
        Tagline
      </label>
      <input
        className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
        id="name"
        placeholder="Tagline"
        required="true"
        type="text"
        value={tagline}
        onChange={handleTagline}
        
      />
    </div>

    <div className="space-y-2">
      <label
        className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
        htmlFor="name"
      >
        Description
      </label>
      <input
        className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
        id="name"
        placeholder="Describe your event"
        required="true"
        type="text"
        value={description}
        onChange={handleDescription}
        
      />
    </div>

    <div className="space-y-2">
      <label
        className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
        htmlFor="name"
      >
        Poster URL
      </label>
      <input
        className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
        id="name"
        placeholder="Image URL"
        required="true"
        type="text"
        value={imgURL}
        onChange={handleimgURL}
        
      />
    </div>


    <div className="space-y-2">
      <label
        className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
        htmlFor="name"
      >
        Date
      </label>
      <input
        className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
        id="name"
        placeholder="24th April, 2024"
        required="true"
        type="text"
        value={date}
        onChange={handleDate}
        
      />
    </div>


    <div className="space-y-2">
      <label
        className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
        htmlFor="name"
      >
        Time
      </label>
      <input
        className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
        id="name"
        placeholder="10:00 PM"
        required="true"
        type="text"
        value={time}
        onChange={handleTime}
        
      />
    </div>

    <div className="space-y-2">
      <label
        className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
        htmlFor="name"
      >
        Venue
      </label>
      <input
        className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
        id="name"
        placeholder="Venue Details"
        required="true"
        type="text"
        value={venue}
        onChange={handleVenue}
        
      />
    </div>

    <div className="space-y-2">
      <label
        className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
        htmlFor="name"
      >
        Status
      </label>
      <input
        className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
        id="name"
        placeholder="Ongoing/Upcoming"
        required="true"
        type="text"
        value={status}
        onChange={handleStatus}
        
      />
    </div>




  

  

  </div>


  <div className="items-center p-6 pb-0 flex justify-center">

    <button
      className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 hover:bg-primary/90 h-10 px-4 py-2 w-full bg-black text-gray-900 dark:text-white mr-2"
      onClick={handleCancel}
    >
      Cancel
    </button>

    <button
      className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 hover:bg-primary/90 h-10 px-4 py-2 w-full bg-black text-gray-900 dark:text-white"
      onClick={handleAddEvent}
    >
      Add
    </button>

    

    

  </div>

  

</div>
    
</div>


    
  )
}

export default NewEvent;