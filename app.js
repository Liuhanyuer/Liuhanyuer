const jsonData = {
    "jobs": [
      // Add your job data here...
    ]
  };
  
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
      const category = event.target.getAttribute('data-category');
      const subcategory = event.target.getAttribute('data-subcategory');
      filterJobs(category, subcategory);
    });
  });
  