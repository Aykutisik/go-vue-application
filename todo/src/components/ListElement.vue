<template>
  <div class="background-todoElement">
      <!-- <label class="todoElement">aykut </label>
     -->

     <div class="flex bg-grey-light w-full h-auto p-2 mt-4 rounded-lg gap-x-5" >
<h3 class="w-5/6 font-sans font-light text-2xl text-center bg-white pt-1 shadow-md rounded-lg">{{text}}</h3>

 <button @click="deleteTodo()" class="btn" style=" background: rgb(119, 6, 6);">Done</button> 


      </div>
        
  </div>
</template>

<script>
export default {
  text: "",
  // props: {
  //   name: String
  // },
  props: ['text'],
 
  methods: {
    deleteTodo(){
      console.log("dsadasds")
    }
  }
};
</script>

<style scoped>
.todoElement {
  position: relative;
  list-style: none;
  height: 45px;
  line-height: 45px;
  margin-bottom: 8px;
  background: #f2f2f2;
  border-radius: 3px;
  padding: 0 15px;
  cursor: default;
  overflow: hidden;
}

.background-todoElement{
  
  margin:2%
}

.btn{
  border: 0;
  border-radius: 12px;
  color: #FFFFFF;
  cursor: pointer;
  display: inline-block;
  font-family: -apple-system,system-ui,"Segoe UI",Roboto,Helvetica,Arial,sans-serif;
  float: right;
  font-size: 16px;
  font-weight: 500;
  line-height: 2.5;
  outline: transparent;
  padding: 0 1rem;
  text-align: center;
  text-decoration: none;
  transition: box-shadow .2s ease-in-out;
  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;
  white-space: nowrap;
}

.button-62:not([disabled]):focus {
  box-shadow: 0 0 .25rem rgba(0, 0, 0, 0.5), -.125rem -.125rem 1rem rgba(239, 71, 101, 0.5), .125rem .125rem 1rem rgba(255, 154, 90, 0.5);
}

.button-62:not([disabled]):hover {
  box-shadow: 0 0 .25rem rgba(0, 0, 0, 0.5), -.125rem -.125rem 1rem rgba(239, 71, 101, 0.5), .125rem .125rem 1rem rgba(255, 154, 90, 0.5);
}




</style>