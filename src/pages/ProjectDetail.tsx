import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getProject, Project } from '../utils/contentful';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import { Document } from '@contentful/rich-text-types';
import { Box, Container, Typography, Grid, CircularProgress, List, ListItem } from '@mui/material';

const ProjectDetail: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const [project, setProject] = useState<Project | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchProject = async () => {
      try {
        if (!slug) {
          throw new Error('Project slug is missing');
        }
        const projectData = await getProject(slug);
        console.log('Fetched project:', projectData); // Debug log
        if (!projectData) {
          throw new Error('Project not found');
        }
        setProject(projectData);
      } catch (err) {
        console.error('Error fetching project:', err);
        setError(err instanceof Error ? err.message : 'Failed to load project');
      } finally {
        setLoading(false);
      }
    };

    fetchProject();
  }, [slug]);

  if (loading) {
    return (
      <Box display="flex" justifyContent="center" alignItems="center" minHeight="80vh">
        <CircularProgress />
      </Box>
    );
  }

  if (error || !project) {
    return (
      <Box display="flex" justifyContent="center" alignItems="center" minHeight="80vh">
        <Typography variant="h6" color="error">
          {error || 'Project not found'}
        </Typography>
      </Box>
    );
  }

  return (
    <Container maxWidth="lg" sx={{ py: 8 }}>
      <Typography variant="h2" component="h1" gutterBottom>
        {project.title}
      </Typography>

      {project.featuredImage && (
        <Box mb={4}>
          <img
            src={`https:${project.featuredImage.fields.file.url}`}
            alt={project.title}
            style={{ width: '100%', height: 'auto', maxHeight: '600px', objectFit: 'cover' }}
          />
        </Box>
      )}

      <Grid container spacing={4}>
        <Grid item xs={12} md={8}>
          {project.description && (
            <Box mb={4}>
              <Typography variant="h4" gutterBottom>
                Description
              </Typography>
              {documentToReactComponents(project.description as Document)}
            </Box>
          )}

          {project.brief && (
            <Box mb={4}>
              <Typography variant="h4" gutterBottom>
                Brief
              </Typography>
              <Typography>{project.brief}</Typography>
            </Box>
          )}

          {project.challenge && (
            <Box mb={4}>
              <Typography variant="h4" gutterBottom>
                Challenge
              </Typography>
              <Typography>{project.challenge}</Typography>
            </Box>
          )}

          {project.solution && (
            <Box mb={4}>
              <Typography variant="h4" gutterBottom>
                Solution
              </Typography>
              <Typography>{project.solution}</Typography>
            </Box>
          )}
        </Grid>

        <Grid item xs={12} md={4}>
          <Box sx={{ bgcolor: 'background.paper', p: 3, borderRadius: 1 }}>
            <Typography variant="h5" gutterBottom>
              Project Details
            </Typography>

            <List>
              {project.location && (
                <ListItem>
                  <Typography><strong>Location:</strong> {project.location}</Typography>
                </ListItem>
              )}
              {project.year && (
                <ListItem>
                  <Typography><strong>Year:</strong> {project.year}</Typography>
                </ListItem>
              )}
              {project.status && (
                <ListItem>
                  <Typography><strong>Status:</strong> {project.status}</Typography>
                </ListItem>
              )}
              {project.area && (
                <ListItem>
                  <Typography><strong>Area:</strong> {project.area} sq ft</Typography>
                </ListItem>
              )}
              {project.client && (
                <ListItem>
                  <Typography><strong>Client:</strong> {project.client}</Typography>
                </ListItem>
              )}
              {project.category && (
                <ListItem>
                  <Typography><strong>Category:</strong> {project.category}</Typography>
                </ListItem>
              )}
              {project.architectureTeam && project.architectureTeam.length > 0 && (
                <ListItem>
                  <Typography>
                    <strong>Architecture Team:</strong>
                    <List>
                      {project.architectureTeam.map((member, index) => (
                        <ListItem key={index}>{member}</ListItem>
                      ))}
                    </List>
                  </Typography>
                </ListItem>
              )}
              {project.awards && project.awards.length > 0 && (
                <ListItem>
                  <Typography>
                    <strong>Awards:</strong>
                    <List>
                      {project.awards.map((award, index) => (
                        <ListItem key={index}>{award}</ListItem>
                      ))}
                    </List>
                  </Typography>
                </ListItem>
              )}
              {project.projectWebsite && (
                <ListItem>
                  <Typography>
                    <strong>Project Website:</strong>{' '}
                    <a href={project.projectWebsite} target="_blank" rel="noopener noreferrer">
                      {project.projectWebsite}
                    </a>
                  </Typography>
                </ListItem>
              )}
            </List>
          </Box>

          {(project.materialsUsed || project.sustainabilityFeatures) && (
            <Box sx={{ bgcolor: 'background.paper', p: 3, borderRadius: 1, mt: 3 }}>
              {project.materialsUsed && project.materialsUsed.length > 0 && (
                <Box mb={3}>
                  <Typography variant="h6" gutterBottom>
                    Materials Used
                  </Typography>
                  <List>
                    {project.materialsUsed.map((material, index) => (
                      <ListItem key={index}>{material}</ListItem>
                    ))}
                  </List>
                </Box>
              )}

              {project.sustainabilityFeatures && project.sustainabilityFeatures.length > 0 && (
                <Box>
                  <Typography variant="h6" gutterBottom>
                    Sustainability Features
                  </Typography>
                  <List>
                    {project.sustainabilityFeatures.map((feature, index) => (
                      <ListItem key={index}>{feature}</ListItem>
                    ))}
                  </List>
                </Box>
              )}
            </Box>
          )}
        </Grid>
      </Grid>

      {project.galleryImages && project.galleryImages.length > 0 && (
        <Box mt={6}>
          <Typography variant="h4" gutterBottom>
            Gallery
          </Typography>
          <Grid container spacing={2}>
            {project.galleryImages.map((image, index) => (
              <Grid item xs={12} sm={6} md={4} key={index}>
                <img
                  src={`https:${image.fields.file.url}`}
                  alt={`Gallery image ${index + 1}`}
                  style={{ width: '100%', height: '300px', objectFit: 'cover' }}
                />
              </Grid>
            ))}
          </Grid>
        </Box>
      )}
    </Container>
  );
};

export default ProjectDetail;