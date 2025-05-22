export const sampleProjects = [
  { 
    id:100,
    name: 'Downtown Revitalization',
    description: 'A project to revitalize the downtown area with new infrastructure and amenities.',
    location: {
      lat: 37.7749,
      lng: -122.4194
    },
    startDate: new Date('2023-01-15').getTime(),
    endDate: new Date('2024-06-30').getTime(),
    status: 'in-progress',
    budget: 2500000,
    manager: 'Jane Smith',
    team: ['Alex Johnson', 'Maria Garcia', 'David Kim'],
    images: [
      {
        id: 'img-1',
        url: 'https://images.unsplash.com/photo-1477959858617-67f85cf4f1df',
        type: 'image',
        title: 'Downtown Area Before',
        description: 'View of the downtown area before revitalization',
        createdAt: new Date('2023-01-10').getTime()
      },
      {
        id: 'img-2',
        url: 'https://images.unsplash.com/photo-1480714378408-67cf0d13bc1b',
        type: 'image',
        title: 'Proposed Design',
        description: 'Architectural rendering of the new downtown area',
        createdAt: new Date('2023-02-05').getTime()
      }
    ],
    videos: [
      {
        id: 'vid-1',
        url: 'https://www.youtube.com/watch?v=example1',
        type: 'video',
        title: 'Project Introduction',
        description: 'Overview of the downtown revitalization project',
        createdAt: new Date('2023-01-20').getTime()
      }
    ],
    createdAt: new Date('2023-01-01').getTime(),
    updatedAt: new Date('2023-03-15').getTime()
  },
  {
    id:101,
    name: 'Green Energy Initiative',
    description: 'Implementation of solar panels and wind turbines in public spaces.',
    location: {
      lat: 37.3352,
      lng: -121.8811
    },
    startDate: new Date('2023-04-10').getTime(),
    endDate: new Date('2024-09-30').getTime(),
    status: 'planning',
    budget: 1800000,
    manager: 'Robert Chen',
    team: ['Sarah Williams', 'Thomas Miller', 'Lisa Anderson'],
    images: [
      {
        id: 'img-3',
        url: 'https://images.unsplash.com/photo-1509391366360-2e959784a276',
        type: 'image',
        title: 'Solar Panel Installation Site',
        description: 'The location where solar panels will be installed',
        createdAt: new Date('2023-04-15').getTime()
      }
    ],
    videos: [
      {
        id: 'vid-2',
        url: 'https://www.youtube.com/watch?v=example2',
        type: 'video',
        title: 'Green Energy Benefits',
        description: 'An explanation of the benefits of the green energy initiative',
        createdAt: new Date('2023-04-25').getTime()
      }
    ],
    createdAt: new Date('2023-03-25').getTime(),
    updatedAt: new Date('2023-04-30').getTime()
  },
  {
    id:102,
    name: 'Community Center Construction',
    description: 'Building a new community center with recreational facilities.',
    location: {
      lat: 37.9027,
      lng: -122.0450
    },
    startDate: new Date('2023-06-15').getTime(),
    status: 'planning',
    budget: 3200000,
    manager: 'Michael Johnson',
    team: ['Emily Davis', 'James Wilson', 'Sophia Lee'],
    images: [
      {
        id: 'img-4',
        url: 'https://images.unsplash.com/photo-1486325212027-8081e485255e',
        type: 'image',
        title: 'Community Center Design',
        description: 'Architectural design of the new community center',
        createdAt: new Date('2023-06-20').getTime()
      }
    ],
    videos: [],
    createdAt: new Date('2023-05-30').getTime(),
    updatedAt: new Date('2023-06-25').getTime()
  }
];