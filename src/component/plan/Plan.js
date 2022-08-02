
import { useState, useEffect } from 'react';
import axios from 'axios';
import logo from '../../images/logo.png'

const Plan = () => {
    const [user, setUser] = useState({ exercise: [] });
    const [refresh, setRefresh] = useState([]);


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
        [refresh]
    );
    const deleteListSubmitHandler = (listId) => {
        const params = {
            userId: user.id,
            exerciseId: listId

        };
        axios.delete("http://localhost:8080/deleteList", { params }).then(
            reponse => {
                const count = refresh + 1;
                setRefresh(count);
            }).catch(error => {

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
                user.exercise.map((workOut) => {
                    return (
                        <div>
                            <div className='row'>
                                <div className='col-md'>
                                    <img width={500} height={400} src={`data:image/gif;base64,${workOut.pics}`} />

                                </div>
                                <div className='col-md flip-card'>
                                    <div className='flip-card-inner'>
                                        <div className='flip-card-front'>
                                            <h1>{workOut.name}</h1>
                                            <h1>Muscle Focus:{workOut.muscleGroup}</h1>
                                        </div>
                                        <div className='flip-card-back'>
                                            <p>Reps:{workOut.reps}</p>
                                            <p>Description:{workOut.description}</p>
                                            <button class="btn btn-danger btn-lg btn-block" onClick={() => deleteListSubmitHandler(workOut.id)}>Remove from Favorite</button>
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
export default Plan;