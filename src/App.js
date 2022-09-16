import {BrowserRouter,Routes,Route} from 'react-router-dom';
import AppRoute from './AppRoutes';

function App(){
  return(
    <>
    <BrowserRouter>
      <AppRoute/>
    </BrowserRouter>
    </>
  )
}
export default App;
