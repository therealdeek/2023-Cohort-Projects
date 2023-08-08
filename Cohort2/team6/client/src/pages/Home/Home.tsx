import { Box, Spinner } from "@chakra-ui/react";
import Carousel from "../Home/components/Carousel/Carousel";
import EventCardContainer from "../../components/EventCardContainer/EventCardContainer";
import { EventTypes } from "../../types/Event.types";
import { useEffect, useState } from "react";
import { API_URL } from "../../constants/api-constants";
import axios, { AxiosResponse } from "axios";

export const Home = () => {
  // dummy data until redux store is setup
  const [events, setEvents] = useState<EventTypes[] | null>(null);

  //get events api call
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response: AxiosResponse<EventTypes[]> = await axios.get<EventTypes[]>(`${API_URL}/api/events`);
        console.log(response.data);
        setEvents(response.data.data)
      } catch (err) {
        console.error(err);
      }
    };

    fetchData(); // Call the async function to fetch data

  }, []);

  const dummyData: EventTypes[] = [
    {
      eventId: "1",
      userId: "user1",
      title: "Event 1",
      date: "2023-07-30",
      time: "15:00",
      description:
        "This is Event 1 This is Event 1This is Event 1This is Event 1This is Event 1This is Event 1This is Event 1This is Event 1This is Event 1This is Event 1This is Event 1This is Event 1This is Event 1This is Event 1This is Event 1This is Event 1This is Event 1This is Event 1",
      price: 10,
      location: "111 Park Vista Blvd, Fort Worth, TX, 76244",
      image_url:
        "https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
    },
    {
      eventId: "2",
      userId: "user2",
      title: "Event 2",
      date: "2023-08-05",
      time: "18:30",
      description: "This is Event 2",
      price: 15,
      location: "111 Park Vista Blvd, Fort Worth, TX, 76244",
      image_url:
        "https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
    },
    // Add more objects for the remaining 4 events...
    {
      eventId: "6",
      userId: "user6",
      title: "Event 6",
      date: "2023-09-20",
      time: "12:00",
      description: "This is Event 6",
      price: 20,
      location: "111 Park Vista Blvd, Fort Worth, TX, 76244",
      image_url:
        "https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
    },
  ];

  return (
    <Box h={events? '': '82vh'} display={events? '': 'flex'} justifyContent={events? '': 'center'} alignItems={events? '': 'center'}>
      {events ? (
        <>
          {" "}
          <Carousel />
          <EventCardContainer dummyData={events} />
        </>
      ) : (
        <Spinner
          thickness="4px"
          speed="0.65s"
          emptyColor="gray.200"
          color="blue.500"
          width="220px"
          height={'220px'}
          justifySelf={'center'}
        />
      )}
    </Box>
  );
};
