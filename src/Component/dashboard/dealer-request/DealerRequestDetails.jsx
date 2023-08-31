import { useContext } from "react";
import { AuthContex } from "../../Providers/Authprovider";

const DealerRequestDetails = () => {
    const {user} = useContext(AuthContex)
    return (
        <div>
            <h2 className="uppercase text-center text-xl md:text-4xl font-bold ">Dealer Request Details</h2>
            <div className="border w-3/5 mt-5 mx-auto p-10">
                <h4 className="text-lg font-semibold">Name : {user?.displayName}</h4>
                <h4 className="text-lg font-semibold">Email : {user?.email}</h4>
                <h4 className="text-lg font-semibold">Status : <span className="text-red-600">Pending</span></h4>
                <h4 className="text-lg font-semibold">Address : </h4>
            </div>
        </div>
    );
};

export default DealerRequestDetails;