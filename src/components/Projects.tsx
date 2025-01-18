import React from 'react';
import { motion } from 'framer-motion';
import { Github } from 'lucide-react';
import stock from './stock.jpg';
import smartflow from './smartflow.png';
import facial from './facial.png';

const Projects = () => {
  const projects = [
    {
      title: "Stock Market Prediction",
      description: "A full-stack web application for predicting stock trends using machine learning models.",
      image: stock,
      technologies: ["Python", "Streamlit", "Machine Learning"],
      github: "https://github.com/SanjibShah1/Stock-Market-Prediction", // Replace with your actual GitHub link
    },
    {
      title: "SmartFlow: Intelligent Traffic Management",
      description: "A real-time system for adaptive signal control and speed monitoring to optimize traffic flow.",
      image: smartflow,
      technologies: ["YOLOv5", "DETR", "Python", "Streamlit", "OpenCV"],
      github: "https://github.com/SanjibShah1/SmartFlow", // Replace with your actual GitHub link
    },
    {
      title: "Facial Keypoints Detection",
      description: "A machine learning project to detect facial landmarks using convolutional neural networks.",
      image: facial,
      technologies: ["Python", "Keras", "TensorFlow", "OpenCV"],
      github: "https://github.com/SanjibShah1/Facial_Key_points_Detection", // Replace with your actual GitHub link
    }
  ];

  return (
    <section id="projects" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Projects</h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto"></div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white rounded-lg overflow-hidden shadow-lg transform transition-all hover:scale-105 hover:shadow-2xl hover:bg-gray-100"
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-48 object-cover transform transition-all hover:scale-110"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2 text-gray-900">{project.title}</h3>
                <p className="text-gray-600 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 bg-gray-100 rounded-full text-sm text-gray-700"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex space-x-4">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center text-gray-700 hover:text-gray-900 transition-all"
                  >
                    <Github className="w-5 h-5 mr-2" />
                    <span className="font-semibold">View Code</span>
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
