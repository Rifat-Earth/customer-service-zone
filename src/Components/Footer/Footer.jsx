import React from 'react';

const Footer = () => {
    return (
        <>
            <footer className="footer sm:footer-horizontal bg-neutral text-neutral-content p-10">
                 <nav>
                    <h6 className="footer-title">CS — Ticket System</h6>
                    <p className=' text-sm'>
                      Customer Service Zone is designed <br></br> to make customer support simple and<br></br> accessible.It offers a clean interface and<br></br> smooth  user experience to help users easily <br></br>access services and assistance.
                    </p>
                </nav>
               
                <nav>
                    <h6 className="footer-title">Company</h6>
                    <a className="link link-hover">About us</a>
                    <a className="link link-hover">Our Mission</a>
                    <a className="link link-hover">Contact Saled</a>
                    
                </nav>
                <nav>
                    <h6 className="footer-title">Services</h6>
                    <a className="link link-hover">Products & Services</a>
                    <a className="link link-hover">Customer Stories</a>
                    <a className="link link-hover">Download Apps</a>
                    
                </nav>
                 <nav>
                    <h6 className="footer-title">Information</h6>
                    <a className="link link-hover">Privacy Policy</a>
                    <a className="link link-hover">Terms & Conditions</a>
                    <a className="link link-hover">Join Us</a>
                </nav>
                 <nav>
                    <h6 className="footer-title">Social Links</h6>
                    <div className='flex gap-2'>
                        <img className='w-5 h-5'  src="https://img.icons8.com/?size=100&id=19318&format=png&color=000000" alt="youtube-logo" />
                        <a target='_blank' href='https://www.youtube.com/' className="link link-hover">
                    @CS — Ticket System</a>
                    </div>
                    <div className='flex  gap-2 '>
                         <img className='w-5 h-5' src="https://img.icons8.com/?size=100&id=118497&format=png&color=000000" alt="fb-logo" />
                    <a target='_blank' href='https://www.facebook.com/' className="link link-hover">
                   @CS — Ticket System</a>
                    </div>
                    <div className='flex  gap-2'>
                         <img className='w-5 h-5' src="https://img.icons8.com/?size=100&id=13930&format=png&color=000000" alt="linkdin-logo" />
                    <a target='_blank' href='https://www.linkedin.com/' className="link link-hover">
                   @CS — Ticket System</a>
                    </div>
                </nav>

            </footer>
            <div className=" bg-black sm:footer-horizontal text-center text-gray-300 p-4">
                <aside>
                    <p>Copyright © {new Date().getFullYear()} CS — Ticket System All right reserved </p>
                </aside>
            </div>
        </>

    );
};

export default Footer;