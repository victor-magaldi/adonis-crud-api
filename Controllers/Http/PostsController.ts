import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import { DATA } from '../../mock/bd'

let DATABD = DATA
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
    const id = request.param('id')
    const { title, userId, body } = request.body()

    const indexElementUpdated = DATA.findIndex((post) => post.id === Number(id))
    const updatedPost = {
      userId,
      id,
      title,
      body,
    }
    if (indexElementUpdated >= 0) {
      DATA[indexElementUpdated] = updatedPost
    }

    return response.json(updatedPost)
  }
  public async destroy({ request, response }: HttpContextContract) {
    const id = request.param('id')
    if (id) {
      return DATA.filter((post) => post.id !== Number(id))
    } else {
      response.json({ message: 'id required' })
    }
  }
}

export const postController = new PostsController()
