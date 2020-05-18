/**
 * Redux - Profile
 */

export enum ProfileActionTypes {
  SET_DID = 'SET_DID',
  SET_INFO = 'SET_INFO',
  LOGGING_IN = 'LOGGING_IN',
  LOGOUT = 'LOGOUT'
}

export interface ProfileAction {
  type: ProfileActionTypes,
  did?: string | null,
  name?: string,
  country?: string
}

/*
*************************************************************************************
* Actions
*************************************************************************************
 */
export const ActionSetDID = (did: string): ProfileAction => ({
  type: ProfileActionTypes.SET_DID,
  did
})

export const ActionSetInfo = ({name, country}: {name: string, country: string}): ProfileAction => ({
  type: ProfileActionTypes.SET_INFO,
  name,
  country
})


/*
*************************************************************************************
* Store Schema
*************************************************************************************
 */
export interface ProfileState {
  init: boolean,
  did: string | null,
  name: string
}

const initialState: ProfileState = {
  init: false,
  did: null,
  name: ''
}

/*
*************************************************************************************
* Reducer
*************************************************************************************
 */
export default {

  profile: (state: ProfileState = initialState, action: ProfileAction) => {

    switch (action.type) {
      case ProfileActionTypes.SET_DID:
        return {
          ...state,
          did: action.did,
        }

      case ProfileActionTypes.SET_INFO:
        return {
          ...state,
          name: action.name,
          country: action.country
        }
    }

    return state
  }
}
