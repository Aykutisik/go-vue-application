import { shallowMount, mount } from '@vue/test-utils'
import ListElement from '@/components/ListElement.vue'
import "regenerator-runtime";

describe('tests of ListElement component ', () => {
    it('renders probs todo object when passed', () => {
        const todo = { text: "todo1", status: 1 }
        const wrapper = shallowMount(ListElement, {
            propsData: { todo }
        })

        expect(wrapper.text()).toMatch(todo.text)
    });

    it('Is a Vue Instance', async() => {
        const todo = { text: "todo1", status: 1 }
        const wrapper = shallowMount(ListElement, {
            propsData: { todo }
        })

        expect(wrapper.isVueInstance).toBeTruthy();
    });

    it('calls DeleteTodo method when Delete button is clicked',  async() => {
        const todo = { text: "todo1", status: 1 }
        const wrapper = shallowMount(ListElement, {
            propsData: { todo }
        });

        const Deletetodobutton = jest.fn();
        wrapper.setMethods({
            DeleteTodo: Deletetodobutton
        })
        wrapper.find('button').trigger('click')

        expect(Deletetodobutton).toHaveBeenCalled();
    });

    it('Check item is seen as line through', async() => {
        const todo = { text: "todo1", status: 1 }
        const wrapper = shallowMount(ListElement, {
            propsData: { todo }
        });

        expect(wrapper.find("#line-through-true").exists()).toBeTruthy()


    });

    it('Check item is seen as line through', async() => {
        const todo = { text: "todo1", status: 0 }
        const wrapper = shallowMount(ListElement, {
            propsData: { todo }
        });

        expect(wrapper.find("#line-through-false").exists()).toBeTruthy()
    });


})