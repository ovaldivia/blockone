import { mount } from '@vue/test-utils';
import Table from '../../components/Table';
import blocks from '../data/blocks';

let wrapper = null;

describe('Table instance', () => {
    test('Table is a Vue instance', () => {

        expect(wrapper.isVueInstance()).toBeTruthy()
    });

});

describe('Table look', () => {

    test('Table classes', () => {
        expect(wrapper.classes()).toContain('table');
    });

    test('Table classes', () => {

        expect(wrapper.classes()).toContain('table-sm');
    });

    test('Table classes', () => {

        expect(wrapper.classes()).toContain('table-striped');
    });

    test('Table headers', () => {

        expect(wrapper.contains('th')).toBe(true);
    });

    test('Table headers', () => {

        expect(wrapper.contains('tr')).toBe(true);
    });

    test('Table rows', () => {

        expect(wrapper.findAll('tr').length).toEqual(2);
    });

    test('Table rows', () => {

        expect(wrapper.html()).toContain('0578efb7110615dd03d94d8bb3c54bbd3ed357d9306d8a972f47a196b1fa7470');
    });

});

beforeEach(() => {
    wrapper = mount(Table,{
        propsData: {
            blocks: blocks,
            window: {
                height: 500,
                width: 800
            }
        }
    })
});

afterEach(() => {
    wrapper.destroy()
});