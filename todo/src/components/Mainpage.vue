<template>
<div class=" pl-20 pr-20">
  
   <div class="flex place-items-center border-b border-teal-500 py-2 ">
    <input v-model="textInput" class="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none" type="text" placeholder="Jane Doe" aria-label="Full name">
    
     <button @click="addTodo" class="btn" style=" background: rgb(1, 101, 35);">Add</button> 
  
  </div>
   <!-- <input style="border: solid;"  type="text" id="textInput" placeholder="Todo Add" v-model="textInput" @keydown.enter="todoList.push($event.target.value)" />
  <button style="background-color:red" @click="otherfunc" >Ekle</button> -->
  <div class="list-background " style="border: inset  #ee7752, #e73c7e, #23a6d5, #23d5ab ; height: 1000px;">
    <ul>
      <li v-for="todo in todoArray" :key="todo" >
          <ListElement :name="todo" />
      </li>
    </ul>
    
   

  </div>
  </div>
</template>

<script>

import ListElement from './ListElement.vue'
export default {
  name: 'Mainpage',
  components: {
      ListElement
  },
  data(){
    return {
      textInput: "",
      todoArray: ["furkan","aykut","blabla"]
    }

  },
  methods: {
      addTodo(){
        this.todoArray.push(this.textInput)
      }
  }
}
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.list-background{
    background: linear-gradient(-45deg, #ee7752, #e73c7e, #23a6d5, #23d5ab);
    background-size: 400% 400%;
    

    
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
</style>
