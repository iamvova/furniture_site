const bedBtn = document.querySelector('.bed'),
 	diningBtn = document.querySelector('.dining'),
 	livingBtn = document.querySelector('.living'),
 	officeBtn = document.querySelector('.office'),
 	chairBtn = document.querySelector('.chair'),
	/*photo_1 = document.querySelectorAll('.gallery-content__div1 img'),
	photo_2 = document.querySelectorAll('.gallery-content__div2 img'),
	photo_3 = document.querySelectorAll('.gallery-content__div3 img'),
	photo_4 = document.querySelectorAll('.gallery-content__div4 img'),
	photo_5 = document.querySelectorAll('.gallery-content__div5 img'),
	*/p = document.querySelectorAll('.p img')


function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min) + min);
}

function getRandomImg(){
	for (let i = 0; i < p.length; i++){
		let n = getRandomInt(1, 10)
		let img = `img/gallery/gallery-${n}.jpg`
		p[i].src = img
	}
}

diningBtn.addEventListener('click', function () {getRandomImg()})
bedBtn.addEventListener('click', function () {getRandomImg()})
officeBtn.addEventListener('click', function () {getRandomImg()})
chairBtn.addEventListener('click', function () {getRandomImg()})
livingBtn.addEventListener('click', function () {getRandomImg()})


function activeBtn(){
	let btnContainer = document.getElementById('gallery-buttons')
	let btnItem = btnContainer.getElementsByClassName('btns')

	for (let i = 0; i < btnItem.length; i++) {
		btnItem[i].addEventListener('click', function(){
			let btnActive = document.getElementsByClassName('btn-gallery__active')
			btnActive[0].className = btnActive[0].className.replace(" btn-gallery__active", " ")
			this.className += " btn-gallery__active"
		})
	}
}

activeBtn()