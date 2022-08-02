import aboutUsPic from '../../images/aboutUsPic.jpg'
import logo from '../../images/logo.png';
import axios from 'axios';
import { useState, useEffect } from 'react';


const AboutUs = () => {
    const [user, setUser] = useState({});

    useEffect(() => {
        const params = {
            email: localStorage.getItem("loggedInUser")
        }
        axios.get('http://localhost:8080/findUserByEmail', { params }).then(
            response => {
                setUser(response.data);
            }).catch(error => {

            });
    },
        []
    );

    return (
        <div className='thank bmiFont'>
            <nav className="profileNavbar navbar-light">
                <a href="/">
                    <img src={logo} height="80" width="80" />
                </a>
            </nav>
            <div className="row ">
                <div className="col">
                    <img width={400} height={400} src={aboutUsPic} />
                </div>
                <div className="col">
                    <h1 className="center">Thank you  {user.firstName}</h1>
                    <p>Thank you for trying out my app.Hi, I am Roshan Singh, a fullstack Software Developer. I developed this app to promote
                        healthy lifestyle which leads to a helthy mind. My app gives precise instruction on how to conduct a particular exercise
                        and reducing the risk of injuries while working out. This app is also a one stop shop for your healthy lifestyle.You don't have to browse anywhere else
                        for a yummy helthy recipie, I also have a list of healty meals which you can prep at your own kitchen.
                    </p>
                    <h4>Once again, I appreciate you checking out getFit and hope to see soon.</h4>
                    <h3>Till then Stay Healthy, Stay Fit.</h3>
                    <img width={200} height={200} src={logo}>
                    </img>
                </div>
            </div>
        </div>
    )
}
export default AboutUs;