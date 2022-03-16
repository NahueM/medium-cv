import { createContext, useReducer, useContext, Dispatch } from 'react'
import { JobActionsTypes } from '../constants/actions'

interface jobActions {
    type: string
    payload?: any
}
interface Job {
    companyDescription: string,
    duration: {
        years: number,
        months: number
    },
    id: string,
    jobDescription: string,
    rol: string,
    startDate: {seconds: number, nanoseconds: number},
    title: string
}
interface State {
    jobs: {
        data: Job[] | null,
        loading: boolean
        error: boolean
    },
    jobSelected: Job | null,
    lang: string
}

const initState: State = {
  jobs: {
    data: null,
    loading: false,
    error: false
  },
  jobSelected: null,
  lang: 'en'
}

const JobsContext = createContext<[State, Dispatch<JobActionsTypes>]>([{ ...initState }, () => {}])

function jobsReducer (state : State, action: jobActions): State {
  const { type, payload } = action
  switch (type) {
    case 'JOBS_REQUEST_START': {
      return {
        ...state,
        jobs: {
          ...state.jobs,
          loading: true,
          error: false
        }
      }
    }
    case 'JOBS_REQUEST_SUCCESS': {
      return {
        ...state,
        jobs: {
          ...state.jobs,
          data: payload,
          loading: false,
          error: false
        }
      }
    }
    case 'JOBS_REQUEST_ERROR': {
      return {
        ...state,
        jobs: {
          ...state.jobs,
          loading: false,
          error: true
        }
      }
    }
    case 'SET_JOB_SELECTED' : {
      return {
        ...state,
        jobSelected: payload
      }
    }
    default:
      return state
  }
}

export function JobsContextProvider (props: any) {
  const [state, dispatch] = useReducer(jobsReducer, initState)
  return (
        <JobsContext.Provider value={[state, dispatch]} {...props}/>
  )
}

export function UseJobsContext () {
  const context = useContext(JobsContext)
  if (!context) {
    throw new Error('useJobContext must be used within the JobsContextProvider')
  }
  return context
}
