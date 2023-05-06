const jsonData = {
  "jobs": [
    {
      "id": 1,
      "category": "Architecture",
      "subcategory": "Residential",
      "title": "AI Residential Architect",
      "company": "ArchDesign Inc.",
      "location": "New York, NY",
      "type": "Full-Time",
      "description": "We are looking for an AI Residential Architect with expertise in designing modern residential buildings."
    },
    {
      "id": 2,
      "category": "Architecture",
      "subcategory": "Commercial",
      "title": "AI Commercial Architect",
      "company": "SkyHigh Solutions",
      "location": "Los Angeles, CA",
      "type": "Full-Time",
      "description": "Seeking an AI Commercial Architect to join our team and work on innovative commercial building projects."
    },
    {
      "id": 3,
      "category": "Architecture",
      "subcategory": "Industrial",
      "title": "AI Industrial Architect",
      "company": "Industrial Visions",
      "location": "Houston, TX",
      "type": "Full-Time",
      "description": "Join our team as an AI Industrial Architect to design efficient and sustainable industrial facilities."
    },
    {
      "id": 4,
      "category": "Architecture",
      "subcategory": "Landscape",
      "title": "AI Landscape Architect",
      "company": "GreenSpaces",
      "location": "San Francisco, CA",
      "type": "Full-Time",
      "description": "We are seeking an AI Landscape Architect to create beautiful and sustainable outdoor environments."
    },
    {
      "id": 5,
      "category": "Interior",
      "subcategory": "Residential",
      "title": "AI Interior Designer - Residential",
      "company": "Elegant Spaces",
      "location": "Chicago, IL",
      "type": "Full-Time",
      "description": "Join our team as an AI Interior Designer specializing in residential interiors and create beautiful living spaces."
    },
    {
      "id": 6,
      "category": "Interior",
      "subcategory": "Commercial",
      "title": "AI Interior Designer - Commercial",
      "company": "Workplace Creations",
      "location": "San Francisco, CA",
      "type": "Full-Time",
      "description": "Workplace Creations is seeking an experienced AI Interior Designer with a focus on commercial projects."
    },
    {
      "id": 7,
      "category": "Interior",
      "subcategory": "Hospitality",
      "title": "AI Interior Designer - Hospitality",
      "company": "StayInStyle",
      "location": "Miami, FL",
      "type": "Full-Time",
      "description": "Looking for a talented AI Interior Designer to create inviting and memorable hospitality spaces."
    },
    {
      "id": 8,
      "category": "Interior",
      "subcategory": "Retail",
      "title": "AI Interior Designer - Retail",
      "company": "ShopSensation",
      "location": "Dallas, TX",
      "type": "Full-Time",
      "description": "Seeking an AI Interior Designer to create engaging retail environments that elevate the shopping experience."
    },
    {
      "id": 9,
      "category": "UI/UX",
      "subcategory": "Web Design",
      "title": "AI Web UI/UX Designer",
      "company": "WebDreams",
      "location": "Seattle, WA",
      "type": "Full-Time",
      "description": "Looking for a talented AI Web UI/UX Designer to create visually appealing and user-friendly websites."
    },
    {
      "id": 10,
      "category": "UI/UX",
      "subcategory": "Mobile App Design",
      "title": "AI Mobile App UI/UX Designer",
      "company": "App Innovations",
      "location": "Austin, TX",
      "type": "Full-Time",
      "description": "Join our team as an AI Mobile App UI/UX Designer and create engaging user interfaces for mobile applications."
    },
    {
      "id": 11,
      "category": "UI/UX",
      "subcategory": "Software Design",
      "title": "AI Software UI/UX Designer",
      "company": "SoftDesign Co.",
      "location": "Boston, MA",
      "type": "Full-Time",
      "description": "We are seeking a skilled AI Software UI/UX Designer to design user-friendly interfaces for our software products."
    },
    {
      "id": 12,
      "category": "Other Fields",
      "subcategory": "Product Design",
      "title": "AI Product Designer",
      "company": "Innovative Products",
      "location": "San Diego, CA",
      "type": "Full-Time",
      "description": "Join our team as an AI Product Designer and bring innovative products to life, from concept to production."
    },
    {
      "id": 13,
      "category": "Other Fields",
      "subcategory": "Furniture Design",
      "title": "AI Furniture Designer",
      "company": "Modern Living",
      "location": "Portland, OR",
      "type": "Full-Time",
      "description": "We are looking for an AI Furniture Designer to create unique and functional pieces for residential and commercial spaces."
    },
    {
      "id": 14,
      "category": "Other Fields",
      "subcategory": "Graphic Design",
      "title": "AI Graphic Designer",
      "company": "Creative Studios",
      "location": "Denver, CO",
      "type": "Full-Time",
      "description": "Seeking a talented AI Graphic Designer to create visually stunning designs for print and digital media."
    },
    {
      "id": 15,
      "category": "Other Fields",
      "subcategory": "Animation & Motion Design",
      "title": "AI Animation & Motion Designer",
      "company": "MotionMagic",
      "location": "Atlanta, GA",
      "type": "Full-Time",
      "description": "Join our team as an AI Animation & Motion Designer and create captivating animations for various platforms."
    }  
  ]
};

function filterJobs(category, subcategory) {
  const filteredJobs = jsonData.jobs.filter(
    (job) => job.category === category && job.subcategory === subcategory
  );

  displayJobs(filteredJobs);
}

function filterJobs(category, subcategory) {
  const filteredJobs = jsonData.jobs.filter(
    (job) => job.category === category && job.subcategory === subcategory
  );

  displayJobs(filteredJobs);
}

function displayJobs(jobs) {
  const jobsContainer = document.querySelector('.jobs-container');
  let html = '';

  jobs.forEach(job => {
    html += `
      <div class="job">
        <h3>${job.title}</h3>
        <h4>${job.company}</h4>
        <p>Category: ${job.category} - ${job.subcategory}</p>
        <p>Location: ${job.location}</p>
        <p>Type: ${job.type}</p>
        <p>${job.description}</p>
      </div>
    `;
  });

  jobsContainer.innerHTML = html;
}

document.querySelectorAll('.subcategory a').forEach(link => {
  link.addEventListener('click', (event) => {
    event.preventDefault();
    // ...
  });
});