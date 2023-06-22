import { useLoaderData } from "react-router-dom";
import PageBanner from "../Shared/PageBanner/PageBanner";
import { useContext } from "react";
import { AuthContext } from "../../providers/AuthProvider";
import Swal from "sweetalert2";


const UpdateToy = () => {
    const toy = useLoaderData();
    const { user } = useContext(AuthContext);
    const { _id, picture, name, category, rating, price, quantity, description } = toy;

    const handleUpdateToy = (event) => {
        event.preventDefault()
        const form = event.target;
        const name = form.name.value;
        const price = form.price.value;
        const rating = form.rating.value;
        const category = form.category.value;
        const quantity = form.quantity.value;
        const description = form.description.value;
        const picture = form.picture.value;
        const updatedToy = {
            name,
            price,
            rating,
            category,
            quantity,
            description,
            picture,
            sellerName: user?.displayName,
            sellerEmail: user?.email
        }
        console.log(updatedToy)

        fetch(`https://kids-zone-server-beta.vercel.app/my-toys/${_id}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(updatedToy)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.modifiedCount > 0) {
                    Swal.fire({
                        title: 'Toy Updated Successfully',
                        icon: 'success',
                        confirmButtonText: 'ok',
                        confirmButtonColor: '#3085d6',
                    })
                    form.reset()
                }
            })

    }

    return (
        <div className="update-toy">
            <PageBanner>
                Update <span className='text-blue'>Toy</span>
            </PageBanner>
            <div className="add-form py-20">
                <div className="container">
                    <div className="add-toy-wrap bg-gray p-20 rounded-lg">
                        <form onSubmit={handleUpdateToy}>
                            <div className="input-wrap mb-8">
                                <label htmlFor="" className="text-md font-bold mb-2 block">Name:</label>
                                <input type="text" name="name" defaultValue={name} className="w-full border border-neutral-300 py-3 px-4 rounded-md text-lg focus:outline-none hover:border-neutral-500 focus:border-pink-100 transition-all placeholder:text-neutral-500 text-black cursor-not-allowed opacity-60" required readOnly />
                            </div>
                            <div className="input-wrap mb-8">
                                <label htmlFor="" className="text-md font-bold mb-2 block">Price:</label>
                                <input type="number" name="price" defaultValue={price} min="0" step="0.01" className="w-full border border-neutral-300 py-3 px-4 rounded-md text-lg focus:outline-none hover:border-neutral-500 focus:border-pink-100 transition-all placeholder:text-neutral-500 text-black" required />
                            </div>
                            <div className="input-wrap mb-8">
                                <label htmlFor="" className="text-md font-bold mb-2 block">Rating:</label>
                                <input type="number" name="rating" defaultValue={rating} min="1" max="5" step="0.01" className="w-full border border-neutral-300 py-3 px-4 rounded-md text-lg focus:outline-none hover:border-neutral-500 focus:border-pink-100 transition-all placeholder:text-neutral-500 text-black cursor-not-allowed opacity-60" required readOnly />
                            </div>
                            <div className="input-wrap mb-8">
                                <label htmlFor="" className="text-md font-bold mb-2 block">Category:</label>
                                <select name="category" defaultValue={category} className="w-full border border-neutral-300 py-3 px-4 rounded-md text-lg focus:outline-none hover:border-neutral-500 focus:border-pink-100 transition-all placeholder:text-neutral-500 text-black cursor-not-allowed opacity-60" required readOnly>
                                    <option value={category}>{category}</option>
                                </select>
                            </div>
                            <div className="input-wrap mb-8">
                                <label htmlFor="" className="text-md font-bold mb-2 block">Quantity:</label>
                                <input type="number" name="quantity" defaultValue={quantity} className="w-full border border-neutral-300 py-3 px-4 rounded-md text-lg focus:outline-none hover:border-neutral-500 focus:border-pink-100 transition-all placeholder:text-neutral-500 text-black" required />
                            </div>
                            <div className="input-wrap mb-8">
                                <label htmlFor="" className="text-md font-bold mb-2 block">Description:</label>
                                <textarea type="text" cols="5" rows="5" name="description" defaultValue={description} className="w-full border border-neutral-300 py-3 px-4 rounded-md text-lg focus:outline-none hover:border-neutral-500 focus:border-pink-100 transition-all placeholder:text-neutral-500 text-black" required ></textarea>
                            </div>
                            <div className="input-wrap mb-8">
                                <label htmlFor="" className="text-md font-bold mb-2 block">Photo URL:</label>
                                <input type="url" name="picture" defaultValue={picture} className="w-full border border-neutral-300 py-3 px-4 rounded-md text-lg focus:outline-none hover:border-neutral-500 focus:border-pink-100 transition-all placeholder:text-neutral-500 text-black cursor-not-allowed opacity-60" required readOnly />
                            </div>
                            <div className="add-btn mt-8">
                                <input type="submit" value="Update Toy" className="w-full btn py-3 px-5 font-bold text-base leading-none h-auto bg-pink-100 border-2 border-pink-100 hover:bg-pink-200 hover:border-pink-200" />
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default UpdateToy;