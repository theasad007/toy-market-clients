/* eslint-disable react/prop-types */
import { Rating, Star } from "@smastrom/react-rating";
import { Link } from "react-router-dom";

const MyToy = ({myToy, handleDelete}) => {
    const { _id, picture, name, category, rating, price, quantity } = myToy;
    const star = Star;
    const customStyles = {
        itemShapes: star,
        activeFillColor: '#FFC107',
        inactiveFillColor: '#dddddd',
    };
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
                <Link to={`/toy/${_id}`}><button className="btn h-auto bg-pink-100 border-pink-100 hover:bg-pink-200 hover:border-pink-200">details</button></Link>
                <Link to={`/update-toy/${_id}`}><button className="btn h-auto bg-pink-100 border-pink-100 hover:bg-pink-200 hover:border-pink-200 ml-4">update</button></Link>
                <button onClick={() => handleDelete(_id)} className="btn h-auto bg-pink-100 border-pink-100 hover:bg-pink-200 hover:border-pink-200 ml-4">Delete</button>
            </td>
        </tr>
    );
};

export default MyToy;