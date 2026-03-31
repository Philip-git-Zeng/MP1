// components/ResearchCard.tsx

import { Calendar, MapPin, FileText, Link as LinkIcon, Github, ExternalLink } from 'lucide-react'
import { ResearchProjectType } from '@/config/projects'

interface ResearchCardProps {
  project: ResearchProjectType
  titleAs?: 'h2' | 'h3' | 'h4'
}

export default function ResearchCard({ project, titleAs = 'h3' }: ResearchCardProps) {
  const TitleTag = titleAs
  
  const formatAuthors = (authors?: string[]) => {
    if (!authors || authors.length === 0) return null
    //my name
    const myName = "Lingan Zeng"
    // treat single author
    const processAuthor = (author: string, index: number) => {
    if (author === myName) {
      return <strong key={author}>{author}</strong>
    }
    return <span key={index}>{author}</span>
  }
   // Show all authors with comma separation
  return authors.map((author, index) => (
    <span key={index}>
      {processAuthor(author, index)}
      {index < authors.length - 1 && ', '}
    </span>
  ))
}

  return (
    <div className="group relative flex flex-col h-full p-6 rounded-lg border border-muted bg-card hover:shadow-lg transition-all duration-300">
      {/* Title */}
      <TitleTag className="text-lg font-semibold tracking-tight mb-2 group-hover:text-primary transition-colors">
        {project.title}
      </TitleTag>
      
      {/* Metadata: Date + Venue */}
      <div className="flex flex-wrap items-center gap-3 text-sm text-muted-foreground mb-3">
        <div className="flex items-center gap-1">
          <Calendar size={14} />
          <span>{project.date}</span>
        </div>
        {project.venue && (
          <div className="flex items-center gap-1">
            <MapPin size={14} />
            <span>{project.venue}</span>
          </div>
        )}
      </div>
      
      {/* Authors */}
      {project.authors && project.authors.length > 0 && (
        <p className="text-sm text-muted-foreground mb-3 italic">
          {formatAuthors(project.authors)}
        </p>
      )}
      
      {/* Description */}
      <p className="text-sm text-foreground/80 leading-relaxed mb-4 line-clamp-3">
        {project.description}
      </p>
      
      {/* Publication Info */}
      {project.publication && (
        <div className="mt-auto pt-3 border-t border-muted/50">
          <div className="flex items-start gap-2 text-xs text-muted-foreground">
            <FileText size={12} className="mt-0.5 flex-shrink-0" />
            <div className="space-y-1">
              {project.publication.journal && (
                <p className="font-medium">{project.publication.journal}</p>
              )}
              {(project.publication.volume || project.publication.pages) && (
                <p>
                  {project.publication.volume && `Vol. ${project.publication.volume}`}
                  {project.publication.volume && project.publication.pages && ', '}
                  {project.publication.pages && `pp. ${project.publication.pages}`}
                </p>
              )}
              {project.publication.doi && (
                <p className="font-mono">DOI: {project.publication.doi}</p>
              )}
            </div>
          </div>
        </div>
      )}
      
      {/* Tags */}
      {project.tags && project.tags.length > 0 && (
        <div className="flex flex-wrap gap-1.5 mt-3">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="px-2 py-0.5 text-xs rounded-full bg-muted text-muted-foreground"
            >
              {tag}
            </span>
          ))}
        </div>
      )}
      
      {/* Links */}
      {project.links && Object.keys(project.links).length > 0 && (
        <div className="flex gap-3 mt-3 pt-2">
          {project.links.pdf && (
            <a
              href={project.links.pdf}
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs text-primary hover:underline flex items-center gap-1"
            >
              <FileText size={12} /> PDF
            </a>
          )}
          {project.links.code && (
            <a
              href={project.links.code}
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs text-primary hover:underline flex items-center gap-1"
            >
              <Github size={12} /> Code
            </a>
          )}
          {project.links.demo && (
            <a
              href={project.links.demo}
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs text-primary hover:underline flex items-center gap-1"
            >
              <ExternalLink size={12} /> Demo
            </a>
          )}
        </div>
      )}
    </div>
  )
}