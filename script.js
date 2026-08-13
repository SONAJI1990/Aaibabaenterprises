const services = [
  ["01","HOUSEKEEPING & CLEANING MATERIALS","service-01.jpg",["Garbage Bags","Cleaning Chemicals","Mops, Brooms & Brushes","Dustbins & Accessories","Housekeeping Consumables"]],
  ["02","DEEP CLEANING SERVICES","service-02.jpg",["Common Area Cleaning","Lobby, Staircase, Parking","Terrace Cleaning","Machine Deep Cleaning","Deep Cleaning with Materials"]],
  ["03","CLEANING MACHINERY ON RENT","service-03.jpg",["Vacuum Cleaners","Scrubber Machines","Single Disc Machines","Other Cleaning Equipment","Rental on Flexible Basis"]],
  ["04","PLUMBING MATERIALS + PLUMBER","service-04.jpg",["Pipes & Fittings","Taps, Valves, Accessories","Leakage & Repairs","Plumber Support","Quick Service Support"]],
  ["05","ELECTRICAL MATERIALS + ELECTRICIAN","service-05.jpg",["LED Lights & Fixtures","Switches & Sockets","Cables & Accessories","Minor Electrical Repairs","Electrician Support"]],
  ["06","CCTV INSTALLATION & AMC","service-06.jpg",["CCTV Installation","Camera Replacement","CCTV Maintenance","CCTV AMC","System Checking & Support"]],
  ["07","GLASS FILMING","service-07.jpg",["Frosted Film","Solar Control Film","Safety & Security Film","Privacy Film","Professional Installation"]],
  ["08","PAINTING","service-08.jpg",["Common Area Painting","Touch-Up Work","Office & Utility Painting","Wall Painting","Maintenance Painting Work"]],
  ["09","FABRICATION WORK","service-09.jpg",["Gate & Grill Work","Railings","Metal Brackets","Small Fabrication","Repair & Maintenance"]],
  ["10","SMALL CIVIL & CONSTRUCTION WORK","service-10.jpg",["Minor Civil Repairs","Tile Repair / Replacement","Plastering Work","Masonry Work","Other Small Works"]],
  ["11","SOCIETY DOCUMENTS SUPPORT FOR COMMITTEE & MANAGER","service-11.jpg",["Notice Preparation","Printing & Scanning","Society Documentation","Register / Record Assistance","General Office Support"]],
  ["12","STATIONERY WHOLESALE MATERIALS","service-12.jpg",["Office Stationery","Files, Folders & Registers","Notebooks & Papers","Printing & Writing Items","Bulk Supply Available"]]
];

const grid = document.getElementById("products");

if (grid) {
  grid.innerHTML = services.map(s => `
    <article class="card">
      <img src="assets/${s[2]}" alt="${s[1]}" loading="lazy">
      <div class="card-body">
        <h3>${s[1]}</h3>
        <ul>${s[3].map(x => `<li>${x}</li>`).join("")}</ul>
        <div class="card-actions">
          <button class="btn btn-green enquire-btn" type="button" data-service="${s[1]}">
            ENQUIRE NOW
          </button>
          <button class="btn btn-navy quote-btn" type="button" data-service="${s[1]}">
            REQUEST QUOTATION
          </button>
        </div>
      </div>
    </article>
  `).join("");
}

const modal = document.getElementById("enquiryModal");

function closeModal() {
  if (modal) {
    modal.classList.remove("show");
    modal.setAttribute("aria-hidden", "true");
  }
}

function openModal(service = "") {
  if (!modal) return;

  modal.classList.add("show");
  modal.setAttribute("aria-hidden", "false");

  const req = modal.querySelector('textarea[name="requirement"]');

  if (req && service) {
    req.value = `Requirement for: ${service}\n`;
  }
}

document.addEventListener("click", function(e) {
  const enquire = e.target.closest(".enquire-btn");
  const quote = e.target.closest(".quote-btn");

  if (enquire) {
    openModal(enquire.dataset.service || "");
  }

  if (quote) {
    openModal(quote.dataset.service || "");
  }

  if (e.target.closest(".modal-close") || e.target === modal) {
    closeModal();
  }
});

document.addEventListener("keydown", function(e) {
  if (e.key === "Escape") {
    closeModal();
  }
});

const menu = document.querySelector(".menu-toggle");
const nav = document.getElementById("mainNav");

if (menu && nav) {
  menu.addEventListener("click", function() {
    const open = nav.classList.toggle("open");
    menu.setAttribute("aria-expanded", open);
  });

  nav.addEventListener("click", function(e) {
    if (e.target.tagName === "A") {
      nav.classList.remove("open");
    }
  });
}
