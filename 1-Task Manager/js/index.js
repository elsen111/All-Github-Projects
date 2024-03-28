// Displaying the tab-buttons and sections 
// Function to display both buttons and sections
const displayTabElements = () => {
  displayBtnElements();
  displaySectionElements();
  removeDefaultActive();
}



// Function to display buttons
function displayBtnElements() {
  const taskBtnElement = `<div class="pointer transition flex relative">
                            <button onclick="handleTab(event)" id="1" class="pointer flex flex-column active-tab bg_purple tasks br-4 transition w-100 py-25 relative">
                                <i class="fa-solid fa-circle-check"></i>
                                <h6 class="text-uppercased fs-16 fw-600 mt-15"> tasks </h6>
                            </button>
                          </div>`

  const docBtnElement = `<div class="pointer transition flex relative">
                            <button onclick="handleTab(event)" id="2" class="pointer flex flex-column w-100 py-25 br-4 transition docs">
                                <i class="fa-solid fa-file-invoice"></i>
                                <h6 class="text-uppercased fs-16 mt-15"> docs </h6>
                            </button>
                          </div>`

  const noteBtnElement = `<div class="pointer transition flex relative">
                            <button onclick="handleTab(event)" id="3" class="pointer flex flex-column py-25 w-100 br-4 transition notes">
                                <i class="fa-solid fa-pen-to-square"></i>
                                <h6 class="text-uppercased fs-16 mt-15"> notes </h6>
                            </button>
                          </div>`

  const btnElementsArray = [taskBtnElement, docBtnElement, noteBtnElement];

  const btnElementsContainer = document.querySelector('.buttons-container');

  for(btnEl of btnElementsArray) {
    btnElementsContainer.insertAdjacentHTML('beforeend', btnEl);
  }
}



// Function to display both buttons
function displaySectionElements() {
  const taskSectElement = `<div class="section-row tasks transition">
                            <div class="section-content last">
                                <div class="section-title">
                                    <h6></h6>
                                    <h2 class="relative ps-element-container"> Create clear action items for tasks </h2>
                                </div>

                                <div class="section-body">
                                    <p class="section-text">
                                        Add checklists to any task in CompleteUp to create clear processes for yourself or your team.
                                    </p>
                                </div>
                            </div>

                            <div class="section-img flex flex-column flex-start first relative">
                                <img src="./images/checklist_task.gif" alt="section image" class="w-100 transition">
                            </div>
                          </div>`

  const docSectElement = `<div class="section-row docs transition unvisible d-none">
                            <div class="section-content last">
                                <div class="section-title">
                                    <h6></h6>
                                    <h2 class="relative ps-element-container"> Keep track of items with Doc checklists </h2>
                                </div>

                                <div class="section-body">
                                    <p class="section-text">
                                        Embed interactive checklists into your ClickUp Docs so you and your team can check off items within your documents.
                                    </p>
                                </div>
                            </div>

                            <div class="section-img flex flex-column flex-start first relative">
                                <img src="./images/checklist_doc.gif" alt="section image" class="w-100 transition">
                            </div>
                          </div>`

  const noteSectElement = `<div class="section-row notes transition unvisible d-none">
                            <div class="section-content last">
                                <div class="section-title">
                                    <h6></h6>
                                    <h2 class="relative ps-element-container"> Add checklists to your notes. </h2>
                                </div>

                                <div class="section-body">
                                    <p class="section-text">
                                        Create checklists from your CompleteUp Notepad or through the browser extension to keep track of ideas or to-do's while you work.
                                    </p>
                                </div>
                            </div>

                            <div class="section-img flex flex-column flex-start first relative">
                                <img src="./images/checklist_notes.gif" alt="section image" class="w-100 transition">
                            </div>
                          </div>`

  const sectElementsArray = [taskSectElement, docSectElement, noteSectElement];
  const sectElementsContainer = document.querySelector('.sections-container');
  const taskBtnElement = document.querySelector('.buttons-container>div:first-child');
  const docBtnElement = document.querySelector('.buttons-container>div:nth-child(2)');
  const noteBtnElement = document.querySelector('.buttons-container>div:last-child');
  const btnElementsArray = [taskBtnElement, docBtnElement, noteBtnElement];
  let arrIndex = 0;

  for(sectEl of sectElementsArray) {
    if(window.innerWidth > 768) {
      sectElementsContainer.insertAdjacentHTML('beforeend', sectEl);
    } else {
      btnElementsArray[arrIndex].insertAdjacentHTML('afterend', sectEl);
    }

    arrIndex++;
  }
}



