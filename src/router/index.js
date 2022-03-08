
export default [
    {
        path: '/home',
        exact: true,
        name: 'Home',
        component: () => import('../view/home/index')
    },
    {
        path: '/my',
        name: 'My',
        component: () => import('../view/myMuisc/index')
    },
    {
        path: '/friend',
        name: 'Fllow',
        component: () => import('../view/fllow/index')
    },
    {
        path: '/download',
        name: 'Download',
        component: () => import('../view/download/index')
    }
]