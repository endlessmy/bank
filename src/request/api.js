import service from './index'

export default {
    //歌曲评论
    commentMusic: (params) => service.post('/comment/music', params)
}
