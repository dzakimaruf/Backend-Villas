import React from 'react'
import { Switch, Route } from "react-router-dom";
import MainLayout from './views/MainLayout';
import Home from './views/Home';
import Villa from './views/villas/Villa';
import User from './views/users/User';
import select from './views/Select';
import LandingPage from './views/LandingPage';
import signin from './auth/Signin';
import Detail from './views/detailVilla/Detail';
import PrivateRoute from './auth/PrivateRoute'
import Signup from './auth/Signup';
import Cart from './views/Cart';
import AllVillas from './views/allvillas/AllVillas';
import VillasImages from './views/villas_images/VillasImages';


const MainRouter = () => {
  return (<>
    <Switch>
        <Route exact path="/villbook/signin" component={signin}/> 
        <Route exact path="/villbook/cart" component={Cart}/>
        <Route exact path="/villbook/select" component={select}/>
        <Route exact path="/villbook/Landing" component={LandingPage}/>
        <Route exact path="/villbook/detail/:id/" component={Detail}/>
        <Route exact path="/villbook/signup" component={Signup}/>
        <Route exact path="/villbook/allvilla" component={AllVillas}/>
       
      <MainLayout >
        <PrivateRoute exact path="/villbook/user" component={User}/>
        <PrivateRoute exact path="/villbook/dashboard" component={Home}/>
        <PrivateRoute exact path="/villbook/adminvilla" component={Villa}/>
        <PrivateRoute exatt path="/villbook/villasimages" component={VillasImages}/>
      </MainLayout>
    </Switch>

  </>)
}

export default MainRouter