    import React from 'react'
    import './Services.css'
    import Icon1 from '../assets/security.png'
    import Icon2 from '../assets/24-hour.png'
    import Icon3 from '../assets/restaurant.png'
    import Icon4 from '../assets/tour-guide.png'
    const Services = () => {
    return (
        <>
        <header>
            <h2 className='headings'>Our Services</h2>
            <p className='para'>Strive Only For The Best.</p>
        </header>
        <main>
            {/* 1st service */}
            <div className="section">
                <div className="card card-border">
                    <div className="card-body">
                        <div className="card-heading">High className Security</div>
                        <div className="card-subheading">Ensuring your safety with top-notch security.</div>
                    </div>
                    <div className="card-footer">
                        <div className="card-img">
                            <img src={Icon1} alt="" />
                        </div>
                    </div>
                </div>
            </div>
            {/* 2nd service */}
            <div className="section">
                <div className="card card-border">
                    <div className="card-body">
                        <div className="card-heading">24 Hours Room Service</div>
                        <div className="card-subheading">Always available to meet your needs.</div>
                    </div>
                    <div className="card-footer">
                        <div className="card-img">
                            <img src={Icon2} alt=""/>
                        </div>
                    </div>
                </div>
                {/* 3rd service */}
                <div className="card card-border">
                    <div className="card-body">
                        <div className="card-heading">Restaurant</div>
                        <div className="card-subheading">Delicious dining options at your fingertips.</div>
                    </div>
                    <div className="card-footer">
                        <div className="card-img">
                            <img src={Icon3} alt=""/>
                        </div>
                    </div>
                </div>
            </div>
            {/* 4th service */}
            <div className="section">
                <div className="card card-border">
                    <div className="card-body">
                        <div className="card-heading">Tourist Guide Support</div>
                        <div className="card-subheading">Expert guidance for exploring the area.</div>
                    </div>
                    <div className="card-footer">
                        <div className="card-img">
                            <img src={Icon4} alt=""/>
                        </div>
                    </div>
                </div>
            </div>
        </main>
        </>
    )
    }

    export default Services