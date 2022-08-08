import { GifGridItem } from "../../src/components/GifGridItem";
import{render, screen} from '@testing-library/react'


describe('Pruebas en <GifGridItem/>', () => {
    const title='saitam'
    const url ='https://jopta.com'
    test('debe de hacer match con el snapshot', () => {
      const{container} = render(<GifGridItem title={title} url={url} />)
      expect(container).toMatchSnapshot()
    });


    test('debe mostrat la imagen y el url indicado', () => {
        render(<GifGridItem title={title} url={url} />)
        // screen.debug()
        // expect(screen.getByRole('img').scr).tobe(url)
        // expect(screen.getByRole('img').alt).tobe(title)
        const{src,alt}=screen.getAllByRole('img')
        expect(src).toBe(url);
        expect(alt).toBe(alt)
    });
});