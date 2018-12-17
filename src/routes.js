export default [{
        path: '/',
        redirect: '/login'
    },
    {
        path: '/login',
        name: 'login',
        component: () => import( /* webpackChunkName: "login" */ './views/Login.vue')
    },
    {
        path: '/secret',
        component: () => import( /* webpackChunkName: "login" */ './views/Secret/Secret.vue'),
        meta: { requiresAuth: true},
        children: [{
            path: 'notes',
            component: () => import( /* webpackChunkName: "login" */ './views/Secret/Notes.vue')
        }]
    }
]