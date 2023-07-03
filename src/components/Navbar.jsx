import React from "react";
import CartWidget from "./CartWidget";

export default function Navbar () {
    return (
        <div>
        SISTENA DE STOCK
        <ul>
            <li>
                <a href="http://google.com">
                    ir a google
                </a>
            </li>
        </ul>
        <CartWidget/>
        </div>
    )
}