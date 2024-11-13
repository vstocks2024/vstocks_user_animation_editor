import { observer } from 'mobx-react'


export const MainCanvas = observer(() => {
  return (
    <>
    <div className='flex flex-col bg-black w-full'>
    <canvas id='lower-canvas'></canvas>
    </div>
    </>
  )
});

