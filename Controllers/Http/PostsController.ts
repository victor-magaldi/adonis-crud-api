import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

class PostsController {
  public async index({ request, response }: HttpContextContract) {
    console.log(request, response)
    return [
      {
        id: 1,
        title: 'Hello world',
      },
      {
        id: 2,
        title: 'Hello universe',
      },
    ]
  }
  public async store({ request, response }: HttpContextContract) {
    console.log(request, response)

    return [
      {
        id: 1,
        title: 'Hello world',
      },
      {
        id: 2,
        title: 'Hello universe',
      },
    ]
  }
  public async update({ request, response }: HttpContextContract) {
    console.log(request, response)

    return [
      {
        id: 1,
        title: 'Hello world',
      },
      {
        id: 2,
        title: 'Hello universe',
      },
    ]
  }
  public async destroy({ request, response }: HttpContextContract) {
    console.log(request, response)

    return [
      {
        id: 1,
        title: 'Hello world',
      },
      {
        id: 2,
        title: 'Hello universe',
      },
    ]
  }
}

export const postController = new PostsController()
