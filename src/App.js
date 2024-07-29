// importing relevant modules
import "./index.css";
import { ReactLenis, useLenis } from "lenis/react";
import ScrollTrigger from "gsap/ScrollTrigger";
import { useLayoutEffect } from "react";
import { useRef } from "react";
import gsap from "gsap";

function App() {
  // creating smooth scroll
  const lenis = useLenis(({ scroll }) => {});

  // reference to square element to scale
  const squareElement = useRef();
  const gridContainerOne = useRef();
  const gridContainerTwo = useRef();

  // creating animation for elements
  useLayoutEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const timeline = gsap.timeline({
      scrollTrigger: {
        trigger: document.documentElement,
        start: "500px",
        end: "+=850px",
        scrub: true,
        // markers: true,
      },
    });

    timeline
      .from(squareElement.current, {
        opacity: 0,
        // height: "100px",
        // width: "100px",
      })
      .to(
        squareElement.current,
        {
          // height: `100%`,
          // width: `100%`,
          opacity: 1,
          background: "white",
        },
        0
      );

    const timelineTwo = gsap.timeline({
      scrollTrigger: {
        trigger: document.documentElement,
        start: "top",
        end: "+=850px",
        scrub: true,
        // markers: true,
      },
    });

    timelineTwo
      .from(gridContainerOne.current, {
        // height: "100px",
        // width: "100px",
      })
      .to(
        gridContainerOne.current,
        {
          // height: `100%`,
          // width: `100%`,
          // background: "white",
          transform: ` translateY(1050px)`,
        },
        0
      );

    const timelineThree = gsap.timeline({
      scrollTrigger: {
        trigger: document.documentElement,
        start: "100px",
        end: "+=1550px",
        scrub: true,
        // markers: true,
      },
    });

    timelineThree
      .from(gridContainerTwo.current, {
        // height: "100px",
        // width: "100px",
      })
      .to(
        gridContainerTwo.current,
        {
          // height: `100%`,
          // width: `100%`,
          transform: `translateY(50px)`,
        },
        0
      );
  });
  return (
    <ReactLenis root>
      <div className="App">
        <div className="space">
          <header>
            <h3 className="title">. design</h3>
            <div className="circle"></div>
          </header>

          <div className="gridContainer" id="index" ref={gridContainerOne}>
            <h2>A</h2>
            <h2>D</h2>
            <h2>C</h2>
            <h2>F</h2>
            <h2>B</h2>
            <h2>E</h2>
          </div>
        </div>
        <div className="scaleContainer">
          <div className="square" ref={squareElement}>
            <div
              className="gridContainer"
              id="containerScroll"
              ref={gridContainerTwo}
            >
              <h2>A</h2>
              <h2>D</h2>
              <h2>C</h2>
              <h2>F</h2>
              <h2>B</h2>
              <h2>E</h2>
            </div>
          </div>
          <footer>
            <h3 className="title">. design</h3>
            <div className="circle"></div>
          </footer>
        </div>
        {/* <div className="space"></div> */}
      </div>
      ;
    </ReactLenis>
  );
}

export default App;
