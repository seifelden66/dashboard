const useDarkMode = ()=>{
    const isDark = useState("darkMode", ()=>false)
    return{
        isDark
    }
}
export default useDarkMode