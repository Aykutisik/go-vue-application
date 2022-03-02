import { shallowMount, mount } from '@vue/test-utils'
import Mainpage from '@/components/Mainpage.vue'
import ListElement from '@/components/ListElement.vue'
import flushPromises from 'flush-promises';
import "regenerator-runtime";



describe('Adding a new todo test ', () => {
    it('Is a Vue Instance', () => {
        const wrapper = shallowMount(Mainpage)

        expect(wrapper.isVueInstance).toBeTruthy();
    });

    it('Is has an input for writing new todo', async() => {
        const wrapper = shallowMount(Mainpage)
        expect(wrapper.find("#inputPlace").exists()).toBeTruthy()
    });

    it('Is has a button for adding new todo', async() => {
        const wrapper = shallowMount(Mainpage)
        expect(wrapper.find("#buttonAdd").exists()).toBeTruthy()
    });

    it('add new todo item', async() => {
        const wrapper = shallowMount(Mainpage)
        const inputText = "buy some milk";
        const textInput = wrapper.find("#inputPlace");
        await textInput.setValue(inputText);
        expect(textInput.element.value).toEqual(inputText);
        await flushPromises;


        const AddButton = jest.fn();
        wrapper.setMethods({
            AddTodo: AddButton
        })
        wrapper.find('#buttonAdd').trigger('click')

        expect(AddButton).toHaveBeenCalled();



    });

    it("does not render a Child component", async() => {
        const wrapper = mount(Mainpage)
            //  const wrapper = shallowMount(Mainpage)
        const inputText = "buy some milk";
        const textInput = wrapper.find("#inputPlace");
        await textInput.setValue(inputText);
        expect(textInput.element.value).toEqual(inputText);



        const AddButton = jest.fn();
        wrapper.setMethods({
            AddTodo: AddButton
        })
        wrapper.find('#buttonAdd').trigger('click')

        await expect(wrapper.findComponent(ListElement).exists()).toBe(false)
    })

})