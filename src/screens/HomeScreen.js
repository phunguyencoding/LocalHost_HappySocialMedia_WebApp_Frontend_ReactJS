// TODO: 3 columns, Ads Tweet Ads
import React from 'react'
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { Carousel } from 'react-responsive-carousel';
import PostListScreen from './PostListScreen';

export default function HomeScreen() {
    return (
            <div className="homepage-grid-container">
                <ads1>
                    <div className='animation vertical-row'>
                        <div id='sentence1'>Inspired by</div>
                    <div>
                    <a href='https://www.instagram.com/' className='orange-background' target='_blank' rel="noreferrer">
                        <div>
                        <span></span>
                        <span></span>
                        <span></span>
                        <span></span>
                            <span>
                                <i className="fa fa-instagram"></i>
                            </span>
                        </div>
                    </a>
                    </div>
                    <div>
                    <a href='https://www.facebook.com/' className='orange-border' target='_blank' rel="noreferrer">
                        <div>
                        <span></span>
                        <span></span>
                        <span></span>
                        <span></span>
                        <span>
                                <i className="fa fa-facebook-f"></i>
                            </span>
                        </div>
                    </a>
                    </div>
                    <div>
                    <a href='https://github.com/' target='_blank' className='orange-shadow' rel="noreferrer">
                        <div>
                        <span></span>
                        <span></span>
                        <span></span>
                        <span></span>
                        <span>
                                <i className="fa fa-github"></i>
                            </span>

                        </div>
                    </a>
                    </div>
                    <div>
                        <a href='https://www.linkedin.com/' target='_blank' rel="noreferrer">
                            <div>
                            <span></span>
                            <span></span>
                            <span></span>
                            <span></span>
                            <span>
                                    <i className="fa fa-linkedin"></i>
                                </span>
                            </div>
                        </a>
                        </div>
                    </div>
                </ads1>
                <content>
                    <PostListScreen></PostListScreen>
                </content>
                <ads2>
                    {/* <div className="vertical-row"> */}
                    <div className='sentence2'>Sponsors by</div>
                    <Carousel showArrows autoPlay showThumbs={false} infiniteLoop={true}>
                        <div>
                        <img src="assets/sponsor1.png" alt="sponsor1"/>
                    </div>
                    <div>
                        <img src="assets/sponsor2.png" alt="sponsor2"/>
                    </div>
                    <div>
                        <img src="assets/sponsor3.png" alt="sponsor3"/>
                    </div>
                    </Carousel>
                    <div className="sentence2">Collab with</div>
                    <Carousel showArrows autoPlay showThumbs={false} infiniteLoop={true}>
                        <div>
                        <img src="assets/colab1.png" alt="colab1"/>
                    </div>
                    <div>
                        <img src="assets/colab2.png" alt="colab2"/>
                    </div>
                    <div>
                        <img src="assets/colab3.png" alt="colab3"/>
                    </div>
                    <div>
                        <img src="assets/colab4.png" alt="colab4"/>
                    </div>
                    </Carousel>
                    {/* </div> */}
                </ads2>
            </div>
    )
}
