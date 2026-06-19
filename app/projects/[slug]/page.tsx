import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import { Document } from '@contentful/rich-text-types';
import { Box, Container, Typography, Grid, List, ListItem } from '@mui/material';
import { getProject, getProjects } from '@/utils/contentful';

export const revalidate = 60;

// These slugs are served by their own hand-built static pages under app/projects/<slug>/.
const STATIC_PROJECT_SLUGS = new Set([
  'modern-residence-chainpur',
  'luxury-residence-chhatarpur',
  'luxury-villa-daltonganj',
  'modern-residence-hariharganj',
]);

export async function generateStaticParams() {
  try {
    const projects = await getProjects();
    return projects
      .filter((p) => !STATIC_PROJECT_SLUGS.has(p.slug))
      .map((p) => ({ slug: p.slug }));
  } catch {
    return [];
  }
}

export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Promise<Metadata> {
  const project = await getProject(params.slug);
  if (!project) {
    return { title: 'Project Not Found' };
  }
  const image = project.featuredImage?.fields?.file?.url
    ? `https:${project.featuredImage.fields.file.url}`
    : undefined;
  return {
    title: { absolute: `${project.title} | Sattva Design Projects` },
    description:
      project.seoDescription || project.brief || `${project.title} by Sattva Design.`,
    keywords: project.seoKeywords,
    alternates: { canonical: `/projects/${params.slug}` },
    openGraph: {
      title: project.title,
      description:
        project.seoDescription || project.brief || `${project.title} by Sattva Design.`,
      url: `/projects/${params.slug}`,
      images: image ? [{ url: image }] : undefined,
    },
  };
}

export default async function ProjectDetail({
  params,
}: {
  params: { slug: string };
}) {
  const project = await getProject(params.slug);

  if (!project) {
    notFound();
  }

  const image = project.featuredImage?.fields?.file?.url
    ? `https:${project.featuredImage.fields.file.url}`
    : undefined;
  const projectSchema = {
    '@context': 'https://schema.org',
    '@type': 'CreativeWork',
    name: project.title,
    description:
      project.seoDescription || project.brief || `${project.title} by Sattva Design.`,
    image: image ? [image] : undefined,
    ...(project.location
      ? { locationCreated: { '@type': 'Place', name: project.location } }
      : {}),
    creator: { '@id': 'https://sattvadesignconsultancy.com/#organization' },
    url: `https://sattvadesignconsultancy.com/projects/${params.slug}`,
  };

  return (
    <Container maxWidth="lg" sx={{ py: 8 }}>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(projectSchema) }}
      />

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
}
