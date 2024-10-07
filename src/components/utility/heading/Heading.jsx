import Line from '@/components/utility/line/Line'
import Text from '@/components/utility/text/Text'

function Heading({ text }) {
  return (
    <div className='flex justify-between w-full items-center'>
      <Line direction='left' className="flex-1 md:hidden sm:hidden" />
      <Text text={text} />
      <Line direction='right' className="flex-1" />
    </div>
  )
}

export default Heading