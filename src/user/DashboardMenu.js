import React from "react";
import Layout from "../core/Layout";
import { isAuthenticated } from "../auth";
import { Link } from "react-router-dom";

const DashboardMenu = () => {
    const {
        user: { _id, name, email, role }
    } = isAuthenticated();

        return (
            <div className="card">
                <h4 className="card-header">Admin Links</h4>
                <ul className="list-group">
                    <li className="list-group-item">
                        <Link className="nav-link" to="/admin/products">
                            Manage Products
                        </Link>
                    </li>
                    <li className="list-group-item">
                        <Link className="nav-link" to="/admin/category">
                            Manage Category
                        </Link>
                    </li>
                    {/* <li className="list-group-item">
                        <Link className="nav-link" to="/create/category">
                            Create Category
                        </Link>
                    </li>
                    <li className="list-group-item">
                        <Link className="nav-link" to="/create/product">
                            Create Product
                        </Link>
                    </li> */}
                    <li className="list-group-item">
                        <Link className="nav-link" to="/admin/orders">
                            View Orders
                        </Link>
                    </li>
                    
                </ul>
            </div>
        );
    };

   
export default DashboardMenu;
