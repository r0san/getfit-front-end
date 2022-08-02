
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { Link } from 'react-router-dom';
import Profile from './../profile/Profile';
import logo from '../../images/logo.png'

const Meals = () => {
    const navigate = useNavigate();
    const [meals, setMeals] = useState([]);
    const [loggedInUser, setLoggedInUser] = useState([]);

    useEffect(() => {
        const params = {
            email: localStorage.getItem("loggedInUser")
        }
        axios.get('http://localhost:8080/findUserByEmail', { params }).then(
            response => {
                setLoggedInUser(response.data);
            }).catch(error => {

            });

        axios.get('http://localhost:8080/listMeals').then(
            response => {
                setMeals(response.data)
            }).catch(error => {
                console.log("Invalid Search")
            })
    }, []
    );

    const add = (mealsId) => {
        const saveList = {
            user: loggedInUser.id,
            mealsId: mealsId
        }
        axios.post("http://localhost:8080/saveMeals", saveList).then(
            response => {
                navigate('/mealPlan');
            }).catch(error => {

            })
    }

    return (
        <div className='exerciseBody'>
            <nav className="profileNavbar navbar-light">
                <a href="/profile">
                    <img src={logo} height="80" width="80" />
                </a>
            </nav>
            {
                meals.map((meal, index) => {
                    return (
                        <div key={index}>
                            <div className='row'>
                                <div className='col-md'>
                                    <img width={500} height={400} src={`data:image/jpg;base64,${meal.pics}`} />
                                </div>
                                <div className='col-md flip-card'>
                                    <div className='flip-card-inner'>
                                        <div className='flip-card-front'>
                                            <h1>{meal.name}</h1>
                                            <h3>Category:{meal.category}</h3>
                                        </div>
                                        <div className='flip-card-back'>
                                            <h3>Calories:</h3>
                                            <h4>{meal.calories}</h4>
                                            <h3>Ingredients:</h3>
                                            <h6>{meal.ingredients}</h6>
                                            <h3>Recipie:</h3>
                                            <h6>{meal.recipies}</h6>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )
                })
            }

        </div >
    )
}

export default Meals;