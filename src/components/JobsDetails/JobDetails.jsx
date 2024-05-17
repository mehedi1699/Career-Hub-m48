import { AiOutlineDollar } from "react-icons/ai";
import { AiFillCalendar } from "react-icons/ai";
import { FaPhone } from "react-icons/fa6";
import { MdOutlineEmail, MdOutlineLocationOn } from "react-icons/md";
import { useLoaderData, useParams } from "react-router-dom";


const JobDetails = () => {
    const jobs = useLoaderData();
    const { id } = useParams()
    const job = jobs.find(job => job.id == parseInt(id))
    const { job_description, job_responsibility, educational_requirements, experiences, salary, job_title, contact_information
    } = job;
    const { phone, email, address } = contact_information
    console.log(contact_information, phone)
    return (
        <div>
            <h2 className="text-5xl my-12 font-bold text-center">Job Details</h2>
            <div className="grid gap-4 md:grid-cols-4 my-8">
                <div className="border md:col-span-3 p-4 rounded-xl my-8">
                    <p><span className="text-xl font-bold">Job Description: </span> {job_description}</p>
                    <p>Job Responsibility: {job_responsibility}</p>
                    <div className="gap-4 my-8">
                        <h3 className="text-xl font-bold">Educational Requirements:</h3>
                        <p>{educational_requirements}</p>
                    </div>
                    <div className="gap-4 my-8">
                        <h3 className="font-bold text-xl">Experiences:</h3>
                        <p>{experiences}</p>
                    </div>
                </div>
                <div className="border md:col-span-1 rounded-xl  my-8">
                    <div className="bg-gray-400 p-4 rounded-xl">
                        <h3 className="font-bold ">Job Details</h3>
                        <hr className="my-4" />
                        <div>
                            <h2 className="flex gap-1 mt-4 "><AiOutlineDollar className="text-2xl text-primary"></AiOutlineDollar>Salary: {salary} (per month)</h2>
                            <h2 className="flex gap-1 mt-4 "><AiFillCalendar className="text-2xl text-primary"></AiFillCalendar>Job Title: {job_title}</h2>
                        </div>
                        <h3 className="font-bold my-4">Contact Information</h3>
                        <hr className="my-4" />
                        <div>
                            <h2 className="flex gap-1 mt-4"><FaPhone className="text-2xl text-primary"></FaPhone> Phone: {phone}</h2>
                            <h2 className="flex gap-1 mt-4"><MdOutlineEmail className="text-2xl text-primary"></MdOutlineEmail>Email:{email}</h2>
                            <h2 className="flex gap-2 mt-4"><MdOutlineLocationOn className="text-4xl text-primary"></MdOutlineLocationOn>Address: {address}</h2>
                        </div>
                    </div>
                    <div>
                        <button className="btn btn-primary w-full my-4">Apply Now</button>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default JobDetails;