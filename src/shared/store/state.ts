import { Project } from '@app/features/OpenSource/projects.data'

export interface State {
  opensource: {
    projects: Project[]
  }
}
