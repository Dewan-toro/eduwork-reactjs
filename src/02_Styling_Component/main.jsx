import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLaptopCode,
  faKeyboard,
  faNetworkWired,
  faBugSlash,
  faCircleNodes,
  faShieldHalved,
} from "@fortawesome/free-solid-svg-icons";

export default function Main() {
  return (
    <>
      <div class="row m-5">
        <div class="col-sm-12 col-md-3 col-lg-4 mb-3 mb-sm-0">
          <div class="card border-0">
            <div class="card-body">
              <div class="d-flex align-items-center">
                <FontAwesomeIcon
                  icon={faLaptopCode}
                  size="2xl"
                  style={{ color: "#74C0FC" }}
                />
                <h5 class="card-title m-3">Coding Unveiled</h5>
              </div>

              <p class="card-text mx-5 text-secondary">
                Dive into the mesmerizing world of Coding Unveiled, where every
                line of code tells a unique story.
              </p>
            </div>
          </div>
        </div>
        <div class="col-sm-12 col-md-3 col-lg-4 mb-3 mb-sm-0">
          <div class="card border-0">
            <div class="card-body">
              <div class="d-flex align-items-center">
                <FontAwesomeIcon
                  icon={faKeyboard}
                  size="2xl"
                  style={{ color: "#74C0FC" }}
                />
                <h5 class="card-title m-3">Programmer's Symphony</h5>
              </div>

              <p class="card-text mx-5 text-secondary">
                Dance through the keys in a Keyboard Programmer's Symphony,
                where each stroke composes a digital masterpiece of innovation
                and precision.
              </p>
            </div>
          </div>
        </div>
        <div class="col-sm-12 col-md-3 col-lg-4 mb-3 mb-sm-0">
          <div class="card border-0">
            <div class="card-body">
              <div class="d-flex align-items-center">
                <FontAwesomeIcon
                  icon={faNetworkWired}
                  size="2xl"
                  style={{ color: "#74C0FC" }}
                />
                <h5 class="card-title m-3">Building Connections</h5>
              </div>

              <p class="card-text mx-5 text-secondary">
                We weave digital threads, fostering bonds that transcend
                screens. Elevate your network, embrace the power of
                connectivity.
              </p>
            </div>
          </div>
        </div>
        <div class="col-sm-12 col-md-3 col-lg-4 mb-3 mb-sm-0">
          <div class="card border-0">
            <div class="card-body">
              <div class="d-flex align-items-center">
                <FontAwesomeIcon
                  icon={faBugSlash}
                  size="2xl"
                  style={{ color: "#74C0FC" }}
                />
                <h5 class="card-title m-3">Troublesome Code</h5>
              </div>

              <p class="card-text mx-5 text-secondary">
                Unraveling complexity, we conquer challenges, turning coding
                puzzles into paths of mastery and breakthrough innovation.
              </p>
            </div>
          </div>
        </div>
        <div class="col-sm-12 col-md-3 col-lg-4 mb-3 mb-sm-0">
          <div class="card border-0">
            <div class="card-body">
              <div class="d-flex align-items-center">
                <FontAwesomeIcon
                  icon={faCircleNodes}
                  size="2xl"
                  style={{ color: "#74C0FC" }}
                />
                <h5 class="card-title m-3">Artificial Intelligence</h5>
              </div>

              <p class="card-text mx-5 text-secondary">
                Transforming data into insights, our algorithms pioneer a future
                where innovation meets the limitless potential of intelligent
                machines
              </p>
            </div>
          </div>
        </div>
        <div class="col-sm-12 col-md-3 col-lg-4 mb-3 mb-sm-0">
          <div class="card border-0">
            <div class="card-body">
              <div class="d-flex align-items-center">
                <FontAwesomeIcon
                  icon={faShieldHalved}
                  size="2xl"
                  style={{ color: "#74C0FC" }}
                />
                <h5 class="card-title m-3">Shielding the Digital Realm</h5>
              </div>

              <p class="card-text mx-5 text-secondary">
                Fortify your online sanctuary with robust security. Safeguard
                data, defend privacy, and ensure a resilient digital fortress
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
