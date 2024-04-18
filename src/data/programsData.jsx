import React from 'react';
import Po1 from "../assets/po1.jpg";
import Po2 from "../assets/po2.jpg";
import Po3 from "../assets/po3.jpg";
import Po4 from "../assets/po4.jpg";

export const programsData = [
    {
        image: <img src={Po1} alt="po1" />,
        heading: "Life Sciences",
        details: "Empowering Life Sciences to Pioneer the Future of Healthcare",
    },
    {
        image: <img src={Po2} alt="po2" />,
        heading: "Emerging Biotech",
        details: "Fuelling Breakthroughs and Shaping the Future: Empowering Emerging Biotech Innovations",
    },
    {
        image: <img src={Po3} alt="po3" />,
        heading: "Providers",
        details: "Revolutionizing Healthcare Delivery, Empowering Providers to Transform Lives",
    },
    {
        image: <img src={Po4} alt="po4" />,
        heading: "Payers",
        details: "Unleashing Efficiency and Quality: Empowering Payers to Redefine Healthcare Economics",
    },
];
