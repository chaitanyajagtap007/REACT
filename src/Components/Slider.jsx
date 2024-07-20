import React from 'react'

export default function Slider() {
    return (
        <div>
            <div id="demo" className="carousel slide mt-1" data-ride="carousel">
                <ul className="carousel-indicators">
                    <li data-target="#demo" data-slide-to="0" className="active"></li>
                    <li data-target="#demo" data-slide-to="1"></li>
                    <li data-target="#demo" data-slide-to="2"></li>
                </ul>
                <div className="carousel-inner">
                    <div className="carousel-item active h-100">
                        <img src="https://www.w3schools.com/bootstrap4/la.jpg" alt="Los Angeles" className='w-100' />
                        <div className="carousel-caption">
                            <h3>Los Angeles</h3>
                            <p>We had such a great time in LA!</p>
                        </div>
                    </div>
                    <div className="carousel-item h-100">
                        <img src="https://www.w3schools.com/bootstrap4/chicago.jpg" alt="Chicago" className='w-100' />
                        <div className="carousel-caption">
                            <h3>Chicago</h3>
                            <p>Thank you, Chicago!</p>
                        </div>
                    </div>
                    <div className="carousel-item h-100">
                        <img src="https://www.w3schools.com/bootstrap4/ny.jpg" alt="New York" className='w-100' />
                        <div className="carousel-caption">
                            <h3>New York</h3>
                            <p>We love the Big Apple!</p>
                        </div>
                    </div>
                </div>
                <a className="carousel-control-prev" href="#demo" data-slide="prev">
                    <span className="carousel-control-prev-icon"></span>
                </a>
                <a className="carousel-control-next" href="#demo" data-slide="next">
                    <span className="carousel-control-next-icon"></span>
                </a>
            </div>
        </div>
    )
}
