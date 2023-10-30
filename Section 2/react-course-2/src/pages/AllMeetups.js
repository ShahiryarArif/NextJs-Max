import React, { useState } from "react";
import MeetupList from "../components/meetups/MeetupList";

const AllMeetups = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [loadedMeetups, setLoadedMeetups] = useState([]);
  fetch(
    "https://react-course-nextjs-max-default-rtdb.firebaseio.com/meetups.json"
  )
    .then((response) => response.json())
    .then(() => setIsLoading(false));

  if (isLoading) {
    return (
      <section>
        <p>Loading...</p>
      </section>
    );
  }

  return (
    <section>
      <h1>All Meetups</h1>
      <ul>
        <MeetupList meetups={loadedMeetups} />
      </ul>
    </section>
  );
};

export default AllMeetups;
