/* eslint-disable react/prop-types */

import { Rating, Star } from "@smastrom/react-rating";
import { useContext } from "react";
import { Link } from "react-router-dom";
import { toast } from 'react-toastify';
import { AuthContext } from "../../providers/AuthProvider";

const ToyCard = ({ toy }) => {
    const { user } = useContext(AuthContext);
    const { _id, name, picture, price, rating } = toy;
    const star = Star;
    const customStyles = {
        itemShapes: star,
        activeFillColor: '#FFC107',
        inactiveFillColor: '#dddddd',
    };
    const notifyUser = () => {
        if (user == null) {
            toast.error('You must login to see details', {
                position: "top-center",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
            });
        }
    }
    return (
        <div className="toyCard border border-neutral-200 rounded-md flex flex-col justify-between">
            <div className="card-head mb-6">
                <div className="toyImg mb-5">
                    <img src={picture} alt="" className="rounded-md" />
                </div>
                <div className="toy-info px-6">
                    <h2 className="text-2xl font-bold mb-3">{name}</h2>
                    <div className="rate-price">
                        <p className="font-bold text-xl mb-3">Price: $ {price}</p>
                        <div className="flex gap-3"><Rating style={{ maxWidth: 110 }} value={rating} itemStyles={customStyles} readOnly /> ({rating})</div>
                    </div>
                </div>
            </div>
            <div className="card-foot px-6 mb-6">
                <Link onClick={notifyUser} to={`/toy/${_id}`}>
                    <button className="btn py-3 px-5 text-base leading-none h-auto bg-pink-100 border-2 border-pink-100 hover:bg-pink-200 hover:border-pink-200">View Details</button>
                </Link>
            </div>


        </div>
    );
};

export default ToyCard;