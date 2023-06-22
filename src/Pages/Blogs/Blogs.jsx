// import React from 'react';

import PageBanner from "../Shared/PageBanner/PageBanner";

const Blogs = () => {
    return (
        <div className="blogs-page">
            <PageBanner>
                Latest <span className="text-blue">Blogs</span>
            </PageBanner>
            <div className="blogs-wrap py-20">
                <div className="container">
                    <div className="blogs-wrap">
                        <div className="article mb-8 last:mb-0">
                            <h2 className="font-bold text-2xl mb-5">1. What is an access token and refresh token? How do they work and where should we store them on the client-side?</h2>
                            <p className="text-lg mb-3 last:mb-0">
                                Access Tocken is the token given for accessecing the content that are sensetive and private.
                            </p>
                            <p className="text-lg mb-3 last:mb-0">
                                Refresh Tocken is that token which used to renew the access token. When the access token expired refresh token renew the acceess token validity
                            </p>
                            <p className="text-lg mb-3 last:mb-0">
                                We can store them in only cookies or local storage.
                            </p>
                        </div>
                        <div className="article mb-8 last:mb-0">
                            <h2 className="font-bold text-2xl mb-5">2. Compare SQL and NoSQL databases?</h2>
                            <p className="text-lg mb-3 last:mb-0">
                                SQL database are called relational database where NoSQL are non-relational database
                            </p>
                            <p className="text-lg mb-3 last:mb-0">
                                SQL databse manipulate data based in structured query language. This language is powerful
                            </p>
                            <p className="text-lg mb-3 last:mb-0">
                                NoSQL databse is a dynamic schemas for unstructured data where data stores is many ways. In the NoSQL has many flexiblity such as no structured way, each data can have its own structured.
                            </p>
                        </div>
                        <div className="article mb-8 last:mb-0">
                            <h2 className="font-bold text-2xl mb-5">3. What is express js? What is Nest JS?</h2>
                            <p className="text-lg mb-3 last:mb-0">
                                Express js is a application framwork for building application by api with node.js
                            </p>
                            <p className="text-lg mb-3 last:mb-0">
                                Next.js is a framework for web development and created by vercel. Next js provide react based web application. Next js render data in server side and give us static website.
                            </p>
                        </div>
                        <div className="article mb-8 last:mb-0">
                            <h2 className="font-bold text-2xl mb-5">4. What is MongoDB aggregate and how does it work?</h2>
                            <p className="text-lg mb-3 last:mb-0">
                                MongoDB aggregate is feature of mongoDB for advance data processing analysis. It allow us to do complex operation on the data such as grouping filtering.
                            </p>
                            <p className="text-lg mb-3 last:mb-0">
                                MongoDB aggregate framework works by defining a sequence of stages that operate on the data in a collection. Each stage performs a specific operation. The data flows through the stages, with each stage modifying or processing the data and passing it to the next stage. The final result is returned as the output of the aggregate operation.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Blogs;