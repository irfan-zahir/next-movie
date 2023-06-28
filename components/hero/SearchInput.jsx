import React from 'react'
import { useSearchContext } from '../../providers/SearchProvider'
import { useForm } from 'react-hook-form'
import dayjs from 'dayjs'

const TODAY_DATE = dayjs().format("YYYY-MM-DD")
const TODAY_TIME = dayjs().format("YYYY-MM-DD HH:mm:ss")

const SearchInput = () => {
    const { setValue, value, showInput } = useSearchContext()

    const [isTimeSlot, setisTimeSlot] = React.useState(false)

    const { register, handleSubmit, watch, formState: { errors } } = useForm({ mode: "onSubmit" });

    const parseAPIFormatDate = (date) => dayjs(date).format("YYYY-MM-DD HH:mm:ss")
    const registerTimeSlotOpt = {
        setValueAs: (date) => parseAPIFormatDate(date)
    }

    return (
        <form onSubmit={handleSubmit(setValue)} className='lg:w-[600px] lg:ml-[127px]'>
            <div className='text-5xl mb-6 font-bold'>Search your movies here!</div>
            <div className='w-full flex flex-row gap-[10px]'>
                <div className="relative mb-6 flex flex-[3_3_0%]">
                    <div className='material-symbols-outlined absolute text-black mr-12 input-icon'>&#xE8B6;</div>
                    <input type="text" className='flex-1 h-[54px] pl-14 text-black/50 rounded-full outline-0' placeholder='Theatre name...' {...register("theater_name")} />
                </div>
                {
                    !isTimeSlot &&
                    <div className="relative flex flex-[2_2_0%]">
                        <input type="date" className='flex-1 h-[54px] text-black/50 rounded-full outline-0' defaultValue={TODAY_DATE} required {...register("d_date")} />
                    </div>
                }
            </div>

            {
                isTimeSlot &&
                <div className='flex flex-row gap-3 mb-4'>
                    <div className="relative flex flex-1">
                        <input type="datetime-local" className='w-full h-[54px] text-black/50 rounded-full outline-0' defaultValue={TODAY_TIME}  {...register("time_start", registerTimeSlotOpt)} />
                    </div>
                    <div className="relative flex flex-1">
                        <input type="datetime-local" className='w-full h-[54px] text-black/50 rounded-full outline-0' defaultValue={TODAY_TIME} {...register("time_end", registerTimeSlotOpt)} />
                    </div>

                </div>
            }
            {/* date range */}
            <div className='mb-4 flex items-center'>
                <input className='h-4 w-4' type="checkbox" id="vehicle1" checked={isTimeSlot} onChange={(e) => setisTimeSlot(!isTimeSlot)} {...register("isTimeSlot")} />
                <label className='ml-4' htmlFor="vehicle1">Query time slot</label><br />
            </div>

            <button type='submit' className='bg-yellow-500 active:bg-yellow-700 active:text-white rounded-full px-[44px] py-[15px] text-black font-bold'>
                Search
            </button>

        </form>
    )
}

export default SearchInput