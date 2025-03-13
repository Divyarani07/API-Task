//  function fetchUserProfiles() {
//     const apiUrl = 'https://dummyjson.com/users';
  
//     fetch(apiUrl)
//       .then(response => {
//         if (!response.ok) {
//           throw new Error('Failed to fetch user profiles');
//         }
//         return response.json();  
//       })
//     }

//     async function fetchUserProfiles() {
//         try{
//             const response = await fetch('https://dummyjson.com/users');
//             const data = await response.json();
//             console.log(data);

//          const data = await response.json();

         

//         }










    const apiUrl = "https://dummyjson.com/users";


const fetchProducts = async ()=>{
    try{
        const response = await fetch(apiUrl);
        const data = await response.json();
       const users = data.users;
       console.log(users);

//      const cards = users.map((item)=>{
//             return(`
//                     <div class="card">
//                     <img src="${item.image}" alt="${item.title}">
//                         <h2>${item.title}</h2>
//                         <p>Price: ${item.price}</p>
//                     </div>
//                 `
//        )});
        const  cards = users.map((item)=>{
            return(`
                <div class="card">
                    <img src="${item.image}" alt="${item.title}">
                    <h2>${item.firstName}</h2>
                    <p>email: ${item.email}</p>
                    <p>gender: ${item.gender}</p>
                    <p>age: ${item.age}</p>
                    <p>address: ${item.address}</p>
                    
                </div>
            `)
        });
       const container = document.getElementById("container");
       container.innerHTML = cards.join("");
    }
    catch(error){
        console.error(error);
    }
    finally {
        console.log("Fetching completed");
    }
}
fetchProducts();