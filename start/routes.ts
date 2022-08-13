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
  .middleware(async (ctx, next) => {
    console.log(`Inside middleware ${ctx.request.url()}`)
    await next()
  })
  .middleware(async (ctx, next) => {
    console.log(`Inside middleware 2 ${ctx.request.url()}`)
    await next()
  })
Route.get('/posts/:id', postController.show)
Route.post('/post/create', postController.store)
