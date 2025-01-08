"use client";

import { useState } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink, GalleryThumbnailsIcon } from "lucide-react";
import { projects, tagColors } from "@/data/projects";
import Image from "next/image";

export default function ProjectGrid() {
  const [hoveredProject, setHoveredProject] = useState<number | null>(null);

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mx-4 sm:mx-8 md:mx-16 lg:mx-32">
      {projects.map((project) => (
        <Card
          key={project.id}
          className="overflow-hidden transition-all duration-300 transform hover:scale-105"
          onMouseEnter={() => setHoveredProject(project.id)}
          onMouseLeave={() => setHoveredProject(null)}
        >
          <CardHeader className="p-0">
            <div className="relative">
              <Image
                src={project.image}
                alt={project.title}
                width={300}
                height={200}
                className="w-full h-48 object-cover"
              />
              {hoveredProject === project.id && (
                <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center space-x-4">
                  {project.liveUrl && (
                    <Button asChild variant="secondary">
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <ExternalLink className="mr-2 h-4 w-4" /> Live Demo
                      </a>
                    </Button>
                  )}
                  {project.localUrl && (
                    <Button asChild variant="secondary">
                      <a
                        href={project.localUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <GalleryThumbnailsIcon className="mr-2 h-4 w-4" /> Ver
                        Mais
                      </a>
                    </Button>
                  )}
                </div>
              )}
            </div>
          </CardHeader>
          <CardContent className="p-4">
            <CardTitle>{project.title}</CardTitle>
            <CardDescription className="mt-2">
              {project.description}
            </CardDescription>
          </CardContent>
          <CardFooter className="p-4 pt-0 flex flex-wrap gap-2">
            {project.tags.map((tag) => (
              <Badge
                key={tag}
                className={`${tagColors[tag] || "bg-gray-500"} text-white`}
              >
                {tag}
              </Badge>
            ))}
          </CardFooter>
        </Card>
      ))}
    </div>
  );
}
