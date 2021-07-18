import { actionIs, applyReducers, onlyWhen } from '@app/shared/utils/redux'
import { filter, FILTER_ACTION } from '@app/features/OpenSource/filter'

export const opensource = applyReducers(onlyWhen(actionIs(FILTER_ACTION))(filter))
