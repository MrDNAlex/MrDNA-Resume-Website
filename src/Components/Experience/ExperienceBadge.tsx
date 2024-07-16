import React, { Component } from "react";
// import logo from "../../NanoDNA Studios Logo Circular.png";
import logo2 from "../../DNALogo_Back.png";
import lumentum from "../../Lumentum.png";
import lumentum2 from "../../Lumentum2.png";
import lumentumBack from "../../Lumentum_Back.png";
import "./ExperienceBadge.css";

class ExperienceBadge extends Component {

    Image: string = logo2;

    MouseOver = (e: React.MouseEvent<HTMLImageElement, MouseEvent>) => {
        e.currentTarget.style.zIndex = '100';

        let image = e.currentTarget.children[0] as HTMLImageElement;
        image.style.filter = ' drop-shadow(10px 10px 5px rgba(0, 0, 0, 0.5))';
        image.style.transition = 'transform 0s';

        let title = e.currentTarget.children[1] as HTMLHeadingElement;
        title.style.visibility = 'visible';
        title.style.transition = 'visibility 0.2s ease-in-out';
    };


    MouseMove(e: React.MouseEvent<HTMLImageElement, MouseEvent>) {
        const rect = e.currentTarget.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        const centerX = rect.width / 2;
        const centerY = rect.height / 2;
        const deltaX = centerX - x;
        const deltaY = centerY - y;
        const percentageX = deltaX / centerX;
        const percentageY = deltaY / centerY;
        const multiplier = 1.5;
        const rotateDegree = -30 * multiplier;

        let image = e.currentTarget.children[0] as HTMLImageElement;
        image.style.transform = `rotateY(${percentageX * rotateDegree}deg) rotateX(${percentageY * rotateDegree}deg)`; // This line is not working

    };

    MouseLeave = (e: React.MouseEvent<HTMLImageElement, MouseEvent>) => {
        let image = e.currentTarget.children[0] as HTMLImageElement;
        image.style.transform = 'rotateZ(0deg) rotateY(0deg) rotateX(0deg)';
        image.style.filter = ' drop-shadow(10px 10px 5px rgba(0, 0, 0, 0))';
        image.style.transition = 'transform 0.5s ease-in-out';
        image.style.transition = 'filter 0.5s ease-in-out';

        let title = e.currentTarget.children[1] as HTMLHeadingElement;
        title.style.visibility = 'hidden';

        e.currentTarget.style.zIndex = '3';

    };

    render(): React.ReactNode {
        return (
            <div className="experience-badge-hole" style={{ backgroundRepeat: "no-repeat", ['--background-image' as any]: `url(${this.Image})` }}>

                <div onMouseEnter={this.MouseOver} onMouseLeave={this.MouseLeave} onMouseMoveCapture={this.MouseMove} className="experience-badge">
                    <img className="experience-badge-img" alt="Hi" src={this.Image} ></img>
                    <text className="experience-badge-name">Lumentum</text>
                </div>
            </div>


        );
    }


}

export default ExperienceBadge;