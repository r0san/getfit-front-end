
import { useState, useEffect } from 'react';
import axios from 'axios';

const MealPlan = ()=>{
    const [user, setUser] = useState ({meals:[]});

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
    return(
        <div>
            {
                user.meals.map((meal)=>{
                    return (
                        <div>
                            <h1>{meal.name}</h1>
                            </div>
                    )
                })
            }
        </div>
    )
}
export default MealPlan;