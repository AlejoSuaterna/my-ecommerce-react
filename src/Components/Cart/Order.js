// import { DB } from "../../Data/DataFireBase";
// // import { useCartContext } from "../../context/CartContext";
// import {
//   doc,
//   setDoc,
//   collection,
//   updateDoc,
//   increment,
// } from "firebase/firestore";

// export default function CreateOrder({ totalPrecio, itemsForDB }) {
//   console.log("contenido: ", itemsForDB);

//   let order = {
//     buyer: {
//       nombre: "Alejandro González",
//       phone: "1234567891",
//       email: "alejito@gmail.com",
//     },
//     items: itemsForDB,
//     total: totalPrecio,
//   };

//   const createOrderInFirestore = async () => {
//     const newOrderRef = doc(collection(DB, "orders"));
//     await setDoc(newOrderRef, order);
//     return newOrderRef;
//   };
//   createOrderInFirestore()
//     .then((result) => {
//       alert("tu orden ha sido creada con el id" + result.id);
//       itemsForDB.forEach(async (item) =>{
//         const itemRef = doc(DB, "productos", item.id)
//         await updateDoc(itemRef, {
//           stock: increment(-item.quantity)
//         })
//       })
//     })
//     .catch((err) => console.log());
// }
