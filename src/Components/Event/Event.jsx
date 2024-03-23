import React, {useState, useEffect} from 'react'
import { useParams } from 'react-router-dom'
import { ref, push, set, onValue, off } from 'firebase/database';
import { db } from '../../Firebase/config';

export const Event = () => {
    const params = useParams()
    const eventId = params.eventId;
    const [eventdata, setEventData] = useState(null);


    useEffect(() => {
        const fetchEventData = async () => {
          try {
            const eventRef = ref(db,`/events/${eventId}`);
            onValue(eventRef, (snapshot) => {
              const eventData = snapshot.val();
              if (eventData) {
                // Set the fetched event data to state
                setEventData(eventData);
                console.log(eventData)
              } else {
                console.log('No event found with eventId:', eventId);
              }
            });
          } catch (error) {
            console.error('Error fetching event data:', error);
          }
        };
    
        fetchEventData();
    
        // Cleanup function to remove event listener when component unmounts
        return () => {
          const eventRef = ref(db,`/events/${eventId}`);
          off(eventRef); // Remove the event listener to prevent memory leaks
        };
      }, [eventId]);


      const handleAddToCalendar = () => {
        if (!eventdata) return;
    
        // Remove suffix from date string (e.g., "1st", "2nd", "3rd", "4th")
        const dateStringWithoutSuffix = eventdata.date.replace(/(st|nd|rd|th)/, '');
    
        // Construct Google Calendar event link
        const startDate = new Date(dateStringWithoutSuffix + ' ' + eventdata.time);
        const endDate = new Date(startDate.getTime() + 60 * 60 * 1000); // Event duration: 1 hour
        const title = encodeURIComponent(eventdata.name);
        const description = encodeURIComponent(eventdata.description);
        const location = encodeURIComponent(eventdata.venue);
        const startDateTime = startDate.toISOString().replace(/-|:|\.\d+/g, '');
        const endDateTime = endDate.toISOString().replace(/-|:|\.\d+/g, '');
        const googleCalendarUrl = `https://calendar.google.com/calendar/render?action=TEMPLATE&text=${title}&dates=${startDateTime}/${endDateTime}&details=${description}&location=${location}`;
    
        // Open Google Calendar event link in a new tab
        window.open(googleCalendarUrl, '_blank');
      };
    


      if (!eventdata) {
        return <div>Loading...</div>;
      }


    const backgroundImageUrl = `url(${eventdata.imgURL})`;


  return (
    <div className='w-full h-full '>
        <div style={{backgroundImage: backgroundImageUrl}} className='w-full h-[200px] bg-cover bg-center'></div>
        <div className="bg-gray-50/90 py-6 w-full">
  <div className="container px-4 md:px-6">
    <div className="grid items-center gap-4 sm:grid-cols-2 lg:gap-8">
      <div className="space-y-1">
        <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl">{eventdata.name}</h1>
        <p className="text-gray-500 dark:text-gray-400">{eventdata.tagline}</p>
      </div>
      <div className="flex justify-end items-start space-y-2 sm:space-y-0 sm:items-center sm:justify-start">
        <button className="inline-flex items-center justify-center whitespace-nowrap text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-input bg-background hover:bg-accent hover:text-accent-foreground h-9 rounded-md px-3" onClick={handleAddToCalendar}>
          Add to Calendar
        </button>
      </div>
    </div>
  </div>
</div>
<div className="py-12 lg:py-24 xl:py-32">
  <div className="container px-4 md:px-6">
    <div className="grid gap-6 lg:gap-8">
      <div className="space-y-4">
        <p className="text-gray-500 dark:text-gray-400">
          {eventdata.description}
        </p>
      </div>
      <div className="grid gap-1 md:grid-cols-2">
        <div className="grid gap-1">
          <h3 className="text-lg font-semibold">Date</h3>
          <p>{eventdata.date}</p>
        </div>
        <div className="grid gap-1">
          <h3 className="text-lg font-semibold">Time</h3>
          <p>{eventdata.time}</p>
        </div>
        <div className="grid gap-1">
          <h3 className="text-lg font-semibold">Location</h3>
          <p>{eventdata.venue}</p>
        </div>
      </div>
      <div className="flex justify-center"></div>
    </div>
  </div>
</div>
    </div>
  )
}
