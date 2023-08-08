import { EventTypes } from "../../types/Event.types";

const dummyData: EventTypes[] = [
    {
      eventId: "1f 2efads fds ",
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
      eventId: "2f dsafdsaf2ew2ef",
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
      eventId: "61",
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
    {
      eventId: "23",
      userId: "user222",
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
      eventId: "62",
      userId: "user633",
      title: "Event 6",
      date: "2023-09-20",
      time: "12:00",
      description: "This is Event 6",
      price: 20,
      location: "111 Park Vista Blvd, Fort Worth, TX, 76244",
      image_url:
        "https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
    },
    {
      eventId: "2654",
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
      eventId: "62345",
      userId: "user66gdfs",
      title: "Event 6",
      date: "2023-09-20",
      time: "12:00",
      description: "This is Event 6",
      price: 20,
      location: "111 Park Vista Blvd, Fort Worth, TX, 76244",
      image_url:
        "https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
    },
    {
      eventId: "256432",
      userId: "user2fgds",
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
      eventId: "64fdsafg",
      userId: "user6 xgfdfgs",
      title: "Event 6",
      date: "2023-09-20",
      time: "12:00",
      description: "This is Event 6",
      price: 20,
      location: "111 Park Vista Blvd, Fort Worth, TX, 76244",
      image_url:
        "https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
    },
    {
      eventId: "2gfdsgdf",
      userId: "user2gfd sdfsg",
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
      eventId: "6g34",
      userId: "user6fff",
      title: "Event 6",
      date: "2023-09-20",
      time: "12:00",
      description: "This is Event 6",
      price: 20,
      location: "111 Park Vista Blvd, Fort Worth, TX, 76244",
      image_url:
        "https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
    },
    {
      eventId: "2ydfsgdfgfs e2 ",
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
      eventId: "6g fdsg3ewt ",
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
    {
      eventId: "2 fdsafewf ",
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
      eventId: "6 fdsasd asdf",
      userId: "user64 3",
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

  export default dummyData;