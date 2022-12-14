/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| This file is dedicated for defining HTTP routes. A single file is enough
| for majority of projects, however you can define routes in different
| files and just make sure to import them inside this file. For example
|
| Define routes in following two files
| ├── start/routes/cart.ts
| ├── start/routes/customer.ts
|
| and then import them inside `start/routes.ts` as follows
|
| import './routes/cart'
| import './routes/customer'
|
*/

import Route from '@ioc:Adonis/Core/Route'
import { postController } from '../Controllers/Http/PostsController'

Route.get('/', async () => {
  return { hello: 'world' }
})
Route.get('/posts', postController.index)
Route.get('/posts/:id', postController.show)
Route.post('/posts/create', postController.store)
Route.put('/posts/:id', postController.update)
Route.delete('/posts/:id', postController.destroy)

Route.get('/session', async ({ session }) => {
  // Read value
  const cartTotal = session.get('cart_total')
  console.log(cartTotal)
  // Write value
  session.put('cart_total', cartTotal + 10)
})
