export const personalInfo = {
  name: "Ghanta Sai Krishna",
  title: "PhD Student in Artificial Intelligence",
  affiliation: "University of Georgia",
  lab: "HeRoLab",
  advisor: "Dr. Ramviyas Parasuraman",
  email: "ghanta.sai@uga.edu",
  location: "Athens, Georgia, USA",
  profileImage: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&h=400",
  bio: [
    "I am a PhD student in Artificial Intelligence at the University of Georgia, working under the guidance of Dr. Ramviyas Parasuraman at the HeRoLab. My research focuses on multi-robot systems, computer vision, and autonomous navigation in complex environments.",
    "I have been actively researching on robotics and AI, focusing on multi-robot systems, SLAM, Autonomous systems.",
    "I completed my Bachelor of Technology in Data Science and Artificial Intelligence from IIIT Naya Raipur.",
    "Prior to my PhD, I gained valuable research experience at Samsung R&D Institute, Louisville Automation & Robotics Research Institute, and various academic labs, focusing on deep learning applications in computer vision and robotics."
  ]
};

export const socialLinks = {
  googleScholar: "https://scholar.google.com",
  github: "https://github.com",
  linkedin: "https://linkedin.com"
};

export const researchInterests = [
  {
    title: "Multi-Robot Systems",
    description: "Cooperative exploration, distributed localization, task planning",
    icon: "🤖",
    color: "purple"
  },
  {
    title: "Computer Vision",
    description: "SLAM, 3D object detection, RGB-D and LiDAR fusion",
    icon: "👁️",
    color: "red"
  },
  {
    title: "Robotics & AI",
    description: "Autonomous navigation, sensor fusion, Gaussian Processes",
    icon: "🧠",
    color: "pink"
  },
  {
    title: "Deep Learning",
    description: "DEEP RL, GANs, Vision Transformers",
    icon: "🔗",
    color: "blue"
  }
];

export const researchProjects = [
  {
    title: "SPACE: 3D Spatial Co-operation and Exploration Framework for Robust Mapping and Coverage with Multi-Robot Systems",
    authors: ["Ghanta Sai Krishna", "Ramviyas Parasuraman"],
    venue: "arXiv preprint arXiv:2411.02524 (2024), submitted to IEEE IROS 2025",
    year: "2024",
    description: "Developed an online 3D spatial exploration framework for multi-robot systems utilizing situational awareness and dynamic filter to mitigate ghosting trail effect in 3D reconstructions.",
    links: {
      paper: "#",
      code: "#",
      arxiv: "#"
    }
  },
  {
    title: "MGPRL: Distributed Multi-Gaussian Processes for Wi-Fi-based Multi-Robot Relative Localization in Large Indoor Environments",
    authors: ["Ghanta Sai Krishna", "Ramviyas Parasuraman"],
    venue: "submitted to IEEE IROS 2025",
    year: "2024",
    description: "Introduced a distributed multi-robot relative localization approach leveraging uncertainty-aware Gaussian Processes and Wi-Fi RSSI signals for robust, efficient pose estimation in GPS-denied environments.",
    links: {
      paper: "#",
      code: "#",
      arxiv: "#"
    }
  },
  {
    title: "3DS-SLAM: A 3D Object Detection based Semantic SLAM towards Dynamic Indoor Environments",
    authors: ["Ghanta Sai Krishna", "Kundrapu Supriya", "Sabur Baidya"],
    venue: "arXiv preprint arXiv:2310.06385 (2023), submitted to IEEE IROS 2025",
    year: "2023",
    description: "Developed real-time 3D Object Detection in Visual SLAM with RGB-D and LiDAR sensors for dynamic indoor environments.",
    links: {
      paper: "#",
      code: "#",
      arxiv: "#"
    }
  }
];

export const publications = {
  journal: [
    {
      title: "SPACE: 3D Spatial Co-operation and Exploration Framework for Robust Mapping and Coverage with Multi-Robot Systems",
      authors: ["Ghanta Sai Krishna", "Ramviyas Parasuraman"],
      venue: "arXiv preprint arXiv:2411.02524 (2024), submitted to IEEE IROS 2025 (2024)"
    }
  ],
  conference: [
    {
      title: "MGPRL: Distributed Multi-Gaussian Processes for Wi-Fi-based Multi-Robot Relative Localization",
      authors: ["Ghanta Sai Krishna", "Ramviyas Parasuraman"],
      venue: "submitted to IEEE IROS 2025 (2024)"
    },
    {
      title: "3DS-SLAM: A 3D Object Detection based Semantic SLAM towards Dynamic Indoor Environments",
      authors: ["Ghanta Sai Krishna", "Kundrapu Supriya", "Sabur Baidya"],
      venue: "arXiv preprint arXiv:2310.06385 (2023) (2023)"
    }
  ]
};

export const updates = [
  {
    date: "Nov 2024",
    type: "Publication",
    description: "SPACE Framework Paper Submitted to IROS 2025",
    color: "green"
  },
  {
    date: "Aug 2024",
    type: "Education",
    description: "Started PhD Journey at University of Georgia",
    color: "blue"
  },
  {
    date: "Jun 2024",
    type: "Experience",
    description: "Completed Research Internship at Louisville Automation",
    color: "yellow"
  },
  {
    date: "Mar 2024",
    type: "Recognition",
    description: "Appointed as IEEE Technical Reviewer",
    color: "pink"
  },
  {
    date: "Oct 2023",
    type: "Publication",
    description: "3DS-SLAM paper published on arXiv",
    color: "green"
  },
  {
    date: "May 2023",
    type: "Education",
    description: "Graduated with BTech in Data Science & AI",
    color: "blue"
  },
  {
    date: "Jan 2023",
    type: "Experience",
    description: "Started internship at Samsung R&D Institute",
    color: "yellow"
  }
];

export const education = [
  {
    degree: "PhD in Artificial Intelligence",
    institution: "University of Georgia, Athens, GA",
    period: "Aug 2024 - Present",
    description: "Research focus on multi-robot systems, computer vision, and autonomous navigation under Dr. Ramviyas Parasuraman at HeRoLab. Developing frameworks for distributed localization and cooperative exploration in complex environments."
  },
  {
    degree: "Bachelor of Technology in Data Science and Artificial Intelligence",
    institution: "IIIT Naya Raipur, India",
    period: "2019 - 2023",
    description: "Graduated with Dean's List recognition. Focused on machine learning, deep learning, computer vision, and robotics applications. Completed thesis on autonomous systems and multi-robot coordination."
  }
];

export const experience = [
  {
    title: "Graduate Research Assistant",
    organization: "HeRoLab, University of Georgia",
    period: "Aug 2024 - Present",
    description: "Developing SPACE framework for multi-robot exploration and MGPRL for distributed localization using Gaussian Processes and Wi-Fi signals. Publishing research in top-tier robotics conferences.",
    color: "green"
  },
  {
    title: "Research Intern",
    organization: "Louisville Automation & Robotics Research Institute",
    period: "Jan 2024 - Jun 2024",
    description: "Worked on deep learning applications in computer vision and robotics, focusing on real-time object detection and SLAM systems for dynamic environments.",
    color: "yellow"
  },
  {
    title: "Research Intern",
    organization: "Samsung R&D Institute",
    period: "Jan 2023 - May 2023",
    description: "Developed AI solutions for mobile and consumer electronics, working on computer vision algorithms and machine learning model optimization.",
    color: "purple"
  }
];

export const skills = {
  programming: ["Python", "C++", "MATLAB", "R"],
  frameworks: ["ROS", "PyTorch", "TensorFlow", "OpenCV"]
};
