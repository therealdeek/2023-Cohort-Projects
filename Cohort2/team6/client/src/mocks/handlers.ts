import { rest } from 'msw'
import { API_URL } from '../constants/api-constants'


export const handlers = [
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
]