// Removing default active button for small screen devices in tabs section
function removeDefaultActive() {
  if(window.innerWidth < 768) {
    const activeBtn = document.querySelector('.buttons-container > .pointer > button.active-tab');
    const activeSect = document.querySelector('.section-row.tasks');

    activeBtn.classList.remove('active-tab');
    activeSect.classList.add('d-none');
  }
}

window.addEventListener('load', displayTabElements);





// // To control change of tabs in Add section
const handleTab = (event) => {
  if(window.innerWidth > 768) {
    handleTabForLargeScreens(event);
  } else {
    handleTabForSmallScreens(event)
  }
}



// Handling tab for screens wider than 768px
const handleTabForLargeScreens = (event) => {
  const elements = document.querySelectorAll('.buttons-container > div > button');
  const sections = document.querySelectorAll('.sections-container > .section-row') ;


  for(let element of elements) {
    if((event.target.id !== element.id)  &&  (element.classList.contains('active-tab'))) {
      element.classList.remove('active-tab');
    }
  }

  for(let section of sections) {
    if(!(section.classList.contains('d-none'))) {
      section.classList.add('d-none');
    }
  }


   

  event.target.classList.add('active-tab');
  event.target.parentElement.classList.add('active-tab');
  event.target.parentElement.querySelector('h6').classList.add('f-darkGray');

  if(event.target.id === '1'  ||  event.target.parentElement.id === '1') {
    document.querySelector('#add  .section-row.tasks').classList.remove('d-none');
    event.target.id === '1'
          ?  event.target.classList.add('bg_purple')
          :  event.target.parentElement.classList.add('bg_purple')
  } else if(event.target.id === '2'  ||  event.target.parentElement.id === '2') {
    document.querySelector('#add  .section-row.docs').classList.remove('d-none');
    event.target.id === '2'
          ? event.target.classList.add('bg_red')
          : event.target.parentElement.classList.add('bg_red')
  } else if(event.target.id === '3'  ||  event.target.parentElement.id === '3') {
    document.querySelector('#add  .section-row.notes').classList.remove('d-none');
    event.target.id === '3'
          ? event.target.classList.add('bg_blue')
          : event.target.parentElement.classList.add('bg_blue')
  } 
}



// Handling tab for screens smaller than 768px
const handleTabForSmallScreens = (event) => {
  const elements = document.querySelectorAll('.buttons-container > div > button');


  // Since for screens less than 768px, sections is in the buttons container
  const sections = document.querySelectorAll('.buttons-container > .section-row');

  for(let element of elements) {
    if((event.target.id !== element.id)  &&  (element.classList.contains('active-tab'))) {
      element.classList.remove('active-tab');
    }
  }

  for(let section of sections) {
    if(!(section.classList.contains('d-none'))) {
      section.classList.add('d-none');
    }
  }


   

  event.target.classList.add('active-tab');
  event.target.parentElement.classList.add('active-tab');
  event.target.parentElement.querySelector('h6').classList.add('f-darkGray');

  if(event.target.id === '1'  ||  event.target.parentElement.id === '1') {
    document.querySelector('#add  .section-row.tasks').classList.remove('d-none');
    event.target.id === '1'
          ?  event.target.classList.add('bg_purple')
          :  event.target.parentElement.classList.add('bg_purple')
  } else if(event.target.id === '2'  ||  event.target.parentElement.id === '2') {
    document.querySelector('#add  .section-row.docs').classList.remove('d-none');
    event.target.id === '2'
          ? event.target.classList.add('bg_red')
          : event.target.parentElement.classList.add('bg_red')
  } else if(event.target.id === '3'  ||  event.target.parentElement.id === '3') {
    document.querySelector('#add  .section-row.notes').classList.remove('d-none');
    event.target.id === '3'
          ? event.target.classList.add('bg_blue')
          : event.target.parentElement.classList.add('bg_blue')
  } 
}