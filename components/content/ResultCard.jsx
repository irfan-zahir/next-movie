import React from 'react'

function ResultCard({ movie }) {
    return (
        <div className='flex flex-col justify-between lg:h-[560px] gradient-result-card p-6'>
            {/* genre */}
            <span className='w-fit bg-yellow-500 text-sm px-[13px] py-[1.5px] rounded-full'>
                genre
            </span>
            {/* movie detail */}
            <div>
                {/* stats */}
                <div className="flex flex-row gap-6 mb-5">
                    <span className="flex flex-row text-[#9A9AB0]">
                        <i className='mr-2.5'>&#xe8b5;</i>
                        Duration
                    </span>
                    <span className="flex flex-row text-[#9A9AB0]">
                        <i className='mr-2.5'>&#xe8f4;</i>
                        Views
                    </span>
                </div>
                {/* title */}
                <div className='text-5xl text-white font-bold'>Title</div>
            </div>
        </div>
    )
}

export default ResultCard


// "Movie_ID": 1,
// "Title": "The Irishman",
// "Duration": "1 hour 20 minutes",
// "Views": "21.1k",
// "Genre": "comedy",
// "Poster": "https://m.media-amazon.com/images/M/MV5BMGUyM2ZiZmUtMWY0OC00NTQ4LThkOGUtNjY2NjkzMDJiMWMwXkEyXkFqcGdeQXVyMzY0MTE3NzU@._V1_FMjpg_UX1000_.jpg",
// "Overall_rating": 7.9,
// "Theater_name": "abc movies",
// "Start_time": "2020-04-04T09:00:00",
// "End_time": "2020-04-04T12:00:00",
// "Description": "An aging hitman recalls his time with the mob and the intersecting events with his friend, Jimmy Hoffa, through the 1950-70s.",
// "Theater_room_no": 1