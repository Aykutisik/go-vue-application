import { shallowMount, mount } from '@vue/test-utils'
import ListElement from '@/components/ListElement.vue'

describe('tests of ListElement component ', () => {
    it('renders probs todo object when passed', () => {
        const todo = { text: "todo1", status: 1 }
        const wrapper = shallowMount(ListElement, {
            propsData: { todo }
        })

        expect(wrapper.text()).toMatch(todo.text)
    });

    it('Is a Vue Instance', () => {
        const todo = { text: "todo1", status: 1 }
        const wrapper = shallowMount(ListElement, {
            propsData: { todo }
        })

        expect(wrapper.isVueInstance).toBeTruthy();
    });

    it('calls DeleteTodo method when Delete button is clicked', () => {
        const todo = { text: "todo1", status: 1 }
        const wrapper = shallowMount(ListElement, {
            propsData: { todo }
        });

        const DeleteTodo = jest.fn();
        wrapper.setMethods({
            DeleteTodo: DeleteTodo
        })
        wrapper.find('button').trigger('click')

        expect(DeleteTodo).toHaveBeenCalled();
    });

    it('callsss DeleteTodo method when Delete button is clicked', () => {
        const todo = { text: "todo1", status: 1 }
        const wrapper = mount(ListElement, {
            propsData: { todo }
        });


        expect(wrapper.contains("line-through")).toBe(true)

        //expect(wrapper.classes()).toContain()
    });


})