
import { useContext } from "react";
import PageBanner from "../Shared/PageBanner/PageBanner";
import { toast } from 'react-toastify';
import { AuthContext } from "../../providers/AuthProvider";

const AddAToy = () => {
    const { user } = useContext(AuthContext);
    const handleAddAToy = (event) => {
        event.preventDefault()
        const form = event.target;
        const name = form.name.value;
        const price = form.price.value;
        const rating = form.rating.value;
        const category = form.category.value;
        const quantity = form.quantity.value;
        const description = form.description.value;
        const picture = form.picture.value;
        const toy = {
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
        console.log(toy)
        fetch('https://kids-zone-server-beta.vercel.app/toys', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(toy)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.acknowledged === true) {
                    toast.success('Toy Added Successfully', {
                        position: "top-center",
                        autoClose: 5000,
                        hideProgressBar: false,
                        closeOnClick: true,
                        pauseOnHover: true,
                        draggable: true,
                        progress: undefined,
                        theme: "light",
                    });
                    // form.reset()
                }

            })
            .catch(error => console.log(error))
    }
    return (
        <div className="add-a-toy">
            <PageBanner>
                Add a <span className='text-blue'>Toy</span>
            </PageBanner>
            <div className="add-form py-20">
                <div className="container">
                    <div className="add-toy-wrap bg-gray p-20 rounded-lg">
                        <form onSubmit={handleAddAToy}>
                            <div className="input-wrap mb-7">
                                <input type="text" name="name" placeholder="Toy Name" className="w-full border border-neutral-300 py-3 px-4 rounded-md text-lg focus:outline-none hover:border-neutral-500 focus:border-pink-100 transition-all placeholder:text-neutral-500 text-black" required />
                            </div>
                            <div className="input-wrap mb-8">
                                <input type="number" name="price" placeholder="Toy Price" min="0" step="0.01" className="w-full border border-neutral-300 py-3 px-4 rounded-md text-lg focus:outline-none hover:border-neutral-500 focus:border-pink-100 transition-all placeholder:text-neutral-500 text-black" required />
                            </div>
                            <div className="input-wrap mb-8">
                                <input type="number" name="rating" placeholder="Toy Rating" min="1" max="5" step="0.01" className="w-full border border-neutral-300 py-3 px-4 rounded-md text-lg focus:outline-none hover:border-neutral-500 focus:border-pink-100 transition-all placeholder:text-neutral-500 text-black" required />
                            </div>
                            <div className="input-wrap mb-8">
                                <select name="category" defaultValue={"cows"} className="w-full border border-neutral-300 py-3 px-4 rounded-md text-lg focus:outline-none hover:border-neutral-500 focus:border-pink-100 transition-all placeholder:text-neutral-500 text-black" required>
                                    <option disabled hidden value="cows">Select Toy Category</option>
                                    <option value="cows">Cows</option>
                                    <option value="dinosours">Dinosours</option>
                                    <option value="dogs">Dogs</option>
                                    <option value="horses">Horses</option>
                                    <option value="teddy">Teddy Bears</option>
                                    <option value="unicorns">Unicorns</option>
                                </select>
                            </div>
                            <div className="input-wrap mb-8">
                                <input type="number" name="quantity" placeholder="Available Quantity" className="w-full border border-neutral-300 py-3 px-4 rounded-md text-lg focus:outline-none hover:border-neutral-500 focus:border-pink-100 transition-all placeholder:text-neutral-500 text-black" required />
                            </div>
                            <div className="input-wrap mb-8">
                                <textarea type="text" name="description" placeholder="Short Descriptions" className="w-full border border-neutral-300 py-3 px-4 rounded-md text-lg focus:outline-none hover:border-neutral-500 focus:border-pink-100 transition-all placeholder:text-neutral-500 text-black" required ></textarea>
                            </div>
                            <div className="input-wrap mb-8">
                                <input type="url" name="picture" placeholder="Picture URL" className="w-full border border-neutral-300 py-3 px-4 rounded-md text-lg focus:outline-none hover:border-neutral-500 focus:border-pink-100 transition-all placeholder:text-neutral-500 text-black" required />
                            </div>
                            <div className="add-btn mt-8">
                                <input type="submit" value="Add Toy" className="w-full btn py-3 px-5 font-bold text-base leading-none h-auto bg-pink-100 border-2 border-pink-100 hover:bg-pink-200 hover:border-pink-200" />
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AddAToy;