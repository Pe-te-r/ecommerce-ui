import  { useEffect, useState } from "react";
import ReactLoading from 'react-loading';
import { UseAddLocationQuery, UseFetchLocationQuery } from "../../../api/locationSlice";
import { BadgePlusIcon, InfoIcon, Pencil, Trash2Icon } from "lucide-react";
import Modal from "../addLocation";
import { useDispatch } from "react-redux";
import { addToast } from "../../../features/toast/toastSlice";

const AdminLocation = () => {
    const {data, isSuccess, isLoading,refetch} = UseFetchLocationQuery({detailed:false},{refetchOnReconnect:true});
    const [addLocation,{isSuccess:addSuccess,data:addData,isLoading:loadingData}]=UseAddLocationQuery()
    const [locationDetails, setLocationDetais] = useState([]);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [formData, setFormData] = useState({ name: '' });
    const dispatch = useDispatch()

    // fetching location side effects
    useEffect(() => {
        if(data?.results && isSuccess){
            setLocationDetais(data?.results);
        }
    }, [data, isSuccess]);

    // add location side effect
    useEffect(()=>{
        if(addSuccess && addData?.results){
            setIsModalOpen(false);
            setFormData({ name: '' });
            dispatch(addToast({id: Date.now(), message:"location added successfully",type: "success"}))
            refetch()
        }
        if(addData?.error){
            
        }
    },[addSuccess,addData])

    const handleModalOpen = () => setIsModalOpen(true);
    const handleModalClose = () => setIsModalOpen(false);

    const handleChange = (e: any) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit =() => {
        addLocation(formData)
    };

    return (
        <div>
            {isLoading ? (
                <ReactLoading type="bars" color="#000" height={100} width={100} className="fixed top-1/2 left-1/2"/>
            ) : (
                <>
                    <div className="overflow-x-auto font-bree bg-gray-200 shadow-lg text-black rounded-md">
                        <table className="table w-full text-black text-center">
                            <thead className="bg-gray-500 text-white text-[1.3rem]">
                                <tr className="border-none">
                                    <th className=""></th>
                                    <th className="">Name</th>
                                    <th className="">Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                {locationDetails.map((location: any, index) => (
                                    <tr className="border-none hover:bg-gray-300 font-bree font-medium text-[18px] hover:cursor-pointer" key={index}>
                                        <th className="">{index + 1}</th>
                                        <td className="">{location?.name}</td>
                                        <td className="flex justify-end gap-3">
                                            <button className="btn btn-accent py-2 px-7"><Pencil className="text-blue"/></button>
                                            <button className="btn btn-info py-2 px-7"><InfoIcon /></button>
                                            <button className="btn btn-error py-2 px-7"><Trash2Icon /></button>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                    <button onClick={handleModalOpen} className="btn btn-xs shadow-xl !px-10 fixed right-20 bottom-20 bg-gray-600 text-white hover:text-black sm:btn-sm md:btn-md lg:btn-lg">
                        <BadgePlusIcon/>
                    </button>
                </>
            )}
            <Modal 
                isOpen={isModalOpen} 
                onClose={handleModalClose} 
                onSubmit={handleSubmit} 
                formData={formData} 
                handleChange={handleChange} 
                isLoading={loadingData}
            />
        </div>
    );
};

export default AdminLocation;
