import React from 'react'

const SearchContext = React.createContext({
    showInput: false,
    value: {
        theatre: null,
        startRange: null,
        endRange: null
    },
    result: null,
    setValue: null,
    setshowInput: null
})

export const useSearchContext = () => React.useContext(SearchContext)

export const SearchProvider = ({ children }) => {

    const [result, setResult] = React.useState(null)
    const [value, setValue] = React.useState(null)
    const [showInput, setshowInput] = React.useState(false)

    return (
        <SearchContext.Provider value={{ value, showInput, result, setValue, setshowInput }}>
            {children}
        </SearchContext.Provider>
    )
}
