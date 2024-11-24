import React from 'react'
import { MdAdd, MdDeleteOutline, MdUpdate, MdClose } from 'react-icons/md'
import DateSelector from '../../components/Input/DateSelector'

const AddEditTravelStory = ({
  storyInfo,
  type,
  onClose,
  getAllTravelStories,
}) => {
  const handleAddORUpdateClick = () => {}

  return (
    <div>
      <div className="flex items-center justify-between">
        <h5 className="text-xl font-medium text-slate-700">
          { type === 'add' ? 'Add Story' : 'Update Story' }
        </h5>

        <div>
          <div className='flex items-center gap-3 bg-cyan-50/50 p-2 rounded-l-lg'>
            {
              type === 'add' ?
              <button className='btn-small' onClick={handleAddORUpdateClick}>
                <MdAdd className='text-lg' /> ADD STORY
              </button> :
              <>
                <button className='btn-small' onClick={handleAddORUpdateClick}>
                  <MdUpdate className='text-lg' /> UPDATE STORY
                </button>

                <button className='btn-small btn-delete' onClick={onClose}>
                  <MdDeleteOutline className='text-lg' /> DELETE STORY
                </button>
              </>
            }

            <button className='' onClick={onClose}>
              <MdClose className='text-xl text-slate-400' />
            </button>
          </div>
        </div>
      </div>

      <div>
        <div className="flex-1 flex flex-col gap-2 pt-4">
          <label htmlFor="title">TITLE</label>
          <input type="text" name="title" id="title" className='text-2xl text-slate-950 outline-none' placeholder='A Day at the Great Wall' />

          <div className="my-3">
            <DateSelector />
          </div>
        </div>
      </div>
    </div>
  )
}

export default AddEditTravelStory
