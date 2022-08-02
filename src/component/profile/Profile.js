import { useState, useEffect } from 'react';
import logo from '../../images/logo.png'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Profile = () => {
    const navigate = useNavigate();
    const [user, setUser] = useState({});
    const [cardio, setCardio] = useState({});

    const [bmi, setBmi] = useState();
    const [info, setInfo] = useState();
    const [heightInFeet, setHeightInFeet] = useState();
    const [heightInInches, setHeightInInches] = useState();
    const [weight, setWeight] = useState();

    const handleBmi = () => {

        let inchesInFeet = 12;
        var height =
            Number(heightInFeet);
        height *= inchesInFeet;
        height +=
            Number(heightInInches)

        let val = (
            [Number(weight) / (height * height)] * 703
        ).toFixed(1);

        setBmi(val);

        if (val < 18.5) {
            setInfo("Under Weight");
        } else if (val > 18.5 && val <= 24.9) {
            setInfo("Healthy");
        } else if (val > 24.9 && val < 30) {
            setInfo("Overweight");
        } else {
            setInfo("Obese");
        }
    };


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
        <div className='exerciseBody'>
            <nav className="profileNavbar navbar-inverse">
                <div className="container-fluid">
                    <div className="navbar-header">
                    </div>
                    <ul class="nav navbar-nav navbar-right">
                        <li><a href="/aboutUs"> Sign Out</a></li>
                    </ul>
                </div>
            </nav>
            <div className="container text-center">
                <div className="row " >
                    <div className="col-sm-3 well profileWell">
                        <div className="well bmiCal">
                            <h2 className='bmiFont'>Welcome </h2>
                            <h3 className='bmiFont'>{user.firstName}</h3>
                            <img src={logo} className="img-circle" height="65" width="65" alt="Avatar" />
                        </div>
                        <div className="well bmiCal">
                            <p><a href="/plan">View Your Workouts</a></p>
                        </div>
                        <div className="well bmiFont bmiCal">
                            <h3>BMI Calculator</h3>
                            <input
                                className='bmiCal bmiFont'
                                type="text"
                                onChange={(e) => setHeightInFeet(e.target.value)}
                                placeholder="Feet"
                            />
                            <input
                                className='bmiCal'
                                type="text"
                                onChange={(e) => setHeightInInches(e.target.value)}
                                placeholder="Inch"
                            />
                            <input
                                className='bmiCal'
                                type="text"
                                onChange={(e) => setWeight(e.target.value)}
                                placeholder="Weight lbs"
                            />
                            <button type="button" class="btn btn-danger" onClick={handleBmi}>Calculate</button>
                            <h1>{bmi}</h1>
                            <h2>{info}</h2>
                        </div>
                    </div>
                    <div className="col">
                        <a href='/cardio'>
                            <div className="col-sm-14">
                                <div className="well cardio">
                                    <h1>Cardio</h1>
                                </div>
                            </div>
                        </a>
                        <a href='/bodyWeight'>
                            <div className="col-sm-14">
                                <div className="well bodyWeight">
                                    <h1>Body Weight</h1>
                                </div>
                            </div>
                        </a>
                        <a href='/weightLifting'>
                            <div className="col-sm-14">
                                <div className="well weight">
                                    <h1>Weight Lifting</h1>
                                </div>
                            </div>
                        </a>
                        <a href='/meals'>
                            <div className="col-sm-14">
                                <div className="well meal">
                                    <h1>Meals</h1>
                                </div>
                            </div>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Profile;