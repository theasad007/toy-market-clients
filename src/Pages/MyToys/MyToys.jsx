import { useContext, useEffect, useState } from "react";
import PageBanner from "../Shared/PageBanner/PageBanner";
import { AuthContext } from "../../providers/AuthProvider";
import MyToy from "../MyToy/MyToy";
import Swal from "sweetalert2";
import useTitle from "../../hooks/useTitle";



const MyToys = () => {
    useTitle('My Toys')
    const [myToys, setMyToys] = useState([]);
    const { user } = useContext(AuthContext);
    console.log(user.email)

    // const url = ;
    useEffect(() => {
        fetch(`https://kids-zone-server-beta.vercel.app/my-toys?email=${user?.email}`)
            .then(res => res.json())
            .then(data => {
                setMyToys(data)
            })
            .catch(error => console.log(error))
    }, [user])

    // const handleAA = () => {
    //     fetch('https://kids-zone-server-beta.vercel.app/my-toys?sort=accen')
    //         .then(res => res.json())
    //         .then(data => console.log(data))
    // }

    const handleDelete = id => {
        Swal.fire({
            title: 'You are gonna Delete a Toy',
            text: 'Do you want to Delete',
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        })
            .then(result => {
                console.log(result)
                if (result.isConfirmed) {
                    fetch(`https://kids-zone-server-beta.vercel.app/my-toys/${id}`, {
                        method: 'DELETE',
                        headers: {
                            'content-type': 'application/json'
                        },
                    })
                        .then(res => res.json())
                        .then(data => {
                            console.log(data)
                            if (data.deletedCount > 0) {
                                Swal.fire({
                                    title: 'Toy Deleted Successfully',
                                    text: 'Do you want to continue',
                                    icon: 'success',
                                    confirmButtonText: 'ok',
                                    confirmButtonColor: '#3085d6',
                                })
                            }
                            const remaining = myToys.filter(toy => toy._id !== id);
                            setMyToys(remaining)
                        })
                        .catch(error => console.log(error))
                }

            })
    }

    console.log(myToys)

    return (
        <div className="my-toys-page">
            <PageBanner>
                My <span className="text-blue">Toys</span>
            </PageBanner>
            <div className="my-toys-wrap py-20">
                <div className="container">
                    <div className="sort mb-5">
                        <h4 className="text-lg font-bold mb-3">Sort By:</h4>
                        <div className="sort-btn flex gap-4">
                            <button className="btn">Price Low to High</button>
                            <button className="btn">Price High to Low</button>
                        </div>
                    </div>
                    <div className="overflow-x-auto w-full">
                        <table className="table w-full">
                            <thead>
                                <tr>
                                    <th className="text-base px-6">Picture and Details</th>
                                    <th className="text-base px-6">Price</th>
                                    <th className="text-base px-6">Options</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    myToys.map(myToy => <MyToy myToy={myToy} key={myToy._id} handleDelete={handleDelete}></MyToy>)
                                }
                            </tbody>

                        </table>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MyToys;