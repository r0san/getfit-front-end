import { Link } from "react-router-dom";
import { useState } from 'react';
const Header = () => {

  const [exercise, setExercise] = useState({ name: '', category: '', muscleGroup: '', intensity: '', description: '' })
  const exerciseChangeHandler = (event) => {
    const name = event.target.name
    const value = event.target.value
    const tempExercise = { ...exercise }
    setExercise(tempExercise);
  }

  return (
    <div classNameName="background-color">
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
        <div className="container">
          <Link className="navbar-brand" to="/">getFit</Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarResponsive">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <Link className="nav-link active " to="/sign-up">SignUp</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link active" to="/sign-in">SingIn</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <header className="masthead">
        <div className="container h-100">
          <div className="row h-100 align-items-center">
            <div className="col-12 text-center">
            </div>
          </div>
        </div>
      </header>
    </div>
  );
}
export default Header;