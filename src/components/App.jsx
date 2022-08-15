import Login from '../components/Login/Login';
import Register from '../components/Register/Register';
import KidRegistration from '../components/KidRegistration/KidRegistration';
import Presence from '../components/Presence/Presence';
import Information from '../components/Information/Information';
import Home from '../components/Home/Home';
import '../assets/style.css';
import { AuthContextProvider } from '../context/AuthContext';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HistoryHome from '../components/History/HistoryHome';
import HistoryByDate from '../components/History/HistoryByDate';
import HistoryByKid from '../components/History/HistoryByKid';
import HistoryByDateUnique from '../components/History/HistoryByDateUnique';
import HistoryByKidUnique from '../components/History/HistoryByKidUnique';
import PrivateRoute from '../components/PrivateRoute/PrivateRoute';

export default function App () {

    return (

        <AuthContextProvider>
            <BrowserRouter>
                <Routes>
                    <Route path='/' element={<Login setToken={() => {}}/>}/>
                    <Route path='/sign-up' element={<Register />}/>
                    <Route path='/register' element={<PrivateRoute><KidRegistration /></PrivateRoute>}/>
                    <Route path='/presence' element={<PrivateRoute><Presence /></PrivateRoute>}/>
                    <Route path='/history' element={<PrivateRoute><HistoryHome /></PrivateRoute>}/>
                    <Route path='/history-date/' element={<PrivateRoute><HistoryByDate /></PrivateRoute>}/>
                    <Route path='/history-date-unique/:date' element={<PrivateRoute><HistoryByDateUnique /></PrivateRoute>}/>
                    <Route path='/history-kid/' element={<PrivateRoute><HistoryByKid /></PrivateRoute>}/>
                    <Route path='/history-kid-unique/:id' element={<PrivateRoute><HistoryByKidUnique /></PrivateRoute>}/>
                    <Route path='/info/:id' element={<PrivateRoute><Information/></PrivateRoute>}/>
                    <Route path='/home' element={<PrivateRoute><Home /></PrivateRoute>}/>
                </Routes>
            </BrowserRouter>
        </AuthContextProvider>

    );

}