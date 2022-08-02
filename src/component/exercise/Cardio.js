import { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import logo from '../../images/logo.png'
const Cardio = () => {
    const navigate = useNavigate();
    const [cardios, setCardios] = useState([]);
    const [loggedInUser, setLoggedInUser] = useState([]);

    //  const cardioDetails = () =>{
    //      const tempCardios = [...cardios];  
    //      const cardio ={
    //          name: cardios
    //      }
    //      tempCardios.push (cardio);
    //      setCardios(tempCardios);
    //  }



    useEffect(() => {
        const params = {
            email: localStorage.getItem("loggedInUser")
        }
        axios.get('http://localhost:8080/findUserByEmail', { params }).then(
            response => {
                setLoggedInUser(response.data);
            }).catch(error => {

            });


        axios.get('http://localhost:8080/cardioExercises').then(
            response => {
                setCardios(response.data);
            }).catch(error => {

            });
    }, []
    );

    const [selectedDate, seSlectedDate] = useState(null)

    const add = (exerciseId) => {
        const saveList = {
            userId: loggedInUser.id,
            exerciseId: exerciseId

        }
        console.log(saveList);
        axios.post('http://localhost:8080/saveList', saveList).then(
            response => {

                navigate('/plan');

            }).catch(error => {
                (console.log("error"))
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
                cardios.map((cardio, index) => {
                    return (
                        <div key={index}>
                            <div className="row">
                                <div className="col-md">
                                    <img width={500} height={400} src={`data:image/gif;base64,${cardio.pics}`} />
                                </div>
                                <div className="col-md flip-card">
                                    <div class="flip-card-inner">
                                        <div class="flip-card-front">
                                            <h1>{cardio.name}</h1>
                                            <h3 className='font'>Muscle Focus:{cardio.muscleGroup}</h3>
                                        </div>
                                        <div class="flip-card-back">
                                            <h3>Reps:</h3>
                                            <h4>{cardio.reps}</h4>
                                            <h3>Description:</h3>
                                            <p>{cardio.description}</p>
                                            <Link to="/plan"> <button type="button" class="btn btn-success btn-lg btn-block" onClick={() => add(cardio.id)}>Save as Favorite</button>
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )
                })
            }
        </div>
    );

}
export default Cardio;