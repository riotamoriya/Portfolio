/* Change this file to get your personal Porfolio */

// Website related settings
const settings = {
  isSplash: false, // Change this to false if you don't want Splash screen.
};

//SEO Related settings
const seo = {
  title: "Rio's Portfolio",
  description:
    "FUll Stack Developer | Block chain Expert",
  og: {
    title: "Moriya Ryota Portfolio",
    type: "website",
    url: "https://moriyaryota.com/",
  },
};

//Home Page
const greeting = {
  title: "Moriya Ryota",
  logo_name: "Moriya Ryota",
  nickname: "Rio",
  subTitle:
    "FUll Stack Developer | Data Engineer",
  resumeLink:
    "https://drive.google.com/open?id=1XYpYhLeqCdyx_q6l0bQoC7RgwQjAjXPf",
  portfolio_repository: "https://github.com/riotamoriya",
  githubProfile: "https://github.com/riotamoriya",
};



const socialMediaLinks = [
  /* Your Social Media Link */
  // github: "https://github.com/ashutosh1919",
  // linkedin: "https://www.linkedin.com/in/ashutosh-hathidara-88710b138/",
  // gmail: "ashutoshhathidara98@gmail.com",
  // gitlab: "https://gitlab.com/ashutoshhathidara98",
  // facebook: "https://www.facebook.com/laymanbrother.19/",
  // twitter: "https://twitter.com/ashutosh_1919",
  // instagram: "https://www.instagram.com/layman_brother/"

  {
    name: "Github",
    link: "https://github.com/riotamoriya",
    fontAwesomeIcon: "fa-github", // Reference https://fontawesome.com/icons/github?style=brands
    backgroundColor: "#181717", // Reference https://simpleicons.org/?q=github
  },
  {
    name: "LinkedIn",
    link: "https://www.linkedin.com/in/ryota-moriya-991059271/",
    // fontAwesomeIcon: "fa:linkedin-square",
    fontAwesomeIcon: "fa-linkedin-in",
    backgroundColor: "#0a66c2 ", // Reference https://simpleicons.org/?q=github
  },
  
  {
    name: "Gmail",
    link: "mailto:riotamoriya@gmail.com",
    fontAwesomeIcon: "fa-google", // Reference https://fontawesome.com/icons/google?style=brands
    backgroundColor: "#D14836", // Reference https://simpleicons.org/?q=gmail
  },



  // {
  //   name: "Telegram",
  //   link: "https://t.me/RainbowSunDev",
  //   fontAwesomeIcon: "fa-telegram", // Reference https://fontawesome.com/icons/instagram?style=brands
  //   backgroundColor: "#E4405F", // Reference https://simpleicons.org/?q=instagram
  // },
  // {
  //   name: "Skype",
  //   link: "https://t.me/RainbowSunDev",
  //   fontAwesomeIcon: "fa-skype", // Reference https://fontawesome.com/icons/instagram?style=brands
  //   backgroundColor: "Blue", // Reference https://simpleicons.org/?q=instagram
  // },
];

