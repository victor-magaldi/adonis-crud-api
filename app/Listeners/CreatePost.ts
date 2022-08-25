import type { EventsList } from '@ioc:Adonis/Core/Event'

export default class CreatePost {
  public async onNewPost(post: EventsList['new:post']) {
    console.log('post', post)
    // send email to the new user
  }
}
