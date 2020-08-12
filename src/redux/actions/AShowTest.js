let AShowTest = ( pageName, taskId ) => {
    return {
        type : "SHOW_TEST",
        page : pageName,
        curUserTask : taskId
    }
}
export default AShowTest;