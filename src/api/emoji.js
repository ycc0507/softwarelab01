import  request  from '@/api/request'
export function getEmoji() {
    return request({
        url:  '/EmojiCount',
        method: 'get'
    })
}

export function getEmojiPie() {
    return request({
        url:  '/EmojiCountPie',
        method: 'get'
    })
}

export function  tours(title,page=1,limit=10){
    return request({
        url:  '/tours',
        method: 'get',
        params: {title, page, limit}
    })
}

