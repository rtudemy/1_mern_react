import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Signup from './user/Signup';
import Register from './user/Register';
import Signin from './user/Signin';
import Home from './core/Home';
import PrivateRoute from './auth/PrivateRoute';
import Dashboard from './user/UserDashboard';
import AdminRoute from './auth/AdminRoute';
import AdminDashboard from './user/AdminDashboard';
import AddCategory from './admin/AddCategory';
import AddProduct from './admin/AddProduct';
import Shop from './core/Shop';
import Product from './core/Product';
import Cart from './core/Cart';
import Orders from './admin/Orders';
import Profile from './user/Profile';
import ManageProducts from './admin/ManageProducts';
import ManageCategory from './admin/ManageCategory';
import UpdateProduct from './admin/UpdateProduct';
import UpdateCategory from './admin/updateCategory';
import ManageMenu from './admin/ManageMenu';

import CustomHome from './core/CustomHome';
import ManageUsers from './admin/ManageUsers';
import AddUser from './admin/AddUser';



const Routes = () => {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/customHome" exact component={CustomHome} />
                <Route path="/" exact component={Home} />
                <Route path="/shop" exact component={Shop} />
                <Route path="/signin" exact component={Signin} />
                <Route path="/signup" exact component={Signup} />
                <Route path="/register" exact component={Register} />
                <PrivateRoute path="/user/dashboard" exact component={Dashboard} />
                <AdminRoute path="/admin/dashboard" exact component={AdminDashboard} />
                <AdminRoute path="/create/category" exact component={AddCategory} />
                <AdminRoute path="/create/product" exact component={AddProduct} />
                <Route path="/product/:productId" exact component={Product} />
                <Route path="/cart" exact component={Cart} />
                <AdminRoute path="/admin/orders" exact component={Orders} />
                <PrivateRoute path="/profile/:userId" exact component={Profile} />
                <PrivateRoute path="/admin/products" exact component={ManageProducts} />
                <PrivateRoute path="/admin/category" exact component={ManageCategory} />
                <PrivateRoute path="/admin/menu" exact component={ManageMenu} />
                <AdminRoute path="/admin/product/update/:productId" exact component={UpdateProduct} />
                <AdminRoute path="/admin/category/update/:categoryId" exact component={UpdateCategory} />

                <PrivateRoute path="/admin/users" exact component={ManageUsers} />
                <AdminRoute path="/create/user" exact component={AddUser} />



            </Switch>
        </BrowserRouter>
    );
};

export default Routes;
