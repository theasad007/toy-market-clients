import { useLoaderData } from "react-router-dom";
import PageBanner from "../Shared/PageBanner/PageBanner";
import Toy from "./Toy";


const AllToys = () => {
    const toys = useLoaderData();
    // console.log(toys)

    return (
        <div className="all-toys " data-aos="fade-in">
            <PageBanner>
                All <span className='text-blue'>Toys</span>
            </PageBanner>
            <div className="toys-wrap py-20">
                <div className="container">
                    <div className="overflow-x-auto w-full">
                        <table className="table w-full">
                            <thead>
                                <tr>
                                    <th className="text-base px-6">Picture and Details</th>
                                    <th className="text-base px-6">Price</th>
                                    <th className="text-base px-6">Seller</th>
                                    <th className="text-base px-6">Options</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    toys.map(toy => <Toy toy={toy} key={toy._id}></Toy>)
                                }
                            </tbody>

                        </table>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AllToys;