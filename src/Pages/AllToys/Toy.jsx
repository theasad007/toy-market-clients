/* eslint-disable react/prop-types */

import { Rating, Star } from "@smastrom/react-rating";
import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProvider";
import { toast } from "react-toastify";

const Toy = ({ toy }) => {
    const { user } = useContext(AuthContext);

    // console.log(toy)
    const { _id, picture, name, category, rating, price, sellerName, quantity } = toy;
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
        <tr>
            <td>
                <div className="flex items-center space-x-5 ">
                    <div className="avatar">
                        <div className=" w-60">
                            <img src={picture} alt="" />
                        </div>
                    </div>
                    <div>
                        <div className="font-bold text-xl mb-3">{name}</div>
                        <div className="flex gap-3 capitalize mb-1"><span className="font-bold">Category:</span> {category}</div>
                        <div className="flex gap-3 mb-2"><Rating style={{ maxWidth: 110 }} value={rating} itemStyles={customStyles} readOnly /> ({rating})</div>
                        <div className="">
                            <span className="font-bold">Available: </span> {quantity} Pieces
                        </div>
                    </div>
                </div>
            </td>
            <td>
                <div className="font-bold text-lg">
                    $ {price}
                </div>
            </td>
            <td>
                <div className="">
                    {
                        sellerName
                    }
                </div>
            </td>
            <td>
                <Link onClick={notifyUser} to={`/toy/${_id}`}><button className="btn h-auto bg-pink-100 border-pink-100 hover:bg-pink-200 hover:border-pink-200">details</button></Link>
            </td>
        </tr>
    );
};

export default Toy;