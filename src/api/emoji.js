import  request  from '@/api/request'
export function getEmoji() {
    return request({
        url:  '/EmojiCount',
        method: 'get'
    })
}

export function emojiPage(title,page=1,limit=10){
    return request({
        url:  '/emojiPage',
        method: 'get',
        params: {title, page, limit}
    })
}

export function  addEmoji(data){
    return request({
        url:  '/addEmoji',
        method: 'post',
        data
    })
}