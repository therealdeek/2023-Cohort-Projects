import {
  Button,
  Flex,
  FormControl,
  FormLabel,
  Heading,
  Input,
  Stack,
  Image,
  FormErrorMessage,
  Textarea,
  NumberInput,
  NumberInputField,
  NumberInputStepper,
  NumberDecrementStepper,
  NumberIncrementStepper,
} from "@chakra-ui/react";
import { useForm, SubmitHandler } from "react-hook-form";
import {  useSelector } from "react-redux";
import { useEffect, useState } from "react";
import AlertBar from "../../components/Alert/AlertBar";
import uploadImage from "../../imgur/imgur";
import { API_URL } from "../../constants/api-constants";
import { EventTypes } from "../../types/Event.types";
import axios, { AxiosResponse } from "axios";
import { RootState } from "../../redux/RootState.types";

type CreateEventForm = {
  uuid: string;
  title: string;
  description: string;
  address: string;
  city: string;
  state: string;
  zipCode: string;
  
};

export default function Login() {
  const uuid = useSelector((state: RootState) => state.root.user.currentUser.uuid);

  // event controls
  const [eventCreated, setEventCreated] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null)
  // price controls
  const format = (val: number) => val; // No need to format here
  const parse = (val: string) => val.replace(/[^0-9.]/g, ""); // Keep only digits and dots
  const [price, setPrice] = useState<number>(7.00); 
  // format of date and time "2023-07-29T16:00"
  const [dateTime, setDateTime] = useState<string>("");
  const [date, setDate] = useState<string>("");
  const [time, setTime] = useState<string>("");
  // imgur
  const [imageFile, setImageFile] = useState<File | null>(null);
  const [imageUrl, setImageUrl] = useState<string>("");
  // imgur image upload func
  const handleImageUpload = async () => {
    if (!imageFile) return;
    try {
      const url = await uploadImage(imageFile);
      //console.log(url)
      setImageUrl(url);
    } catch (error) {
      console.error("Image upload failed:", error);
    }
  };

  
  //const uuid = useSelector((state: RootState) => state.root.user.uuid);

  const {
    handleSubmit,
    formState: { errors },
    register,
  } = useForm<CreateEventForm>();
  const onSubmit: SubmitHandler<CreateEventForm> = async (data) => {
    // imgur call
    await handleImageUpload();
    const parsedPrice = parseFloat(price.toString());

    const formData = { ...data, date: date, time: time, price: parsedPrice, imageUrl, user_id: uuid };
    try {
      //const response: AxiosResponse<EventTypes> = await axios.post(`${API_URL}/api/events/create`, formData);        
      //console.log('Response:', response.data);
      console.log(formData)
      setEventCreated(true);
      // redirect to events or event page
      
    } catch (err) {
      console.error(err);
    }
  };

  const splitDateTime = (dateTimeStr: string) => {
    const [datePart, timePart] = dateTimeStr.split("T");
    setDate(datePart);
    setTime(timePart);
  };

  // convert dateTime into useable format
  useEffect(() => {
    splitDateTime(dateTime);
  }, [dateTime]);

  return (
    <Stack minH={"80.8vh"} direction={{ base: "column", md: "row" }}>
      <Flex p={8} flex={1} align={"center"} justify={"center"}>
        <Stack spacing={4} w={"full"} maxW={"md"}>
          <Heading fontSize={"2xl"}>Create Event</Heading>
          <form
            onSubmit={handleSubmit(onSubmit)}
            style={{ display: "flex", flexDirection: "column", gap: "15px" }}
          >
            {eventCreated && (
              <AlertBar message="Login Successful" status="success" />
            )}
            {error ? (
              // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
              <AlertBar message={error} status="error" /> 
            ): ""}ß
            <FormControl isInvalid={!!errors.title}>
              <FormLabel>Title</FormLabel>
              <Input
                placeholder="What's the title of the event?"
                {...register("title", { required: "Title is required" })}
              />
              <FormErrorMessage>{errors.title?.message}</FormErrorMessage>
            </FormControl>
            <FormControl isInvalid={!!errors.description}>
              <FormLabel>Description</FormLabel>
              <Textarea
                placeholder="Describe the event for us~~"
                {...register("description", {
                  required: "Description is required",
                })}
              />
              <FormErrorMessage>{errors.description?.message}</FormErrorMessage>
            </FormControl>
            <FormControl>
              <FormLabel>Price</FormLabel>
              <NumberInput
                isRequired
                onChange={(valueString) => {
                  const parsedValue = parse(valueString);
                  setPrice(parsedValue);
                }}
                value={format(price)}
                max={1000}
                min={1}
                defaultValue={10}
                precision={2}
                step={0.1}
              >
                <NumberInputField />
                <NumberInputStepper>
                  <NumberIncrementStepper />
                  <NumberDecrementStepper />
                </NumberInputStepper>
              </NumberInput>
            </FormControl>
            <FormControl>
              <FormLabel>Date and Time</FormLabel>
              <Input
                placeholder="Select Date and Time"
                size="md"
                type="datetime-local"
                onChange={(e) => setDateTime(e.target.value)}
              />
            </FormControl>
            <FormControl isInvalid={!!errors.address}>
              <FormLabel>Street Address</FormLabel>
              <Input
                placeholder="ex. 123 Park blvd"
                {...register("address", {
                  required: "Street Address is required",
                })}
              />
              <FormErrorMessage>{errors.address?.message}</FormErrorMessage>
            </FormControl>
            <FormControl isInvalid={!!errors.city}>
              <FormLabel>City</FormLabel>
              <Input
                placeholder="ex. Fort Worth"
                {...register("city", { required: "City is required" })}
              />
              <FormErrorMessage>{errors.city?.message}</FormErrorMessage>
            </FormControl>
            <FormControl isInvalid={!!errors.state}>
              <FormLabel>State</FormLabel>
              <Input
                placeholder="ex. Texas"
                {...register("state", { required: "State is required" })}
              />
              <FormErrorMessage>{errors.state?.message}</FormErrorMessage>
            </FormControl>
            <FormControl isInvalid={!!errors.zipCode}>
              <FormLabel>Zip Code</FormLabel>
              <Input
                placeholder="ex. 76137"
                {...register("zipCode", { required: "Zip Code is required" })}
              />
              <FormErrorMessage>{errors.zipCode?.message}</FormErrorMessage>
            </FormControl>
            {/* image upload */}
            <Input
              type="file"
              accept="image/*"
              onChange={(e) => setImageFile(e.target.files?.[0] || null)}
            />
            

            <Flex direction={"row"} gap={3}>
              <Button
                type="submit"
                colorScheme={"teal"}
                variant={"solid"}
                flex={1}
              >
                Create Event
              </Button>
              {/* navigate to home */}
              <Button
                as="a"
                colorScheme="red"
                borderRadius={"5px"}
                textColor={"white"}
                variant="solid"
                flex={1}
                href="/"
              >
                Cancel
              </Button>
            </Flex>
          </form>
        </Stack>
      </Flex>
      <Flex flex={1}>
        <Image
          alt={"Login Image"}
          objectFit={"cover"}
          src={
            "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1352&q=80"
          }
        />
      </Flex>
    </Stack>
  );
}
