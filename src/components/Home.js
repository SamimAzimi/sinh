import React from 'react'
import { NavLink } from "react-router-dom";
import '../styles/homes.css'
export default function Home() {
    return (
        <>
            <section class="hero">
                <div class="background-image"></div>
                <div class="hero-content-area">
                    <h1>A very good place to be.</h1>
                    <h3>Do you live an Intercontinental life?</h3>
                    <NavLink to='/rooms' className="btn">Book Now!!</NavLink>
                </div>
            </section>

            <section class="destinations">
                <h3 class="title">Some of our Places</h3>
                <p>Tired of the beach alone? Are the plains too plain? Come along with us on one of our unusual adventures with your friends. Here are some pictures from people who have had elevated experiences with us.</p>
                <hr />

                <ul class="grid">
                    <li class="small image-1"></li>
                    <li class="large image-2"></li>
                    <li class="large image-3"></li>
                    <li class="small image-4"></li>
                </ul>
            </section>

            <section class="packages">
                <h3 class="title">Best Packages</h3>
                <p>We offer a variety of packages. Whether you've spent some summers together or this might be your first adventure, we've got the perfect vacation for you.</p>
                <hr />

                <ul class="grid">
                    <li>
                        <i class="fa fa-compass fa-4x"></i>
                        <h4>Guided Trips</h4>
                        <p>Looking for the complete experience?Take a tour with one of our experts.They'll show you secrets that you're likely to miss otherwise.</p>
                    </li>
                    <li>
                        <i class="fa fa-camera-retro fa-4x"></i>
                        <h4>Inter Continental Food</h4>
                        <p>Want to experience local , intercontintal food ? Best  <em>Food</em>  in the Area.</p>
                    </li>
                    <li>
                        <i class="fa fa-bicycle fa-4x"></i>
                        <h4>Swimming Pool</h4>
                        <p>joyful moments .We'll provide  Clean Swimming Pool, and lunch too!</p>
                    </li>
                    <li>
                        <i class="fa fa-flag-checkered fa-4x"></i>
                        <h4>Free Wifi</h4>
                        <p>Got a competitive spirit?Sign up for one of our challenge-based marathons!Try to reach the summit before any other group.</p>
                    </li>
                </ul>
            </section>

            <section class="testimonials">
                <h3 class="title">Testimonials from our adventurers:</h3>

                <p class="quote">Wow!This tour made me realize how much I love being outside with my friends.After going on one of these tours, I can safely say that beer pong is my favorite game all time, also the cultural programs were really interesting!</p>
                <p class="author">- Albert Herter</p>
                <p class="quote">Wow, this really blew my mind.We had so much fun at the beach, and also some hidden secrets revealed.Come on, I'm living in this city for 5 years. Amazing!</p>
                <p class="author">- Sharon Rosenberg</p>
                <p class="quote">If you want to understand your friends better, head to the mountains.I mean, seriously.It's like sitting next to a campfire and just talk in the sunset, woah. You know? It's like that.</p>
                <p class="author">- Luis Mendoza</p>
            </section>


        </>
    )
}
