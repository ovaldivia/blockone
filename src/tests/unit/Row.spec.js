import { mount } from '@vue/test-utils';
import Row from '../../components/Row';
import blocks from '../data/blocks';

let wrapper = null;

describe('Row', () => {

    test('Row is a Vue instance', () => {
        expect(wrapper.isVueInstance()).toBeTruthy()
    })
});

describe('Row look', () => {

    test('Row classes', () => {

        const tr = wrapper.findAll('tr').at(0);
        expect(tr.classes()).toContain('click-enable');
    });

    test('Row classes', () => {

        const a = wrapper.findAll('a').at(0);
        expect(a.classes()).toContain('view-row');
    });

    test('Row columns', () => {

        expect(wrapper.contains('tr')).toBe(true);
    });

    test('Row columns', () => {

        expect(wrapper.findAll('tr').length).toEqual(1);
    });

    test('Row columns', () => {

        expect(wrapper.html()).toContain('0578efb7110615dd03d94d8bb3c54bbd3ed357d9306d8a972f47a196b1fa7470');
    });
});

describe('Row functionality', () => {

    test('Row click', () => {
        const row = wrapper.findAll('.click-enable').at(0)
        row.trigger('click');
        expect(wrapper.html()).toContain('context_free_data');
    });
});

beforeEach(() => {
    wrapper = mount(Row,{
        propsData: {
            block: blocks[0],
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