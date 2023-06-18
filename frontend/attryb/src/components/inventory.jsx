import React, { useState, useEffect } from 'react';
import "../inventory.css";

const Inventory = () => {
    const [inventory, setInventory] = useState([]);
    const [sortOption, setSortOption] = useState('');
    const [filterColor, setFilterColor] = useState('');
    const [token, setToken] = useState('');

    useEffect(() => {
        fetchInventory();
    }, [sortOption, filterColor, inventory]);


    const fetchInventory = async () => {
        const url = `http://localhost:8080/inventory?sort=${sortOption}&filterByColor=${filterColor}`;
        try {
            const response = await fetch(url);
            if (response.ok) {
                const data = await response.json();
                setInventory(data);
            } else {
                console.error('Failed to fetch inventory');
            }
        } catch (error) {
            console.error('Error fetching inventory:', error);
        }
    };

    const handleSortChange = (e) => {
        setSortOption(e.target.value);
    };

    const handleFilterChange = (e) => {
        setFilterColor(e.target.value);
    };

    const handleEdit = async (id) => {
        const token = localStorage.getItem('token');
        if (token) {
            console.log(token, id)
            try {
                const response = await fetch(`http://localhost:8080/inventory/update/${id}`, {
                    method: 'PATCH',
                    headers: {
                        'Content-Type': 'application/json',
                        Authorization: token,
                    },
                    // Include the updated data in the request body if needed
                    // body: JSON.stringify(updatedData),
                });
                console.log(response);
                // Handle the response accordingly
            } catch (error) {
                console.error('An error occurred:', error);
            }
        } else {
            // Handle the case when the user is not logged in
            console.log('User not logged in');
        }
    };

    const handleDelete = async (id) => {
        const token = localStorage.getItem('token');
        if (token) {
            try {
                const response = await fetch(`http://localhost:8080/inventory/delete/${id}`, {
                    method: 'DELETE',
                    headers: {
                        Authorization: token,
                    },
                });
                if (response.ok) {
                    window.alert('Car info DELETED successfully!');
                    // Reset the form or perform any other actions

                } else {
                    // Error adding the car
                    window.alert('Error adding the car. Please try again.');

                }
            } catch (error) {
                console.error('An error occurred:', error);
            }
        } else {
            // Handle the case when the user is not logged in
            alert('User not logged in');
        }
    };
    return (
        <div>
            <div>
                <label htmlFor="sortSelect">Sort by:</label>
                <select id="sortSelect" value={sortOption} onChange={handleSortChange}>
                    <option value="">None</option>
                    <option value="price_desc">Price (High to Low)</option>
                    <option value="price_asc">Price (Low to High)</option>
                    <option value="mileage_desc">Mileage (High to Low)</option>
                    <option value="mileage_asc">Mileage (Low to High)</option>
                </select>
            </div>
            <div>
                <label htmlFor="colorSelect">Filter by color:</label>
                <select id="colorSelect" value={filterColor} onChange={handleFilterChange}>
                    <option value="">All</option>
                    <option value="red">Red</option>
                    <option value="blue">Blue</option>
                    <option value="green">Green</option>
                </select>
            </div>
            <br /><br /><br />

            <div className="inventory__container">
                {inventory.map((item) => (
                    <div key={item.id} className="inventory__card">
                        <img src={item.image} alt={item.name} className="inventory__image" width="600" height="400" />
                        <div className="inventory__details">
                            <h3 className="inventory__name">Title: {item.title}</h3>
                            <p className="inventory__description">{item.description}</p>
                            <p className="inventory__kilometers">Kilometers: {item.kilometer}</p>
                            <p className="inventory__scratches">Major Scratches: {item.majorScratches}</p>
                            <p className="inventory__buyers">Previous Buyers: {item.numOfprevBuyers}</p>
                            <p className="inventory__registration">Registration Place: {item.registrationPlace}</p>
                            <p className="inventory__mileage">Mileage: {item.mileage}</p>
                            <p className="inventory__price">Price: {item.price}</p>
                            <div className="inventory__actions">
                                <button className="inventory__edit-button" onClick={() => handleEdit(item._id)}>Edit</button>
                                <button className="inventory__delete-button" onClick={() => handleDelete(item._id)}>Delete</button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Inventory;

//onClick={() => handleEdit(item.id)}
// onClick={() => handleDelete(item.id)}