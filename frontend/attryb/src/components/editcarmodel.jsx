// import React, { useState } from 'react';
// import "../editcarmodel.css";


// const EditCarModal = ({ carData, onUpdateCar, onClose }) => {
//     const [updatedCarData, setUpdatedCarData] = useState(carData);

//     const handleChange = (e) => {
//         const { name, value } = e.target;
//         setUpdatedCarData((prevData) => ({
//             ...prevData,
//             [name]: value,
//         }));
//     };

//     const handleSubmit = (e) => {
//         e.preventDefault();
//         const { _id } = updatedCarData;
//         onUpdateCar(_id, updatedCarData);
//         onClose();
//     };

//     return (
//         <div className="modal__overlay">
//             <div className="modal__content">
//                 <h2>Edit Car</h2>
//                 <form onSubmit={handleSubmit}>
//                     <div>
//                         <label htmlFor="editTitle">Title:</label>
//                         <input
//                             type="text"
//                             id="editTitle"
//                             name="title"
//                             value={updatedCarData.title}
//                             onChange={handleChange}
//                         />
//                     </div>
//                     <div>
//                         <label htmlFor="editDescription">Description:</label>
//                         <textarea
//                             id="editDescription"
//                             name="description"
//                             value={updatedCarData.description}
//                             onChange={handleChange}
//                         />
//                     </div>
//                     <div>
//                         <label htmlFor="editKilometer">Kilometers:</label>
//                         <input
//                             type="number"
//                             id="editKilometer"
//                             name="kilometer"
//                             value={updatedCarData.kilometer}
//                             onChange={handleChange}
//                         />
//                     </div>
//                     <div>
//                         <label htmlFor="editMajorScratches">Major Scratches:</label>
//                         <input
//                             type="text"
//                             id="editMajorScratches"
//                             name="majorScratches"
//                             value={updatedCarData.majorScratches}
//                             onChange={handleChange}
//                         />
//                     </div>
//                     <div>
//                         <label htmlFor="editNumOfprevBuyers">Previous Buyers:</label>
//                         <input
//                             type="number"
//                             id="editNumOfprevBuyers"
//                             name="numOfprevBuyers"
//                             value={updatedCarData.numOfprevBuyers}
//                             onChange={handleChange}
//                         />
//                     </div>
//                     <div>
//                         <label htmlFor="editRegistrationPlace">Registration Place:</label>
//                         <input
//                             type="text"
//                             id="editRegistrationPlace"
//                             name="registrationPlace"
//                             value={updatedCarData.registrationPlace}
//                             onChange={handleChange}
//                         />
//                     </div>
//                     <div>
//                         <label htmlFor="editMileage">Mileage:</label>
//                         <input
//                             type="number"
//                             id="editMileage"
//                             name="mileage"
//                             value={updatedCarData.mileage}
//                             onChange={handleChange}
//                         />
//                     </div>
//                     <div>
//                         <label htmlFor="editPrice">Price:</label>
//                         <input
//                             type="number"
//                             id="editPrice"
//                             name="price"
//                             value={updatedCarData.price}
//                             onChange={handleChange}
//                         />
//                     </div>
//                     <div className="modal__buttons">
//                         <button type="submit">Save</button>
//                         <button onClick={onClose}>Cancel</button>
//                     </div>
//                 </form>
//             </div>
//         </div>
//     );
// };

// export default EditCarModal;
