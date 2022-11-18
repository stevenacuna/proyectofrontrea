import slider1 from "./slider1.png";
import slider2 from "./slider2.png";
import slider3 from "./slider3.png";

function Inicio(props) {
    return (
        <div>
            <div class="row g-0">
                <div class="col-lg-12">
                    <div
                        id="carouselExampleIndicators"
                        class="carousel slide"
                        data-bs-ride="true"
                    >
                        <div class="carousel-indicators">
                            <button
                                type="button"
                                data-bs-target="#carouselExampleIndicators"
                                data-bs-slide-to="0"
                                class="active"
                                aria-current="true"
                                aria-label="Slide 1"
                            ></button>
                            <button
                                type="button"
                                data-bs-target="#carouselExampleIndicators"
                                data-bs-slide-to="1"
                                aria-label="Slide 2"
                            ></button>
                            <button
                                type="button"
                                data-bs-target="#carouselExampleIndicators"
                                data-bs-slide-to="2"
                                aria-label="Slide 3"
                            ></button>
                        </div>
                        <div class="carousel-inner">
                            <div class="carousel-item active">
                                <img
                                    src={slider1}
                                    class="d-block w-100"
                                    alt="steven"
                                />
                            </div>
                            <div class="carousel-item">
                                <img
                                    src={slider2}
                                    class="d-block w-100"
                                    alt="..."
                                />
                            </div>
                            <div class="carousel-item">
                                <img
                                    src={slider3}
                                    class="d-block w-100"
                                    alt="..."
                                />
                            </div>
                        </div>
                        <button
                            class="carousel-control-prev"
                            type="button"
                            data-bs-target="#carouselExampleIndicators"
                            data-bs-slide="prev"
                        >
                            <span
                                class="carousel-control-prev-icon"
                                aria-hidden="true"
                            ></span>
                            <span class="visually-hidden">Previous</span>
                        </button>
                        <button
                            class="carousel-control-next"
                            type="button"
                            data-bs-target="#carouselExampleIndicators"
                            data-bs-slide="next"
                        >
                            <span
                                class="carousel-control-next-icon"
                                aria-hidden="true"
                            ></span>
                            <span class="visually-hidden">Next</span>
                        </button>
                    </div>
                </div>
            </div>

            {/* <div id="demo" class="carousel slide" data-bs-ride="carousel">
                <div class="carousel-indicators">
                    <button
                        type="button"
                        data-bs-target="#demo"
                        data-bs-slide-to="0"
                        class=""
                    ></button>
                    <button
                        type="button"
                        data-bs-target="#demo"
                        data-bs-slide-to="1"
                        class=""
                    ></button>
                    <button
                        type="button"
                        data-bs-target="#demo"
                        data-bs-slide-to="2"
                        class=""
                    ></button>
                    <button
                        type="button"
                        data-bs-target="#demo"
                        data-bs-slide-to="3"
                        class=""
                    ></button>
                    <button
                        type="button"
                        data-bs-target="#demo"
                        data-bs-slide-to="4"
                        class="active"
                        aria-current="true"
                    ></button>
                </div>

                <div class="carousel-inner">
                    <div class="carousel-item">
                        <img
                            src={slider1}
                            alt="Los Angeles"
                            class="d-block w-100"
                        />
                        <div class="carousel-caption">
                            <h3>Los Angeles</h3>
                            <p>We had such a great time in LA!</p>
                        </div>
                    </div>
                    <div class="carousel-item">
                        <img
                            src={slider2}
                            alt="Chicago"
                            class="d-block w-100"
                            //style="width:100%"
                        />
                        <div class="carousel-caption">
                            <h3>Chicago</h3>
                            <p>Thank you, Chicago!</p>
                        </div>
                    </div>
                    <div class="carousel-item">
                        <img
                            src={slider3}
                            alt="New York"
                            class="d-block w-100"
                            //style="width:100%"
                        />
                        <div class="carousel-caption">
                            <h3>New York</h3>
                            <p>We love the Big Apple!</p>
                        </div>
                    </div>
                </div>

                <button
                    class="carousel-control-prev"
                    type="button"
                    data-bs-target="#demo"
                    data-bs-slide="prev"
                >
                    <span class="carousel-control-prev-icon"></span>
                </button>
                <button
                    class="carousel-control-next"
                    type="button"
                    data-bs-target="#demo"
                    data-bs-slide="next"
                >
                    <span class="carousel-control-next-icon"></span>
                </button>
            </div> */}
        </div>
    );
}
export default Inicio;
