import React from 'react';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { getProjects, Project } from '../utils/contentful';
import { documentToPlainTextString } from '@contentful/rich-text-plain-text-renderer';

export default function Projects() {
  const [projects, setProjects] = useState<Project[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function fetchProjects() {
      try {
        const fetchedProjects = await getProjects();
        console.log('Fetched projects:', fetchedProjects);
        setProjects(fetchedProjects);
        setLoading(false);
      } catch (err) {
        console.error('Error fetching projects:', err);
        setError('Failed to load projects');
        setLoading(false);
      }
    }

    fetchProjects();
  }, []);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-gray-900"></div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-red-600">{error}</div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white pt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-serif mb-12">Our Projects</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <Link
              to={`/projects/${project.slug}`}
              key={project.slug}
              className="group relative overflow-hidden"
            >
              {project.featuredImage?.fields?.file?.url ? (
                <img
                  src={`https:${project.featuredImage.fields.file.url}`}
                  alt={project.title}
                  className="w-full h-[400px] object-cover transition-transform duration-500 group-hover:scale-105"
                />
              ) : (
                <div className="w-full h-[400px] bg-gray-200 flex items-center justify-center">
                  <span className="text-gray-400">No image available</span>
                </div>
              )}
              <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <div className="text-white text-center p-6">
                  <h3 className="text-2xl font-serif mb-2">{project.title}</h3>
                  <p className="text-sm mb-2">{project.location}</p>
                  {project.year && <p className="text-sm mb-2">{project.year}</p>}
                  {project.category && (
                    <p className="text-sm">{project.category}</p>
                  )}
                  {project.description && (
                    <p className="text-sm mt-4 line-clamp-3">
                      {documentToPlainTextString(project.description)}
                    </p>
                  )}
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}