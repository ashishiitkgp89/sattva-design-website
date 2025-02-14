import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { getProject, Project } from '../utils/contentful';
import { ArrowLeft, Globe, Award, Users, Ruler } from 'lucide-react';

export default function ProjectDetail() {
  const { slug } = useParams();
  const navigate = useNavigate();
  const [project, setProject] = useState<Project | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function fetchProject() {
      if (!slug) return;
      try {
        const fetchedProject = await getProject(slug);
        setProject(fetchedProject);
        setLoading(false);
      } catch (err) {
        setError('Failed to load project');
        setLoading(false);
      }
    }

    fetchProject();
  }, [slug]);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-gray-900"></div>
      </div>
    );
  }

  if (error || !project) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-red-600">{error || 'Project not found'}</div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white pt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Back Button */}
        <button
          onClick={() => navigate('/projects')}
          className="flex items-center text-gray-600 hover:text-gray-900 mb-8 transition-colors"
        >
          <ArrowLeft className="w-5 h-5 mr-2" />
          Back to Projects
        </button>

        {/* Project Header */}
        <div className="mb-12">
          <h1 className="text-4xl font-serif mb-4">{project.title}</h1>
          <div className="flex flex-wrap gap-4 text-gray-600">
            <span>{project.location}</span>
            <span>•</span>
            <span>{project.year}</span>
            {project.category && (
              <>
                <span>•</span>
                <span>{project.category}</span>
              </>
            )}
          </div>
        </div>

        {/* Featured Image */}
        <div className="aspect-video w-full mb-12 overflow-hidden">
          <img
            src={project.featuredImage.fields.file.url}
            alt={project.title}
            className="w-full h-full object-cover"
          />
        </div>

        {/* Project Info Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {/* Left Column - Main Info */}
          <div className="md:col-span-2 space-y-8">
            <div>
              <h2 className="text-2xl font-serif mb-4">Overview</h2>
              <p className="text-gray-600 whitespace-pre-line">{project.description}</p>
            </div>

            {project.brief && (
              <div>
                <h3 className="text-xl font-serif mb-3">Project Brief</h3>
                <p className="text-gray-600">{project.brief}</p>
              </div>
            )}

            {(project.challenge || project.solution) && (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {project.challenge && (
                  <div>
                    <h3 className="text-xl font-serif mb-3">Challenge</h3>
                    <p className="text-gray-600">{project.challenge}</p>
                  </div>
                )}
                {project.solution && (
                  <div>
                    <h3 className="text-xl font-serif mb-3">Solution</h3>
                    <p className="text-gray-600">{project.solution}</p>
                  </div>
                )}
              </div>
            )}
          </div>

          {/* Right Column - Project Details */}
          <div className="space-y-6">
            {project.status && (
              <div>
                <h3 className="font-medium mb-2">Status</h3>
                <p className="text-gray-600">{project.status}</p>
              </div>
            )}
            
            {project.area && (
              <div className="flex items-start gap-3">
                <Ruler className="w-5 h-5 text-gray-400 mt-1" />
                <div>
                  <h3 className="font-medium mb-1">Area</h3>
                  <p className="text-gray-600">{project.area} m²</p>
                </div>
              </div>
            )}

            {project.client && (
              <div>
                <h3 className="font-medium mb-2">Client</h3>
                <p className="text-gray-600">{project.client}</p>
              </div>
            )}

            {project.architectureTeam && (
              <div className="flex items-start gap-3">
                <Users className="w-5 h-5 text-gray-400 mt-1" />
                <div>
                  <h3 className="font-medium mb-1">Architecture Team</h3>
                  <p className="text-gray-600">{project.architectureTeam}</p>
                </div>
              </div>
            )}

            {project.awards && (
              <div className="flex items-start gap-3">
                <Award className="w-5 h-5 text-gray-400 mt-1" />
                <div>
                  <h3 className="font-medium mb-1">Awards</h3>
                  <p className="text-gray-600">{project.awards}</p>
                </div>
              </div>
            )}

            {project.projectWebsite && (
              <div className="flex items-start gap-3">
                <Globe className="w-5 h-5 text-gray-400 mt-1" />
                <div>
                  <h3 className="font-medium mb-1">Project Website</h3>
                  <a
                    href={project.projectWebsite}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:text-blue-800 transition-colors"
                  >
                    Visit Website
                  </a>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Gallery */}
        {project.galleryImages && project.galleryImages.length > 0 && (
          <div className="mb-12">
            <h2 className="text-2xl font-serif mb-6">Project Gallery</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {project.galleryImages.map((item, index) => (
                <div key={index} className="aspect-video overflow-hidden">
                  <img
                    src={item.media.fields.file.url}
                    alt={item.title}
                    className="w-full h-full object-cover"
                  />
                  {item.caption && (
                    <p className="mt-2 text-sm text-gray-600">{item.caption}</p>
                  )}
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Additional Details */}
        {(project.materialsUsed || project.sustainabilityFeatures) && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            {project.materialsUsed && (
              <div>
                <h2 className="text-2xl font-serif mb-4">Materials Used</h2>
                <p className="text-gray-600 whitespace-pre-line">{project.materialsUsed}</p>
              </div>
            )}
            {project.sustainabilityFeatures && (
              <div>
                <h2 className="text-2xl font-serif mb-4">Sustainability Features</h2>
                <p className="text-gray-600 whitespace-pre-line">{project.sustainabilityFeatures}</p>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
}