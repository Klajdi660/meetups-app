import { useState, useEffect } from "react";
import MeetupList from "../components/meetups/MeetupList";

const AllMeetup = () => {
  const [loading, setLoading] = useState(true);
  const [loadedMeetup, setLoadedMeetup] = useState([]);

  useEffect(() => {
    setLoading(true);
    fetch(
      'https://meetups-1065f-default-rtdb.firebaseio.com/meetups.json'
    )
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      const meetups = [];

      for (const key in data) {
        const meetup = {
          id: key,
          ...data[key]
        };
        meetups.push(meetup);
      };
      setLoading(false);
      setLoadedMeetup(meetups);
    });
  }, []);

  if(loading){
    return (
      <section>
        <p>Loading...</p>
      </section>
    );
  };
  
  return (
    <section>
      <h1>All Meetups</h1>
      <ul>
        <MeetupList meetups={loadedMeetup} />
      </ul>  
    </section>
  );
};

export default AllMeetup;
