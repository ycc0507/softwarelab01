import request from '@/api/request'

// 登录
export function login(data) {
    return request({
        url:  '/login',
        method: 'post',
        data
    })
}

// 注册
export function register(data) {
    return request({
        url:  '/register',
        method: 'post',
        data
    })
}

export function userPage(title,page=1,limit=10){
    return request({
        url:  '/userPage',
        method: 'get',
        params: {title, page, limit}
    })
}

export function  permisson(data){
    return request({
        url:  '/permisson',
        method: 'post',
        data
    })
}

export function getUserInfo(id){
    return request({
        url:  '/getUserInfo',
        method: 'get',
        id
    })
}

export function update(data){
    return request({
        url:  '/update',
        method: 'post',
        data
    })
}