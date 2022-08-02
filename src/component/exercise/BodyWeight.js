import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import axios from 'axios';
import logo from '../../images/logo.png'

const BodyWeight = () => {
    const navigate = useNavigate();
    const [bodyWeights, setBodyWeights] = useState([]);
    const [loggedInUser, setLoggedInUser] = useState([]);

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

        axios.get('http://localhost:8080/bodyWeightExercises').then(
            response => {
                setBodyWeights(response.data)
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
                bodyWeights.map((bodyWeight, index) => {
                    return (
                        <div key={index}>
                            <div className='row'>
                                <div className='col-md'>
                                    <img width={500} height={400} src={`data:image/gif;base64,${bodyWeight.pics}`} />
                                </div>
                                <div className='col-md flip-card'>
                                    <div className='flip-card-inner'>
                                        <div className='flip-card-front'>
                                            <h1>{bodyWeight.name}</h1>
                                            <h3 className='font'>Muscle Focus:{bodyWeight.muscleGroup}</h3>
                                        </div>
                                        <div className='flip-card-back'>
                                            <h3>Reps:</h3>
                                            <h4>{bodyWeight.reps}</h4>
                                            <h3>Description:</h3>
                                            <p>{bodyWeight.description}</p>
                                            <Link to="/plan"> <button class="btn btn-success btn-lg btn-block" onClick={() => add(bodyWeight.id)}>Save as Favorite</button> </Link>
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
export default BodyWeight;