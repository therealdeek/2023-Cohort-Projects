/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import { rest } from 'msw'
import { API_URL } from '../constants/api-constants'
import dummyData from '../pages/EventsAttending/dummydata';



export const handlers = [
  rest.post(`${API_URL}/register`, async (req, res, ctx) => {
    const response = await req.json<{ username: string, password: string }>();
    return res(
      ctx.delay(1000),
      ctx.status(200),
      ctx.json({
       message: 'user created'
      }))
  }),
  rest.post(`${API_URL}/login`, async (req, res, ctx) => {
    const { username } = await req.json<{ username: string, password: string }>();
    return res(
      ctx.delay(1000),
      ctx.status(200),
      ctx.json({
       // token: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6InNrdXJ0aXNzIiwidXVpZCI6IjgwMDgxMzU1In0.coMHzXuBk7X62w_XUTWtSVMwX6vkSXHCvtlg8oz5Peo',
        uuid: 'de1c8818-8ff1-439c-a62a-ce2e22a612af',
        username,
      }))
  }),
  rest.get(`${API_URL}/api/events`, (req, res, ctx) => {
    return res(
      ctx.delay(1000),
      ctx.status(200),
      ctx.json({
        data: dummyData
      })
    )
  }),
  rest.get(`${API_URL}/api/events/:uuid`, (req, res, ctx) => {
    return res(
      ctx.delay(1000),
      ctx.status(200),
      ctx.json({
        uuid: req.params.uuid,
        title: 'Test Event',
        description: 'This is a test event',
        date: new Date(),
        time: '12:30',
        price: 1000,
        location: 'McKinney, TX',
        image_url: 'https://images.pexels.com/photos/7875169/pexels-photo-7875169.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      })
    )
  }),
  rest.post(`${API_URL}/api/events/create`, (req, res, ctx) => {
    const { title, description, address, city, state, zipCode, date, time, price, imageUrl, user_id } = req.body as any;

    return res(
      ctx.delay(1000),
      ctx.status(200),
      ctx.json({
        message: 'event successfully created',
        eventData: {
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
          user_id,
        },
      })
    )
  }),
  
]
