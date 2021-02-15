imoprt {takeEvery,put,call} from 'redux-saga'
export function* sagaWatcher(){
    yield takeEvery(REQUESTS_POSTS,sagaWorker)
 }
 function* sagaWorker(){
     try{
        yield put(showLoader)
        const payload=yield call(fetchPosts)
        yield put({type:FETCH_POSTS,payload})
        yield put(hideLoader())
     }catch(e){
            yield put(showAlert('что то пошло нетак'))
            yield put(hideLoader())
    }
    
 }
 async function fetchPosts(){
    const response=await fetch('https://jsonplaceholder.typicode.com/posts?_limit=5')
     return await response.json()
 }