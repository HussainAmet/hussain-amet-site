import { Button } from '@heroui/react'
import React from 'react'

const CmsButtons = ({revertData, showFailed, showSuccess}) => {
  return (
    <>
      <div className='flex flex-wrap gap-5'>
        <Button type="submit" variant="solid" color="primary">
          Submit
        </Button>
        <Button onPress={revertData} variant="solid" color="danger" className="mb-4">
          Revert Site Data to Backup
        </Button>
      </div>
      <p className={`text-green-400 text-2xl ${!showSuccess && 'hidden'}`}>Data Successfully updated</p>
      <p className={`text-red-400 text-2xl ${!showFailed?.status && 'hidden'}`}>{showFailed?.message}</p>
    </>
  )
}

export default CmsButtons
