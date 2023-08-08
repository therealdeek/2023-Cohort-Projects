import { useEffect, useState } from "react";
import Ticket from "./components/Ticket";
import dummyData from "./dummydata";
import { Box, Spinner, Text } from "@chakra-ui/react";
import { EventTypes } from "../../types/Event.types";
import axios, { AxiosResponse } from "axios";
import { API_URL } from "../../constants/api-constants";

const EventsAttending = () => {
  const [events, setEvents] = useState<EventTypes[] | null>(null);

  //get events api call
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response: AxiosResponse<EventTypes[]> = await axios.get<
          EventTypes[]
        >(`${API_URL}/api/events`);
        console.log(response.data);
        setEvents(response.data.data);
      } catch (err) {
        console.error(err);
      }
    };

    fetchData(); // Call the async function to fetch data
  }, []);
  return (
    <>
      <Text
        h={"50px"}
        as={"h1"}
        fontSize={"32px"}
        display={"flex"}
        justifyContent={"center"}
        alignItems={"center"}
      >
        Events Attending
      </Text>{" "}
      <Box
        h={events ? "" : "82vh"}
        display={events ? "" : "flex"}
        justifyContent={events ? "" : "center"}
        alignItems={events ? "" : "center"}
      >
        {events ? (
          <Ticket dummyData={events} />
        ) : (
          <Spinner
            thickness="4px"
            speed="0.65s"
            emptyColor="gray.200"
            color="blue.500"
            width="220px"
            height={"220px"}
            justifySelf={"center"}
          />
        )}
      </Box>
    </>
  );
};

export default EventsAttending;
