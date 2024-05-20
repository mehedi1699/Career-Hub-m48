const getStoredJobApplication =() =>{
    const storedJobApplication = localStorage.getItem('job-application');
    if(storedJobApplication){
     return   JSON.parse(storedJobApplication);
    }
    return [];
}

const saveJobApplications = id=>{
    
    const storedJobApplications = getStoredJobApplication();

    const isExist = storedJobApplications.find(jobId => jobId === id);
    if(!isExist){
        storedJobApplications.push(id);
        localStorage.setItem('job-application', JSON.stringify(storedJobApplications));
    }
}

export {getStoredJobApplication,saveJobApplications}