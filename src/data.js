import { HiOutlinePresentationChartBar } from "react-icons/hi";
import { TbPig, TbFileInvoice, TbPlaneDeparture } from "react-icons/tb";
import { FaReact } from "react-icons/fa";
import { IoDiamondOutline } from "react-icons/io5";
import {
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
  FaGooglePlusG,
} from "react-icons/fa";
import { BsEnvelopeOpen, BsTelephone } from "react-icons/bs";

const navItemClasses = "Navbar__item";
export const navLinks = [
  { label: "Home", href: "#home", className: navItemClasses },
  { label: "Services", href: "#services", className: navItemClasses },
  { label: "Features", href: "#features", className: navItemClasses },
  { label: "Pricing", href: "#pricing", className: navItemClasses },
  { label: "Team", href: "#team", className: navItemClasses },
  { label: "Testimonials", href: "#testimonials", className: navItemClasses },
  { label: "Blog", href: "#blog", className: navItemClasses },
  { label: "Contact", href: "#contact", className: navItemClasses },
];
export const cardListData = [
  {
    Icon: <IoDiamondOutline color="#fb3e3e" size={35} />,
    title: "Digital Design",
    body: "Some quick example text to build on the card title and make up the bulk of the card's content. Moltin gives you the platform.",
  },
  {
    Icon: <HiOutlinePresentationChartBar color="#fb3e3e" size={35} />,
    title: "Unlimited Colors",
    body: "Credibly brand standards compliant users without extensible services. Anibh euismod tincidunt ut laoreet.",
  },
  {
    Icon: <TbPig color="#fb3e3e" size={35} />,
    title: "Strategy Solutions",
    body: "Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean necessary regelialia.",
  },
  {
    Icon: <FaReact color="#fb3e3e" size={35} />,
    title: "Awesome Support",
    body: "It is a paradisematic country, in which roasted parts of sentences fly into your mouth leave for the far World.",
  },
  {
    Icon: <TbFileInvoice color="#fb3e3e" size={35} />,
    title: "Truly Multipurpose",
    body: "Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic.",
  },
  {
    Icon: <TbPlaneDeparture color="#fb3e3e" size={35} />,
    title: "Easy to customize",
    body: "Question Marks and devious Semikoli, but the Little Blind Text didn’t listen. She packed her seven versalia.",
  },
];

export const pricingCardData = [
  {
    type: "ECONOMY",
    pricing: 9.9,
    billing: "BILLING PER MONTH",
    bandwidth: "1GB",
    onlineSpace: "50MB",
    support: "No",
    domain: "1",
    hiddenFees: "No",
  },
  {
    type: "DELUXE",
    pricing: 19.9,
    billing: "BILLING PER MONTH",
    bandwidth: "10GB",
    onlineSpace: "500MB",
    support: "No",
    domain: "10",
    hiddenFees: "No",
  },
  {
    type: "ULTIMATE",
    pricing: 29.9,
    billing: "BILLING PER MONTH",
    bandwidth: "100GB",
    onlineSpace: "2GB",
    support: "Yes",
    domain: "Unlimited",
    hiddenFees: "No",
  },
];

export const peopleData = [
  {
    src: "assets/people1.jpg",
    fullName: "Joshua Stemple",
    role: "CEO",
  },
  {
    src: "assets/people2.jpg",
    fullName: "Maria Pemstle",
    role: "DESIGNER",
  },
  {
    src: "assets/people3.jpg",
    fullName: "Wanda Arthur",
    role: "DEVELOPER",
  },
  {
    src: "assets/people4.jpg",
    fullName: "Elaine Stclair",
    role: "MANAGER",
  },
];

export const testimonialsData = [
  {
    src: "assets/profile1.jpg",
    testimonial:
      "I feel confident imposing change on myself. It's a lot more fun progressing than looking back. That's why I need to throw curve balls.",
    owner: "RUBEN REED",
  },
  {
    src: "assets/profile2.jpg",
    testimonial:
      "Our task must be to free ourselves by widening our circle of compassion to embrace all living creatures and the whole of nature and its beauty",
    owner: "MICHAEL P. HOWLETT",
  },
  {
    src: "assets/profile3.jpg",
    testimonial:
      "I've learned that people will forget what you said, people will forget what you did, but people will never forget how you made them feel.",
    owner: "THERESA D. SINCLAIR",
  },
];

export const blogsData = [
  {
    categorie: "ui & ux design",
    title: "Doing a cross country road trip",
    body: "She packed her seven versalia, put her initial into the belt and made herself on the way..",
    src: "assets/blog1.jpg",
  },
  {
    categorie: "digital marketing",
    title: "New exhibition at our Museum",
    body: "Pityful a rethoric question ran over her cheek, then she continued her way.",
    src: "assets/blog2.jpg",
  },
  {
    categorie: "travelling",
    title: "Why are so many people..",
    body: "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia.",
    src: "assets/blog3.jpg",
  },
];

export const getInTouchData = [
  {
    type: "Office Address 1",
    values: ["4461 Cedar Street Moro, AR 72368"],
  },
  {
    type: "Office Address 2",
    values: ["2467 Swick Hill Street", "New Orleans, LA 70171"],
  },
  {
    type: "Working Hours",
    values: ["9:00AM To 6:00PM"],
  },
];

export const contactInfos = {
  socialMedia: [
    { icon: <FaFacebookF color="#fb3e3e" size={25} />, link: "" },
    { icon: <FaTwitter color="#fb3e3e" size={25} />, link: "" },
    { icon: <FaLinkedinIn color="#fb3e3e" size={25} />, link: "" },
    { icon: <FaGooglePlusG color="#fb3e3e" size={25} />, link: "" },
  ],
  contacts: [
    {
      icon: <BsEnvelopeOpen color="#fb3e3e" size={25} />,
      value: " +91 123 4556 789",
    },
    {
      icon: <BsTelephone color="#fb3e3e" size={25} />,
      value: "Support@info.com",
    },
  ],
};

export const footerData = [
  {
    title: "DORSIN",
    links: [
      {
        value: "Home",
        href: "#",
      },
      {
        value: "About us",
        href: "#",
      },
      {
        value: "Careers",
        href: "#",
      },
      {
        value: "Contact us",
        href: "#",
      },
    ],
  },
  {
    title: "Information",
    links: [
      {
        value: "Terms & Condition",
        href: "#",
      },
      {
        value: "About us",
        href: "#",
      },
      {
        value: "Jobs",
        href: "#",
      },
      {
        value: "Bookmarks",
        href: "#",
      },
    ],
  },
  {
    title: "Support",
    links: [
      {
        value: "FAQ",
        href: "#",
      },
      {
        value: "Contact",
        href: "#",
      },
      {
        value: "Disscusion",
        href: "#",
      },
    ],
  },
];
