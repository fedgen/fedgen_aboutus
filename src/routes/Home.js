import React from 'react';
import LeadershipCloud from "../LeadershipCloud.jsx";
import containerImage from '../images/Home-image.png';
import database from '../images/database.png';
import { TbCpu } from "react-icons/tb";
import { BsCpuFill } from "react-icons/bs";
import { CiServer } from "react-icons/ci";
import { HiOutlineServerStack } from "react-icons/hi2";
import { TiCloudStorage } from "react-icons/ti";
import { FaTwitter } from "react-icons/fa6";
import { FaFacebookSquare } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";

import Sweets from '../images/group1.png';
import Bola from '../images/group3.png';
import John from '../images/group6.jpeg';
import Festus from '../images/group5.jpeg';
import Ajayi from '../images/group4.jpeg';
import Adetiba from '../images/group2.jpeg';
import Uche from '../images/group7.jpg';

import aspmirlogo from '../images/aspmir-logo.png';
import NIH from '../images/NIH.png';
import Cubre from '../images/Cubre.png'
import capiclogo from '../images/capic-logo.png';
import covenantlogo from '../images/covenant-logo.png';
import googlelogo from '../images/google-logo.png';
import worldbanklogo from '../images/World-bank-logo.png';
import innaialogo from '../images/innia-logo.png';
import dstnlogo from '../images/dstn-logo.png';
import cealogo from '../images/cea-logo.png';
import oafdlogo from '../images/oafd-logo.png';
import { alignProperty } from '@mui/material/styles/cssUtils';

