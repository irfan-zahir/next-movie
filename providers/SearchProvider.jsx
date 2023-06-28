import React from 'react'

const SearchContext = React.createContext({
    showInput: false,
    value: {
        d_date: null,
        theater_name: null,
        time_start: null,
        time_end: null,
        isTimeSlot: false
    },
    displayedMovies: null,
    setValue: null,
    setshowInput: null,
    reset: null
})

export const useSearchContext = () => React.useContext(SearchContext)

export const SearchProvider = ({ children, initialValue }) => {

    const [displayedMovies, setdisplayedMovies] = React.useState(initialValue)
    const [value, setValue] = React.useState(null)
    const [showInput, setshowInput] = React.useState(false)

    const performSearchMovieAPI = async (uri) => {
        const res = await fetch(uri)
        const { data: movies } = await res.json()
        console.log({ movies })
        setdisplayedMovies(movies)
    }

    const reset = () => {
        setValue(null)
        setdisplayedMovies(initialValue)
        setshowInput(false)
    }

    React.useEffect(() => {
        let uri;
        if (value !== null) {

            if (value.isTimeSlot)
                uri = `https://821f21ea-3d75-4b17-bac5-f8a0fc587ad2.mock.pstmn.io/timeslot?theater_name=${value.theater_name}&time_start=${value.time_start}&time_end=${value.time_end}`
            if (!value.isTimeSlot)
                uri = `https://821f21ea-3d75-4b17-bac5-f8a0fc587ad2.mock.pstmn.io/specific_movie_theater?theater_name=${value.theater_name}&d_date=${value.d_date}`

            performSearchMovieAPI(uri)
        }

        return () => {

        }
    }, [value])


    return (
        <SearchContext.Provider value={{ value, showInput, displayedMovies, setValue, setshowInput, reset }}>
            {children}
        </SearchContext.Provider>
    )
}
