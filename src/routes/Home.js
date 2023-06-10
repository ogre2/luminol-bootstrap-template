import React from "react";
import { Link } from "react-router-dom";
import { Card, Blog, Table, Testimonial } from "../components";
import { BsChevronRight } from "react-icons/bs";
import {
  Slack,
  PayPal,
  AirBnB,
  Webflow,
  WebflowPrimary,
  AirBnBPrimary,
  SlackPrimary,
  LaptopIllustration,
  MailChimpPrimary,
  GrowIllustration,
} from "../assets";
import SwiperCore, { Autoplay, Pagination, Scrollbar, A11y } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const Home = () => {
  SwiperCore.use([Autoplay]);

  return (
    <main className="content" role="main">
      <section className="header">
        <div className="container position-relative py-5">
          <div className="row position-relative d-flex align-items-center justify-content-center">
            <div className="col-md-6 pe-lg-5">
              <h1 className="fw-600">
                <div className="d-none d-lg-block">
                  Turn your ideas into a{" "}
                  <span className="text-primary">business</span>
                </div>
                <div className="d-block d-lg-none">
                  <span className="d-block d-lg-none">
                    Turn your ideas into a thriving{" "}
                    <span className="text-primary">business</span>
                  </span>
                </div>
              </h1>

              <p className="lead text-muted lh-32 fw-400">
                Build a beautiful, modern website with flexible Bootstrap
                components built from scratch.
              </p>

              <div className="mt-3">
                <Link className="btn btn-primary btn-padded me-2 d-inline-block">
                  Get started
                </Link>
                <Link className="btn btn-neutral btn-padded d-none d-lg-inline-block text-primary">
                  Learn more <BsChevronRight />
                </Link>
              </div>
            </div>
            <div className="col-12 col-md-6 order-md-2 pe-0 mb-md-0 d-none d-md-block">
              <div className="position-relative left-5 left-md-0">
                <figure className="z-3">
                  <img
                    className="img-fluid rounded perspective-right mx-auto d-block"
                    src="https://images.unsplash.com/photo-1572981872601-f290409c0bdc?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
                    alt="Guy"
                    style={{
                      height: "650px",
                      maxWidth: "93%",
                      objectFit: "cover",
                      overflow: "clip",
                    }}
                  />
                </figure>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="cards">
        <div className="container">
          <div className="row mb-5 justify-content-center text-center">
            <div className="col-lg-7 col-md-10">
              <h2 className="mt-4 display-6 fw-500">Manage your money</h2>
              <div className="mt-2">
                <p className="lead lh-32">
                  Thousands of developers around the world have already made
                  Luminol their main tool for building modern websites.
                </p>
              </div>
            </div>
          </div>
          <div className="row d-flex justify-content-between align-items-center">
            <div className="col-sm-6 col-lg-4 mb-04 mb-lg-0">
              <Card
                image={
                  "https://images.unsplash.com/photo-1517502884422-41eaead166d4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1025&q=80"
                }
                title={"Creative Suite"}
                description={
                  "Luminol makes it easy to stay on top of what matters most."
                }
                items={[
                  "Advanced analytics",
                  "Digital marketing",
                  "Brand design",
                ]}
              />
            </div>

            <div className="col-sm-6 col-lg-4 mb-04 mb-lg-0">
              <Card
                image={
                  "https://images.unsplash.com/photo-1556761175-b413da4baf72?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1074&q=80"
                }
                title={"Collaborative"}
                description={
                  "We have the tools and personnel to elevate your business."
                }
                items={[
                  "24/7 Customer service",
                  "Expert feedback",
                  "Remote analysis",
                ]}
              />
            </div>

            <div className="col-sm-6 col-lg-4 mb-04 mb-lg-0">
              <Card
                image={
                  "https://images.unsplash.com/photo-1598121210875-08d6cf351459?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=764&q=80"
                }
                title={"Industry Leaders"}
                description={
                  "We lead in the business of knowing how to run and grow a business."
                }
                items={[
                  "Enterprise technology",
                  "Business standards",
                  "Sustainability",
                ]}
              />
            </div>
          </div>
        </div>
      </section>

      <section className="features mx-5 bg-light rounded-2 mx-lg-10">
        <div className="container rounded">
          <div className="row mb-65 justify-content-center text-center">
            <div className="col-lg-7 col-md-10">
              <h2 className="mt-4 display-6 fw-500">Develop modern sites</h2>
              <div className="mt-2">
                <p className="lead lh-32">
                  Thousands of developers around the world have already made
                  Luminol their main tool for building modern websites.
                </p>
              </div>
            </div>
          </div>

          <div className="row d-flex align-items-center">
            <div className="col-lg-7 mb-5 mb-lg-0">
              <div className="pe-lg-5">
                <figure className="device-browser">
                  <div className="device-browser-header">
                    <div className="device-browser-header-btn-list">
                      <span className="device-browser-header-btn"></span>
                      <span className="device-browser-header-btn"></span>
                      <span className="device-browser-header-btn"></span>
                    </div>
                    <div className="device-browser-header-browser-bar">
                      ogre2.github.io/Luminol
                    </div>
                  </div>

                  <div className="device-browser-frame">
                    <img
                      className="device-browser-img"
                      src="https://stephenwm.me/Omega/static/media/img2.4ea1a3cb7c7727de3e93.png"
                      alt="Browser"
                    />
                  </div>
                </figure>
              </div>
            </div>
            <div className="col-lg-5 mt-5 mt-lg-0">
              <div className="mb-4">
                <h4>Build modern user experiences</h4>
                <p className="text-3 text-gray-700">
                  We help businesses bring ideas to life in the digital world,
                  by designing and building the tools that they need to win.
                </p>
              </div>

              <ul className="list-checked list-checked-primary mb-5">
                <li className="list-checked-item">
                  Less routine - more creativity
                </li>
                <li className="list-checked-item">
                  Hundreds of thousands saved
                </li>
                <li className="list-checked-item">Scale budgets efficiently</li>
              </ul>

              <Link className="btn btn-primary btn-padded d-inline-block">
                Get started
              </Link>

              <hr className="border-top mt-4" />

              <div className="mt-4">
                <span className="text-gray-700">
                  Trusted by leading companies
                </span>

                <div className="d-flex mt-4">
                  <div className="col">
                    <img
                      style={{ width: "75px", height: "auto" }}
                      src={Webflow}
                      alt="Logo"
                    />
                  </div>

                  <div className="col">
                    <img
                      style={{ width: "75px", height: "auto" }}
                      src={PayPal}
                      alt="Logo"
                    />
                  </div>

                  <div className="col">
                    <img
                      style={{ width: "75px", height: "auto" }}
                      src={AirBnB}
                      alt="Logo"
                    />
                  </div>

                  <div className="col">
                    <img
                      style={{ width: "75px", height: "auto" }}
                      src={Slack}
                      alt="Logo"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white mx-5 mx-lg-10">
        <div className="container">
          <div className="row align-items-md-center">
            <Swiper
              // install Swiper modules
              modules={[Pagination, Scrollbar, A11y]}
              spaceBetween={50}
              slidesPerView={1}
              autoplay={{ delay: 3000 }}
              pagination={{ clickable: true }}
              scrollbar={{ draggable: true }}
              onSwiper={(swiper) => console.log(swiper)}
              onSlideChange={() => console.log("slide change")}
            >
              <SwiperSlide>
                <Testimonial
                  image={
                    "https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80"
                  }
                  logo={WebflowPrimary}
                  name={"Michael C."}
                  quote={
                    "From the moment I engaged with Luminol, I knew I was in good hands. Their unwavering commitment to providing top-notch service and their keen eye for detail have left me astounded."
                  }
                  role={"Senior V.P. of Operations at Webflow"}
                />
              </SwiperSlide>
              <SwiperSlide>
                <Testimonial
                  image={
                    "https://images.unsplash.com/photo-1627161683077-e34782c24d81?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=703&q=80"
                  }
                  logo={MailChimpPrimary}
                  name={"Emily K."}
                  quote={
                    "Luminol's attention to detail and care has truly amazed me. I am confident that I will be a repeat customer, impressed by their exceptional service and dedication to perfection."
                  }
                  role={"Project Manager at MailChimp"}
                />
              </SwiperSlide>
              <SwiperSlide>
                <Testimonial
                  image={
                    "https://images.unsplash.com/photo-1542190891-2093d38760f2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80"
                  }
                  logo={SlackPrimary}
                  name={"John A."}
                  quote={
                    "I can't express enough how impressed I am with Luminol's team. Choosing them for my business assistance needs was a wise decision, and I couldn't be happier with the outcome."
                  }
                  role={"Head of Sales at Slack"}
                />
              </SwiperSlide>
              <SwiperSlide>
                <Testimonial
                  image={
                    "https://images.unsplash.com/photo-1611432579402-7037e3e2c1e4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=765&q=80"
                  }
                  logo={AirBnBPrimary}
                  name={"Mary C."}
                  quote={
                    "Luminol's team has gone above and beyond in delivering an impeccable theme. Their relentless dedication to providing care and ensuring every intricate detail is perfect is commendable."
                  }
                  role={"V.P. of Accounting at AirBnB"}
                />
              </SwiperSlide>
            </Swiper>
          </div>
        </div>
      </section>

      <section className="features mx-5 bg-light rounded-2 mx-lg-10">
        <div className="container rounded">
          <div className="row mb-65 justify-content-center text-center">
            <div className="col-lg-7 col-md-10">
              <h2 className="mt-4 display-6 fw-500">Grow your business</h2>
              <div className="mt-2">
                <p className="lead lh-32">
                  Thousands of developers around the world have already made
                  Luminol their main tool for building modern websites.
                </p>
              </div>
            </div>
          </div>

          <div className="row d-flex align-items-md-center ">
            <div className="col-md-6 mb-5 mb-md-0">
              <div className="text-center">
                <img
                  className="img-fluid max-width-20"
                  alt="Illustration"
                  src={GrowIllustration}
                />
              </div>
            </div>

            <div className="col-md-6">
              <Table />
            </div>
          </div>

          <div className="border-top my-5"></div>

          <div className="row d-flex align-items-md-center">
            <div className="col-md-6 mb-5 mb-md-0">
              <div className="text-center">
                <img
                  className="img-fluid max-width-20"
                  alt="Illustration"
                  src={LaptopIllustration}
                />
              </div>
            </div>
            <div className="col-md-6 order-lg-first">
              <Table />
            </div>
          </div>

          {/* <div className="row justify-content-center">
            <div className="col-sm-6 col-md-3 mb-5 mb-md-0">
              <div className="text-center">
                <h2 className="display-4 fw-600 d-flex align-items-center justify-content-center">
                  <BsArrowDown className="fs-40 text-danger" />
                  47%
                </h2>
                <p className="mb-0">
                  fewer meetings across
                  <br />
                  organizations
                </p>
              </div>
            </div>

            <div className="col-sm-6 col-md-3 mb-5 mb-md-0">
              <div className="text-center">
                <h2 className="display-4 fw-600 d-flex align-items-center justify-content-center">
                  <BsArrowUp className="fs-40 text-success" />
                  23%
                </h2>
                <p className="mb-0">
                  increase in traffic on
                  <br />
                  webpages with Looms
                </p>
              </div>
            </div>

            <div className="col-sm-6 col-md-3 mb-5 mb-md-0">
              <div className="text-center">
                <h2 className="display-4 fw-600 t-flex align-items-center justify-content-center">
                  <BsArrowUp className="fs-40 text-success" />
                  9.3%
                </h2>
                <p className="mb-0">
                  boost in reply rates across
                  <br />
                  sales outreach
                </p>
              </div>
            </div>

            <div className="col-sm-6 col-md-3">
              <div className="text-center">
                <h2 className="display-4 fw-600 t-flex align-items-center justify-content-center">
                  <BsArrowUp className="fs-40 text-success" />
                  9.3%
                </h2>
                <p className="mb-0">
                  boost in reply rates across
                  <br />
                  sales outreach
                </p>
              </div>
            </div>
          </div> */}
        </div>
      </section>

      <section>
        <div className="contianer">
          <div className="container">
            <div className="row mb-65 justify-content-center text-center">
              <div className="col-lg-7 col-md-10">
                <h2 className="mt-4 display-6 fw-500">Discover more</h2>
                <div className="mt-2">
                  <p className="lead lh-32">
                    Read some of our available resources
                  </p>
                </div>
              </div>
            </div>

            <div className="row gx-lg-5">
              <div className="col-sm-6 col-lg-4 mb-5">
                <Blog
                  image={
                    "https://images.unsplash.com/photo-1505373877841-8d25f7d46678?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1112&q=80"
                  }
                  title={"Leave a meaningful impact"}
                  description={
                    "Understand the effects of having your business leave behind a good impact."
                  }
                />
              </div>
              <div className="col-sm-6 col-lg-4 mb-5">
                <Blog
                  image={
                    "https://images.unsplash.com/photo-1661956602153-23384936a1d3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
                  }
                  title={"Take control of your revenue"}
                  description={
                    "Learn how to take full control of your revenue and create more useful resources."
                  }
                />
              </div>
              <div className="col-sm-6 col-lg-4 mb-5">
                <Blog
                  image={
                    "https://images.unsplash.com/photo-1508385082359-f38ae991e8f2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80"
                  }
                  title={"Expanding your business reach"}
                  description={
                    "Business reach is vital in surviving the market of your industry, we'll teach you how."
                  }
                />
              </div>
            </div>

            <div className="text-center d-flex justify-content-center">
              <div className="card card-info-link border rounded-pill d-block card-sm">
                <div className="card-body text-gray-700">
                  Want to read more?{" "}
                  <Link className="link fw-600 text-primary ms-2" to="#">
                    Go here <BsChevronRight />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Home;
