"use client";

import { Github, Linkedin, Mail, Heart } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="py-12">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <div className="text-gray-400 flex flex-col items-center space-y-4">
            <div className="flex items-center space-x-1">
              <span>Built with</span>
              <Heart className="w-4 h-4 text-red-500" />
              <span>by Shravya R © 2025</span>
            </div>
            {/* <div className="flex space-x-4">
              <a
                href="https://github.com/shravya235"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-gray-800 rounded-lg hover:bg-gray-700 transition-colors duration-200"
              >
                <Github className="w-5 h-5" />
              </a>
              <a
                href="https://www.linkedin.com/in/shravya-r-32913028b/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-gray-800 rounded-lg hover:bg-gray-700 transition-colors duration-200"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a
                href="mailto:shravya11r@gmail.com"
                className="p-3 bg-gray-800 rounded-lg hover:bg-gray-700 transition-colors duration-200"
              >
                <Mail className="w-5 h-5" />
              </a>
            </div> */}
          </div>
        </div>

      </div>
    </footer>
  );
}