import React from "react";
import "./aboutSection.css";
import { Typography, Avatar } from "@material-ui/core";
import InstagramIcon from "@material-ui/icons/Instagram";
import YouTubeIcon from "@material-ui/icons/YouTube"
import TwitterIcon from "@material-ui/icons/Twitter"
import LinkedInIcon from "@material-ui/icons/LinkedIn"
const About = () => {
  // const visitInstagram = () => {
  //   window.location = "";
  // };
  return (
    <div className="aboutSection">
      <div className="aboutleft"></div>
      <div className="aboutSectionGradient"></div>
      <div className="aboutSectionContainer">
        <Typography component="h1">About Us</Typography>

        <div>
          <div>
            <Avatar
              style={{ width: "10vmax", height: "10vmax", margin: "2vmax 0" }}
              src="https://res.cloudinary.com/dkchwqard/image/upload/v1674644814/ui%20images/ecommerce_lhja4o.png"
              alt="Founder"
            />
            <Typography>E-Commerce</Typography>
            {/* <Button onClick={visitInstagram} color="primary">
              Visit Instagram
            </Button> */}
            <span>
              This is a sample e-commerce shopping wesbite
            </span>
          </div>
          <div className="aboutSectionContainer2">
            <Typography component="h2">Social</Typography>
            <div className="align-container">
            <a href="/about" target="blank">
                <TwitterIcon className="twitterSvgIcon" />
              </a>
              <a href="/about" target="blank">
                <LinkedInIcon className="linkedinSvgIcon" />
              </a>
              <a href="/about" target="blank">
                <InstagramIcon className="instagramSvgIcon" />
              </a>
              <a href="/about" target="blank">
                <YouTubeIcon className="youtubeSvgIcon" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
