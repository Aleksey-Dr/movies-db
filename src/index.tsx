import React from 'react';
import ReactDOM from 'react-dom/client';

import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';

import App from './App';
import About from './features/About';
// import Movies from './features/Movies';
import { MoviesFetch } from 'features/Movies/Movies';
import MoviePage from './features/MoviePage';

import store from './store';

import reportWebVitals from './reportWebVitals';

import './index.scss';

const router = createBrowserRouter([
    {
        path: '/',
        element: (
            <Provider store={store}>
                <App />
            </Provider>
        ),
        children: [
            {
                path: '/about',
                element: <About />,
            },
            {
                path: '/movies',
                element: <MoviesFetch />,
            },
            {
                path: '/movies/:id',
                element: <MoviePage />
            },
        ],
    },
]);

const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement,
);

root.render(
    <React.StrictMode>
        <RouterProvider router={router} />
    </React.StrictMode>,
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
