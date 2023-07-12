<!-- <template>
    <div class="">
		<button onclick="window.dialog.showModal();" class="bg-corporate text-white h-[46px] md:h-[60px] w-full md:w-[240px] rounded-full flex justify-center items-center font-medium text-base md:text-xl">Apply Now</button>

<dialog @click="closeModal" id="dialog">
	<div id="modalBody" class="modal-body">
        <div class="p-10">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolor laboriosam corrupti similique molestiae consequuntur sequi commodi perspiciatis! Maiores, ipsam. Commodi?
        </div>
        <button onclick="window.dialog.close();" aria-label="close" class="x">❌</button>
    </div>
</dialog>
    </div>
</template>

<script setup>
const closeModal = (e) => {
    if (e.target.id === 'dialog'){
        window.dialog.close()
    }
}
</script>

<style scoped>

/*Dialog Styles*/
.modal-body{
	padding: 1rem 3rem;
	background: white;
	max-width: 400px;
	padding-top: 2rem;
	border-radius: 20px;
	border: 0;
	box-shadow: 0 5px 30px 0 rgb(0 0 0 / 10%);
}
dialog {

	animation: fadeIn 1s ease both;
	}
    dialog::backdrop{
		animation: fadeIn 0.5s ease both;
		background: rgb(0 0 0 / 40%);
		z-index: 2;
		backdrop-filter: blur(10px);
    }
    .x {
		filter: grayscale(1);
		border: none;
		background: none;
		position: absolute;
		top: 28px;
		right: 30px;
		transition: ease filter, transform 0.3s;
		cursor: pointer;
		transform-origin: center;
    }
    .x:hover {
			filter: grayscale(0);
			transform: scale(1.1);
		}
	h2 {
		font-weight: 600;
		font-size: 2rem;
		padding-bottom: 1rem;
	}
	p {
		font-size: 1rem;
		line-height: 1.3rem;
		padding: 0.5rem 0;
	}

/*General Styles*/
body {
	height: 100vh;
	display: flex;
	align-items: center;
	justify-content: center;
	font-family: Poppins, sans-serif;
	background: url(https://images.unsplash.com/photo-1574169208507-84376144848b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=879&q=80)
		no-repeat center center;
	background-size: cover;
}

@keyframes fadeIn {
	from {
		opacity: 0;
	}
	to {
		opacity: 1;
	}
}

</style> -->

<template>
	<div>
		<!-- <a class="button" href="#popup1">Let me Pop up</a> -->
		<button @click="openModal = !openModal" class="button">Let me Pop up</button>

<div id="popup1" class="overlay" :class="openModal ? 'show' : ''">
	<div class="popup">
		<h2>Here i am</h2>
		<button @click="openModal = !openModal" class="close" >&times;</button>
		<div class="content">
			Thank to pop me out of that button, but now i'm done so you can close this window.
		</div>
	</div>
</div>
	</div>
</template>

<script setup>
import {ref} from 'vue'
const openModal = ref(false)


</script>

<style scoped>

.button {
  font-size: 1em;
  padding: 10px;
  color: #fff;
  border: 2px solid #06D85F;
  border-radius: 20px/50px;
  text-decoration: none;
  cursor: pointer;
  transition: all 0.3s ease-out;
}
.button:hover {
  background: #06D85F;
}

.overlay {
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background: rgba(0, 0, 0, 0.7);
  transition: opacity 500ms;
  visibility: hidden;
  opacity: 0;
}
.show{
  visibility: visible;
  opacity: 1;
}

.popup {
  margin: 70px auto;
  padding: 20px;
  background: #fff;
  border-radius: 5px;
  width: 30%;
  position: relative;
  transition: all 5s ease-in-out;
}

.popup h2 {
  margin-top: 0;
  color: #333;
  font-family: Tahoma, Arial, sans-serif;
}
.popup .close {
  position: absolute;
  top: 20px;
  right: 30px;
  transition: all 200ms;
  font-size: 30px;
  font-weight: bold;
  text-decoration: none;
  color: #333;
}
.popup .close:hover {
  color: #06D85F;
}
.popup .content {
  max-height: 30%;
  overflow: auto;
}

@media screen and (max-width: 700px){
  .box{
    width: 70%;
  }
  .popup{
    width: 70%;
  }
}
</style>