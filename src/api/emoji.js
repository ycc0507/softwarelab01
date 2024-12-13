import  request  from '@/api/request'
export function getEmoji() {
    return request({
        url:  '/EmojiCount',
        method: 'get'
    })
}

export function emojipage(title,page=1,limit=10){
    return request({
        url:  '/tours',
        method: 'get',
        params: {title, page, limit}
    })
}

