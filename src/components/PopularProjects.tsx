'use client';

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import json from "@/data/projects.json";

type ProjectType = {
  id: string;
  title: string;
  price: string;
  image: string;
  href: string;
};

export default function PopularProjects() {
  const projects: ProjectType[] = json;

  return (
    <div className="px-6 py-10 backgroundcolor">
      <h2 className="text-3xl font-bold header-text-color mb-8 text-center">
        Popular Projects
      </h2>

      <div className="flex justify-center">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 max-w-7xl w-full">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Link
                href={project.href}
                className="block rounded-2xl overflow-hidden shadow-md bg-white hover:shadow-xl transform transition-all duration-300 hover:scale-[1.03]"
              >
                <Image
                  src={project.image}
                  alt={project.title}
                  width={400}
                  height={300}
                  className="object-cover w-full h-48"
                />
                <div className="p-4 text-center">
                  <h3 className="text-lg font-semibold header-text-color truncate">
                    {project.title}
                  </h3>
                  <p className="text-sm text-gray-600 mt-1">
                    Projects starting at {project.price}
                  </p>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