const skills = {
  data: [

    {
      title: "Full Stack Development",
      fileName: "FullStackImg",
      skills: [
        "⚡ Designing responsive website front end using Figma and React",
        "⚡ Developing A business system that integrates business needs Data",
        "⚡ Constructing AWS Infra-Architecture and CI/CD using Github Actions",
      ],
      softwareSkills: [
        {
          skillName: "Figma",
          fontAwesomeClassname: "simple-icons:figma",
          style: {
            color: "#F24E1E",
          },
        },

        {
          skillName: "AWS",
          fontAwesomeClassname: "simple-icons:amazonaws",
          style: {
            color: "#FF9900",
          },
        },

        {
          skillName: "DynamoDB",
          fontAwesomeClassname: "devicon:dynamodb",
          style: {
            color: "#FF9900",
          },
        },

        {
          skillName: "Docker",
          fontAwesomeClassname: "simple-icons:docker",
          style: {
            color: "#1488C6",
          },
        },

        {
          skillName: "HTML5",
          fontAwesomeClassname: "fa-html5",
          style: {
            color: "#E34F26",
          },
        },

        {
          skillName: "Sass",
          fontAwesomeClassname: "simple-icons:sass",
          style: {
            color: "#CC6699",
          },
        },

        {
          skillName: "Bootstrap5",
          fontAwesomeClassname: "logos:bootstrap",
          style: {
            color: "#CC6699",
          },
        },

        {
          skillName: "ReactJS",
          fontAwesomeClassname: "simple-icons:react",
          style: {
            color: "#61DAFB",
          },
        },


        {
          skillName: "Python",
          fontAwesomeClassname: "logos:python",
          style: {
            color: "#CB3837",
          },
        },

        {
          skillName: "Lambda",
          fontAwesomeClassname: "logos:aws-lambda",
          style: {
            color: "#CB3837",
          },
        },

      ],
    },

    {
      title: "Data Engineering",
      fileName: "DataScienceImg",
      skills: [
        "⚡ Developing systems that require complex data processing",
        "⚡ Refactoring and Speed Tuning SAS programs",
        "⚡ SQL and Shell scripts",
      ],
      softwareSkills: [
        {
          skillName: "SAS",
          fontAwesomeClassname: "vscode-icons:file-type-sas",
          style: {
            color: "#CB3837",
          },
        },
        {
          skillName: "SQLServer",
          fontAwesomeClassname: "devicon-plain:microsoftsqlserver-wordmark",
          style: {
            color: "#CB3837",
          },
        },

        {
          skillName: "Bash",
          fontAwesomeClassname: "logos:bash",
          style: {
            backgroundColor: "white",
            color: "#D00000",
          },
        },

        {
          skillName: "Linux",
          fontAwesomeClassname: "skill-icons:linux-light",
          style: {
            backgroundColor: "white",
            color: "#D00000",
          },
        },

        {
          skillName: "Keras",
          fontAwesomeClassname: "simple-icons:keras",
          style: {
            backgroundColor: "white",
            color: "#D00000",
          },
        },
      ],
    },
  ],
};

// Education Page
const competitiveSites = {
  competitiveSites: [
    {
      siteName: "HackerRank",
      iconifyClassname: "simple-icons:hackerrank",
      style: {
        color: "#2EC866",
      },
      profileLink: "https://www.hackerrank.com/layman_brother",
    },
    {
      siteName: "Codechef",
      iconifyClassname: "simple-icons:codechef",
      style: {
        color: "#5B4638",
      },
      profileLink: "https://www.codechef.com/users/albert_1919",
    },
    {
      siteName: "Codeforces",
      iconifyClassname: "simple-icons:codeforces",
      style: {
        color: "#1F8ACB",
      },
      profileLink: "http://codeforces.com/profile/layman_brother",
    },
    {
      siteName: "Hackerearth",
      iconifyClassname: "simple-icons:hackerearth",
      style: {
        color: "#323754",
      },
      profileLink: "https://www.hackerearth.com/@albert391",
    },
    {
      siteName: "Kaggle",
      iconifyClassname: "simple-icons:kaggle",
      style: {
        color: "#20BEFF",
      },
      profileLink: "https://www.kaggle.com/laymanbrother",
    },
  ],
};

const degrees = {
  degrees: [
    {
      title: "University of Aizu",
      subtitle: "Computer Science Degree",
      logo_path: "University_of_Aizu_seal.png",
      alt_name: "University_of_Aizu_Image",
      duration: "2017 - 2021",
      descriptions: [
        "⚡ I have studied basic software engineering subjects like DS, Algorithms,  Unix OS, AI etc.",

        "⚡ Apart from this, I have done courses on English, Mathematics and Physics",

        // "⚡ I was selected for Merit cum Means Scholarship which is given to top 10% of students in college. I have received award from respected director for consistently best performance in academics.",
      ],
      website_link: "https://u-aizu.ac.jp/en/",
    },
  ],
};

