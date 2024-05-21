const mainNav = document.querySelector('.navigation');
const hamburgerButton = document.querySelector('#menu');

hamburgerButton.addEventListener( 'click', () => {
    mainNav.classList.toggle('show');
    hamburgerButton.classList.toggle('show');
});


const year = new Date();
document.querySelector('#current-year').innerHTML = year.getFullYear();
document.querySelector('#last-updated-date').innerHTML = document.lastModified;


const temples = [
    {
      templeName: "Aba Nigeria",
      location: "Aba, Nigeria",
      dedicated: "2005, August, 7",
      area: 11500,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/aba-nigeria/400x250/aba-nigeria-temple-lds-273999-wallpaper.jpg"
    },
    {
      templeName: "Manti Utah",
      location: "Manti, Utah, United States",
      dedicated: "1888, May, 21",
      area: 74792,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/manti-utah/400x250/manti-temple-768192-wallpaper.jpg"
    },
    {
      templeName: "Payson Utah",
      location: "Payson, Utah, United States",
      dedicated: "2015, June, 7",
      area: 96630,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/payson-utah/400x225/payson-utah-temple-exterior-1416671-wallpaper.jpg"
    },
    {
      templeName: "Yigo Guam",
      location: "Yigo, Guam",
      dedicated: "2020, May, 2",
      area: 6861,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/yigo-guam/400x250/yigo_guam_temple_2.jpg"
    },
    {
      templeName: "Washington D.C.",
      location: "Kensington, Maryland, United States",
      dedicated: "1974, November, 19",
      area: 156558,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/washington-dc/400x250/washington_dc_temple-exterior-2.jpeg"
    },
    {
      templeName: "Lima Perú",
      location: "Lima, Perú",
      dedicated: "1986, January, 10",
      area: 9600,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/lima-peru/400x250/lima-peru-temple-evening-1075606-wallpaper.jpg"
    },
    {
      templeName: "Mexico City Mexico",
      location: "Mexico City, Mexico",
      dedicated: "1983, December, 2",
      area: 116642,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/mexico-city-mexico/400x250/mexico-city-temple-exterior-1518361-wallpaper.jpg"
    },
    {
      templeName: "Albuquerque New Mexico Temple",
      location: "Mexico City, Mexico",
      dedicated: "2000, March, 5",
      area: 105225,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/mexico-city-mexico/400x250/mexico-city-temple-exterior-1518361-wallpaper.jpg"
    },
    {
      templeName: "Apia Samoa Temple",
      location: "Samoa City, Samoa",
      dedicated: "1983, August, 5",
      area: 87005,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/mexico-city-mexico/400x250/mexico-city-temple-exterior-1518361-wallpaper.jpg"
    },
    {
      templeName: "Caracas Venezuela Temple",
      location: "Venezuela City, Venezuela",
      dedicated: "2000, August, 20",
      area: 151220,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/mexico-city-mexico/400x250/mexico-city-temple-exterior-1518361-wallpaper.jpg"
    }
    
  ];

let itemMenu = document.querySelectorAll('.item-menu');

itemMenu.forEach( menu => {
  menu.addEventListener( 'click', function(){
    let menuRel = menu.getAttribute('rel');
    let filteredData;
    if( menuRel == 'old' || menuRel == 'new' )
    {
      // console.log(temple.dedicated.getFullYear());
      if( menuRel == 'old') {
        filteredData = temples.filter(temple => !checkOldNew(temple.dedicated));
      }else{
        filteredData = temples.filter(temple => checkOldNew(temple.dedicated));
      }
    }
    else if(menuRel == 'large' || menuRel == 'small'){
      if( menuRel == 'large') {
        filteredData = temples.filter( temple => temple.area>90000);
      }else{
        filteredData = temples.filter( temple =>temple.area<10000);
      }

    }
    else {
      //home
      filteredData = temples.filter( temple => temple !== undefined );
    }
    
    createTemplateCard(filteredData);
  });
});

function checkOldNew( dateOldNew ) {
  const date1 = new Date(dateOldNew)
  return date1.getFullYear() > 1999;
}

function checkLargeSmall( dataSize ) {  
  let size;
  if ( dataSize > 90000 ) {
    size = dataSize;
  }else if(dataSize<10000) {
    size = dataSize;
  }
  return size;
}

createTemplateCard(temples);

function createTemplateCard(filteredTemples){
  document.querySelector('.res-grid').innerHTML = '';
  filteredTemples.forEach( temple => {
    let cardSection = document.createElement('section');
    let cardName = document.createElement('h3');
    let cardLocation = document.createElement('a');
    let cardDedicated = document.createElement('p');
    let cardArea = document.createElement('p');
    let cardImageUrl = document.createElement('img');

    cardName.textContent = temple.templeName;
    cardLocation.innerHTML = `<span class="label">Location:</span> ${temple.location}`;
    cardDedicated.innerHTML = `<span class="label">Dedicated:</span> ${temple.dedicated}`;
    cardArea.innerHTML = `<span class="label">Area:</span> ${temple.area}`;
    cardImageUrl.setAttribute('src', temple.imageUrl);
    cardImageUrl.setAttribute('alt', `${temple.templeName} Temple`);
    cardImageUrl.setAttribute('loading', 'lazy');

    cardSection.appendChild(cardName);
    cardSection.appendChild(cardLocation);
    cardSection.appendChild(cardDedicated);
    cardSection.appendChild(cardArea);
    cardSection.appendChild(cardImageUrl);
    cardSection.setAttribute('class','col-3');
    
    document.querySelector('.res-grid')
      .appendChild(cardSection);

  });
  
}