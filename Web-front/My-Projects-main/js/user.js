document.addEventListener('DOMContentLoaded', function() {
    var elems = document.querySelectorAll('.collapsible');
    var instances = M.Collapsible.init(elems, {});
});

function showModel() {
    document.getElementById("model").classList.toggle("show");
    document.getElementById("model_back").classList.toggle("dis-none");
}

document.getElementById("add_user").addEventListener('click', showModel);
document.getElementById("submit").addEventListener('click', showModel);

// setTimeout(function() {
//     console.log("start...");

//     fetch('https://jsonplaceholder.typicode.com/users')
//         .then((response) => response.json())
//         .then((json) => {
//             console.log("end...");
//             console.log(json);


//             let htmlDesktop = "";
//             let htmlPhone = "";


//             for (const user of json) {
//                 htmlDesktop = htmlDesktop + `<tr>
//                            <td>${user.id}</td>
//                            <td>${user.name}</td>
//                            <td>${user.company}</td>
//                            <td>${user.address.city}</td>
//                            <td>${user.email}</td>
//                            <td>
//                                <i class="material-icons m-l-5 m-r-5 red-text">delete_forever</i>
//                                <i class="material-icons orange-text darken-3 m-l-5 m-r-5">edit</i>
//                            </td>
//                        </tr>`
//                 htmlPhone = htmlPhone + `<li class="user-list-item">
//                 <div class="collapsible-header waves-effect wave-dark">
//                     <span class="material-icons blue-text darken-2 user-list-arrow-down trans-0-5">arrow_drop_down_circle</span> ${user.name}
//                 </div>
//                 <div class="collapsible-body">
//                     <div class="p-all-5">
//                         <span class="f-bold">Username : </span>
//                         <span>${user.name}</span>
//                     </div>
//                     <div class="p-all-5">
//                         <span class="f-bold">Email : </span>
//                         <span>${user.email}</span>
//                     </div>
//                     <div class="p-all-5">
//                         <span class="f-bold">Adress : </span>
//                         <span>${user.address.city}</span>
//                     </div>
//                     <div class="p-all-5 flex-l-m">
//                         <span class="f-bold">Actions : </span>
//                         <i class="material-icons m-l-5 m-r-5 red-text">delete_forever</i>
//                         <i class="material-icons orange-text darken-3 m-l-5 m-r-5">edit</i>
//                     </div>
//                 </div>
//             </li>`

//             }

//             document.getElementById("desktop-table-body").innerHTML = htmlDesktop;
//             document.getElementById("user-list-item").innerHTML = htmlPhone;

//         })


// }, 5000);