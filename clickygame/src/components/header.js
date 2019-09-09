import React from "react";

class Header extends React.Component {
    state = {
        score: 0,
        topScore: 0
    }



render () {
    return (
    <nav class="navbar">
        <ul>
            <li class="brand">
                <a href="/">Clicky Game</a>
            </li>
            <li class="">Click an image to begin!</li>
            <li>Score: 0 | Top Score: 0</li>
        </ul>
    </nav>
    )
}
};


export default Header;
