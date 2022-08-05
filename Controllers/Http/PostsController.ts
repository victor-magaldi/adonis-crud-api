import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import { DATA } from '../../mock/bd'

class PostsController {
  public async index() {
    return DATA
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
  public async show({ request }: HttpContextContract) {
    const id = request.param('id')
    return DATA.find((post) => post.id === Number(id))
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