const certifications = {
  certifications: [
    {
      title: "Machine Learning",
      subtitle: "- Andrew Ng",
      logo_path: "stanford_logo.png",
      certificate_link:
        "https://www.coursera.org/account/accomplishments/verify/22MTSSC5WDTM",
      alt_name: "Stanford University",
      color_code: "#8C151599",
    },
    {
      title: "Deep Learning",
      subtitle: "- Andrew Ng",
      logo_path: "deeplearning_ai_logo.png",
      certificate_link:
        "https://www.coursera.org/account/accomplishments/specialization/H8CPSFXAJD2G",
      alt_name: "deeplearning.ai",
      color_code: "#00000099",
    },
    {
      title: "ML on GCP",
      subtitle: "- GCP Training",
      logo_path: "google_logo.png",
      certificate_link:
        "https://www.coursera.org/account/accomplishments/specialization/EB4VJARK8647",
      alt_name: "Google",
      color_code: "#0C9D5899",
    },
    {
      title: "Data Science",
      subtitle: "- Alex Aklson",
      logo_path: "ibm_logo.png",
      certificate_link:
        "https://www.coursera.org/account/accomplishments/specialization/PLEAPCSJBZT5",
      alt_name: "IBM",
      color_code: "#1F70C199",
    },
    {
      title: "Big Data",
      subtitle: "- Kim Akers",
      logo_path: "microsoft_logo.png",
      certificate_link:
        "https://drive.google.com/file/d/164zKCFOsI4vGqokc-Qj-e_D00kLDHIrG/view",
      alt_name: "Microsoft",
      color_code: "#D83B0199",
    },
    {
      title: "Advanced Data Science",
      subtitle: "- Romeo Kienzler",
      logo_path: "ibm_logo.png",
      certificate_link:
        "https://www.coursera.org/account/accomplishments/verify/BH2T9BRU87BH",
      alt_name: "IBM",
      color_code: "#1F70C199",
    },
    {
      title: "Advanced ML on GCP",
      subtitle: "- GCP Training",
      logo_path: "google_logo.png",
      certificate_link:
        "https://www.coursera.org/account/accomplishments/verify/5JZZM7TNQ2AV",
      alt_name: "Google",
      color_code: "#0C9D5899",
    },
    {
      title: "DL on Tensorflow",
      subtitle: "- Laurence Moroney",
      logo_path: "deeplearning_ai_logo.png",
      certificate_link:
        "https://www.coursera.org/account/accomplishments/verify/6T4DCUGNK8J8",
      alt_name: "deeplearning.ai",
      color_code: "#00000099",
    },
    {
      title: "Fullstack Development",
      subtitle: "- Jogesh Muppala",
      logo_path: "coursera_logo.png",
      certificate_link:
        "https://www.coursera.org/account/accomplishments/certificate/NRANJA66Y2YA",
      alt_name: "Coursera",
      color_code: "#2A73CC",
    },
    {
      title: "Kuberenetes on GCP",
      subtitle: "- Qwiklabs",
      logo_path: "gcp_logo.png",
      certificate_link:
        "https://google.qwiklabs.com/public_profiles/e4d5a92b-faf6-4679-a70b-a9047c0cd750",
      alt_name: "GCP",
      color_code: "#4285F499",
    },
    {
      title: "Cryptography",
      subtitle: "- Saurabh Mukhopadhyay",
      logo_path: "nptel_logo.png",
      certificate_link:
        "https://drive.google.com/open?id=1z5ExD_QJVdU0slLkp8CBqSF3-C3g-ro_",
      alt_name: "NPTEL",
      color_code: "#FFBB0099",
    },
    {
      title: "Cloud Architecture",
      subtitle: "- Qwiklabs",
      logo_path: "gcp_logo.png",
      certificate_link:
        "https://google.qwiklabs.com/public_profiles/5fab4b2d-be6f-408c-8dcb-6d3b58ecb4a2",
      alt_name: "GCP",
      color_code: "#4285F499",
    },
  ],
};

