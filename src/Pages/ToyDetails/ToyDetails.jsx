import { useLoaderData } from "react-router-dom";
import PageBanner from "../Shared/PageBanner/PageBanner";
import { Rating, Star } from "@smastrom/react-rating";

const ToyDetails = () => {
    const { name, picture, category, price, rating, quantity, sellerName, sellerEmail, description } = useLoaderData();
    const star = Star;
    const customStyles = {
        itemShapes: star,
        activeFillColor: '#FFC107',
        inactiveFillColor: '#dddddd',
    };
    return (
        <div className="details-page">
            <PageBanner>
                {name}
            </PageBanner>
            <div className="details-wrap py-20">
                <div className="container">
                    <div className="toy-details-box lg:grid lg:grid-cols-2 gap-10">
                        <div className="toy-img">
                            <img src={picture} alt="" className="border border-neutral-200 rounded-md p-5" />
                        </div>
                        <div className="toy-details">
                            <h2 className="text-3xl mb-4"> <b>Name:</b> {name}</h2>
                            <p className="capitalize text-xl mb-3"> <b>Category:</b> {category}</p>
                            <div className="flex gap-3 mb-5"><Rating style={{ maxWidth: 110 }} value={rating} itemStyles={customStyles} readOnly /> ({rating})</div>
                            <h3 className="text-2xl mb-4"><b>Price: <span className="text-blue">${price}</span> </b></h3>
                            <p className="text-xl mb-4"><b>Available:</b> {quantity} Pieces</p>
                            <p className="text-xl"><b>Description:</b> {description}</p>
                            <div className="divider"></div>
                            <h3 className="text-2xl font-bold mb-3">Seller Informations</h3>
                            <p className="text-xl"><b>Seller Name:</b> {sellerName}</p>
                            <p className="text-xl"><b>Seller Email:</b> {sellerEmail}</p>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ToyDetails;