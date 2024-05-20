import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { getStoredJobApplication } from "../../utility/localStorage";

import DesignAppliedJob from "./DesignAppliedJob";



const AppliedJobs = () => {
    const jobs = useLoaderData();

    const [appliedJobs, setAppliedJobs] = useState([])
    const [displayJobs, setDisplayJobs] = useState([])

    const handleJobsFilter= filterText =>{
        if(filterText === 'all'){
            displayJobs(appliedJobs);
        }
        else if (filterText === 'remote'){
            const remoteJobs = appliedJobs.filter(job => job.remote_or_onsite ==='Remote')
            setDisplayJobs(remoteJobs);
        }   
        else if (filterText === 'onsite'){
            const onsiteJobs = appliedJobs.filter(job => job.remote_or_onsite ==='Onsite')
            setDisplayJobs(onsiteJobs);
        }   
     }


    useEffect(() => {
        const storedJobIds = getStoredJobApplication();
        if (jobs.length > 0) {
            const jobsApplied = jobs.filter(job => storedJobIds.includes(job.id))
            setAppliedJobs(jobsApplied)
            setDisplayJobs(jobsApplied)
        }
    }, [])



    return (

        <div>
            <h2 className="text-5xl text-center font-bold my-8">Applied Jobs </h2>

            <details className="dropdown">
                <summary className="m-1 btn">Filter</summary>
                <ul className="p-2 shadow menu dropdown-content z-[1] bg-base-100 rounded-box w-52">
                    <li onClick={()=>handleJobsFilter('all')}><a>All</a></li>
                    <li onClick={()=>handleJobsFilter('remote')}><a>Remote</a></li>
                    <li onClick={()=>handleJobsFilter('onsite')}><a>Onsite</a></li>
                </ul>
            </details>

            <div>
                {displayJobs.map(job => <DesignAppliedJob key={job.id} job={job}></DesignAppliedJob>)}
            </div>


        </div>
    );
};

export default AppliedJobs;