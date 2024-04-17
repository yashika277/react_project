import { takeLatest } from "redux-saga/effects"
import { DELETE_USER_PENDING, GET_USER_PENDING, POST_USER_PENDING,UPDATE_USER_PENDING } from "../../User/action/action"
import { handle_delete_user, handle_get_user, handle_post_user,handle_update_user } from "../user/manageUser"


function* handle_get_user_saga()
{
  yield takeLatest(GET_USER_PENDING,handle_get_user)  
}

// post
function* handle_post_user_saga(){
  yield takeLatest(POST_USER_PENDING,handle_post_user)
}

// delete
function* handle_delete_user_saga(){
  yield takeLatest(DELETE_USER_PENDING,handle_delete_user)
}

// update
function* handle_update_user_saga(){
  yield takeLatest(UPDATE_USER_PENDING,handle_update_user)
}

export{handle_get_user_saga,handle_post_user_saga,handle_delete_user_saga,handle_update_user_saga }