import { FiArrowRight } from "@react-icons/all-files/fi/FiArrowRight";
import classes from "./Home.module.scss";
import { FiDownload } from "@react-icons/all-files/fi/FiDownload";
import { useState } from "react";
import { BiGitBranch } from "@react-icons/all-files/bi/BiGitBranch"
import { DiGit } from "@react-icons/all-files/di/DiGit";
import { FaGithub } from "@react-icons/all-files/fa/FaGithub";
import { FaLinkedinIn } from "@react-icons/all-files/fa/FaLinkedinIn";
import { FaRegEnvelope } from "@react-icons/all-files/fa/FaRegEnvelope";
import { FaTwitter } from "@react-icons/all-files/fa/FaTwitter";
import { FaYoutube } from "@react-icons/all-files/fa/FaYoutube";
import { FiMail } from "@react-icons/all-files/fi/FiMail";
import { SiGithub } from "@react-icons/all-files/si/SiGithub";
import { SiLinkedin } from "@react-icons/all-files/si/SiLinkedin";
import { SiTwitter } from "@react-icons/all-files/si/SiTwitter";
import {FaInstagram } from "@react-icons/all-files/fa/FaInstagram";
const Home = () => {



    return <>
        <div className={classes.container}>
            <div className="container is-max-widescreen ">
                <div className="is-flex p-6">

                    <div className="is-flex is-flex-direction-column is-justify-content-space-between is-align-items-flex-start py-5" style={{ flex: 1 }}>

                        <div className={classes.introduction}>
                            <h1 className="title is-1 my-4 is-spaced" style={{ color: "#181B38" }}>
                                KIM BAEKSUB
                            </h1>
                            <h2 className="subtitle is-5 has-text-weight-medium my-4" style={{ color: "#181B38" }}>
                                FullStack Software Engineer
                            </h2>
                            <p className="is-size-6 has-text-weight-normal my-4" style={{ color: "#46485f" }}>
                                FullStack Development, Design (or Architecture),  <br />
                                Deployment, Operations, and Maintenance <br />
                            </p>
                            <div className="my-6 py-3">
                                <ul>
                                    <li className="my-3 is-uppercase">
                                        <a className="is-flex is-align-items-center">
                                            <span style={{ height: "1px", width: "1.75rem", background: "#a2a3af" }}></span>
                                            <span className="has-text-weight-medium" style={{ marginLeft: "0.5rem", color: "#a2a3af", fontSize: "0.85rem !important" }}>
                                                about
                                            </span>
                                        </a>
                                    </li>
                                    <li className="my-3 is-uppercase">
                                        <a className="is-flex is-align-items-center">
                                            <span style={{ height: "1px", width: "1.75rem", background: "#a2a3af" }}></span>
                                            <span className="has-text-weight-medium" style={{ marginLeft: "0.5rem", color: "#a2a3af", fontSize: "0.85rem !important" }}>
                                                experience
                                            </span>
                                        </a>
                                    </li>
                                    <li className="my-3 is-uppercase">
                                        <a className="is-flex is-align-items-center">
                                            <span style={{ height: "1px", width: "1.75rem", background: "#a2a3af" }}></span>
                                            <span className="has-text-weight-medium" style={{ marginLeft: "0.5rem", color: "#a2a3af", fontSize: "0.85rem !important" }}>
                                                skill stack
                                            </span>
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className={classes.icons}>
                            <span className="is-size-4 mr-4" style={{ color: "#181B38" }}>
                                <FaGithub />
                            </span>
                            <span className="is-size-4 mr-4" style={{ color: "#181B38" }}>
                                <FaInstagram />
                            </span>
                            <span className="is-size-4 mr-4" style={{ color: "#181B38" }}>
                                <FiMail />
                            </span>
                        </div>
                    </div>


                    <div className="is-flex is-flex-direction-column is-justify-content-space-between is-align-items-flex-start py-5" style={{ flex: 1 }}>

                        {/* self introduction */}
                        <p className="is-size-6 has-text-weight-normal my-2 mb-6 pb-6" style={{ color: "#46485f" }}>
                            In 2021, I began my career in the internal system development department.
                            I was responsible for <strong>the long-term design, development, operation, and maintenance of systems.</strong>
                            The system and services I worked on were not only used internally but also by a service accessed by over 400,000 users monthly. <br />
                            <br />
                            Specifically, I took charge of frontend development, backend development, batch processing, infrastructure design and development using AWS, service deployment, operations, and maintenance.
                            Essentially, <strong>I covered the entire life cycle of software development with a diverse and comprehensive skill set.</strong>
                            <br /><br />
                            Currently, I&apos;m working as a freelancer. I have a strong interest in developing systems that ensure the best user experience and seamless service operations!
                        </p>


                        {/* career */}
                        <div className="mb-6 pb-6">
                            <div className="is-flex is-flex-desktop-only my-4">
                                <div className="mr-5 mt-1 is-flex-grow-1" style={{ flex: 1 }}>
                                    <h2 className="has-text-weight-semibold" style={{ color: "#a2a3af", fontSize: "0.85rem !important" }}>JUL-SEP 2021</h2>
                                </div>
                                <div style={{ flex: 4 }}>
                                    <h1 className="is-size-6 has-text-weight-semibold is-spaced" style={{ color: "#181B38" }}>
                                        Operation of a Paperless Payment Service
                                    </h1>
                                    <h2 className="is-size-6 has-text-weight-medium" style={{ color: "#a2a3af" }}>
                                        Architecture Design, Deployment, Operations
                                    </h2>
                                    <p className="my-3" style={{ color: "#46485f", fontSize: "0.85rem !important" }}>
                                        Designing, Developing, Deploying, Testing, Maintaining, and Supporting a Paperless Payment Service for a Banking Institution.
                                    </p>
                                    <div className="tags">
                                        <span className="tag is-link is-light">PHP</span>
                                        <span className="tag is-link is-light">C#</span>
                                        <span className="tag is-link is-light">PostgreSql</span>
                                    </div>
                                </div>
                            </div>

                            <div className="is-flex is-flex-desktop-only my-4 py-4">
                                <div className="mr-5 mt-1 is-flex-grow-1" style={{ flex: 1 }}>
                                    <h2 className="has-text-weight-semibold" style={{ color: "#a2a3af", fontSize: "0.85rem !important" }}>JUL-SEP 2021</h2>
                                </div>
                                <div style={{ flex: 4 }}>
                                    <h1 className="is-size-6 has-text-weight-semibold is-spaced" style={{ color: "#181B38" }}>
                                        Operation of a Paperless Payment Service
                                    </h1>
                                    <h2 className="is-size-6 has-text-weight-medium" style={{ color: "#a2a3af" }}>
                                        Architecture Design, Deployment, Operations
                                    </h2>
                                    <p className="my-3" style={{ color: "#46485f", fontSize: "0.85rem !important" }}>
                                        Designing, Developing, Deploying, Testing, Maintaining, and Supporting a Paperless Payment Service for a Banking Institution.
                                    </p>
                                    <div className="tags">
                                        <span className="tag is-link is-light">PHP</span>
                                        <span className="tag is-link is-light">C#</span>
                                        <span className="tag is-link is-light">PostgreSql</span>
                                    </div>
                                </div>
                            </div>

                            <div className="is-flex is-flex-desktop-only my-4 py-4">
                                <div className="mr-5 mt-1 is-flex-grow-1" style={{ flex: 1 }}>
                                    <h2 className="has-text-weight-semibold" style={{ color: "#a2a3af", fontSize: "0.85rem !important" }}>JUL-SEP 2021</h2>
                                </div>
                                <div style={{ flex: 4 }}>
                                    <h1 className="is-size-6 has-text-weight-semibold is-spaced" style={{ color: "#181B38" }}>
                                        Operation of a Paperless Payment Service
                                    </h1>
                                    <h2 className="is-size-6 has-text-weight-medium" style={{ color: "#a2a3af" }}>
                                        Architecture Design, Deployment, Operations
                                    </h2>
                                    <p className="my-3" style={{ color: "#46485f", fontSize: "0.85rem !important" }}>
                                        Designing, Developing, Deploying, Testing, Maintaining, and Supporting a Paperless Payment Service for a Banking Institution.
                                    </p>
                                    <div className="tags">
                                        <span className="tag is-link is-light">PHP</span>
                                        <span className="tag is-link is-light">C#</span>
                                        <span className="tag is-link is-light">PostgreSql</span>
                                    </div>
                                </div>
                            </div>

                            <div>
                                <div className="is-flex mt-3 pt-3 has-text-weight-bold is-align-items-center" style={{ color: "#181B38" }}>
                                    <span className="mr-2">
                                        View Full Experience (43)
                                    </span>
                                    <FiArrowRight />
                                </div>
                            </div>
                        </div>


                        {/* skill stack */}
                        <div className="mb-6 pb-6">
                            <div className="is-flex is-flex-desktop-only my-4 py-4">
                                <div className="mr-5 mt-1 is-flex-grow-1" style={{ flex: 1 }}>
                                    <h2 className="has-text-weight-semibold is-capitalized" style={{ color: "#a2a3af", fontSize: "0.85rem !important" }}>frontend</h2>
                                </div>
                                <div style={{ flex: 4 }}>
                                    <h1 className="is-size-6 has-text-weight-semibold is-spaced" style={{ color: "#181B38" }}>
                                        HTML, CSS, JS
                                    </h1>
                                    {/* <h2 className="is-size-6 has-text-weight-medium" style={{ color: "#a2a3af" }}>
                                        Architecture Design, Deployment, Operations
                                    </h2> */}
                                    <p className="my-3" style={{ color: "#46485f", fontSize: "0.85rem !important" }}>
                                        Bootstrap, Bulma, scss, TypeScript, React, React Native, Vue ...etc
                                    </p>
                                </div>
                            </div>


                            <div className="is-flex is-flex-desktop-only my-4 py-4">
                                <div className="mr-5 mt-1 is-flex-grow-1" style={{ flex: 1 }}>
                                    <h2 className="has-text-weight-semibold is-capitalized" style={{ color: "#a2a3af", fontSize: "0.85rem !important" }}>backend</h2>
                                </div>
                                <div style={{ flex: 4 }}>
                                    <h1 className="is-size-6 has-text-weight-semibold is-spaced" style={{ color: "#181B38" }}>
                                        PHP, JS, TS, JAVA, C#, Python
                                    </h1>
                                    {/* <h2 className="is-size-6 has-text-weight-medium" style={{ color: "#a2a3af" }}>
                                        Architecture Design, Deployment, Operations
                                    </h2> */}
                                    <p className="my-3" style={{ color: "#46485f", fontSize: "0.85rem !important" }}>
                                        Laravel, NodeJS, Express, Spring, dotNetFramework
                                    </p>
                                </div>
                            </div>

                            <div className="is-flex is-flex-desktop-only my-4 py-4">
                                <div className="mr-5 mt-1 is-flex-grow-1" style={{ flex: 1 }}>
                                    <h2 className="has-text-weight-semibold is-capitalized" style={{ color: "#a2a3af", fontSize: "0.85rem !important" }}>database</h2>
                                </div>
                                <div style={{ flex: 4 }}>
                                    <h1 className="is-size-6 has-text-weight-semibold is-spaced" style={{ color: "#181B38" }}>
                                        SQL, NoSQL
                                    </h1>
                                    {/* <h2 className="is-size-6 has-text-weight-medium" style={{ color: "#a2a3af" }}>
                                        Architecture Design, Deployment, Operations
                                    </h2> */}
                                    <p className="my-3" style={{ color: "#46485f", fontSize: "0.85rem !important" }}>
                                        MySql, PostgreSql, Aurora, DocumentDB, MongoDb, Redis, DynamoDB
                                    </p>
                                </div>
                            </div>

                            <div className="is-flex is-flex-desktop-only my-4 py-4">
                                <div className="mr-5 mt-1 is-flex-grow-1" style={{ flex: 1 }}>
                                    <h2 className="has-text-weight-semibold is-capitalized" style={{ color: "#a2a3af", fontSize: "0.85rem !important" }}>SERVICE</h2>
                                </div>
                                <div style={{ flex: 4 }}>
                                    <h1 className="is-size-6 has-text-weight-semibold is-spaced" style={{ color: "#181B38" }}>
                                        AWS, Docker
                                    </h1>
                                    {/* <h2 className="is-size-6 has-text-weight-medium" style={{ color: "#a2a3af" }}>
                                        Architecture Design, Deployment, Operations
                                    </h2> */}
                                    <p className="my-3" style={{ color: "#46485f", fontSize: "0.85rem !important" }}>
                                        MicroArchitecture, Serverless Application Development, Cloud Computing ...etc
                                    </p>
                                    <p className="my-3 has-text-weight-medium is-flex is-align-items-center " style={{ color: "#181B38", fontSize: "0.85rem !important" }}>
                                        <FiDownload className='is-size-7 mr-2' /> AWS certifications (5)
                                    </p>
                                </div>
                            </div>


                            <div>
                                <div className="is-flex mt-3 pt-3 has-text-weight-bold is-align-items-center" style={{ color: "#181B38" }}>
                                    <span className="mr-2">
                                        View Full Skill Stack
                                    </span>
                                    <FiArrowRight />
                                </div>
                            </div>
                        </div>


                        {/* contact */}
                        <div className="" style={{ color: "#46485f", fontSize: "0.85rem !important" }}>
                            Coded in <strong>Visual Studio Code</strong> by my self. Built with <strong>Next.js</strong> and <strong>Bulma</strong>, deployed with <strong>AWS</strong>. All text is set in the <strong><a href="https://creativecommons.org/licenses/by-nc-sa/4.0/" style={{ color: "#46485f", fontSize: "0.85rem !important" }} target="_blank" rel="noreferrer">Inter</a></strong> typeface.
                        </div>
                    </div>
                </div>

            </div>
        </div>
    </>
}

export default Home;