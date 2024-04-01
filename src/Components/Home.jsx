import React from "react";
import Navbar from "./Navbar";
import Card from "./Card";
import Cell from "./Cell";
import Blog from "./Blog";

const Home = () => {
  const ServiceList = [
    {
      img: "card1.png",
      service: "Strategy & Planning",
      desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit.Consectetur dolor unde nostrum blanditiis porro tenetur!",
    },
    {
      img: "card2.png",
      service: "Planning & Strategy",
      desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit.Consectetur dolor unde nostrum blanditiis porro tenetur!",
    },
    {
      img: "card3.png",
      service: "Content Marketing",
      desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit.Consectetur dolor unde nostrum blanditiis porro tenetur!",
    },
    {
      img: "card4.png",
      service: "SEO Audits  strategy",
      desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit.Consectetur dolor unde nostrum blanditiis porro tenetur!",
    },
    {
      img: "card5.png",
      service: "Design and Development",
      desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit.Consectetur dolor unde nostrum blanditiis porro tenetur!",
    },
    {
      img: "card6.png",
      service: "SEO Audits  strategy",
      desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit.Consectetur dolor unde nostrum blanditiis porro tenetur!",
    },
  ];
  const People = [
    {
      img: "cell1.png",
      name: "Rachna Seth",
      Prof: "Full-Stck Developer",
    },
    {
      img: "cell2.png",
      name: "Prabhu Deva",
      Prof: "Front-End Developer",
    },
    {
      img: "cell3.png",
      name: "Gyaan Devta",
      Prof: "Backend Developer",
    },
  ];
  const Progress = [
    {
      img: "circle1.png",
      name: "MARKETING PLAN",
      desc: "Lorem ipsum dolor sit amet natoque. Primis nam feugiat aptent vestibulum pulvinar torqu ent.",
    },
    {
      img: "circle2.png",
      name: "EXECUTION",
      desc: "Lorem ipsum dolor sit amet natoque. Primis nam feugiat aptent vestibulum pulvinar torqu ent.",
    },
    {
      img: "circle3.png",
      name: "GROWTH & SCALE",
      desc: "Lorem ipsum dolor sit amet natoque. Primis nam feugiat aptent vestibulum pulvinar torqu ent.",
    },
  ];
  const blogs = [
    {
      img: "blog1.png",
      area: "Design",
      head: "Agency Needs To Embrace Social Media..",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem, quos enim.",
    },
    {
      img: "blog2.png",
      area: "Business",
      head: "Lead Designer’s UI/UX Core Checklist.",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem, quos enim.",
    },
    {
      img: "blog3.png",
      area: "Development",
      head: "Lead Designer’s UI/UX Core Checklist.",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem, quos enim.",
    },
    {
      img: "blog4.png",
      area: "Marketing",
      head: "We Are Building Everything You Needed",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem, quos enim.",
    },
  ];
  return (
    <div>
      {/* <Navbar /> */}
      <div className="first h-[70vh] sm:h-[50vh] lg:h-[80vh] flex mb-20 w-full">
        <div className="left w-0 lg:w-[50vw]">
          <img src="firstlady.png" alt="" className="h-[70vh] mx-auto " />
          <div className="w-72 invisible lg:visible flex bg-white rounded gap-2 mx-auto multi p-2">
            <div>
              <img src="firstfeet.png" alt="" className="mx-auto" />
            </div>
            <div className="invisible lg:visible">
              <h1 className="text-2xl font-extrabold bg-gradient-to-r from-[#129c8d] to-[#4eee8b] bg-clip-text text-transparent w-14">
                5.4k
              </h1>
              <p className="text-sm">Clients Satisfied</p>
            </div>
          </div>
        </div>
        <div className="right w-full lg:w-[50vw] my-auto text-center">
          <h3 className="flex items-center justify-center text-center text-[#26b57c]">
            <span class="material-symbols-outlined">arrow_forward</span> WELCOME
            TO JYTHU
          </h3>
          <div className="mx-auto w-full p-2 sm:w-[60vw] lg:w-[30vw] flex-wrap">
            <h1 className="text-5xl text-white">
              A Marketing{" "}
              <span className="text-[#26b57c] underline">Agency</span> To Grow
              Your Business
            </h1>
            <p className="text-[#949494] text-sm">
              We are 100+ professional software engineers with more than 10 year
              of experience in delivering superior products Believe it because
              you have seen it. Here are real numbers
            </p>
            <div>
              <div className="flex justify-between items-center my-6">
                <div className="flex">
                  <div className=" bg-clip-text bg-gradient-to-r from-[#129c8d] to-[#4eee8b] text-transparent text-xl font-bold">
                    GET STARTED
                  </div>
                  <div className="bg-gradient-to-r from-[#129c8d] to-[#4eee8b] flex items-center rounded-full w-8 h-8 justify-center">
                    <span class="material-symbols-outlined invert">
                      north_east
                    </span>
                  </div>
                </div>
                <div className="flex items-center text-xl text-white">
                  <span class="material-symbols-outlined bg-gradient-to-r from-[#129c8d] to-[#4eee8b] bg-clip-text text-transparent text-3xl">
                    play_circle
                  </span>{" "}
                  WATCH VIDEO
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div>
        <div className="font-bold text-3xl sm:text-5xl flex justify-center my-10">
          <span className="text-[#00c397]">200+</span> Trusted Partners
        </div>
        <div className="images flex flex-wrap w-full justify-around gap-4">
          <img src="google.png" alt="" />
          <img src="amazon.png" alt="" />
          <img src="spotify.webp" alt="" />
          <img src="slack.png" alt="" />
          <img src="linkedin.png" alt="" />
          <img src="walmart.png" alt="" />
        </div>
      </div>
      <div className="second flex  m-10 lg:m-20">
        <div className="show w-full lg:w-[50vw] my-auto">
          <div className="flex items-center text-[#00c397] font-bold text-lg">
            <span class="material-symbols-outlined">arrow_forward</span>About Us
          </div>
          <div>
            <h1 className="text-3xl sm:text-6xl font-bold">
              We Want To Give You The Best Services
            </h1>
            <p className="text-[#4f7396] text-lg">
              We are 100+ professional software engineers with more than 10 year
              of experience in delivering superior products Believe it because
              you have seen it. Here are real numbers
            </p>
            <div className="my-4 sm:flex align-middle">
              <div className="flex  sm:flex-col left w-[50vw]">
                <h1 className="text-7xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-[#129c8d] to-[#4eee8b] w-24">
                  24
                </h1>
                <h2 className="text-[#4f7396] text-3xl">
                  Year <br /> Experience
                </h2>
              </div>
              <div className="right w-[50vw]">
                <ul>
                  <li className="flex items-center gap-3 my-3">
                    <span class="material-symbols-outlined bg-[#d5f7d5] rounded-full">
                      check
                    </span>
                    Product Engineering
                  </li>
                  <li className="flex items-center gap-3 my-3">
                    <span class="material-symbols-outlined bg-[#d5f7d5] rounded-full">
                      check
                    </span>
                    Digital Sevices
                  </li>
                  <li className="flex items-center gap-3 my-3">
                    <span class="material-symbols-outlined bg-[#d5f7d5] rounded-full">
                      check
                    </span>
                    IT Consultancy
                  </li>
                  <li className="flex items-center gap-3 my-3">
                    <span class="material-symbols-outlined bg-[#d5f7d5] rounded-full">
                      check
                    </span>
                    Digital Services
                  </li>
                </ul>
              </div>
            </div>
            <div className="flex justify-center gap-3 my-3">
              <div className=" bg-clip-text bg-gradient-to-r from-[#129c8d] to-[#4eee8b] text-transparent text-xl font-bold">
                GET STARTED
              </div>
              <div className="bg-gradient-to-r from-[#129c8d] to-[#4eee8b] flex items-center rounded-full w-8 h-8 justify-center">
                <span class="material-symbols-outlined invert">north_east</span>
              </div>
            </div>
          </div>
        </div>
        <div className="hide w-0 lg:w-[50vw] flex justify-end">
          <img src="secondphoto.png" alt="" className="w-[550px]" />
        </div>
      </div>
      <br />
      <div className="third">
        <div className="flex items-center justify-center text-[#00c397] font-bold text-lg">
          <span class="material-symbols-outlined">arrow_forward</span>OUR BEST
          SERVICES
        </div>
        <div>
          <h1 className="text-3xl sm:text-6xl font-bold flex justify-center ">
            We Provide Best Services
          </h1>
        </div>
        <div className="flex flex-wrap justify-evenly">
          {ServiceList.map((item) => {
            return (
              <Card img={item.img} service={item.service} desc={item.desc} />
            );
          })}
        </div>
        <div className="flex gap-3 my-3 justify-center">
          <div className=" bg-clip-text bg-gradient-to-r from-[#129c8d] to-[#4eee8b] text-transparent text-xl font-bold">
            VEIW ALL SERVICES
          </div>
          <div className="bg-gradient-to-r from-[#129c8d] to-[#4eee8b] flex items-center rounded-full w-8 h-8 justify-center">
            <span class="material-symbols-outlined invert">north_east</span>
          </div>
        </div>
      </div>
      <br />
      <div className="forth flex m-10 overflow-hidden">
        <div className="hide hidden lg:block lg:w-[50vw]">
          <img src="forthpic.png" alt="" className="h-[85vh] mx-auto" />
        </div>
        <div className="show w-full lg:w-[50vw] lg:mx-auto text-center">
          <div className="flex items-center text-[#00c397] font-bold text-lg">
            <span class="material-symbols-outlined">arrow_forward</span>WITH SEO
            OPTIMIZATION
          </div>
          <div className="">
            <h1 className="text-3xl sm:text-5xl font-bold text-center">
              Marketing and Creative Solutions SEO
            </h1>
            <p className="text-[#4f7396] text-lg">
              We are 100+ professional software engineers with more than 10 year
              of experience in delivering superior products Believe it because
              you have seen it.
            </p>
          </div>
          <div className="flex justify-between m-4">
            <h1 className="font-bold">Financial Consulting</h1>
            <h1 className="bg-gradient-to-r from-[#129c8d] to-[#4eee8b] text-transparent bg-clip-text font-bold">
              80%
            </h1>
          </div>
          <div className="border-2  border-[#129c8d] rounded-full p-2 mx-3">
            <div className="w-[60vw] sm:max-w-[70vh] h-1 bg-gradient-to-r from-[#129c8d] to-[#4eee8b] rounded-full"></div>
          </div>
          <div className="flex justify-between m-4">
            <h1 className="font-bold">Financial Consulting</h1>
            <h1 className="bg-gradient-to-r from-[#129c8d] to-[#4eee8b] text-transparent bg-clip-text font-bold">
              80%
            </h1>
          </div>
          <div className="border-2 border-[#129c8d] rounded-full p-2 mx-3">
            <div className="w-[60vw] sm:max-w-[70vh] h-1 bg-gradient-to-r from-[#129c8d] to-[#4eee8b] rounded-full"></div>
          </div>
          <div className="flex justify-between m-4">
            <h1 className="font-bold">Financial Consulting</h1>
            <h1 className="bg-gradient-to-r from-[#129c8d] to-[#4eee8b] text-transparent bg-clip-text font-bold">
              80%
            </h1>
          </div>
          <div className="border-2 border-[#129c8d] rounded-full p-2 mx-3">
            <div className="w-[60vw] sm:max-w-[70vh] h-1 bg-gradient-to-r from-[#129c8d] to-[#4eee8b] rounded-full"></div>
          </div>
          <div className="flex gap-3 my-3 justify-center">
            <div className=" bg-clip-text bg-gradient-to-r from-[#129c8d] to-[#4eee8b] text-transparent text-xl font-bold">
              VEIW ALL SERVICES
            </div>
            <div className="bg-gradient-to-r from-[#129c8d] to-[#4eee8b] flex items-center rounded-full w-8 h-8 justify-center">
              <span class="material-symbols-outlined invert">north_east</span>
            </div>
          </div>
        </div>
      </div>
      <div>
        <img src="mid.png" alt="" className="w-[100vw]" />
      </div>
      <div className="fifth">
        <div className="md:flex justify-evenly">
          {People.map((i) => (
            <Cell img={i.img} name={i.name} prof={i.Prof} />
          ))}
        </div>
        <div className="flex gap-3 my-3 justify-center items-center">
          <div className=" bg-clip-text bg-gradient-to-r from-[#129c8d] to-[#4eee8b] text-transparent text-xl font-bold">
            VEIW ALL TEAM
          </div>
          <div className="bg-gradient-to-r from-[#129c8d] to-[#4eee8b] flex items-center rounded-full w-8 h-8 justify-center">
            <span class="material-symbols-outlined invert">north_east</span>
          </div>
        </div>
      </div>
      <div className="sixth lg:flex m-10">
        <div className="show w-full lg:w-[50vw] ">
          <div className="flex items-center text-[#00c397] font-bold text-lg">
            <span class="material-symbols-outlined">arrow_forward</span>Our Best
            Projects
          </div>
          <div>
            <h1 className="text-3xl sm:text-6xl font-bold my-2">
              Take A Look Our Work Gallery Recent Projects
            </h1>
          </div>
        </div>
        <div className="show w-full lg:w-[50vw]">
          <p className="text-[#4f7396] text-lg">
            We are 100+ professional software engineers with more than 10 year
            of experience in delivering superior products Believe it because you
            have seen it. Here are real numbers
          </p>
          <div className="flex gap-3 my-3 justify-center items-center">
            <div className=" bg-clip-text bg-gradient-to-r from-[#129c8d] to-[#4eee8b] text-transparent text-xl font-bold">
              VEIW ALL PROJECTS
            </div>
            <div className="bg-gradient-to-r from-[#129c8d] to-[#4eee8b] flex items-center rounded-full w-8 h-8 justify-center">
              <span class="material-symbols-outlined invert">north_east</span>
            </div>
          </div>
        </div>
      </div>
      <div className="seven  m-10 my-20">
        <div className="w-[60vw] mx-auto">
          <div className="flex items-center justify-center text-[#00c397] font-bold text-lg">
            <span class="material-symbols-outlined">arrow_forward</span>Our Work
            Progress
          </div>
          <div>
            <h1 className="text-3xl sm:text-6xl font-bold text-center">
              A Simple, Yet Powerful And Efficient Process
            </h1>
          </div>
        </div>
        <div className="lg:flex justify-evenly my-8">
          {Progress.map((i) => (
            <Card img={i.img} service={i.name} desc={i.desc} />
          ))}
        </div>
      </div>
      <div className="eight lg:flex m-20">
        <div className="show w-full lg:w-[50vw]">
          <div>
            <div className="flex items-center text-[#00c397] font-bold text-lg">
              <span class="material-symbols-outlined">arrow_forward</span>OUR
              BLOG & NEWS
            </div>
            <div>
              <h1 className="text-3xl sm:text-6xl font-bold">Get More Updates for News</h1>
              <p className="text-[#4f7396] text-lg">
                We are 100+ professional software engineers with more than 10
                year of experience in delivering superior products Believe it
                because you have seen it. Here are real numbers
              </p>
              <div className="flex gap-3 my-3">
                <div className=" bg-clip-text bg-gradient-to-r from-[#129c8d] to-[#4eee8b] text-transparent text-xl font-bold">
                  VEIW ALL PROJECTS
                </div>
                <div className="bg-gradient-to-r from-[#129c8d] to-[#4eee8b] flex items-center rounded-full w-8 h-8 justify-center">
                  <span class="material-symbols-outlined invert">
                    north_east
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="show w-full lg:w-[50vw]">
          {blogs.map((i) => (
            <div className="m-3">
              <Blog img={i.img} head={i.head} area={i.area} desc={i.desc} />
            </div>
          ))}
        </div>
      </div>
      <div className="footer p-1 bg-[#00425a] h-[90vh]">
        <div className="main bg-gradient-to-r from-[#129c8d] to-[#4eee8b] rounded-3xl h-[50vh] m-20 flex  ">
          <div className="left hidden md:flex w-[50vw] items-end">
            <img src="footerpic.png" alt="" className="h-96 mx-auto" />
          </div>
          <div className="right w-[50vw] p-6">
            <h1 className="text-white text-4xl font-bold my-6">
              Subscribe To Our News Letter
            </h1>
            <p className="text-white hidden sm:block">
              We are 100+ professional software engineers with more than 10
              years in delive ring super products it because you've seen it.
            </p>
            <div className="p-[2px] bg-white flex justify-between rounded-lg my-4">
              <input
                type="eamil"
                name="email"
                id=""
                placeholder="Your Email"
                className="w-full px-2"
              />
              <button
                type="submit"
                className="bg-gradient-to-r from-[#129c8d] to-[#4eee8b] text-white p-1 rounded-xl px-2"
              >
                Submit
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
