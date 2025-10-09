import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger, SplitText } from "gsap/all";
import React from "react";

const About = () => {
  // useGSAP(() => {
  //   const titleSplit = SplitText.create("#about h2", { type: "words" });
  //   const paragraphSplit = SplitText.create(".sub-content-text", {
  //     type: "lines",
  //   });

  //   const scrollTimeline = gsap.timeline({
  //     scrollTrigger: {
  //       trigger: "#about",
  //       start: "top center",
  //     },
  //   });

  //   scrollTimeline
  //     .from(titleSplit.words, {
  //       opacity: 0,
  //       duration: 1,
  //       yPercent: 100,
  //       ease: "expo.out",
  //       stagger: 0.02,
  //     })
  //      .from(paragraphSplit.lines, {
  //       opacity: 0,
  //       duration: 1,
  //       yPercent: 100,
  //       ease: "expo.out",
  //       stagger: 0.02,
  //     })
  //     .from(
  //       ".top-grid div , .bottom-grid div",
  //       {
  //         opacity: 0,
  //         duration: 1,
  //         ease: "power1.inOut",
  //         stagger: 0.04,
  //       },
  //       "-=0.5"
  //     )
     

  //   // scrollTimeline.from(paragraphSplit.lines , {
  //   //   opacity: 0,
  //   //   duration: 1,
  //   //   yPercent: 100,
  //   //   ease: "expo.out",
  //   //   stagger: 0.2,
  //   // })
  // });

  useGSAP(() => {
  const titleSplit = SplitText.create("#about h2", { type: "words" });
  const paragraphSplit = SplitText.create(".sub-content-text", { type: "lines" });

  const scrollTimeline = gsap.timeline({
    scrollTrigger: {
      trigger: "#about",
      start: "top center",
    },
  });

  // Animate title and paragraph together
  scrollTimeline
    .from(titleSplit.words, {
      opacity: 0,
      duration: 1,
      yPercent: 100,
      ease: "expo.out",
      stagger: 0.04,
    })
    .from(paragraphSplit.lines, {
      opacity: 0,
      duration: 1,
      yPercent: 100,
      ease: "expo.out",
      stagger: 0.04,
    }, "<") // 👈 start at the same time as title animation

    // Then animate grid sections
    .from(".top-grid div, .bottom-grid div", {
      opacity: 0,
      duration: 1,
      ease: "power1.inOut",
      stagger: 0.04,
    }, "-=0.5"); // overlap slightly with the previous animations
});

  return (
    <div id="about">
      <div className="mb-16  px-5">
        <div className="content">
          <div className="md:col-span-8">
            <p className="badge">Best Cocktails</p>
            <h2>
              Where every detail matters <span className="text-white">-</span>
              from muddle to garnish
            </h2>
          </div>

          <div className="sub-content">
            <p className="sub-content-text">
              Every cocktail we serve is a reflection of our obsession with
              detail — from the first muddle to the final garnish. That care is
              what turns a simple drink into something truly memorable.
            </p>
            <div>
              <p className="md:text-3xl text-xl font-black">
                <span>4.5</span> /5
              </p>
              <p className="text-sm text-white-100">
                more than +12000 customers
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="top-grid px-5">
        <div className="md:col-span-3">
          <div className="noisy" />
          <img src="/images/abt1.png" alt="grid-img-1" />
        </div>
        <div className="md:col-span-6">
          <div className="noisy" />
          <img src="/images/abt2.png" alt="grid-img-1" />
        </div>
        <div className="md:col-span-3">
          <div className="noisy" />
          <img src="/images/abt5.png" alt="grid-img-1" />
        </div>
      </div>

      <div className="bottom-grid px-5">
        <div className="md:col-span-8">
          <div className="noisy" />
          <img src="/images/abt3.png" alt="grid-img-5" />
        </div>
        <div className="md:col-span-4">
          <div className="noisy" />
          <img src="/images/abt4.png" alt="grid-img-5" />
        </div>
      </div>
    </div>
  );
};

export default About;
