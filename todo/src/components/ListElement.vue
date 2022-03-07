<template>
  <div id="listelement" class="background-todoElement">
    <!-- <label class="todoElement">aykut </label>
     -->

    <div class="flex bg-grey-light w-full h-auto p-2 mt-4 rounded-lg gap-x-5">
      <a href="#"
        v-if="todo.status == 1"
        id="line-through-true" class="w-5/6 font-sans font-light text-2xl text-center bg-white pt-1 shadow-md rounded-lg line-through"
      >
        {{ todo.text }}
      </a>

      <a href="#"
        v-else
        id="line-through-false" class="w-5/6 font-sans font-light text-2xl text-center bg-white pt-1 shadow-md rounded-lg"
      >
        {{ todo.text }}
      </a>

      <button
        @click="DeleteTodo(todo)"
        id = "deletebtn"
        class="btn"
        style="background: rgb(119, 6, 6)"
      >
        Delete
      </button>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  text: "",
  props: {
    todo: Object,
  },
  // props: ['text'],

  methods: {
    DeleteTodo(todo) {
      let url = "http://127.0.0.1:8086/DeleteTodo/" + todo._id;
      console.log(url);

      axios
        .put(url)
        .then(function (response) {
          console.log(response);
        })
        .catch((error) => console.log(error));

      this.textInput = "";
     location.reload();
    },
  },
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

.background-todoElement {
  margin: 2%;
}

.btn {
  border: 0;
  border-radius: 12px;
  color: #ffffff;
  cursor: pointer;
  display: inline-block;
  font-family: -apple-system, system-ui, "Segoe UI", Roboto, Helvetica, Arial,
    sans-serif;
  float: right;
  font-size: 16px;
  font-weight: 500;
  line-height: 2.5;
  outline: transparent;
  padding: 0 1rem;
  text-align: center;
  text-decoration: none;
  transition: box-shadow 0.2s ease-in-out;
  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;
  white-space: nowrap;
}

.button-62:not([disabled]):focus {
  box-shadow: 0 0 0.25rem rgba(0, 0, 0, 0.5),
    -0.125rem -0.125rem 1rem rgba(239, 71, 101, 0.5),
    0.125rem 0.125rem 1rem rgba(255, 154, 90, 0.5);
}

.button-62:not([disabled]):hover {
  box-shadow: 0 0 0.25rem rgba(0, 0, 0, 0.5),
    -0.125rem -0.125rem 1rem rgba(239, 71, 101, 0.5),
    0.125rem 0.125rem 1rem rgba(255, 154, 90, 0.5);
}
</style>