// Experience Page
const experience = {
  title: "Experience",
  subtitle: "Work, Internship and Volunteership",
  description:
    "I have worked with many evolving startups as ML and DL Developer, Designer and Software Architect. I have also worked with some well established companies mostly as AI Developer. I love organising events and that is why I am also involved with many opensource communities as a representative.",
  header_image_path: "experience.svg",
  sections: [
    {
      title: "Work",
      experiences: [
        {
          title: "Senior Full stack Developer",
          company: "Boyle",
          company_url: "https://boyle.com/",
          logo_path: "legato_logo.png",
          duration: "June 2020 - PRESENT",
          location: "San Fransisco, CA",
          description:
            "Boyle is an international Technology and Management Consulting Group "+
            "with a rapid pace development and innovative solutions for demanding"+
            "projects. I work as a full-stack developer here, responsible for building"+
            "deploying and maintaining internal web applications.",
          color: "#0879bf",
        },
        {
          title: "Full Stack Developer",
          company: "Lauzon",
          company_url: "https://lauzonflooring.com/",
          logo_path: "muffito_logo.png",
          duration: "2013 - 2018",
          location: "San Fransisco, CA",
          description:
            "Lauzon is a universal digital loyalty program that offers unique and fun"+
            "rewards at the places you love. \n Hired, trained and lead Agile team of 7 full-stack developers.",
          color: "#9b1578",
        },
        {
          title: "Solution Architect",
          company: "Keeling Group",
          company_url: "http://www.keelingconsulting.com/",
          logo_path: "freecopy_logo.png",
          duration: "2010 - 2013",
          location: "Palo Alto, CA",
          description:
            "Keeling Group is a leading Digital Product Studio in California, helping"+
            "companies to thrive on mobile apps, the web, VR/AR and IoT.",
          color: "#fc1f20",
        },
      ],
    },
    {
      title: "Internships",
      experiences: [
        {
          title: "Data Science Research Intern",
          company: "Delhivery Pvt. Ltd.",
          company_url: "https://www.delhivery.com/",
          logo_path: "delhivery_logo.png",
          duration: "May 2019 - Sept 2019",
          location: "Gurgaon, Haryana",
          description:
            "I have worked on project of predicting freight rates based on previous data. There were two objectives: (1) To build a forecasting engine to predict daily freight rates. (2) To embed feature in the model which can explain the seasonal major changes in freight rate based on regions and locations. I have closely worked with deep learning models in combination with statistical methods to create solution for this. At the end of internship, I had created model deployed on AWS EC2 with the use of Kafka stream jobs, ElasticSearch and PostgreSQL.",
          color: "#ee3c26",
        },
        {
          title: "Data Science Intern",
          company: "Intel Indexer LLC",
          company_url:
            "https://opencorporates.com/companies/us_dc/EXTUID_4170286",
          logo_path: "intel_logo.jpg",
          duration: "Nov 2018 - Dec 2018",
          location: "Work From Home",
          description:
            "This is financial Solution Company. I have made Supervised Learning model for the company which can perform time series analysis on Stock price data for 32 companies. I have built LSTM Neural Networks Model and trained the data of 32 companies for last 2 years. This model is also used for forecasting.",
          color: "#0071C5",
        },
      ],
    },
    {
      title: "Volunteerships",
      experiences: [
        {
          title: "Google Explore ML Facilitator",
          company: "Google",
          company_url: "https://about.google/",
          logo_path: "google_logo.png",
          duration: "June 2019 - April 2020",
          location: "Hyderabad, Telangana",
          description:
            "Explore Machine Learning (ML) is a Google-sponsored program for university students to get started with Machine Learning. The curriculum offers 3 tracks of ML Content (Beginner, Intermediate, Advanced) and relies on university student facilitators to train other students on campus and to build opensource projects under this program.",
          color: "#4285F4",
        },
        {
          title: "Microsoft Student Partner",
          company: "Microsoft",
          company_url: "https://www.microsoft.com/",
          logo_path: "microsoft_logo.png",
          duration: "Aug 2019 - May 2020",
          location: "Hyderabad, Telangana",
          description:
            "Microsoft Student Partner is a program for university students to lead the awareness and use of Cloud especially Azure tools in the development of their projects and startups. Under this program, I have organised hands on workshops and seminars to teach Cloud Computing concepts to students.",
          color: "#D83B01",
        },
        {
          title: "Mozilla Campus Captain",
          company: "Mozilla",
          company_url: "https://www.mozilla.org/",
          logo_path: "mozilla_logo.png",
          duration: "Oct 2019 - May 2020",
          location: "Kurnool, Andhra Pradesh",
          description:
            "My responsibility for this program was to create opensource environment in college and in the city. We have organised multiple hackathons on the problems collected by ordinary people from Kurnool city. We have build opensource community of our own college. The community is available at dsc_iiitdmk on github.",
          color: "#000000",
        },
        {
          title: "Developer Students Club Member",
          company: "DSC IIITDM Kurnool",
          company_url:
            "https://www.linkedin.com/company/developer-students-club-iiitdm-kurnool",
          logo_path: "dsc_logo.png",
          duration: "Jan 2018 - May 2020",
          location: "Kurnool, Andhra Pradesh",
          description:
            "We have well established developer club in college which is directly associated with Google Developers. We have developed many interdisciplinary projects under the membership of this club. We have organised workshops and activities on Android Application Development, Flutter and React JS.",
          color: "#0C9D58",
        },
        {
          title: "Developer Program Member",
          company: "Github",
          company_url: "https://github.com/",
          logo_path: "github_logo.png",
          duration: "July 2019 - PRESENT",
          location: "Work From Home",
          description:
            "I am actively contributing to many opensource projects. I have contributed to projects of organisations like Tensorflow, Uber, Facebook, Google, Scikit-learn, Kiwix, Sympy, Python, NVLabs, Fossasia, Netrack, Keras etc. These contributions include bug fixes, feature requests and formulating proper documentation for project.",
          color: "#181717",
        },
      ],
    },
  ],
};

