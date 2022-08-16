import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import { DATA } from '../../mock/bd'

class PostsController {
  /*
index:listagem de posts
store : criar uma nova posts (login)
show: listar uma única posts
update : atualizar alguma posts
destroy: deletar uma posts
*/
  public async index() {
    return DATA
  }
  public async store({ request, response }: HttpContextContract) {
    const { title, userId, body } = request.body()
    const newPost = {
      userId,
      id: DATA.length + 1,
      title,
      body,
    }
    DATA.push(newPost)
    return response.status(200).json(newPost)
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
