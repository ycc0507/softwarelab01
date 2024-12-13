import Vue from 'vue';
import Router from 'vue-router';
import Layout from '@/layouts/Layout';

// 引入页面组件
import Dashboard from '@/views/Dashboard';
import Users from '@/views/Users';
import Emoji from '@/views/Emoji';
import Profile from '@/views/Profile';

Vue.use(Router);

const routes = [
    {
        path: '/',
        component: Layout,
        redirect: '/dashboard',
        children: [
            {
                path: 'dashboard',
                component: Dashboard,
                name: 'Dashboard'
            },
            {
                path: 'users',
                component: Users,
                name: 'Users'
            },
            {
                path: 'emoji',
                component: Emoji,
                name: 'Emoji'
            },
            {
                path: 'profile',
                component: Profile,
                name: 'Profile'
            }
            // 其他子路由
        ]
    },
    // 其他路由
];

const router = new Router({
    mode: 'history',
    routes
});

export default router;

