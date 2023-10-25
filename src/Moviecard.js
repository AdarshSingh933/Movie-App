import React from "react";

class MovieCard extends React.Component{
    render(){
        return (
            <>
             <div className="main">
                <div className="movie-card">
                    <div className="left">
                        <img alt="poster"></img>
                    </div>
                    <div className="right">
                        <div className="title">
                            The Avengers
                        </div>
                        <div className="plot">
                            Supernatural power is showing in the movie.
                        </div>
                        <div className="price">
                            Rs. 199
                        </div>
                        <div className="footer">
                            <button className="favourite-btn">fav</button>
                            <button className="cart-btn">Add to Cart</button>
                        </div>
                    </div>
                </div>
             </div>
            </>
        )
    }
}

export default MovieCard;