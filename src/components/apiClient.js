// Get Skills
function getRemoteData(){
    const endpoint = "https://api.cloudstitch.com/jefflombardjr/portfolio-api-1/datasources/sheet";
    const data = fetch(endpoint)
      .then(response => response.json())
      .then(data => {
        const projects = data.ws[2];
        const skills = data.ws[1];

        return {
            skills,
            projects
        }
      })
      .then(obj => {
          const skillsMap = obj.skills.rows;
          const skillsKeys = Object.keys(skillsMap);
          const skills = skillsKeys.map(key => skillsMap[key].cols.A.i);

          const projectsMap = obj.projects.rows;
          const projectsKeys = Object.keys(projectsMap);
          const projects = projectsKeys.map(key => {
              const project = projectsMap[key].cols;
              return {
                  title: project.A.i,
                  desc: project.B.i,
                  tags: project.C.i,
                  url: project.D.i
              };
            })

          return {
              skills,
              projects
          };
      });

      return data;
}


export {getRemoteData};



