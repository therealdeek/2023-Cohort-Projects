import axios, { AxiosResponse } from "axios";
import { EventTypes } from "../types/Event.types";
import { API_URL } from "../constants/api-constants";
import { useSelector } from "react-redux";
import { RootState } from "../redux/store";

const GET_EVENTS_API_URL = `${API_URL}/api/events/upcoming`;
const GET_EVENTS_ATTENDING_API_URL = `${API_URL}/api/events/attending/`;
const GET_EVENT_API_URL = `${API_URL}/api/events/:id`;
const CREATE_EVENT_API_URL = `${API_URL}/api/events/create`;

export const getEventsAsync = async (): Promise<EventTypes[]> => {
  // occurs on inital home page load, stored in redux store for subsequent access
  try {
    const response: AxiosResponse<EventTypes[]> = await axios.get(
      GET_EVENTS_API_URL
    );
    return response.data;
  } catch (error) {
    console.log(error);
    throw new Error("Failed to fetch events");
  }
};

export const getEventsAttendingAsync = async (
  uuid: string
): Promise<EventTypes[]> => {
  try {
    const response: AxiosResponse<EventTypes[]> = await axios.get(
      // userId passed through api call on events attending page on initial load
      GET_EVENTS_API_URL + uuid
    );
    return response.data;
  } catch (error) {
    console.log(error);
    throw new Error("Failed to fetch events");
  }
};

export const getSpecificEventAsync = async (
  eventId: string
): Promise<EventTypes> => {
  try {
    const response: AxiosResponse<EventTypes> = await axios.get(
      // eventId passed through api call on specific event page on initial load
      GET_EVENT_API_URL + eventId
    );
    return response.data;
  } catch (error) {
    console.log(error);
    throw new Error("Failed to fetch events");
  }
};

export const createEventAsync = async (
  uuid: string,
  title: string,
  description: string,
  address: string,
  city: string,
  state: string,
  zipCode: string,
  date: string,
  time: string,
  price: number,
  imageUrl: string
): Promise<EventTypes> => {
  try {
    const response: AxiosResponse<EventTypes> = await axios.post(
      CREATE_EVENT_API_URL,
      {
        uuid,
        title,
        description,
        address,
        city,
        state,
        zipCode,
        date,
        time,
        price,
        imageUrl,
      }
    );
    return response.data;
  } catch (error) {
    console.log(error);
    throw new Error("Failed to fetch events");
  }
};
