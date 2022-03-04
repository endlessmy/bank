
export default [
    {
        path: '/home',
        exact: true,
        name: 'Home',
        component: () => import('../view/home/index.jsx')
    },
    {
        path: '/card',
        name: 'Card',
        component: () => import('../view/card/index.jsx')
    }
]