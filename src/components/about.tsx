import Image from "next/image";
import myImage from "@/assets/images/me.jpeg";
import NumberedHeading from "./atoms/numberedHeading";
import { MY_TECHS } from "@/utils/constants";

const About = () => {
  return (
    <section
      id="about"
      className="px-12 w-full flex flex-col gap-10 min-h-screen items-center lg:flex-row"
    >
      <div className="w-3/5 text-xl ">
        <NumberedHeading title="About Me" width="w-full" />
        <p className="">
          Hello! My name is Brittany and I enjoy creating things that live on
          the internet. My interest in web development started back in 2012 when
          I decided to try editing custom Tumblr themes — turns out hacking
          together a custom reblog button taught me a lot about HTML & CSS!
        </p>
        <p className="">
          Fast-forward to today, and I’ve had the privilege of working at an
          advertising agency, a start-up, a huge corporation, and a student-led
          design studio. My main focus these days is building accessible,
          inclusive products and digital experiences at Upstatement for a
          variety of clients
        </p>
        <p className="">
          I also recently launched a course that covers everything you need to
          build a web app with the Spotify API using Node & React.
        </p>
        <p className="">
          Here are a few technologies I’ve been working with recently:
        </p>
        <ul className="grid lg:grid-cols-3 font-mono text-xs">
          {MY_TECHS.map(tech => (
            <li key={tech} className="with-dot text-nowrap">{tech}</li>
          ))}
        </ul>
      </div>
      <div className="w-2/5 h-96">
        <div className="mt-10 profile-pic-container relative aspect-square h-75">
          <div className="img-container-child absolute top-0 border-2 border-green rounded-1.5 h-75 aspect-square"></div>
          <div className="img-container-child">
            <Image
              src={myImage}
              alt="picture of Aditya Nath Suman"
              className="rounded-1.5 absolute hover:z-1 object-cover"
            />
            <div className="absolute top-0 rounded-1.5 mix-blend-multiply bg-green opacity-80 h-75 aspect-square hover:hidden "></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
