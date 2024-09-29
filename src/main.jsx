import { createRoot } from 'react-dom/client'
import './index.css'
import {
    RouterProvider,
} from "react-router-dom";
import router from './router/router.jsx';
import { ApolloClient, InMemoryCache, ApolloProvider} from '@apollo/client';

const client = new ApolloClient({
    uri: 'https://countries.trevorblades.com/',
    cache: new InMemoryCache(),
});

createRoot(document.getElementById('root')).render(
    <ApolloProvider client={client}>
        <RouterProvider router={router}/>
    </ApolloProvider>
)
