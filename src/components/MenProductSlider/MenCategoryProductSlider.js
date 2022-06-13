import React from 'react';
import filterIcon from "../../assets/images/filtericon.png";
import "./categoryproductslider.css";
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import productItem from '../../assets/images/shirt.png'
function MenCategoryProductSlider() {
    const responsive = {
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 5,
            partialVisibilityGutter: 0,
            slidesToSlide: 1 // optional, default to 1.
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 2,
            partialVisibilityGutter: 60,
            slidesToSlide: 2 // optional, default to 1.
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 2,
            partialVisibilityGutter: 30,
            slidesToSlide: 1 // optional, default to 1.
        }
    };
    return (
        <section className='category_product_slider'>

            <div className='actions d-flex'>
                <div className='m-3'>
                    Filter
                    <img src={filterIcon}></img>
                </div>
                <div className=' sort_by' >
                    <p>Sort By : <b>Newest</b> </p>
                </div>
            </div>

            <div className="row" id="carousel-slide">
                <Carousel infinite="true" partialVisible={true} interval={3000} touch={true} arrows={false} responsive={responsive} renderButtonGroupOutside={true} swipeable={true} draggable={false} autoPlay={true}
                    autoPlaySpeed={2000}>
                    <div className="cards overflow-hidden">
                        <div className="bg-grey">
                            <img src={productItem} className="img-fluid" alt="Koovs product Front image" />
                            <p className="fw-bold">Brand
                            </p>
                            <p>Patch Pocket Jacket</p>
                        </div>
                    </div>
                    <div className="cards overflow-hidden">
                        <div className="bg-grey">
                            <img src={productItem} className="img-fluid" alt="Koovs " />
                            <p className="fw-bold">Brand
                            </p>
                            <p>Patch Pocket Jacket</p>
                        </div>
                    </div>
                    <div className="cards overflow-hidden">
                        <div className="bg-grey">
                            <img src={productItem} className="img-fluid" alt="Koovs image" />
                            <p className="fw-bold">Brand
                            </p>
                            <p>Patch Pocket Jacket</p>
                        </div>
                    </div>
                    <div className="cards overflow-hidden">
                        <div className="bg-grey">
                            <img src={productItem} className="img-fluid" alt="Koovs image" />
                            <p className="fw-bold">Brand
                            </p>
                            <p>Patch Pocket Jacket</p>
                        </div>
                    </div>
                    <div className="cards overflow-hidden">
                        <div className="bg-grey">
                            <img src={productItem} className="img-fluid" alt="Koovs image" />
                            <p className="fw-bold">Brand
                            </p>
                            <p>Patch Pocket Jacket</p>
                        </div>
                    </div>
                    <div className="cards overflow-hidden">
                        <div className="bg-grey">
                            <img src={productItem} className="img-fluid" alt="Koovs image" />
                            <p className="fw-bold">Brand
                            </p>
                            <p>Patch Pocket Jacket</p>
                        </div>
                    </div>
                    <div className="cards overflow-hidden">
                        <div className="bg-grey">
                            <img src={productItem} className="img-fluid" alt="Koovs image" />
                            <p className="fw-bold">Brand
                            </p>
                            <p>Patch Pocket Jacket</p>
                        </div>
                    </div>
                    <div className="cards overflow-hidden">
                        <div className="bg-grey">
                            <img src={productItem} className="img-fluid" alt="Koovs image" />
                            <p className="fw-bold">Brand
                            </p>
                            <p>Patch Pocket Jacket</p>
                        </div>
                    </div>
                    <div className="cards overflow-hidden">
                        <div className="bg-grey">
                            <img src={productItem} className="img-fluid" alt="Koovs image" />
                            <p className="fw-bold">Brand
                            </p>
                            <p>Patch Pocket Jacket</p>
                        </div>
                    </div>
                    <div className="cards overflow-hidden">
                        <div className="bg-grey">
                            <img src={productItem} className="img-fluid" alt="Koovs image" />
                            <p className="fw-bold">Brand
                            </p>
                            <p>Patch Pocket Jacket</p>
                        </div>
                    </div>
                    <div className="cards overflow-hidden">
                        <div className="bg-grey">
                            <img src={productItem} className="img-fluid" alt="Koovs image" />
                            <p className="fw-bold">Brand
                            </p>
                            <p>Patch Pocket Jacket</p>
                        </div>
                    </div>
                </Carousel>
            </div>
        </section>
    )
}

export default MenCategoryProductSlider