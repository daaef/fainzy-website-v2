export interface Job {
  id: string;
  title: string;
  location: string;
  date: string;
  type: string;
  salary: string;
  skills: string[];
  description?: string;
  responsibilities?: string[];
  imageKey?: string; // small key to pick a hero image from the careers images
  applyBefore?: string;
  requirements?: string[];
  qualifications?: string[];
  benefits?: string[];
  techStack?: string[];
}

export const jobs: Job[] = [
  {
    id: "3f8a5c2e-1d4b-4e9f-a6c7-8b2d4e6f9a1c", // software-developer-full-stack
    title: "Software Developer (Full-Stack)",
    location: "Remote",
    date: "September 22, 2025",
    type: "Full time",
    salary: "₦700,000 - ₦900,000",
    skills: ["Python", "Django", "JavaScript", "React", "TypeScript"],
    description:
      "We are seeking a talented Full-Stack Developer to join our dynamic team in building cutting-edge web applications. The ideal candidate will have experience with both front-end and back-end technologies and be passionate about creating seamless user experiences.",
    responsibilities: [
      "Build and integrate REST APIs in Django (best practices CRUD)",
      "Write unit tests and perform code peer reviews to maintain high code quality and robustness",
      "Design and develop product UI based on provided designs, while also being able to improvise and iterate into user experiences",
      "Maintain clean code. Design Patterns for better shared architecture",
      "Align on the React project's file structure",
      "Collaborate locally with back-end and professional designers",
      "Adhering our requirements, custom, and processes to all performance",
    ],
    requirements: [
      "Proven professional experience with Python and Django",
      "Proficient in JavaScript and React, with Django Rest Framework (DRF) and RESTful APIs",
      "Proficiency with frontend frameworks or libraries (e.g., React)",
      "Solid understanding of databases, indexing, caching, authentication, and performance optimization",
      "Comfortable with Docker for containerization",
      "Familiarity with AWS or other cloud-based infrastructure",
    ],
    qualifications: [
      "Strong problem-solving skills and creativity",
      "Ability to adapt and work in collaborative environments",
    ],
    benefits: [
      "✓ Hybrid/REMOTE",
      "✓ Fully Remote setup",
      "✓ Comfortable work station",
      "✓ One salary increase",
    ],
    techStack: ["Python", "Django", "JavaScript", "React", "PostgreSQL", "AWS", "Docker", "REST APIs"],
    imageKey: "product",
    applyBefore: "October 15, 2025",
  },
  {
    id: "7b4e9f2a-6c3d-4a1e-b8f5-9c6d2e4a7b3f", // robotics-engineer
    title: "Robotics Engineer",
    location: "Nagoya, Japan",
    date: "October 11, 2025",
    type: "Full time",
    salary: "₦1,000,000 - ₦1,800,000",
    skills: ["ROS", "C++", "Embedded", "Control Systems"],
    description:
      "We are seeking an experienced Robotics Engineer to join our autonomous systems team in Nagoya. The ideal candidate will have deep expertise in ROS, embedded systems, and control algorithms. You will be working on cutting-edge autonomous delivery robots that are transforming the logistics industry.",
    responsibilities: [
      "Design and develop control algorithms for autonomous navigation and obstacle avoidance",
      "Implement and optimize embedded software for real-time robotic systems",
      "Integrate sensors (LiDAR, cameras, IMU) and actuators into robot platforms",
      "Collaborate with hardware engineers to validate prototypes and conduct field testing",
      "Develop simulation environments and hardware-in-the-loop testing frameworks",
      "Debug and troubleshoot complex robot behaviors in real-world scenarios",
      "Contribute to technical documentation and architectural design reviews",
    ],
    requirements: [
      "Strong proficiency in C++ and Python for robotics applications",
      "Extensive experience with ROS (Robot Operating System) and ROS2",
      "Solid understanding of embedded systems, microcontrollers, and RTOS",
      "Experience with sensor fusion, SLAM algorithms, and path planning",
      "Knowledge of control theory and implementation of PID, MPC, or other control strategies",
      "Familiarity with Linux-based embedded systems and real-time computing",
    ],
    qualifications: [
      "BSc/MS in Robotics, Electrical Engineering, Mechatronics, or related field",
      "3+ years of hands-on experience developing and deploying robotic systems",
      "Strong problem-solving abilities and experience debugging complex systems",
    ],
    benefits: [
      "✓ Relocation assistance to Nagoya, Japan (visa sponsorship available)",
      "✓ Comprehensive health benefits and paid time off",
      "✓ Professional development budget for conferences and training",
      "✓ Access to state-of-the-art robotics lab and testing facilities",
    ],
    techStack: ["ROS", "ROS2", "C++", "Python", "Embedded Linux", "RTOS", "Gazebo", "Hardware-in-the-loop testing"],
    imageKey: "engineering",
    applyBefore: "October 30, 2025",
  },
  {
    id: "5d2e8f4a-9b6c-4e3d-a1f7-6c9b2e5d8a4f", // ai-ml-engineer
    title: "AI/ML Engineer",
    location: "Remote",
    date: "September 25, 2025",
    type: "Full time",
    salary: "₦2,000,000 - ₦2,500,000",
    skills: ["Python", "TensorFlow", "PyTorch", "Model Deployment"],
    description:
      "Join our AI/ML team to develop and productionize cutting-edge machine learning models for autonomous robotics. We're looking for talented engineers who can bridge the gap between research and production, building models that power our perception, navigation, and decision-making systems.",
    responsibilities: [
      "Design, train, and evaluate deep learning models for computer vision and perception tasks",
      "Optimize models for deployment on edge devices and embedded systems with limited compute",
      "Implement and maintain ML pipelines for data collection, annotation, training, and evaluation",
      "Collaborate with robotics engineers to integrate ML models into autonomous systems",
      "Conduct experiments to improve model accuracy, latency, and robustness",
      "Monitor model performance in production and implement continuous improvement strategies",
      "Stay current with latest ML research and evaluate new techniques for potential adoption",
    ],
    requirements: [
      "Strong fundamentals in machine learning, deep learning, and computer vision",
      "Extensive experience with PyTorch or TensorFlow for model development",
      "Proven track record of deploying ML models to production environments",
      "Experience with model optimization techniques (quantization, pruning, distillation)",
      "Proficiency in Python and ML tooling ecosystem (NumPy, Pandas, scikit-learn)",
      "Familiarity with MLOps practices and tools for model versioning and monitoring",
    ],
    qualifications: [
      "MS/PhD in Computer Science, Machine Learning, or related field (preferred but not required)",
      "Strong portfolio of ML projects, publications, or open-source contributions",
      "Excellent problem-solving skills and ability to work independently",
    ],
    benefits: [
      "✓ Fully remote position with flexible working hours",
      "✓ Generous conference and training budget for professional development",
      "✓ Stock options and competitive compensation package",
      "✓ Access to high-performance computing resources and GPUs",
    ],
    techStack: ["Python", "PyTorch", "TensorFlow", "ONNX", "TensorRT", "Docker", "Kubernetes", "AWS/GCP", "MLflow"],
    imageKey: "innovation",
    applyBefore: "November 1, 2025",
  },
  {
    id: "9a6c3e1f-4d7b-4e2a-8f5c-3b9d6e1a4c7f", // hardware-engineer
    title: "Hardware Engineer",
    location: "Nagoya, Japan",
    date: "November 1, 2025",
    type: "Full time",
    salary: "₦700,000 - ₦850,000",
    skills: ["PCB", "CAD", "Electronics", "DFM"],
    description:
      "We are seeking a skilled Hardware Engineer to design, validate, and productionize electronics for our autonomous delivery robots. You will work closely with mechanical and software teams to create robust, cost-effective hardware solutions that can withstand real-world operating conditions.",
    responsibilities: [
      "Design and review PCB schematics, layouts, and multi-layer board designs",
      "Select components based on performance, cost, and availability considerations",
      "Validate hardware through lab testing, environmental testing, and field trials",
      "Work with manufacturing partners to ensure design for manufacturability (DFM) and high yield",
      "Debug hardware issues and implement design improvements based on test results",
      "Create and maintain technical documentation including BOMs, test procedures, and design specifications",
      "Collaborate with firmware engineers to ensure hardware-software integration",
    ],
    requirements: [
      "Proficiency with PCB design tools such as Altium Designer or KiCad",
      "Strong understanding of analog and digital circuit design, power electronics, and signal integrity",
      "Experience with component selection, schematic capture, and PCB layout best practices",
      "Hands-on experience with lab equipment (oscilloscopes, multimeters, signal generators)",
      "Knowledge of design for manufacturability (DFM) and design for testing (DFT)",
      "Familiarity with EMC/EMI considerations and regulatory compliance",
    ],
    qualifications: [
      "Bachelor's or Master's degree in Electrical Engineering or related field",
      "3+ years of experience in hardware design and productization",
      "Experience bringing products from prototype to mass production",
    ],
    benefits: [
      "✓ Access to fully-equipped electronics lab and prototyping resources",
      "✓ Relocation support and visa sponsorship for Nagoya, Japan",
      "✓ Comprehensive health benefits and paid time off",
      "✓ Professional development opportunities and training budget",
    ],
    techStack: ["Altium Designer", "KiCad", "SPICE simulation", "Oscilloscopes", "Logic Analyzers", "PCB fabrication workflows"],
    imageKey: "engineering",
    applyBefore: "November 20, 2025",
  },
  {
    id: "2e5a8c4f-6b9d-4a3e-7f1c-9b4e6d2a5c8f", // product-designer
    title: "Product Designer",
    location: "Remote",
    date: "December 18, 2025",
    type: "Full time",
    salary: "₦800,000 - ₦1,200,000",
    skills: ["Figma", "UI/UX", "Prototyping", "User Research"],
    description:
      "We are looking for a talented Product Designer to lead the design of user-facing products and experiences. You will work at the intersection of robotics, logistics, and software to create intuitive interfaces for our autonomous delivery platform, mobile applications, and internal tools.",
    responsibilities: [
      "Lead end-to-end product design from concept to launch, including wireframing, prototyping, and visual design",
      "Conduct user research, interviews, and usability testing to inform design decisions",
      "Create and maintain design systems, component libraries, and style guides",
      "Collaborate closely with product managers and engineers to ship polished user experiences",
      "Design for multiple platforms including web, mobile (iOS/Android), and embedded displays",
      "Iterate on designs based on user feedback, analytics, and business requirements",
      "Advocate for user-centered design principles across the organization",
    ],
    requirements: [
      "Strong portfolio showcasing end-to-end product design work and UX process",
      "Proficiency in Figma for interface design, prototyping, and design systems",
      "Experience conducting user research, usability testing, and synthesizing insights",
      "Solid understanding of interaction design, information architecture, and visual design principles",
      "Ability to work collaboratively with cross-functional teams including engineering and product",
      "Excellent communication and presentation skills",
    ],
    qualifications: [
      "3+ years of experience in product design or UX/UI design",
      "Bachelor's degree in Design, HCI, or related field (or equivalent experience)",
      "Experience designing for B2B SaaS, logistics, or hardware-software products is a plus",
    ],
    benefits: [
      "✓ Fully remote position with flexible working hours",
      "✓ Generous learning and development budget for courses, books, and conferences",
      "✓ Opportunity to work on both hardware and software product design",
      "✓ Collaborative team culture with regular design critiques and feedback sessions",
    ],
    techStack: ["Figma", "FigJam", "Miro", "ProtoPie", "Adobe Creative Suite", "Maze", "UserTesting"],
    imageKey: "product",
    applyBefore: "December 10, 2025",
  },
  {
    id: "6c9e2a5f-3d8b-4e4a-1f7c-4b6d9e2a8c5f", // devops-engineer
    title: "DevOps Engineer",
    location: "Remote",
    date: "November 20, 2025",
    type: "Full time",
    salary: "₦700,000 - ₦850,000",
    skills: ["Docker", "Kubernetes", "AWS", "CI/CD"],
    description:
      "Join our infrastructure team to build and maintain the platform that powers our autonomous delivery robots. We're looking for a DevOps Engineer who can design scalable cloud infrastructure, implement robust CI/CD pipelines, and ensure high availability of our production systems.",
    responsibilities: [
      "Design, implement, and maintain CI/CD pipelines for multiple services and repositories",
      "Manage and optimize cloud infrastructure on AWS (EC2, ECS, Lambda, RDS, S3, etc.)",
      "Deploy and manage Kubernetes clusters for containerized applications",
      "Implement infrastructure as code using Terraform or similar tools",
      "Set up monitoring, logging, and alerting systems using Prometheus, Grafana, and ELK stack",
      "Develop and maintain incident response processes and participate in on-call rotation",
      "Optimize infrastructure costs and improve system performance and reliability",
    ],
    requirements: [
      "Strong experience with Docker and Kubernetes for container orchestration",
      "Proficiency with cloud platforms, preferably AWS (EC2, ECS, Lambda, RDS, etc.)",
      "Experience with infrastructure as code tools like Terraform or CloudFormation",
      "Solid understanding of CI/CD concepts and tools (Jenkins, GitLab CI, GitHub Actions)",
      "Knowledge of monitoring and observability tools (Prometheus, Grafana, Datadog, etc.)",
      "Proficiency in scripting languages such as Python, Bash, or Go",
    ],
    qualifications: [
      "3+ years of experience managing production infrastructure and DevOps practices",
      "Experience with high-availability systems and incident management",
      "Strong troubleshooting skills and ability to debug complex distributed systems",
    ],
    benefits: [
      "✓ Fully remote position with flexible working hours",
      "✓ On-call compensation and rotation schedule",
      "✓ Generous learning budget for certifications and training",
      "✓ Work with cutting-edge robotics and cloud infrastructure",
    ],
    techStack: ["Docker", "Kubernetes", "Terraform", "AWS", "Prometheus", "Grafana", "GitLab CI", "Ansible", "ELK Stack"],
    imageKey: "worldclass",
    applyBefore: "December 5, 2025",
  },
  {
    id: "8f3a6c2e-9b5d-4e1a-4f7c-2b8d6e9a3c1f", // senior-software-engineer
    title: "Senior Software Engineer",
    location: "San Francisco, USA",
    date: "October 5, 2025",
    type: "Full time",
    salary: "₦1,500,000 - ₦2,000,000",
    skills: ["React", "Node.js", "TypeScript", "Architecture"],
    description:
      "We are seeking a Senior Software Engineer to lead critical technical initiatives and help scale our platform. You will own complex projects end-to-end, mentor engineers, and shape our technical architecture. This is an opportunity to make a significant impact at a fast-growing robotics company.",
    responsibilities: [
      "Lead design and implementation of complex, cross-functional technical projects",
      "Architect scalable, maintainable systems that can handle millions of requests",
      "Mentor junior and mid-level engineers through code reviews, pair programming, and technical guidance",
      "Drive technical strategy and make key architectural decisions for the platform",
      "Collaborate with product managers and designers to define requirements and scope projects",
      "Establish engineering best practices, coding standards, and development workflows",
      "Participate in on-call rotation and lead incident response when needed",
    ],
    requirements: [
      "Proven track record of leading and shipping large-scale technical projects",
      "Strong system design skills and experience with distributed systems architecture",
      "Expert-level proficiency in TypeScript, Node.js, and React",
      "Deep understanding of database design, caching strategies, and performance optimization",
      "Experience with cloud platforms (AWS, GCP, Azure) and microservices architecture",
      "Excellent communication and collaboration skills",
    ],
    qualifications: [
      "5+ years of experience in full-stack software engineering",
      "Experience building and scaling systems that serve millions of users",
      "Track record of mentoring engineers and leading technical teams",
    ],
    benefits: [
      "✓ Competitive compensation package with equity/stock options",
      "✓ Relocation support to San Francisco (if applicable)",
      "✓ Comprehensive health, dental, and vision insurance",
      "✓ Flexible PTO and work-from-home options",
    ],
    techStack: ["React", "Next.js", "Node.js", "TypeScript", "PostgreSQL", "Redis", "GraphQL", "AWS"],
    imageKey: "worldclass",
    applyBefore: "October 25, 2025",
  },
  {
    id: "4a7e9c2f-8d6b-4e3a-5f1c-6b9d2e4a7c8f", // computer-vision-engineer
    title: "Computer Vision Engineer",
    location: "Remote",
    date: "November 15, 2025",
    type: "Full time",
    salary: "₦1,200,000 - ₦1,800,000",
    skills: ["OpenCV", "Python", "Deep Learning", "CUDA"],
    description:
      "We are seeking a Computer Vision Engineer to develop perception systems for our autonomous delivery robots. You will build and optimize vision pipelines for object detection, tracking, semantic segmentation, and scene understanding that enable robots to navigate safely in real-world environments.",
    responsibilities: [
      "Design and implement computer vision pipelines for object detection, tracking, and segmentation",
      "Develop and optimize deep learning models for perception tasks using PyTorch or TensorFlow",
      "Implement classical computer vision algorithms using OpenCV for preprocessing and feature extraction",
      "Optimize models and algorithms for real-time performance on edge devices (CUDA, TensorRT)",
      "Collaborate with robotics engineers to integrate vision systems into autonomous navigation stack",
      "Collect, annotate, and manage datasets for training and validation",
      "Evaluate and benchmark model performance on diverse real-world scenarios",
    ],
    requirements: [
      "Strong experience with OpenCV and classical computer vision techniques",
      "Proficiency with deep learning frameworks (PyTorch or TensorFlow) for vision tasks",
      "Experience deploying computer vision models to production or edge devices",
      "Knowledge of CUDA programming and GPU optimization techniques",
      "Familiarity with 3D vision, camera calibration, and multi-camera systems",
      "Strong Python programming skills and software engineering practices",
    ],
    qualifications: [
      "3+ years of experience in computer vision or related ML/AI roles",
      "Bachelor's or Master's degree in Computer Science, Robotics, or related field",
      "Experience with autonomous systems, robotics, or similar applications is a plus",
    ],
    benefits: [
      "✓ Fully remote position with flexible working hours",
      "✓ Opportunity to collaborate with research teams and publish findings",
      "✓ Access to GPU clusters and high-quality datasets",
      "✓ Conference attendance and professional development support",
    ],
    techStack: ["OpenCV", "PyTorch", "TensorFlow", "CUDA", "TensorRT", "ONNX", "ROS", "Python"],
    imageKey: "innovation",
    applyBefore: "December 1, 2025",
  },
  {
    id: "1c5e8a4f-2d9b-4e6a-7f3c-8b4d6e1a9c2f", // ux-researcher
    title: "UX Researcher",
    location: "London, UK",
    date: "December 1, 2025",
    type: "Full time",
    salary: "₦600,000 - ₦900,000",
    skills: ["Research", "Analytics", "User Testing", "Interviewing"],
    description:
      "We are looking for a UX Researcher to help us deeply understand our users and inform product decisions with data-driven insights. You will plan and conduct user research studies, synthesize findings, and work closely with product and design teams to create user-centered experiences.",
    responsibilities: [
      "Plan and conduct qualitative research studies including user interviews, usability testing, and field studies",
      "Design and execute quantitative research using surveys, A/B tests, and analytics",
      "Synthesize research findings into actionable insights and compelling presentations",
      "Present findings to cross-functional teams and influence product roadmap decisions",
      "Develop and maintain research roadmaps aligned with product goals",
      "Build and maintain user personas, journey maps, and other UX artifacts",
      "Collaborate with product designers and managers to define research questions and methodologies",
    ],
    requirements: [
      "Proven experience planning and conducting qualitative user research (interviews, usability tests, ethnographic studies)",
      "Strong understanding of quantitative research methods and statistical analysis",
      "Excellent synthesis and storytelling skills to communicate insights effectively",
      "Experience with research tools such as UserTesting, Optimal Workshop, or similar platforms",
      "Proficiency with analytics tools (Google Analytics, Mixpanel, Looker, etc.)",
      "Ability to work independently and manage multiple research projects simultaneously",
    ],
    qualifications: [
      "3+ years of experience in UX research, product research, or similar roles",
      "Bachelor's or Master's degree in HCI, Psychology, Sociology, or related field",
      "Portfolio of research projects demonstrating impact on product decisions",
    ],
    benefits: [
      "✓ Research stipends for recruiting participants and conducting studies",
      "✓ Conference budgets for professional development and networking",
      "✓ Flexible working hours and hybrid/remote options",
      "✓ Collaborative team culture with designers, PMs, and engineers",
    ],
    techStack: ["UserTesting", "Optimal Workshop", "Looker", "Google Analytics", "Mixpanel", "Figma", "Dovetail", "Miro"],
    imageKey: "people",
    applyBefore: "December 20, 2025",
  },
];
