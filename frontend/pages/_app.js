import '../styles/globals.css'

import { Provider } from 'next-auth/client';
import { ShoppingCartContextProvider } from '../context/shoppingCart';
import { NotificationContextProvider } from '../context/notification';
import { AuthContextProvider } from '../context/authContext';

const App = ({ Component, pageProps }) => {
  const { session } = pageProps;
  return (
    <Provider options={{ site: process.env.SITE }} session={session}>
      <AuthContextProvider>
        <ShoppingCartContextProvider>
          <NotificationContextProvider>
            <Component {...pageProps} />
          </NotificationContextProvider>
        </ShoppingCartContextProvider>
      </AuthContextProvider>
    </Provider>
  );
};

export default App;
