import * as React from "react";
import { API_URL } from "../../constants/api-constants";
import { Button, Box, Text, Image } from "@chakra-ui/react";

export default function ViewEvent<
  T extends {
    title: string;
    description: string;
    image_url: string;
    date: string;
    time: string;
    price: number;
    userId: string;
    location: string;
  }
>() {
  const [event, setEvent] = React.useState<T | null>(null);


  React.useEffect(() => {
    fetch(`${API_URL}/api/events/e38bb8c3-290f-4314-b33d-eb94bec7848f`)
      .then((res) => res.json())
      .then((data: T) => setEvent(data))
      .catch(console.error);
  }, []);

  console.log(event);
  if (!event) {
    return <div>Loading...</div>;
  } else {
    return (
      <>
        <Box display="flex" flexDirection={{ base: "column", lg: "row" }}>
          <Box boxShadow={"2xl"} width={{ base: "100%", lg: "50%" }}>
            <Image
              src={event.image_url}
              alt="Image Alt Text"
              borderRadius="15px"
            />
          </Box>

          <Box
            flexDirection={{ base: "row", lg: "column" }}
            w={{ base: "100%", lg: "50%" }}
          >
            <Box
              display="flex"
              justifyContent="space-between"
              alignItems="center"
              p={4}
            >
              <Box flexDirection="column">
                <h1>{event.title}</h1>
                <p>
                  {event.date} at {event.time}
                </p>
              </Box>

              <Button colorScheme="teal">
                {"$" + event.price + " Buy Tickets"}
              </Button>
            </Box>

            <Box p={4}>
              <Text fontWeight="700">Description</Text>
              <Text>{event.description}</Text>
            </Box>
          </Box>
        </Box>

        <Box
          borderRadius="15px"
          // bg={useColorModeValue("white", "gray.900")}
          boxShadow={"2xl"}
          p={4}
          bg="teal"
          color="white"
          margin="1em"
        >
          <Text display="flex" justifyContent="center" fontWeight="700">
            When and Where
          </Text>

          <Box
            display="flex"
            flexDirection={{ base: "column", lg: "row" }}
            justifyContent="space-around"
          >
            <Box p={4}>
              <Text>Date and time</Text>
              <Text>
                {event.date} at {event.time}
              </Text>
            </Box>

            <Box p={4}>
              <Text>Location</Text>
              <Text>{event.location}</Text>
            </Box>
          </Box>
        </Box>
      </>
    );
  }
}
