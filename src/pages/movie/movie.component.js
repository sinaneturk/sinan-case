import './movie.style.css'
import React from 'react'
import {connect} from 'react-redux'
import { setUserLoggedIn } from '../../redux/actions/user.actions';
import { setMovie } from '../../redux/actions/movie.actions';

function Movie(props) {

    const getMovie = () => {
        fetch("https://owen-wilson-wow-api.herokuapp.com/wows/random")
        .then(reponse => reponse.json())
        .then(movie =>{
            console.log(movie)
            props.setMovie(movie[0])
        })
    }
 
    return (
        <div className="home-container" >
            <button onClick={getMovie}>{props.local_vocab.GET_MOVIE}</button>
            {
                props.movie.movie && <div className='movie-container'>
                <div className='movie-info'>
                    <p className='info'>{props.movie.movie}, </p>
                    <p className='info'>{props.movie.year}, </p>
                    <p className='info'>{props.movie.movie_duration}</p>
                </div>
                <div className='poster-container'>
                    <img src={props.movie.poster}/>
                </div>

                <div className='links' >
                    {
                        props.movie.video["1080p"] ? <a href={props.movie.video["1080p"]}>1080p</a>:""
                    }
                    {
                        props.movie.video["720p"] ? <a href={props.movie.video["720p"]}>720p</a>:""
                    }
                </div>

            </div> 
            }
            
        </div>
    );
 
}


const mapStateToProps = state => {
    return {
    movie: state.movieReducer.movie,
  }};
  
  const mapDispatchToProps = dispatch => {
    return {
      setMovie: (movie) => { dispatch(setMovie(movie)) },
      
    }
  }
  
  export default connect(mapStateToProps, mapDispatchToProps)(Movie);
  