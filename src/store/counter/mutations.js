

export const increment = (state) =>{
    state.count++;
    state.lastMutation = 'increment 1'
}
export const incrementBy = (state,val) => {
    console.log(val);
    state.count += val;
    state.lastMutation = `increment by ${val}`
}
export const setLoading = (state,val) => {
    state.isLoading = val;
}