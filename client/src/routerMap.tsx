import App from './routes/App';
import Button from './routes/Button/Button';
import CustomPanel from './routes/CustomPanel/CustomPanel';
import AuthPanel from './routes/AuthPanel/AuthPanel';
const routerMap = [
    {
        path: '/',
        element: <App />,
    },
    {
        name: 'BUTTON',
        path: '/button',
        element: <CustomPanel component={Button} />,
        desc: 'Just button'
    },
    {
        name: 'INPUT',
        path: '/input',
        element: <div>input</div>,
        desc: 'common input'
    },
    {
        name: 'Sign in/up panel',
        path: '/auth_panel',
        element: <AuthPanel />,
        desc: 'Панель авторизаци с JWT защитой',
    },
]

export default routerMap;