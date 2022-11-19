import React from 'react'
import { Link } from 'react-router-dom'

import { Helmet } from 'react-helmet'

import GalleryCard2 from '../components/gallery-card2'
import BlogPostCard1 from '../components/blog-post-card1'
import FeatureCard4 from '../components/feature-card4'
import './home.css'
<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous"></link>

const Home = (props) => {
  return (
    <div className="home-container">
      <Helmet>
        <title>Amazon Website Desktop</title>
        <meta property="og:title" content="Graceful Thankful Mouse" />
      </Helmet>
      <div className="home-main-body">
        <div className="home-navbar">
          <Link to="/" className="home-navlink">
            <div className="home-logo">
              <img
                alt="image"
                src="/playground_assets/amz-1500w.png"
                className="home-image"
              />
            </div>
          </Link>
          <Link to="/page" className="home-navlink1">
            <div className="home-address">
              <span className="home-text">Hello</span>
              <span className="home-text001">Select your address</span>
              <svg viewBox="0 0 1024 1024" className="home-icon">
                <path d="M512 213.333c68.651 0 133.12 26.197 181.504 73.813 48.043 47.232 74.496 110.037 74.496 176.64s-26.453 129.28-74.453 176.597l-181.547 178.517-181.504-178.603c-48-47.232-74.453-109.909-74.453-176.597s26.453-129.365 74.453-176.683c48.427-47.488 112.939-73.685 181.504-73.685M512 128c-87.339 0-174.763 32.768-241.365 98.347-133.291 131.157-133.291 343.765 0 474.923l241.365 237.355 241.365-237.44c133.291-131.072 133.291-343.723 0-474.837-66.603-65.579-153.984-98.347-241.365-98.347z"></path>
                <path d="M512 362.624c28.501 0 55.296 11.093 75.435 31.189 41.643 41.643 41.643 109.312 0 150.912-20.181 20.139-46.933 31.189-75.435 31.189s-55.253-11.093-75.435-31.189c-41.643-41.643-41.643-109.312 0-150.912 20.181-20.096 46.976-31.189 75.435-31.189M512 319.957c-38.229 0-76.459 14.592-105.6 43.691-58.325 58.325-58.325 152.917 0 211.243 29.184 29.184 67.328 43.691 105.6 43.691s76.459-14.592 105.6-43.691c58.283-58.325 58.283-152.917 0-211.243-29.141-29.141-67.371-43.691-105.6-43.691z"></path>
              </svg>
            </div>
          </Link>
          <div className="home-searchbar">
            <div
              data-thq="thq-dropdown"
              className="home-thq-dropdown list-item"
            >
              <div
                data-thq="thq-dropdown-toggle"
                className="home-dropdown-toggle"
              >
                <span className="home-text002">All</span>
                <div
                  data-thq="thq-dropdown-arrow"
                  className="home-dropdown-arrow"
                >
                  <svg viewBox="0 0 1024 1024" className="home-icon03">
                    <path d="M426 726v-428l214 214z"></path>
                  </svg>
                </div>
              </div>
              <ul data-thq="thq-dropdown-list" className="home-dropdown-list">
                <li data-thq="thq-dropdown" className="home-dropdown list-item">
                  <div
                    data-thq="thq-dropdown-toggle"
                    className="home-dropdown-toggle01"
                  >
                    <a
                      href="https://example.com"
                      target="_blank"
                      rel="noreferrer noopener"
                    >
                      Automotive
                    </a>
                  </div>
                </li>
                <li
                  data-thq="thq-dropdown"
                  className="home-dropdown01 list-item"
                >
                  <div
                    data-thq="thq-dropdown-toggle"
                    className="home-dropdown-toggle02"
                  >
                    <a
                      href="https://example.com"
                      target="_blank"
                      rel="noreferrer noopener"
                    >
                      <span>Men</span>
                      <br></br>
                    </a>
                  </div>
                </li>
                <li
                  data-thq="thq-dropdown"
                  className="home-dropdown02 list-item"
                >
                  <div
                    data-thq="thq-dropdown-toggle"
                    className="home-dropdown-toggle03"
                  >
                    <a
                      href="https://example.com"
                      target="_blank"
                      rel="noreferrer noopener"
                    >
                      <span>Women</span>
                      <br></br>
                    </a>
                  </div>
                </li>
                <li
                  data-thq="thq-dropdown"
                  className="home-dropdown03 list-item"
                >
                  <div
                    data-thq="thq-dropdown-toggle"
                    className="home-dropdown-toggle04"
                  >
                    <a
                      href="https://example.com"
                      target="_blank"
                      rel="noreferrer noopener"
                    >
                      <span>Electronics</span>
                      <br></br>
                    </a>
                  </div>
                </li>
              </ul>
            </div>
            <div className="home-searchicon">
              <svg viewBox="0 0 1024 1024" className="home-icon05">
                <path d="M406 598q80 0 136-56t56-136-56-136-136-56-136 56-56 136 56 136 136 56zM662 598l212 212-64 64-212-212v-34l-12-12q-76 66-180 66-116 0-197-80t-81-196 81-197 197-81 196 81 80 197q0 42-20 95t-46 85l12 12h34z"></path>
              </svg>
            </div>
            <textarea
              placeholder="placeholder"
              className="home-textarea textarea"
            ></textarea>
          </div>
          <div className="home-acclist">
            <span className="home-hello">Hello, Saish</span>
            <div data-thq="thq-dropdown" className="home-dropdown04 list-item">
              <div
                data-thq="thq-dropdown-toggle"
                className="home-dropdown-toggle05"
              >
                <span className="home-text009">Account &amp; Lists</span>
                <div
                  data-thq="thq-dropdown-arrow"
                  className="home-dropdown-arrow1"
                >
                  <svg viewBox="0 0 1024 1024" className="home-icon07">
                    <path d="M426 726v-428l214 214z"></path>
                  </svg>
                </div>
              </div>
              <ul data-thq="thq-dropdown-list" className="home-dropdown-list1">
                <li
                  data-thq="thq-dropdown"
                  className="home-dropdown05 list-item"
                >
                  <div
                    data-thq="thq-dropdown-toggle"
                    className="home-dropdown-toggle06"
                  >
                    <div className="home-container01">
                      <span className="home-text010">Your Lists</span>
                      <a
                        href="https://example.com"
                        target="_blank"
                        rel="noreferrer noopener"
                        className="home-link04"
                      >
                        Create a Wish List
                      </a>
                      <a
                        href="https://example.com"
                        target="_blank"
                        rel="noreferrer noopener"
                        className="home-link05"
                      >
                        Wish From Any Website
                      </a>
                      <a
                        href="https://example.com"
                        target="_blank"
                        rel="noreferrer noopener"
                        className="home-link06"
                      >
                        Find a Gift
                      </a>
                      <a
                        href="https://example.com"
                        target="_blank"
                        rel="noreferrer noopener"
                        className="home-link07"
                      >
                        Baby Registry
                      </a>
                      <a
                        href="https://example.com"
                        target="_blank"
                        rel="noreferrer noopener"
                        className="home-link08"
                      >
                        Discover Your style
                      </a>
                      <a
                        href="https://example.com"
                        target="_blank"
                        rel="noreferrer noopener"
                        className="home-link09"
                      >
                        Explore Showroom
                      </a>
                    </div>
                    <div className="home-container02">
                      <span className="home-text011">Your Account</span>
                      <a
                        href="https://example.com"
                        target="_blank"
                        rel="noreferrer noopener"
                        className="home-link10"
                      >
                        Your Account
                      </a>
                      <a
                        href="https://example.com"
                        target="_blank"
                        rel="noreferrer noopener"
                        className="home-link11"
                      >
                        Your Orders
                      </a>
                      <a
                        href="https://example.com"
                        target="_blank"
                        rel="noreferrer noopener"
                        className="home-link12"
                      >
                        Your Recommendations
                      </a>
                      <a
                        href="https://example.com"
                        target="_blank"
                        rel="noreferrer noopener"
                        className="home-link13"
                      >
                        Your Subscribe &amp; Save item
                      </a>
                      <a
                        href="https://example.com"
                        target="_blank"
                        rel="noreferrer noopener"
                        className="home-link14"
                      >
                        Your Prime Membership
                      </a>
                      <a
                        href="https://example.com"
                        target="_blank"
                        rel="noreferrer noopener"
                        className="home-link15"
                      >
                        Your Amazon Credit Card
                      </a>
                      <a
                        href="https://example.com"
                        target="_blank"
                        rel="noreferrer noopener"
                        className="home-link16"
                      >
                        Register for a Business Account
                      </a>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
            <svg viewBox="0 0 1024 1024" className="home-icon09">
              <path d="M316 366l196 196 196-196 60 60-256 256-256-256z"></path>
            </svg>
          </div>
          <div className="home-container03">
            <span className="home-text012">
              <span>Returns</span>
              <br></br>
              <span className="home-text015">&amp; Orders</span>
              <br></br>
            </span>
          </div>
          <div className="home-container04">
            <svg viewBox="0 0 1024 1024" className="home-icon11">
              <path d="M469.333 896c0-23.552-9.6-44.928-25.003-60.331s-36.779-25.003-60.331-25.003-44.928 9.6-60.331 25.003-25.003 36.779-25.003 60.331 9.6 44.928 25.003 60.331 36.779 25.003 60.331 25.003 44.928-9.6 60.331-25.003 25.003-36.779 25.003-60.331zM938.667 896c0-23.552-9.6-44.928-25.003-60.331s-36.779-25.003-60.331-25.003-44.928 9.6-60.331 25.003-25.003 36.779-25.003 60.331 9.6 44.928 25.003 60.331 36.779 25.003 60.331 25.003 44.928-9.6 60.331-25.003 25.003-36.779 25.003-60.331zM308.096 298.667h621.653l-58.496 306.816c-1.963 9.728-7.083 18.133-14.165 24.235-7.68 6.656-17.621 10.496-29.355 10.283h-415.317c-9.899 0.128-19.243-3.029-26.709-8.661-8.107-6.101-14.037-14.976-16.171-25.728zM42.667 85.333h135.68l36.181 180.864c4.608 18.645 21.419 32.469 41.472 32.469h52.096l-17.067-85.333h-35.029c-23.552 0-42.667 19.115-42.667 42.667 0 2.261 0.171 4.48 0.512 6.613 0.171 1.195 0.427 2.432 0.725 3.584l71.296 356.139c6.357 32.043 24.277 59.008 48.64 77.269 22.229 16.725 49.92 26.155 79.104 25.728h414.123c31.915 0.64 62.080-11.136 85.12-31.019 21.077-18.176 36.181-43.221 42.027-71.808l68.352-358.485c4.395-23.168-10.752-45.483-33.92-49.92-2.773-0.555-5.547-0.811-7.979-0.768h-690.347l-35.84-179.029c-4.011-19.712-21.205-34.304-41.813-34.304h-170.667c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667z"></path>
            </svg>
            <span className="home-text017">Cart</span>
          </div>
        </div>
        <div className="home-nav2">
          <div data-thq="thq-dropdown" className="home-all list-item">
            <div
              data-thq="thq-dropdown-toggle"
              className="home-dropdown-toggle07"
            >
              <div
                data-thq="thq-dropdown-arrow"
                className="home-dropdown-arrow2"
              >
                <svg viewBox="0 0 1024 1024" className="home-icon13">
                  <path d="M64 192h896v192h-896zM64 448h896v192h-896zM64 704h896v192h-896z"></path>
                </svg>
              </div>
              <span className="home-all1">
                <span>All</span>
                <br></br>
              </span>
            </div>
            <ul data-thq="thq-dropdown-list" className="home-main-list">
              <li data-thq="thq-dropdown" className="home-trending list-item">
                <div
                  data-thq="thq-dropdown-toggle"
                  className="home-dropdown-toggle08"
                >
                  <span className="home-text020">Trending</span>
                </div>
              </li>
              <li
                data-thq="thq-dropdown"
                className="home-best-seller list-item"
              >
                <div
                  data-thq="thq-dropdown-toggle"
                  className="home-dropdown-toggle09"
                >
                  <span className="home-text021">Best Seller</span>
                </div>
              </li>
              <li data-thq="thq-dropdown" className="home-your-acc list-item">
                <div
                  data-thq="thq-dropdown-toggle"
                  className="home-dropdown-toggle10"
                >
                  <span className="home-text022">Your Account</span>
                </div>
              </li>
              <li data-thq="thq-dropdown" className="home-sign-out list-item">
                <div
                  data-thq="thq-dropdown-toggle"
                  className="home-dropdown-toggle11"
                >
                  <span className="home-text023">Sign out</span>
                </div>
              </li>
              <li
                data-thq="thq-dropdown"
                className="home-new-releases list-item"
              >
                <div
                  data-thq="thq-dropdown-toggle"
                  className="home-dropdown-toggle12"
                >
                  <span className="home-text024">New Releases</span>
                </div>
              </li>
              <div className="home-border-1">
                <li
                  data-thq="thq-dropdown"
                  className="home-dropdown06 list-item"
                >
                  <div
                    data-thq="thq-dropdown-toggle"
                    className="home-dropdown-toggle13"
                  >
                    <span className="home-text025">Movers &amp; Shakers</span>
                  </div>
                </li>
              </div>
              <li
                data-thq="thq-dropdown"
                className="home-digital-content list-item"
              >
                <div
                  data-thq="thq-dropdown-toggle"
                  className="home-dropdown-toggle14"
                >
                  <span className="home-text026">
                    Digital content and Devices
                  </span>
                </div>
              </li>
              <div data-thq="thq-dropdown" className="home-alexa list-item">
                <div
                  data-thq="thq-dropdown-toggle"
                  className="home-dropdown-toggle15"
                >
                  <span className="home-text027">Echo &amp; Alexa</span>
                  <svg viewBox="0 0 1024 1024" className="home-icon15">
                    <path d="M366 708l196-196-196-196 60-60 256 256-256 256z"></path>
                  </svg>
                </div>
                <ul
                  data-thq="thq-dropdown-list"
                  className="home-dropdown-list2"
                >
                  <li
                    data-thq="thq-dropdown"
                    className="home-dropdown07 list-item"
                  >
                    <div
                      data-thq="thq-dropdown-toggle"
                      className="home-dropdown-toggle16"
                    >
                      <span className="home-text028">Eco &amp; alexa</span>
                    </div>
                  </li>
                  <li
                    data-thq="thq-dropdown"
                    className="home-dropdown08 list-item"
                  >
                    <div
                      data-thq="thq-dropdown-toggle"
                      className="home-dropdown-toggle17"
                    >
                      <span className="home-text029">Eco Flex</span>
                    </div>
                  </li>
                  <li
                    data-thq="thq-dropdown"
                    className="home-dropdown09 list-item"
                  >
                    <div
                      data-thq="thq-dropdown-toggle"
                      className="home-dropdown-toggle18"
                    >
                      <span className="home-text030">Eco 5</span>
                    </div>
                  </li>
                  <li
                    data-thq="thq-dropdown"
                    className="home-dropdown10 list-item"
                  >
                    <div
                      data-thq="thq-dropdown-toggle"
                      className="home-dropdown-toggle19"
                    >
                      <span className="home-text031">Eco Buds</span>
                    </div>
                    <div className="home-container05"></div>
                  </li>
                  <li
                    data-thq="thq-dropdown"
                    className="home-dropdown11 list-item"
                  >
                    <div
                      data-thq="thq-dropdown-toggle"
                      className="home-dropdown-toggle20"
                    >
                      <span className="home-text032">Alexa Smart Home</span>
                    </div>
                  </li>
                  <li
                    data-thq="thq-dropdown"
                    className="home-dropdown12 list-item"
                  >
                    <div
                      data-thq="thq-dropdown-toggle"
                      className="home-dropdown-toggle21"
                    >
                      <span className="home-text033">Amazon Smart Plug</span>
                    </div>
                  </li>
                  <li
                    data-thq="thq-dropdown"
                    className="home-dropdown13 list-item"
                  >
                    <div
                      data-thq="thq-dropdown-toggle"
                      className="home-dropdown-toggle22"
                    >
                      <span className="home-text034">Smart Home</span>
                    </div>
                  </li>
                  <li
                    data-thq="thq-dropdown"
                    className="home-dropdown14 list-item"
                  >
                    <div
                      data-thq="thq-dropdown-toggle"
                      className="home-dropdown-toggle23"
                    >
                      <span className="home-text035">Alexa Accessibility</span>
                    </div>
                  </li>
                </ul>
              </div>
              <div data-thq="thq-dropdown" className="home-kindle list-item">
                <div
                  data-thq="thq-dropdown-toggle"
                  className="home-dropdown-toggle24"
                >
                  <span className="home-text036">Kindle</span>
                  <svg viewBox="0 0 1024 1024" className="home-icon17">
                    <path d="M366 708l196-196-196-196 60-60 256 256-256 256z"></path>
                  </svg>
                </div>
                <ul
                  data-thq="thq-dropdown-list"
                  className="home-dropdown-list3"
                >
                  <li
                    data-thq="thq-dropdown"
                    className="home-dropdown15 list-item"
                  >
                    <div
                      data-thq="thq-dropdown-toggle"
                      className="home-dropdown-toggle25"
                    >
                      <span className="home-text037">Kindle E-Readers</span>
                    </div>
                  </li>
                  <li
                    data-thq="thq-dropdown"
                    className="home-dropdown16 list-item"
                  >
                    <div
                      data-thq="thq-dropdown-toggle"
                      className="home-dropdown-toggle26"
                    >
                      <span className="home-text038">All new Kindle</span>
                    </div>
                  </li>
                  <li
                    data-thq="thq-dropdown"
                    className="home-dropdown17 list-item"
                  >
                    <div
                      data-thq="thq-dropdown-toggle"
                      className="home-dropdown-toggle27"
                    >
                      <span className="home-text039">Kindle Papperwhite</span>
                    </div>
                  </li>
                  <li
                    data-thq="thq-dropdown"
                    className="home-dropdown18 list-item"
                  >
                    <div
                      data-thq="thq-dropdown-toggle"
                      className="home-dropdown-toggle28"
                    >
                      <span className="home-text040">Kindle Oasis</span>
                    </div>
                    <div className="home-container06"></div>
                  </li>
                  <li
                    data-thq="thq-dropdown"
                    className="home-dropdown19 list-item"
                  >
                    <div
                      data-thq="thq-dropdown-toggle"
                      className="home-dropdown-toggle29"
                    >
                      <span className="home-text041">Kindle Store</span>
                    </div>
                  </li>
                  <li
                    data-thq="thq-dropdown"
                    className="home-dropdown20 list-item"
                  >
                    <div
                      data-thq="thq-dropdown-toggle"
                      className="home-dropdown-toggle30"
                    >
                      <span className="home-text042">Kindle Books</span>
                    </div>
                  </li>
                  <li
                    data-thq="thq-dropdown"
                    className="home-dropdown21 list-item"
                  >
                    <div
                      data-thq="thq-dropdown-toggle"
                      className="home-dropdown-toggle31"
                    >
                      <span className="home-text043">Kindle Unlimited</span>
                    </div>
                  </li>
                  <li
                    data-thq="thq-dropdown"
                    className="home-dropdown22 list-item"
                  >
                    <div
                      data-thq="thq-dropdown-toggle"
                      className="home-dropdown-toggle32"
                    >
                      <span className="home-text044">Prime Reading</span>
                    </div>
                  </li>
                </ul>
              </div>
              <div data-thq="thq-dropdown" className="home-fire list-item">
                <div
                  data-thq="thq-dropdown-toggle"
                  className="home-dropdown-toggle33"
                >
                  <span className="home-text045">
                    Fire tv &amp; Fire Tablets
                  </span>
                  <svg viewBox="0 0 1024 1024" className="home-icon19">
                    <path d="M366 708l196-196-196-196 60-60 256 256-256 256z"></path>
                  </svg>
                </div>
                <ul
                  data-thq="thq-dropdown-list"
                  className="home-dropdown-list4"
                >
                  <li
                    data-thq="thq-dropdown"
                    className="home-dropdown23 list-item"
                  >
                    <div
                      data-thq="thq-dropdown-toggle"
                      className="home-dropdown-toggle34"
                    >
                      <span className="home-text046">Fire Tablets</span>
                    </div>
                  </li>
                  <li
                    data-thq="thq-dropdown"
                    className="home-dropdown24 list-item"
                  >
                    <div
                      data-thq="thq-dropdown-toggle"
                      className="home-dropdown-toggle35"
                    >
                      <span className="home-text047">All New Fire 7</span>
                    </div>
                  </li>
                  <li
                    data-thq="thq-dropdown"
                    className="home-dropdown25 list-item"
                  >
                    <div
                      data-thq="thq-dropdown-toggle"
                      className="home-dropdown-toggle36"
                    >
                      <span className="home-text048">Fire 5</span>
                    </div>
                  </li>
                  <li
                    data-thq="thq-dropdown"
                    className="home-dropdown26 list-item"
                  >
                    <div
                      data-thq="thq-dropdown-toggle"
                      className="home-dropdown-toggle37"
                    >
                      <span className="home-text049">Fire hd kids</span>
                    </div>
                    <div className="home-container07"></div>
                  </li>
                  <li
                    data-thq="thq-dropdown"
                    className="home-dropdown27 list-item"
                  >
                    <div
                      data-thq="thq-dropdown-toggle"
                      className="home-dropdown-toggle38"
                    >
                      <span className="home-text050">Amazon Fire Tv</span>
                    </div>
                  </li>
                  <li
                    data-thq="thq-dropdown"
                    className="home-dropdown28 list-item"
                  >
                    <div
                      data-thq="thq-dropdown-toggle"
                      className="home-dropdown-toggle39"
                    >
                      <span className="home-text051">
                        Shop all fire TV Family
                      </span>
                    </div>
                  </li>
                  <li
                    data-thq="thq-dropdown"
                    className="home-dropdown29 list-item"
                  >
                    <div
                      data-thq="thq-dropdown-toggle"
                      className="home-dropdown-toggle40"
                    >
                      <span className="home-text052">
                        Fire TV Customer Support
                      </span>
                    </div>
                  </li>
                  <li
                    data-thq="thq-dropdown"
                    className="home-dropdown30 list-item"
                  >
                    <div
                      data-thq="thq-dropdown-toggle"
                      className="home-dropdown-toggle41"
                    >
                      <span className="home-text053">Prime video</span>
                    </div>
                  </li>
                </ul>
              </div>
              <div
                data-thq="thq-dropdown"
                className="home-amazon-prime-videos list-item"
              >
                <div
                  data-thq="thq-dropdown-toggle"
                  className="home-dropdown-toggle42"
                >
                  <span className="home-text054">Amazon Prime videos</span>
                  <svg viewBox="0 0 1024 1024" className="home-icon21">
                    <path d="M366 708l196-196-196-196 60-60 256 256-256 256z"></path>
                  </svg>
                </div>
                <ul
                  data-thq="thq-dropdown-list"
                  className="home-dropdown-list5"
                >
                  <li
                    data-thq="thq-dropdown"
                    className="home-dropdown31 list-item"
                  >
                    <div
                      data-thq="thq-dropdown-toggle"
                      className="home-dropdown-toggle43"
                    >
                      <span className="home-text055">Amazon Prime Video</span>
                    </div>
                  </li>
                  <li
                    data-thq="thq-dropdown"
                    className="home-dropdown32 list-item"
                  >
                    <div
                      data-thq="thq-dropdown-toggle"
                      className="home-dropdown-toggle44"
                    >
                      <span className="home-text056">All Video Channels</span>
                    </div>
                  </li>
                  <li
                    data-thq="thq-dropdown"
                    className="home-dropdown33 list-item"
                  >
                    <div
                      data-thq="thq-dropdown-toggle"
                      className="home-dropdown-toggle45"
                    >
                      <span className="home-text057">Prime Video Channels</span>
                    </div>
                  </li>
                  <li
                    data-thq="thq-dropdown"
                    className="home-dropdown34 list-item"
                  >
                    <div
                      data-thq="thq-dropdown-toggle"
                      className="home-dropdown-toggle46"
                    >
                      <span className="home-text058">Watch Anywhere</span>
                    </div>
                    <div className="home-container08"></div>
                  </li>
                  <li
                    data-thq="thq-dropdown"
                    className="home-dropdown35 list-item"
                  >
                    <div
                      data-thq="thq-dropdown-toggle"
                      className="home-dropdown-toggle47"
                    >
                      <span className="home-text059">Amazon Original</span>
                    </div>
                  </li>
                  <li
                    data-thq="thq-dropdown"
                    className="home-dropdown36 list-item"
                  >
                    <div
                      data-thq="thq-dropdown-toggle"
                      className="home-dropdown-toggle48"
                    >
                      <span className="home-text060">Modern Love</span>
                    </div>
                  </li>
                  <li
                    data-thq="thq-dropdown"
                    className="home-dropdown37 list-item"
                  >
                    <div
                      data-thq="thq-dropdown-toggle"
                      className="home-dropdown-toggle49"
                    >
                      <span className="home-text061">Carnival Row</span>
                    </div>
                  </li>
                  <li
                    data-thq="thq-dropdown"
                    className="home-dropdown38 list-item"
                  >
                    <div
                      data-thq="thq-dropdown-toggle"
                      className="home-dropdown-toggle50"
                    >
                      <span className="home-text062">The Boys</span>
                    </div>
                  </li>
                </ul>
              </div>
              <div
                data-thq="thq-dropdown"
                className="home-amazon-music list-item"
              >
                <div
                  data-thq="thq-dropdown-toggle"
                  className="home-dropdown-toggle51"
                >
                  <span className="home-text063">Amazon Music</span>
                  <svg viewBox="0 0 1024 1024" className="home-icon23">
                    <path d="M366 708l196-196-196-196 60-60 256 256-256 256z"></path>
                  </svg>
                </div>
                <ul
                  data-thq="thq-dropdown-list"
                  className="home-dropdown-list6"
                >
                  <li
                    data-thq="thq-dropdown"
                    className="home-dropdown39 list-item"
                  >
                    <div
                      data-thq="thq-dropdown-toggle"
                      className="home-dropdown-toggle52"
                    >
                      <span className="home-text064">Stream Music</span>
                    </div>
                  </li>
                  <li
                    data-thq="thq-dropdown"
                    className="home-dropdown40 list-item"
                  >
                    <div
                      data-thq="thq-dropdown-toggle"
                      className="home-dropdown-toggle53"
                    >
                      <span className="home-text065">Amazon Unlimited</span>
                    </div>
                  </li>
                  <li
                    data-thq="thq-dropdown"
                    className="home-dropdown41 list-item"
                  >
                    <div
                      data-thq="thq-dropdown-toggle"
                      className="home-dropdown-toggle54"
                    >
                      <span className="home-text066">Free Streaming Music</span>
                    </div>
                  </li>
                  <li
                    data-thq="thq-dropdown"
                    className="home-dropdown42 list-item"
                  >
                    <div
                      data-thq="thq-dropdown-toggle"
                      className="home-dropdown-toggle55"
                    >
                      <span className="home-text067">Open Web Player</span>
                    </div>
                  </li>
                  <li
                    data-thq="thq-dropdown"
                    className="home-dropdown43 list-item"
                  ></li>
                  <li
                    data-thq="thq-dropdown"
                    className="home-dropdown44 list-item"
                  >
                    <div
                      data-thq="thq-dropdown-toggle"
                      className="home-dropdown-toggle56"
                    >
                      <span className="home-text068">
                        Download the Amazon Music App
                      </span>
                    </div>
                  </li>
                  <li
                    data-thq="thq-dropdown"
                    className="home-dropdown45 list-item"
                  >
                    <div
                      data-thq="thq-dropdown-toggle"
                      className="home-dropdown-toggle57"
                    >
                      <span className="home-text069">Prime Music</span>
                    </div>
                  </li>
                  <li
                    data-thq="thq-dropdown"
                    className="home-dropdown46 list-item"
                  ></li>
                </ul>
              </div>
              <div data-thq="thq-dropdown" className="home-help list-item">
                <div
                  data-thq="thq-dropdown-toggle"
                  className="home-dropdown-toggle58"
                >
                  <span className="home-text070">Help &amp; Settings</span>
                </div>
              </div>
              <div
                data-thq="thq-dropdown"
                className="home-youracc list-item"
              ></div>
              <div
                data-thq="thq-dropdown"
                className="home-signout list-item"
              ></div>
            </ul>
          </div>
          <span className="home-best-seller1 button">Best Seller</span>
          <span className="home-computer button">Computers</span>
          <span className="home-sports button">Sports &amp; Outdoors</span>
          <span className="home-kindle1 button">Kindle Books</span>
          <span className="home-giftidea button">Gift Idea</span>
          <span className="home-books button">Books</span>
          <span className="home-toys button">Toys &amp; Games</span>
          <span className="home-fashion button">Fashion</span>
          <span className="home-deal-store button">Deal Store</span>
          <span className="home-customer-srv button">Customer Service</span>
          <span className="home-new-releases1 button">New Releases</span>
          <span className="home-electronics button">Electronics</span>
          <span className="home-coupons button">Coupons</span>
        </div>

        <div className="home-carosel">

        <div id="carouselExampleInterval" className="carousel slide" data-bs-ride="carousel">
        <div className="carousel-inner">
          <div className="carousel-item active" data-bs-interval={2000}>
            <img src="/playground_assets/1.jpg" className="d-block w-100" alt="..." />
          </div>
          <div className="carousel-item" data-bs-interval={2000}>
            <img src="/playground_assets/3.jpg" className="d-block w-100" alt="..." />
          </div>
          <div className="carousel-item" data-bs-interval={2000}>
            <img src="/playground_assets/2.jpg" className="d-block w-100" alt="..." />
          </div>
          <div className="carousel-item" data-bs-interval={2000}>
            <img src="/playground_assets/4.jpg" className="d-block w-100" alt="..." />
          </div>
          <div className="carousel-item"data-bs-interval={2000}>
            <img src="/playground_assets/5.jpg" className="d-block w-100" alt="..." />
          </div>
          <div className="carousel-item"data-bs-interval={2000}>
            <img src="/playground_assets/6.jpg" className="d-block w-100" alt="..." />
          </div>
        </div>
        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true" />
          <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true" />
          <span className="visually-hidden">Next</span>
        </button>
      </div>





          <div className="home-container09">
            <div className="home-one">
              <img
                alt="image"
                src="/playground_assets/10-300h.jpg"
                className="home-image1"
              />
              <span className="home-text071">Shop Now</span>
              <span className="home-text072">Low prices on costumes</span>
            </div>
            <div className="home-two">
              <img
                alt="image"
                src="/playground_assets/11-300h.jpg"
                className="home-image2"
              />
              <span className="home-text073">Shop Now</span>
              <span className="home-text074">Shop early and save</span>
            </div>
            <div className="home-three">
              <img
                alt="image"
                src="/playground_assets/14-300h.jpg"
                className="home-image3"
              />
              <span className="home-text075">Shop Now</span>
              <span className="home-text076">Calling all Beaty lovers</span>
            </div>
            <div className="home-four">
              <img
                alt="image"
                src="/playground_assets/15-300h.jpg"
                className="home-image4"
              />
              <span className="home-text077">Shop Now</span>
              <span className="home-text078">Men&apos;s Fashion</span>
            </div>
          </div>
        </div>
        <div className="home-get-start">
          <div className="home-hero">
            <img
              alt="image"
              src="https://images.unsplash.com/photo-1529859503572-5b9d1e68e952?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDN8fG1pbmltYWxpc20lMjBjb3VjaHxlbnwwfHx8fDE2MjYxODI1OTE&amp;ixlib=rb-1.2.1&amp;w=1500"
              className="home-image5"
            />
            <div className="home-container10">
              <h1 className="home-text079">Let’s keep things organised</h1>
              <h2 className="home-text080">
                Magnificent things are very simple.
              </h2>
              <div className="home-btn-group">
                <button className="home-button button">Get Started</button>
                <button className="home-button1 button">Learn More</button>
              </div>
              <span className="home-text081">
                <span>
                  <span>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                    non volutpat turpis.
                    <span
                      dangerouslySetInnerHTML={{
                        __html: ' ',
                      }}
                    />
                  </span>
                  <span>
                    <span
                      dangerouslySetInnerHTML={{
                        __html: ' ',
                      }}
                    />
                  </span>
                </span>
                <span>
                  <span>
                    Mauris luctus rutrum mi ut rhoncus. Integer in dignissim
                    tortor. Lorem
                    <span
                      dangerouslySetInnerHTML={{
                        __html: ' ',
                      }}
                    />
                  </span>
                  <span>
                    <span
                      dangerouslySetInnerHTML={{
                        __html: ' ',
                      }}
                    />
                  </span>
                </span>
                <span>
                  <span>
                    ipsum dolor sit amet, consectetur adipiscing elit.
                    <span
                      dangerouslySetInnerHTML={{
                        __html: ' ',
                      }}
                    />
                  </span>
                  <span>
                    <span
                      dangerouslySetInnerHTML={{
                        __html: ' ',
                      }}
                    />
                  </span>
                </span>
                <br></br>
                <span></span>
                <br></br>
                <span>
                  <span>
                    Mauris luctus rutrum mi ut rhoncus. Integer in dignissim
                    tortor.
                    <span
                      dangerouslySetInnerHTML={{
                        __html: ' ',
                      }}
                    />
                  </span>
                  <span>
                    <span
                      dangerouslySetInnerHTML={{
                        __html: ' ',
                      }}
                    />
                  </span>
                </span>
              </span>
            </div>
          </div>
        </div>
        <div className="home-gallery">
          <div className="home-container11">
            <div className="home-container12">
              <div className="home-container13">
                <GalleryCard2 rootClassName="rootClassName2"></GalleryCard2>
              </div>
              <div className="home-container14">
                <GalleryCard2
                  image_src="https://images.unsplash.com/photo-1476718406336-bb5a9690ee2a?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDN8fGZvb2R8ZW58MHx8fHwxNjI2NDQ5NjUy&amp;ixlib=rb-1.2.1&amp;h=1000"
                  rootClassName="rootClassName3"
                ></GalleryCard2>
              </div>
            </div>
            <div className="home-container15">
              <GalleryCard2
                image_src="https://images.unsplash.com/photo-1455619452474-d2be8b1e70cd?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDIzfHxmb29kfGVufDB8fHx8MTYyNjQ0OTY1Mg&amp;ixlib=rb-1.2.1&amp;h=1000"
                rootClassName="rootClassName"
              ></GalleryCard2>
            </div>
          </div>
          <div className="home-container16">
            <GalleryCard2
              image_src="https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDE5fHxmb29kfGVufDB8fHx8MTYyNjQ0OTY1Mg&amp;ixlib=rb-1.2.1&amp;h=1000"
              rootClassName="rootClassName4"
            ></GalleryCard2>
          </div>
        </div>
        <div className="home-blog">
          <div className="home-container17">
            <BlogPostCard1 rootClassName="rootClassName3"></BlogPostCard1>
          </div>
          <div className="home-container18">
            <BlogPostCard1
              image_src="https://images.unsplash.com/photo-1465925508512-1e7052bb62e6?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDIzfHxjaXR5JTIwY2FifGVufDB8fHx8MTYyNjQ1MDMwNA&amp;ixlib=rb-1.2.1&amp;h=1200"
              rootClassName="rootClassName2"
            ></BlogPostCard1>
          </div>
          <div className="home-container19">
            <BlogPostCard1
              image_src="https://images.unsplash.com/photo-1464938050520-ef2270bb8ce8?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDE4fHxjaXR5fGVufDB8fHx8MTYyNjQ1MDI4MQ&amp;ixlib=rb-1.2.1&amp;h=1200"
              rootClassName="rootClassName1"
            ></BlogPostCard1>
          </div>
        </div>
        <div className="home-features">
          <h1 className="home-text095">
            <span>Discover our</span>
            <br></br>
            <span>unique features</span>
          </h1>
          <div className="home-separator"></div>
          <div className="home-container20">
            <div className="home-container21">
              <FeatureCard4 rootClassName="rootClassName1"></FeatureCard4>
              <FeatureCard4 rootClassName="rootClassName4"></FeatureCard4>
              <FeatureCard4 rootClassName="rootClassName3"></FeatureCard4>
              <FeatureCard4 rootClassName="rootClassName2"></FeatureCard4>
            </div>
            <img
              alt="image"
              src="https://images.unsplash.com/photo-1471086569966-db3eebc25a59?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDIzfHxtaW5pbWFsaXNtfGVufDB8fHx8MTYyNjQ0NTY1Nw&amp;ixlib=rb-1.2.1&amp;w=500"
              className="home-image6"
            />
          </div>
        </div>
        <div className="home-pricing">
          <div className="home-container22">
            <div className="home-container23">
              <h1>Pricing Plans</h1>
              <span className="home-text100">
                <span>
                  <span>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. In
                    lorem lorem, malesuada in metus vitae, scelerisque accumsan
                    ipsum.
                    <span
                      dangerouslySetInnerHTML={{
                        __html: ' ',
                      }}
                    />
                  </span>
                  <span>
                    <span
                      dangerouslySetInnerHTML={{
                        __html: ' ',
                      }}
                    />
                  </span>
                </span>
              </span>
            </div>
            <div className="home-container24">
              <div className="home-container25">
                <span className="home-text104">Free</span>
                <span className="home-text105">$0</span>
                <span className="home-text106">
                  <span className="home-text107">10</span>
                  <span> Projects</span>
                </span>
                <span className="home-text109">
                  <span className="home-text110">99</span>
                  <span> Components</span>
                </span>
                <span className="home-text112">
                  <span className="home-text113">3</span>
                  <span> Collaborators</span>
                </span>
                <span className="home-text115">
                  <span className="home-text116">Public projects</span>
                </span>
                <button className="home-button2 button">Learn More</button>
              </div>
              <div className="home-container26">
                <span className="home-text117">Free</span>
                <span className="home-text118">$29</span>
                <span className="home-text119">
                  <span className="home-text120">100</span>
                  <span> Projects</span>
                </span>
                <span className="home-text122">
                  <span className="home-text123">1000</span>
                  <span> Components</span>
                </span>
                <span className="home-text125">
                  <span className="home-text126">20</span>
                  <span> Collaborators</span>
                </span>
                <span className="home-text128">
                  <span className="home-text129">Private projects</span>
                </span>
                <button className="home-button3 button">Learn More</button>
              </div>
            </div>
          </div>
        </div>
      </div>
      
    </div>
  )
}

export default Home
