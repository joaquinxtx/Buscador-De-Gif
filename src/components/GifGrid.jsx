import { useFetchGifs } from '../hooks/useFetchGifs'
import { GifGridItem } from './GifGridItem'



export const GifGrid = ({category}) => {
    const{images,isLoading}= useFetchGifs(category)

    

  return (
    <>
        <h3>{category} </h3>
        {
          isLoading
          ?
          (<div class="lds-heart"><div></div></div>)
          :
          <div className='card-grid'>
          {images.map(({id,title,url})=>(
            <GifGridItem key={id} title={title} url={url} />
          ))}
          </div>
        }
        
        </>
  )
}
