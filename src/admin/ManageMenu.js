import React, { useState, useEffect } from "react";
import Layout from "../core/Layout";
import { isAuthenticated } from "../auth";
import { Link } from "react-router-dom";
import { getMenu } from "./apiAdmin";
import DashboardMenu from "../user/DashboardMenu";

const ManageMenu = () => {
    const [menu, setMenu] = useState([]);

    const { user, token } = isAuthenticated();

    const loadMenu = () => {
        getMenu().then(data => {
            if (data.error) {
                console.log(data.error);
            } else {
                setMenu(data);
            }
        });
    };

   
    useEffect(() => {
        loadMenu();
    }, []);

    return (
        <Layout
            title="Manage Menu"
            description="Perform CRUD on menu"
            className="container-fluid"
        >
            <div className="row">
                <div className="col-3">{DashboardMenu()}</div>

                <div className="col-9">
                    <h2 className="text-center">
                        Total {menu.length} menu
                    </h2>
                    <Link className="nav-link" to="/create/menu">
                            Create Menu
                    </Link>
                    <ul className="list-group">
                        {menu.map((p, i) => (
                            <li
                                key={i}
                                className="list-group-item d-flex justify-content-between align-items-center"
                            >
                                <strong>{p.name}</strong>

                                <span className="badge badge-warning badge-pill">
                                        Update
                                    </span>

                                <span className="badge badge-danger badge-pill">
                                    Delete
                                </span>
                               
                                                               
                            </li>
                        ))}
                    </ul>
                    <br />
                </div>
            </div>
        </Layout>
    );
};

export default ManageMenu;
