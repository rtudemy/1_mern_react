import React, { useState, useEffect } from "react";
import Layout from "../core/Layout";
import { isAuthenticated } from "../auth";
import { Link } from "react-router-dom";
import { getCategories, deleteCategory } from "./apiAdmin";
import DashboardMenu from "../user/DashboardMenu";

const ManageCategory = () => {
    const [category, setCategory] = useState([]);

    const { user, token } = isAuthenticated();

    const loadCategory = () => {
        getCategories().then(data => {
            if (data.error) {
                console.log(data.error);
            } else {
                setCategory(data);
            }
        });
    };

    const destroy = categoryId => {
        deleteCategory(categoryId, user._id, token).then(data => {
            if (data.error) {
                console.log(data.error);
            } else {
                loadCategory();
            }
        });
    };

    useEffect(() => {
        loadCategory();
    }, []);

    return (
        <Layout
            title="Manage Products"
            description="Perform CRUD on products"
            className="container-fluid"
        >
            <div className="row">
                <div className="col-3">{DashboardMenu()}</div>

                <div className="col-9">
                    <h2 className="text-center">
                        Total {category.length} category
                    </h2>
                    <Link className="nav-link" to="/create/category">
                            Create Category
                    </Link>
                    <ul className="list-group">
                        {category.map((p, i) => (
                            <li
                                key={i}
                                className="list-group-item d-flex justify-content-between align-items-center"
                            >
                                <strong>{p.name}</strong>
                                <Link to={`/admin/category/update/${p._id}`}>
                                    <span className="badge badge-warning badge-pill">
                                        Update
                                    </span>
                                </Link>

                                <span
                                    onClick={() => destroy(p._id)}
                                    className="badge badge-danger badge-pill"
                                >
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

export default ManageCategory;
