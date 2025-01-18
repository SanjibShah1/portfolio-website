import React from 'react';
import { motion } from 'framer-motion';
import { Code2, Brain, Coffee } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="py-20 bg-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">About Me</h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto"></div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}
            viewport={{ once: true }}
            className="p-8 bg-white rounded-lg shadow-xl hover:shadow-2xl transform hover:-translate-y-1 transition-transform"
          >
            <Code2 className="w-12 h-12 text-blue-500 mb-6 mx-auto" />
            <h3 className="text-xl font-semibold mb-4 text-gray-800">Clean Code</h3>
            <p className="text-gray-600">
              I write clean, maintainable, and efficient code following best practices and design patterns.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
            viewport={{ once: true }}
            className="p-8 bg-white rounded-lg shadow-xl hover:shadow-2xl transform hover:-translate-y-1 transition-transform"
          >
            <Brain className="w-12 h-12 text-blue-500 mb-6 mx-auto" />
            <h3 className="text-xl font-semibold mb-4 text-gray-800">Problem Solver</h3>
            <p className="text-gray-600">
              I enjoy tackling complex problems and finding innovative solutions through logical thinking.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3, ease: "easeOut" }}
            viewport={{ once: true }}
            className="p-8 bg-white rounded-lg shadow-xl hover:shadow-2xl transform hover:-translate-y-1 transition-transform"
          >
            <Coffee className="w-12 h-12 text-blue-500 mb-6 mx-auto" />
            <h3 className="text-xl font-semibold mb-4 text-gray-800">Continuous Learner</h3>
            <p className="text-gray-600">
            I'm always striving to learn new things and improve my understanding of the latest technologies and industry trends.
            </p>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4, ease: "easeOut" }}
          viewport={{ once: true }}
          className="mt-16 text-center max-w-3xl mx-auto"
        >
          <p className="text-lg text-gray-700 leading-relaxed">
            As a Computer Engineer, I specialize in developing robust and scalable applications. 
            With a strong foundation in computer science principles and a passion for clean code, 
            I strive to create solutions that make a positive impact.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
