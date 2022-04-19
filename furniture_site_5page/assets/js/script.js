const parent = document.querySelectorAll(".main__tags--buttons a")

parent.forEach((i) => {
	i.addEventListener("click", (e) => {
		i.classList.toggle("inner_active")
	})
})

const btns = document.querySelectorAll(".main__cate span")

function mainClickFunction(parent) {
[].forEach.call(parent, (el) => {
		el.addEventListener("click", btnClick, false)
	})

	function btnClick() {
		[].forEach.call(parent, (el) => {
			if (el !== this) el.classList.remove("cate_active")
		})
		this.classList.toggle("cate_active")
	}
}

mainClickFunction(btns)
