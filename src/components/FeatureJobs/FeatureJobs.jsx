import { useEffect, useState } from "react";
import Job from "../Job/Job";


const FeatureJobs = () => {

    const [jobs, setJobs] = useState([]);
    const [length,setLength] = useState(4)

    useEffect(() => {
        fetch('jobs.json')
            .then(res => res.json())
            .then(data => setJobs(data))
    }, [])

    return (
        <div>
            <div className="text-center">
                <h2 className="text-5xl">Job Category List</h2>
                <p>Explore thousands of job opportunities with all the information you need. Its your future</p>
            </div>
            <div className="grid grid-cols-2 gap-6 ">
                {
                    jobs.slice(0,length).map(job=> <Job key={job.id} job={job}></Job>)
                }
            </div>
            <div className={length === jobs.length ? 'hidden':'text-center'}>
                <button 
                 onClick={()=> setLength(jobs.length)} className= "my-4 btn btn-primary">Show All Job</button>
            </div>
        </div>
    );
};

export default FeatureJobs; 