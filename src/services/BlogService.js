import { logger } from "@/utils/Logger.js"
import { api } from "./AxiosService.js"
import { blog } from "@/models/blog.js"
import { AppState } from "@/AppState.js"

class BlogService {
  async getBlogs() {
    const response = await api.get(`api/blogs`)
    logger.log(`got them blogs`, response.data)
    const blogs = response.data.map(pojo => new blog(pojo))
    AppState.blogs = blogs
    logger.log(`no blog`, AppState.blogs)
  }


  async getBlogsByCreatorId(creatorId) {
    const response = await api.get(`api/blogs?creatorId=${creatorId}`)
    logger.log(response.data)
    const blogs = response.data.map(pojo => new blog(pojo))
    AppState.blogs = blogs
  }



}




export const blogService = new BlogService()