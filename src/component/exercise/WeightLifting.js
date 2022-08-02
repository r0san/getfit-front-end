
import { useState, useEffect } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import axios from 'axios';
import logo from '../../images/logo.png'

const WeightLifting = () => {

    const [weightLiftings, setWeightLiftings] = useState([]);
    const [loggedInUser, setLoggedInUser] = useState([]);
    const navigate = useNavigate();
    useEffect(() => {
        const params = {
            email: localStorage.getItem("loggedInUser")
        }
        axios.get('http://localhost:8080/findUserByEmail', { params }).then(
            response => {
                setLoggedInUser(response.data);
            }).catch(error => {
                console.log("Invalid search")
            });

        axios.get('http://localhost:8080/weightLifting').then(
            response => {
                setWeightLiftings(response.data)
            }).catch(error => {
                console.log("Invalid Search")
            });
    }, []
    );

    const add = (exerciseId) => {
        const saveList = {
            userId: loggedInUser.id,
            exerciseId: exerciseId
        }

        axios.post('http://localhost:8080/saveList', saveList).then(
            response => {
                navigate('/plan');
            }).catch(error => {
                console.log("Error")
            });
    }

    return (
        <div className='exerciseBody'>
            <nav className="profileNavbar navbar-light">
                <a href="/profile">
                    <img src={logo} height="80" width="80" />
                </a>
            </nav>
            {
                weightLiftings.map((weightLifting, index) => {
                    return (
                        <div key={index}>
                            <div className='row'>
                                <div className='col-md'>
                                    <img width={500} height={400} src={`data:image/gif;base64,${weightLifting.pics}`} />
                                </div>
                                <div className='col-md flip-card'>
                                    <div className='flip-card-inner'>
                                        <div className='flip-card-front'>
                                            <h1>{weightLifting.name}</h1>
                                            <h3 className='font'>Muscle Focus:{weightLifting.muscleGroup}</h3>
                                        </div>
                                        <div className='flip-card-back'>
                                            <h3>Reps:</h3>
                                            <h4>{weightLifting.reps}</h4>
                                            <h3>Description:</h3>
                                            <p>{weightLifting.description}</p>
                                            <Link to="/plan"> <button class="btn btn-success btn-lg btn-block" onClick={() => add(weightLifting.id)}>Save as Favorite</button> </Link>
                                        </div>
                                    </div>

                                </div>
                            </div>


                        </div>

                    )
                })
            }
        </div>
    )
}
export default WeightLifting;