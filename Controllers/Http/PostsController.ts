import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import { DATA } from '../../mock/bd'

class PostsController {
  public async index({ response }: HttpContextContract) {
    return response.status(200).json(DATA)
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
  public async show({ request, response }: HttpContextContract) {
    const id = request.param('id')
    return response.status(200).json(DATA.find((post) => post.id === Number(id)))
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

    return response.status(200).json(updatedPost)
  }
  public async destroy({ request, response }: HttpContextContract) {
    const id = request.param('id')
    const indexElementUpdated = DATA.findIndex((post) => post.id === Number(id))

    if (indexElementUpdated >= 0) {
      DATA.splice(indexElementUpdated, 1)
    }
    return response.status(200).json(DATA)
  }
}

export const postController = new PostsController()
