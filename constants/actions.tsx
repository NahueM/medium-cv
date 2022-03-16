export const JobActions = {
  JOBS_REQUEST_START: 'JOBS_REQUEST_START',
  JOBS_REQUEST_SUCCESS: 'JOBS_REQUEST_SUCCESS',
  JOBS_REQUEST_ERROR: 'JOBS_REQUEST_ERROR',
  SET_JOB_SELECTED: 'SET_JOB_SELECTED'
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

type jobsRequestStart = {
    type: typeof JobActions.JOBS_REQUEST_START
}

type jobRequestSuccess = {
    type: typeof JobActions.JOBS_REQUEST_SUCCESS
    payload: Job[],
}

type jobsRequestError = {
    type: typeof JobActions.JOBS_REQUEST_ERROR
}

type setJobSelected = {
    type: typeof JobActions.SET_JOB_SELECTED
    payload: Job
}

export type JobActionsTypes =
jobsRequestStart
| jobRequestSuccess
| jobsRequestError
| setJobSelected
