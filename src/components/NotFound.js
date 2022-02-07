import React from 'react';
import {
    NavLink
} from "react-router-dom";
import '../styles/notfound.css'
function NotFound() {
    return < div className="error-page-wrap" >
        <article className="error-page gradient">
            <hgroup>
                <h1>404</h1>
                <h2>oops! page not found</h2>
            </hgroup>
            <NavLink to="/" title="Back to site" class="error-back">back</NavLink>
        </article>
    </div >;
}

export default NotFound;
