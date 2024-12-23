import express from 'express'
import { products } from './productData.mjs'

const app = express()
const port = 3000

app.get('/', (req, response) => {
    response.send('Hello World from MS!')
  })

// app.get('/:id', (request, response) => {
//     console.log(`Hello from MS! ${request.params.id}`);
    
//   response.send(`Hello from MS! ${request.params.id}`)
// })

app.get('/product', (req, response) => {
    // response.send(
    //     // 'Welcome To FashionCart!'
    //     { name: 'Lemon', price: 150, quantity: '1kg' }
    // )

    response.send(products)
  })

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})