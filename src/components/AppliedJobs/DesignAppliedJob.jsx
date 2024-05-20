import { AiOutlineDollar } from "react-icons/ai";
import { MdOutlineLocationOn } from "react-icons/md";
import { Link } from "react-router-dom";


const DesignAppliedJob = ({ job }) => {
    const { id, logo, job_title, company_name, location, remote_or_onsite, job_type, salary } = job;
    return (
        <div className=" flex  bg-base-300 shadow-xl my-8">
            <div >
                <figure ><img src={logo} alt="" /></figure>
            </div>
            <div className="card-body">
                <h2 className="card-title">{job_title}</h2>
                <p>{company_name}</p>
                <div className="">
                    <button className="px-5 py-2 font-extrabold border rounded border-[#7E90FE] text-[#7E90FE] mr-4">{remote_or_onsite}</button>
                    <button className="px-5 py-2 font-extrabold border rounded border-[#7E90FE] text-[#7E90FE]">{job_type}</button>
                </div>
                <div className="flex gap-4">
                    <h2 className="flex gap-2 mt-4"><MdOutlineLocationOn className="text-2xl"></MdOutlineLocationOn>{location}</h2>
                    <h2 className="flex gap-2 mt-4"><AiOutlineDollar className="text-2xl"></AiOutlineDollar>{salary}</h2>
                </div>

            </div>
            <div className="card-actions">
                <Link to={`/job/${id}`} className="btn btn-primary">View Details</Link>
            </div>
        </div>
    );
};

export default DesignAppliedJob;