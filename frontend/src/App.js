import { Provider } from 'react-redux'
import store from './redux'

function App() {
  return (
    <Provider store={store}>
      <div>
        aqui
      </div>
    </Provider>
  );
}

export default App;
