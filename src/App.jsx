import React from 'react';
import Home from './Pages/Home/Home';
import { Route, Routes } from 'react-router-dom';
import TopRate from './Pages/TopRate/TopRate';
import Upcoming from './Pages/Upcoming/Upcoming';
import Details from './Components/Details/Details';
import DetailsPage from './Pages/DetailsPage/DetailsPage';

const App = () => {
    return (
        <div className='container'>
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/top' element={<TopRate />} />
                <Route path='/upcoming' element={<Upcoming />} />
                <Route path='/:movie' element={<DetailsPage />} />
            </Routes>
        </div>
    );
};

export default App;
