import  request  from '@/api/request'
export function getEmoji() {
    return request({
        url:  '/EmojiCount',
        method: 'get'
    })
}