// Projects Page
const projectsHeader = {
  title: "Projects",
  description:
    "My projects makes use of vast variety of latest technology tools. My best experience is to create Data Science projects and deploy them to web applications using cloud infrastructure.",
  avatar_image_path: "projects_image.svg",
};

const publicationsHeader = {
  title: "Publications",
  description:
    "I have worked on and published a few research papers and publications of my own.",
  avatar_image_path: "projects_image.svg",
};

// Contact Page
const contactPageData = {
  contactSection: {
    title: "About Me",
    profile_image_path: "MoriyaRyota.png",
    description:
      "Thanks to read my portfolio. I am from Sendai and studying in Aizuwakamatsu in Japan. And working in Tokyo now. 24 old. I like modern skills and nature. If you are in touble, I can help you with IT skils. Please Call me.",

  },
  blogSection: {
    title: "Blogs",
    subtitle:
      "For individual fundamental empowerment, I like to write powerful lessons that create impact on each of the reader individually to change the core of their character.",
      link: "https://wordpress.org/",
    avatar_image_path: "blogs_image.svg",
  },
  addressSection: {
    title: "Address",
    subtitle:
      "Ichikawa, Chiba, Japan",

      
    avatar_image_path: "address_image.svg",
    location_map_link: "https://www.google.com/maps/dir//%E3%80%92272-0102+%E5%8D%83%E8%91%89%E7%9C%8C%E5%B8%82%E5%B7%9D%E5%B8%82%E4%B8%8B%E6%96%B0%E5%AE%BF%EF%BC%96%E2%88%92%EF%BC%94+%E3%83%8B%E3%83%A5%E3%83%BC%E3%82%A8%E3%82%B9%E3%83%86%E3%83%BC%E3%83%88%E3%82%A2%E3%83%A4/@35.6931761,139.9127275,15.02z/data=!4m9!4m8!1m0!1m5!1m1!1s0x6018873eb91443e5:0x1575728937ace24d!2m2!1d139.9204925!2d35.6962312!3e0?entry=ttu",

  },
  phoneSection: {
    title: "Phone Number",
    subtitle: "+81 7035249991",
  },
};

export {
  settings,
  seo,
  greeting,
  socialMediaLinks,
  skills,
  competitiveSites,
  degrees,
  certifications,
  experience,
  projectsHeader,
  publicationsHeader,
  contactPageData,
};
