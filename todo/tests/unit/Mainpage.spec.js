import { shallowMount, mount } from '@vue/test-utils'
import Mainpage from '@/components/Mainpage.vue'


describe('Adding a new todo test ', () => {
    it('Is a Vue Instance', () => {
        const wrapper = shallowMount(Mainpage)

        expect(wrapper.isVueInstance).toBeTruthy();
    });

    it('Is has an input for writing new todo', () => {
        const wrapper = shallowMount(Mainpage)
        expect(wrapper.find("#inputPlace").exists()).toBeTruthy()
    });

    it('Is has a button for adding new todo', () => {
        const wrapper = shallowMount(Mainpage)
        expect(wrapper.find("#buttonAdd").exists()).toBeTruthy()
    });

    it('add new todo item', ()  => {
        const wrapper = shallowMount(Mainpage)
        const inputText = "buy some milk";
        const textInput = wrapper.find("#inputPlace");
        textInput.setValue(inputText);
        expect(textInput.element.value).toEqual(inputText);

      
        const AddButton = jest.fn();
        wrapper.setMethods({
            AddTodo: AddButton
        })
        wrapper.find('#buttonAdd').trigger('click')

        expect(AddButton).toHaveBeenCalled();

    });

}) 





