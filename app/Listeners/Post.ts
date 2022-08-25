import type { EventsList } from '@ioc:Adonis/Core/Event'

export default class Post {
  public async onNewPost(post: EventsList['new:post']) {
    console.log('post Event', post)
    // send email to the new user
  }
}
