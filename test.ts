import createClient from 'openapi-fetch'
import type { paths } from './intercom' // generated from openapi-typescript

const intercomClient = createClient<paths>({
    baseUrl: 'https://api.intercom.io',
    headers: {
      Authorization: `Bearer *`,
      'Content-Type': 'application/json',
      'Intercom-Version': '2.10',
      // 'Intercom-Version': 'Unstable',
    },
  })


  const tags = await intercomClient.GET("/tags")

  if (tags.error) {
    console.log("error")
  } 

  tags.data?.data.forEach(t => console.log(t))