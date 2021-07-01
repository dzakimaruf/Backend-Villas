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
import { Cart } from './views/villaCart';
import AllVillas from './views/allvillas/AllVillas';
import VillasImages from './views/villas_images/VillasImages';
import addressInput from './views/address';
import Order from './views/Order';
import profile from './views/profile';


const MainRouter = () => { 
  return (<>
    <Switch>
    <Route exact path="/villbook/signup" component={Signup}/>
        <Route exact path="/villbook/signin" component={signin}/> 
        <Route exact path="/villbook/select" component={select}/>
        <Route exact path="/villbook/Landing" component={LandingPage}/>
        <Route exact path="/villbook/allvilla/" component={AllVillas}/>  
        <Route exact path="/villbook/detail/:id/" component={Detail}/>
        <Route exact path="/villbook/cart/" component={Cart}/>
        <Route exact path="/villbook/cart/address" component={addressInput}/>
        <Route exact path="/villbook/order" component={Order}/>
        <Route exact path="/villbook/profile" component={profile}/>
      <MainLayout >
        <Route exact path="/villbook/user" component={User}/>
        <Route exact path="/villbook/dashboard" component={Home}/>
        <Route exact path="/villbook/adminvilla" component={Villa}/>
        <Route exatt path="/villbook/villasimages" component={VillasImages}/>
      </MainLayout>
    </Switch>

  </>)
}

export default MainRouter