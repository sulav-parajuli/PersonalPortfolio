import rajendrakhatri from "../assets/images/project/rajendrakhatri.png";
import EthTix from "../assets/images/project/ethtix.png";
import bibek from "../assets/images/project/bibek.png";
import swopnilstore from "../assets/images/project/swopnilstore.png";
import swgraphic from "../assets/images/project/swopnilstoregraphics.png";
import simon from "../assets/images/project/simon.png";
import macithub from "../assets/images/project/macithub.png";
import jazzyventure from "../assets/images/project/jazzyventure.png";
import drumkit from "../assets/images/project/drum-kit.png";

const Projects = () => {
  const projectItems = [
    {
      id: "a",
      filter: "filter-web",
      link: "https://github.com/sulav-parajuli/EthTix",
      image: EthTix,
      alt: "EthTix",
      title: "Final Year Project- EthTix",
      subtitle: "Decentralized Ticketing Application",
      previewText:
        "This is a Decentralized Ticketing Application that my team and I created as our final year project. It is a blockchain-based application that enables users to buy and sell tickets using Sepolia Test Ethereum cryptocurrency.",
      technologies:
        "Solidity, Ether.js, React.js, Node.js, Hardhat Framework, Sepolia Test Eth, and more.",
      tags: [
        {
          link: "assets/images/project/ethtix.png",
          icon: "fas fa-plus",
          text: "View"
        },
        {
          link: "",
          icon: "fas fa-external-link-alt",
          text: "Visit Site"
        },
        {
          link: "https://github.com/sulav-parajuli/EthTix",
          icon: "fab fa-github",
          text: "Github"
        }
      ]
    },
    {
      id: "b",
      filter: "filter-web",
      link: "https://rajendrakhatri.com.np",
      image: rajendrakhatri,
      alt: "Portfolio Website",
      title: "Portfolio Website",
      subtitle: "Rajendra Khatri",
      previewText:
        "This is a simple portfolio website for Rajendra Khatri, a Business Man. The website showcases his work and provides information about his services.",
      technologies: "HTML, CSS, JavaScript, Bootstrap, and more.",
      tags: [
        {
          link: "assets/images/project/rajendrakhatri.png",
          icon: "fas fa-plus",
          text: "View"
        },
        {
          link: "https://rajendrakhatri.com.np",
          icon: "fas fa-external-link-alt",
          text: "Visit Site"
        },
        {
          link: "",
          icon: "fab fa-github",
          text: "Github"
        }
      ]
    },
    {
      id: "c",
      filter: "filter-web",
      link: "https://sulav-parajuli.github.io/Bibek/",
      image: bibek,
      alt: "Portfolio Website",
      title: "Portfolio Website",
      subtitle: "Bibek Bajagain",
      previewText:
        "This is a simple portfolio website for Bibek Bajagain, a Genius Developer. The website showcases his work and provides information about his services.",
      technologies: "HTML, CSS, JavaScript, Bootstrap, and more.",
      tags: [
        {
          link: "assets/images/project/bibek.png",
          icon: "fas fa-plus",
          text: "View"
        },
        {
          link: "https://sulav-parajuli.github.io/Bibek/",
          icon: "fas fa-external-link-alt",
          text: "Visit Site"
        },
        {
          link: "https://github.com/sulav-parajuli/Bibek/",
          icon: "fab fa-github",
          text: "Github"
        }
      ]
    },
    {
      id: "d",
      filter: "filter-web",
      link: "https://jazzyventure.com.np/",
      image: jazzyventure,
      alt: "Static Private Company Website",
      title: "Company Website",
      subtitle: "Jazzy Venture",
      previewText: `This website is a static site providing basic information about the company "Jazzy Venture Pvt. Ltd.", including its locations and contact details.`,
      technologies: "HTML, CSS, JavaScript, Bootstrap, and more.",
      tags: [
        {
          link: "assets/images/portfolio/jazzyventure.png",
          icon: "fas fa-plus",
          text: "View"
        },
        {
          link: "https://jazzyventure.com.np/",
          icon: "fas fa-external-link-alt",
          text: "Visit Site"
        },
        {
          link: "https://github.com/sulav-parajuli/jazzyventure",
          icon: "fab fa-github",
          text: "Github"
        }
      ]
    },
    {
      id: "e",
      filter: "filter-web",
      link: "https://swopnilstore.com.np/",
      image: swopnilstore,
      alt: "Grocery Website",
      title: "Simple Grocery Website",
      subtitle: "Swopnil Store",
      technologies: "HTML, CSS, JavaScript, Bootstrap, and more.",
      previewText: `This is a simple static grocery website providing basic
              information about the grocery store, including its locations and
              contact details. The website is integrated with SEO through Google Search Console. Additionally, I have set up a
            Google Business profile
          for this business.`,
      tags: [
        {
          link: "assets/images/portfolio/swopnilstore.png",
          icon: "fas fa-plus",
          text: "View"
        },
        {
          link: "https://swopnilstore.com.np/",
          icon: "fas fa-external-link-alt",
          text: "Visit Site"
        },
        {
          link: "https://github.com/sulav-parajuli/swopnilstore",
          icon: "fab fa-github",
          text: "Github"
        }
      ]
    },
    {
      id: "j",
      filter: "filter-web",
      link: "https://github.com/sulav-parajuli/Swopnil-Store_new",
      image: swopnilstore,
      alt: "Grocery Application",
      title: "Grocery Application",
      subtitle: "Swopnil Store",
      technologies: "HTML, CSS, JavaScript, Bootstrap, Laravel and more.",
      previewText: `This grocery web application provides comprehensive information about the store, from essential details to dynamic updates. Users can explore various features, including store locations, a complete list of grocery items, their ledgers, and contact details. Designed for user convenience, it ensures a seamless shopping experience with intuitive navigation and up-to-date information, making grocery shopping more efficient and enjoyable. The application is currently in development, is not used externally, and does not have live access yet. `,
      tags: [
        {
          link: "assets/images/portfolio/swopnilstore.png",
          icon: "fas fa-plus",
          text: "View"
        },
        {
          link: "",
          icon: "fas fa-external-link-alt",
          text: "Visit Site"
        },
        {
          link: "https://github.com/sulav-parajuli/Swopnil-Store_new",
          icon: "fab fa-github",
          text: "Github"
        }
      ]
    }
    // Add more project items here
  ];

  const otherItems = [
    {
      id: "f",
      filter: "filter-games",
      link: "https://sulav-parajuli.github.io/Drum-kit/",
      image: drumkit,
      alt: "Drum Kit",
      title: "Drum Kit",
      subtitle: "Drum Game",
      technologies: "HTML, CSS, JavaScript, Bootstrap, and more.",
      previewText: `This is a simple Drum Kit game that I created while learning
              JavaScript. It is a fun and interactive game that allows users to
              play the drums using their keyboard. I was inspired to create this
              game after taking a course on Udemy instructed by Angela Yu.`,
      tags: [
        {
          link: "assets/images/portfolio/drum-kit.png",
          icon: "fas fa-plus",
          text: "View"
        },
        {
          link: "https://sulav-parajuli.github.io/Drum-kit/",
          icon: "fas fa-external-link-alt",
          text: "Visit Site"
        },
        {
          link: "https://github.com/sulav-parajuli/Drum-kit",
          icon: "fab fa-github",
          text: "Github"
        }
      ]
    },
    {
      id: "g",
      filter: "filter-games",
      link: "https://sulav-parajuli.github.io/Simon-Game/",
      image: simon,
      alt: "Simon Game",
      title: "Simon Game",
      subtitle: "Repeated Sequence Mind Game",
      technologies: "HTML, CSS, JavaScript, Bootstrap, and more.",
      previewText: `This is a simple Simon Game that I created while learning
              JavaScript. It is a fun and interactive game that allows users to
              test their memory by repeating a sequence of colors. I was
              inspired to create this game after taking a course on Udemy
              instructed by Angela Yu.`,
      tags: [
        {
          link: "assets/images/portfolio/simon.png",
          icon: "fas fa-plus",
          text: "View"
        },
        {
          link: "https://sulav-parajuli.github.io/Simon-Game/",
          icon: "fas fa-external-link-alt",
          text: "Visit Site"
        },
        {
          link: "https://github.com/sulav-parajuli/Simon-Game",
          icon: "fab fa-github",
          text: "Github"
        }
      ]
    },
    {
      id: "h",
      filter: "filter-design",
      link: "https://www.facebook.com/mac.it.club",
      image: macithub,
      alt: "Graphics Designing",
      title: "Graphic Designing",
      subtitle: "Macithub",
      technologies: "Adobe Photoshop, Adobe Illustrator, and more.",
      previewText: `These are simple social media graphic designs that I created for
              the Macithub Student Club at my college. The designs showcase the
              club's logo and provide information about the club's activities
              and events.`,
      tags: [
        {
          link: "assets/images/portfolio/macithub.png",
          icon: "fas fa-plus",
          text: "View"
        },
        {
          link: "https://www.facebook.com/mac.it.club",
          icon: "fas fa-external-link-alt",
          text: "Visit Site"
        },
        {
          link: "",
          icon: "fab fa-github",
          text: "Github"
        }
      ]
    },
    {
      id: "i",
      filter: "filter-design",
      link: "https://www.facebook.com/swopnilstore",
      image: swgraphic,
      alt: "Graphics Designing",
      title: "Graphic Designing",
      subtitle: "Swopnil Store",
      technologies: "Adobe Photoshop, Adobe Illustrator, and more.",
      previewText: `These are simple social media graphic designs that I created for
              Swopnil Store, a grocery store in Pokhara. The designs showcase
              the store's logo and provide information about the store's
              products and services.`,
      tags: [
        {
          link: "assets/images/portfolio/swopnilstoregraphics.png",
          icon: "fas fa-plus",
          text: "View"
        },
        {
          link: "https://www.facebook.com/swopnilstore",
          icon: "fas fa-external-link-alt",
          text: "Visit Site"
        },
        {
          link: "",
          icon: "fab fa-github",
          text: "Github"
        }
      ]
    }
  ];

  return (
    <>
      <div className="container-fluid project-container">
        <div id="project" className="reveal">
          <p id="section-text">
            <b>SELECTED PROJECTS</b>
          </p>
          <h1 id="bottom-gap" className="main-text">
            See my works
          </h1>

          {projectItems.map((item) => (
            <article
              key={item.id}
              className={`postcard blue text-black project-item ${item.filter}`}
              data-filter={`.${item.filter}`}
            >
              <a className="postcard__img_link" href={item.link}>
                <img
                  className="postcard__img"
                  src={item.image}
                  alt={item.alt}
                />
              </a>
              <div className="postcard__text">
                <h1 className="postcard__title blue">
                  <a href={item.link}>{item.title}</a>
                </h1>
                <div className="postcard__subtitle large">
                  <p>{item.subtitle}</p>
                </div>
                <div className="postcard__bar"></div>
                <div className="postcard__preview-txt">
                  {item.previewText}
                  <br />
                  Technologies Used: {item.technologies}
                </div>
                <ul className="postcard__tagbox">
                  {item.tags.map((tag, index) => (
                    <li key={index} className="tag__item">
                      <a href={tag.link}>
                        <i className={tag.icon}></i>&nbsp;{tag.text}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </article>
          ))}
        </div>
      </div>
      <div className="container-fluid project-container">
        <div id="project" className="reveal">
          <p id="section-text">
            <b>GRAPHICS AND SIMPLE GAMES</b>
          </p>
          <h1 id="bottom-gap" className="main-text">
            Other Works
          </h1>

          {otherItems.map((item) => (
            <article
              key={item.id}
              className={`postcard blue text-black project-item ${item.filter}`}
              data-filter={`.${item.filter}`}
            >
              <a className="postcard__img_link" href={item.link}>
                <img
                  className="postcard__img"
                  src={item.image}
                  alt={item.alt}
                />
              </a>
              <div className="postcard__text">
                <h1 className="postcard__title blue">
                  <a href={item.link}>{item.title}</a>
                </h1>
                <div className="postcard__subtitle large">
                  <p>{item.subtitle}</p>
                </div>
                <div className="postcard__bar"></div>
                <div className="postcard__preview-txt">
                  {item.previewText}
                  <br />
                  Technologies Used: {item.technologies}
                </div>
                <ul className="postcard__tagbox">
                  {item.tags.map((tag, index) => (
                    <li key={index} className="tag__item">
                      <a href={tag.link}>
                        <i className={tag.icon}></i>&nbsp;{tag.text}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </article>
          ))}
        </div>
      </div>
    </>
  );
};

export default Projects;
