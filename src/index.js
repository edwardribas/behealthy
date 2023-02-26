import { createRoot } from 'react-dom/client';
import { RouterProvider } from 'react-router-dom';
import { router } from './routes';
import './assets/style/Index.module.scss';

const root = createRoot(document.querySelector('#root'));

root.render(
    <>
        <RouterProvider router={router}/>
    </>
)