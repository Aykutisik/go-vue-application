import { shallowMount, mount } from '@vue/test-utils'
import Mainpage from '@/components/Mainpage.vue'


const mockTodo = [{
    Text: "buy some milk",
    Status: 0
},
{
    Text: "buy some milk",
    Status: 1
}]

jest.mock('@/main', () => ({
    addTodo: jest.fn(() => mockTodo),
    getTodos: jest.fn(() => [])
}))

describe('Adding a new todo test ', () => {
    it('Is a Vue Instance', () => {
        const wrapper = shallowMount(Mainpage)

        expect(wrapper.isVueInstance).toBeTruthy();
    });

    it('Is has an input for writing new todo', () => {
        const wrapper = shallowMount(Mainpage)
        expect(wrapper.find("#input").exists()).toBeTruthy()
    });

    it('Is has a button for adding new todo', () => {
        const wrapper = shallowMount(Mainpage)
        expect(wrapper.find("#buttonAdd").exists()).toBeTruthy()
    });

    it('add new todo item', ()  => {
        const wrapper = shallowMount(Mainpage)
        const inputText = "buy some milk";
        const textInput = wrapper.get(".appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none");
       textInput.setValue(inputText);
        expect(textInput.element.value).toEqual(inputText);

    });

})



