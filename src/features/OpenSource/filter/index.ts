import Projects, { Project } from '@app/features/OpenSource/projects.data'
import { Action } from '@app/shared/store'

export interface OpenSource {
  projects: Array<Project>
}

export interface Filter {
  criteria: string
}

export const FILTER_ACTION = 'FILTER'

export const filterAction = (criteria: string): Action<Filter> => ({ type: FILTER_ACTION, payload: { criteria } })

export const filter = (state: OpenSource, action: Action<Filter>): OpenSource => ({
  ...state,
  projects: Projects.filter(x => x.name.toLowerCase().indexOf(action.payload.criteria.toLowerCase()) > -1)
})
