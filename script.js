// ================= CLOCK =================
document.addEventListener("DOMContentLoaded", function () {
    function updateClock() {
        const now = new Date();
        const hours = String(now.getHours()).padStart(2, "0");
        const minutes = String(now.getMinutes()).padStart(2, "0");
        const seconds = String(now.getSeconds()).padStart(2, "0");
        const days = [
            "Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"
        ];
        const months = [
            "Jan","Feb", "Mar", "Apr", "May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"
        ];
        document.getElementById("clock-time").textContent =
            `${hours}:${minutes}:${seconds}`;
        document.getElementById("clock-date").textContent =
            `${days[now.getDay()]}, ${now.getDate()} ${months[now.getMonth()]} ${now.getFullYear()}`;

    }
    setInterval(updateClock,1000);
    updateClock();

});
// ================= DATA PO =================
// Tempel data PO Anda di sini
const data = {
};
// ================= BACK BUTTON =================
function backToApp1(){
    window.location.href =
    "https://boetepaythea-sudo.github.io/Inspection-App/";

}
// ================= AQL =================
function hitungAQL(qty){
    if(qty <= 8) return 2;
    if(qty <= 15) return 3;
    if(qty <= 25) return 5;
    if(qty <= 50) return 8;
    if(qty <= 90) return 13;
    if(qty <= 150) return 20;
    if(qty <= 280) return 32;
    if(qty <= 500) return 50;
    return Math.ceil(qty * 0.2);
}
// ================ LOAD DATA =================
document.addEventListener("DOMContentLoaded",function(){
const vendorSelect =
document.getElementById("vendorSelect");
const poSelect =
document.getElementById("poSelect");
const tbody =
document.querySelector("#dataTable tbody");
const poHeader =
document.getElementById("poHeader");
const headerVendor =
document.getElementById("headerVendor");
const headerPO =
document.getElementById("headerPO");
const headerECRD =
document.getElementById("headerECRD");
const printDate =
document.getElementById("printDate");
// LOAD VENDOR
[...new Set(
    Object.values(data).map(d=>d.Vendor)
)]
.sort()
.forEach(v=>{
    const option =
    document.createElement("option");
    option.value=v;
    option.textContent=v;
    vendorSelect.appendChild(option);
});
// VENDOR CHANGE
vendorSelect.addEventListener("change",function(){
    poSelect.innerHTML =
    '<option value="">-- Select PO --</option>';
    tbody.innerHTML="";
    poHeader.style.display="none";
    document.getElementById("dataTable").style.display="none";
    Object.keys(data).forEach(po=>{
        if(data[po].Vendor === this.value){
            const option =
            document.createElement("option");
            option.value=po;
            option.textContent=po;
            poSelect.appendChild(option);
        }
    });
});
// PO CHANGE
poSelect.addEventListener("change",function(){
    tbody.innerHTML="";
    const po=this.value;
    const table =
    document.getElementById("dataTable");
    if(po===""){
        table.style.display="none";
        poHeader.style.display="none";
        return;
    }
    table.style.display="table";
    headerVendor.textContent =
    data[po].Vendor;
    headerPO.textContent =
    po;
    headerECRD.textContent =
    new Date(data[po].ecrd)
    .toLocaleDateString("en-US",{
        day:"2-digit",
        month:"long",
        year:"numeric"
    });
    printDate.textContent =
    new Date().toLocaleDateString("en-US");
    poHeader.style.display="block";
    data[po].items.forEach(item=>{
        const tr =
        document.createElement("tr");
        tr.innerHTML = `
        <td class="item">${item.item}</td>
        <td class="qty">${item.qty}</td>
        <td class="aql">${hitungAQL(item.qty)}</td>
        <td>${item.desc}</td>
        <td>
        <img 
        src="${item.image}"
        onclick="toggleModal(this)"
        style="cursor:pointer;max-width:100px">
        </td>
        `;
        tbody.appendChild(tr);
    });
});
});
// ================= IMAGE MODAL =================
function toggleModal(img){
    const modal =
    document.getElementById("imgModal");
    const modalImg =
    document.getElementById("modalImg");
    modal.style.display="block";
    modalImg.src = img.src;
}
document.getElementById("imgModal").onclick =
function(e){
    if(
        e.target.id === "imgModal" ||
        e.target.id === "modalImg"
    ){
        this.style.display="none";
    }
};

// ================= PREVIOUS / NEXT PO =================
document.addEventListener("DOMContentLoaded",function(){
const poSelect =
document.getElementById("poSelect");
const prevBtn =
document.getElementById("prevPO");
const nextBtn =
document.getElementById("nextPO");
prevBtn.addEventListener("click",function(){
    let index =
    poSelect.selectedIndex;
    if(index > 1){
        poSelect.selectedIndex =
        index - 1;
        poSelect.dispatchEvent(
            new Event("change")
        );
    }
});
nextBtn.addEventListener("click",function(){
    let index =
    poSelect.selectedIndex;
    if(
        index <
        poSelect.options.length - 1
    ){
        poSelect.selectedIndex =
        index + 1;
        poSelect.dispatchEvent(
            new Event("change")
        );
    }
});
});
