import React, { Component } from "react";
import "./Experience.css";
import logo from "../../NanoDNA Studios Logo Circular.png";
import lumentum from "../../Lumentum.png";
import GridView from "../GridView/Gridview";
import "../GridView/Gridview.css";
import exp from "constants";
import ExperienceBadge from "./ExperienceBadge";


class Experience extends Component {

    render(): React.ReactNode {
        return (
            <div className="experience">

                <div className="experience-row">
                    <ExperienceBadge />
                    <ExperienceBadge />
                    <ExperienceBadge />
                    <ExperienceBadge />
                </div>

                <div className="experience-row">

                </div>

                <div className="experience-row">
                    <ExperienceBadge />
                    <ExperienceBadge />
                    <ExperienceBadge />
                    <ExperienceBadge />
                </div>




            </div>
        );

    }


    ExperienceBadge() {
        return (
            <div>
                <img src={logo}></img>
            </div>


        );
    }

}

export default Experience;