function Home() {
    // Define the handleClick function for navigation
    const handleClick = (url) => {
        window.open(url, '_blank'); // Opens the URL in a new tab
    };

    return (
        <>
            <div className="Homecentral">
                <img src={containerImage} alt="My Local Image" className="right-image" style={{ height: '48vh' }} />
                <div className="text-container">
                    <h1>FEDGEN</h1>
                    <p>(Federated GENeral “Omics” Cloud Infrastructure)</p>
                    <div>
                        <button
                            className="roundedButton"
                            onClick={() => handleClick("https://fedgenhpc.atlassian.net/servicedesk/customer/portal/1")}
                        >
                            FEDGEN User Support
                        </button>
                    </div>

                    <div>
                        <button
                            className="roundedButton"
                            onClick={() => handleClick("https://fedgenhpc.readthedocs.io/en/latest/welcome/About%20FEDGEN.html")}
                        >
                            FEDGEN Documentation
                        </button>
                    </div>
                </div>
            </div>

            <div className="container">
                <h1 className="title">Federated GENeral “Omics”(FEDGEN) Research</h1>
                <p className="home-description">
                    The goal of the FEDerated GENeral “Omics” (FEDGEN) research project is to develop ground-breaking research artefacts on federated cloud computing, artificial intelligence and general “omics”  for precision medicine in Africa. The specific objectives are to address critical issues in Africa on research capacity, large-scale research infrastructure, early disease diagnosis, public health education, large scale “omics” data storage/analysis and disease modelling. We are continuously expanding our private High-Performance Computing (HPC) infrastructure to implement the FEDGEN Datacenter and FEDGEN Testbeds towards providing the required infrastructure for the stated specific objectives. These infrastructures are  revolutionising eHealth research in Africa by providing robust platforms for storing and analysing vast amounts of “omics” dataset that underlier malaria, breast and prostate cancers. The cloud AI and advanced computing capabilities enable real-time data processing, allowing researchers to gain rapid insights into complex “omics” information and accelerate the discovery of new treatments and therapies.
                </p>

                <br />
            </div>

            <div className="section">
                <h1 className="heading">Our Cloud Resource Capacity</h1>
                <p className="home-description">
                    The FEDGEN platforms not only enhances the efficiency of eHealth research but also democratises access to complex hardware and software tools, enabling institutions and researchers, regardless of their locations or local resources, to participate in cutting-edge and large-scale scientific studies. This fosters an inclusive research environment, which is essential for addressing the African diverse health challenges, scientific skills deficit and computational infrastructure. Ultimately, FEDGEN is set to revolutionise federated cloud computing, cloud AI and “omics” research in Africa that will lead to accelerated discoveries, and ultimately better health outcomes for millions of people.</p>
                <br></br>
                <h1 className="title"> FEDGEN Testbed</h1>
                <br></br>
                <div className="card-container">

                    <div className="card">
                        <TbCpu size={60} />
                        <h2>384</h2>
                        <p>CPU cores</p>
                    </div>


                    <div className="card">
                        <HiOutlineServerStack size={61} />
                        <h2>24</h2>
                        <p>Compute Nodes</p>
                    </div>
                    <div className="card">
                        <TiCloudStorage size={60} />
                        <h2> 384 GB</h2>
                        <p>Memory (RAM)</p>
                    </div>

                    <div className="card">
                        <TiCloudStorage size={60} />
                        <h2> 72 TB</h2>
                        <p>Storage</p>
                    </div>
                </div>

                <br />
                <br />
                <h1 className="title"> FEDGEN Data Center</h1>
                
                <div className="card-container">

                    <div className="card">
                        <TbCpu size={60} />
                        <h2>396</h2>
                        <p>CPU cores</p>
                    </div>
                    <div className="card">
                        <CiServer size={62} />
                        <h2>4</h2>
                        <p>GPU nodes</p>
                    </div>
                    <div className="card">
                        <HiOutlineServerStack size={61} />
                        <h2>7</h2>
                        <p>Compute Nodes</p>
                    </div>
                    <div className="card">
                        <TiCloudStorage size={60} />
                        <h2>3.06 TB</h2>
                        <p>Memory (RAM)</p>
                    </div>
                    <div className="card">
                        <TiCloudStorage size={60} />
                        <h2>65 TB</h2>
                        <p>Storage</p>
                    </div>
                </div>
                <br />
                <LeadershipCloud />
            </div>

            <br />
            <br />

            <div className="partners-section">
                <h1 className="partners-heading"> FEDGEN Sponsors</h1>
                <div className="partners-grid">
                    <div className="partner">
                        <img src={aspmirlogo} alt="DSTN" className="partner-logo" style={{ height: '40px', widows: '40px' }} />
                    </div>
                    <div className="partner">
                        <img src={capiclogo} alt="AFD" className="partner-logo" style={{ height: '50px', widows: '50px' }} />
                    </div>
                    <div className="partner">
                        <img src={covenantlogo} alt="CEA MITIC" className="partner-logo" style={{ height: '50px', widows: '50px' }} />
                    </div>
                    <div className="partner">
                        <img src={googlelogo} alt="Inria" className="partner-logo" style={{ height: '40px', widows: '40px' }} />
                    </div>

                        <div className="partner">
                            <img src={NIH} alt="NIH" className="partner-logo" style={{ height: '50px', widows: '50px' }} />
                        </div>

                        <div className="partner">
                            <img src={Cubre} alt="Cubre" className="partner-logo" style={{ height: '50px', widows: '50px' }} />
                        </div>

                    <div className="partner">
                        <img src={worldbanklogo} alt="Inria" className="partner-logo" style={{ height: '60px', widows: '60px' }} />
                    </div>

                    <div className="partner">
                        <img src={innaialogo} alt="Inria" className="partner-logo" style={{ height: '50px', widows: '50px' }} />
                    </div>

                    <div className="partner">
                        <img src={dstnlogo} alt="Inria" className="partner-logo" style={{ height: '50px', widows: '50px' }} />
                    </div>

                    <div className="partner">
                        <img src={cealogo} alt="Inria" className="partner-logo" style={{ height: '50px', widows: '50px' }} />
                    </div>

                    <div className="partner">
                        <img src={oafdlogo} alt="Inria" className="partner-logo" style={{ height: '50px', widows: '50px' }} />
                    </div>
                </div>



            </div>

            <footer className="footer">
                <div className="footer-content">
                    <div className="footer-logo">
                        <h1>FEDGEN</h1>
                    </div>

                    <div className="footer-social">
                        <a href="https://facebook.com" target="_blank" rel="noopener noreferrer"><FaFacebookSquare size={23} color="grey" /></a>
                        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer"><FaTwitter size={23} color="grey" /></a>
                        <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer"><FaLinkedin size={23} color="grey" /></a>
                    </div>

                    <div className="footer-bottom">
                        <p>&copy; {new Date().getFullYear()} FEDGEN. All rights reserved.</p>
                    </div>
                </div>
            </footer>
        </>
    );
}

export default Home;
