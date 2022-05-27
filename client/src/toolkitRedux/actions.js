import { createAction } from "@reduxjs/toolkit"

export const fetch = createAction("FETCH")
export const success = createAction("SUCCESS")
export const err = createAction("ERROR")