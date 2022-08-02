import Header from "../header/Header";
import SignIn from './../header/SignIn';
import SignUp from './../signUp/SignUp';
import { Route, Routes } from "react-router-dom";
import Profile from "../profile/Profile";
import Cardio from "../exercise/Cardio";
import BodyWeight from "../exercise/BodyWeight";
import Meals from "../meals/Meals";
import Plan from './../plan/Plan';
import WeightLifting from '../exercise/WeightLifting';
import BMI from '../bmi/BMI';
import MealPlan from '../plan/MealPlan';
import AboutUs from "../aboutUs/AboutUs";



const Layout = () => {
    return (
        <>
            <Routes>
                <Route path="/" element={<Header />} />
                <Route path="/sign-up" element={<SignUp />} />
                <Route path="/sign-in" element={<SignIn />} />
                <Route path="/profile" element={<Profile />} />
                <Route path="/cardio" element={<Cardio />} />
                <Route path="/bodyWeight" element={<BodyWeight />} />
                <Route path="/plan" element={<Plan />} />
                <Route path="/meals" element={<Meals />} />
                <Route path="/weightLifting" element={<WeightLifting />} />
                <Route path="/bmi" element={<BMI />} />
                <Route path="/mealPlan" element={<MealPlan />} />
                <Route path="/aboutUs" element={<AboutUs />} />
            </Routes>
        </>
    );
}
export default Layout;