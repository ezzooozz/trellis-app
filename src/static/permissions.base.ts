export enum TrellisPermission {
  REMOVE_RESPONDENT,
  ADD_RESPONDENT,
  ADD_OTHER_RESPONDENT,
  CHANGE_RESPONDENT_GEO_CURRENT,
  VIEW_STUDIES,
  ADD_STUDY,
  EDIT_STUDY,
  REMOVE_STUDY,
  VIEW_USERS,
  ADD_USER,
  REMOVE_USER,
  EDIT_USER,
  EDIT_GEO,
  ADD_GEO,
  REMOVE_GEO,
  ADD_RESPONDENT_NAME,
  ADD_RESPONDENT_GEO,
  EDIT_RESPONDENT_NAME,
  MOVE_RESPONDENT,
  REMOVE_RESPONDENT_NAME,
  ADD_RESPONDENT_CONDITION_TAG,
  REMOVE_RESPONDENT_CONDITION_TAG,
  ADD_FORM,
  EDIT_FORM,
  REMOVE_FORM,
  VIEW_DEVICES,
  ADD_DEVICE,
  EDIT_DEVICE,
  REMOVE_DEVICE,
  ADD_GEO_TYPE,
  EDIT_GEO_TYPE,
  REMOVE_GEO_TYPE,
  VIEW_REPORTS
}

export enum TrellisRole {
  ADMIN = 'ADMIN',
  SUPERVISOR = 'SUPERVISOR',
  SURVEYOR = 'SURVEYOR'
}

const defaultPermissions: PermissionMap = {
  [TrellisPermission.REMOVE_RESPONDENT]: false,
  [TrellisPermission.ADD_RESPONDENT]: false,
  [TrellisPermission.ADD_OTHER_RESPONDENT]: true,
  [TrellisPermission.CHANGE_RESPONDENT_GEO_CURRENT]: false,
  [TrellisPermission.VIEW_STUDIES]: false,
  [TrellisPermission.ADD_STUDY]: false,
  [TrellisPermission.EDIT_STUDY]: false,
  [TrellisPermission.REMOVE_STUDY]: false,
  [TrellisPermission.ADD_USER]: false,
  [TrellisPermission.EDIT_GEO]: false,
  [TrellisPermission.ADD_GEO]: true,
  [TrellisPermission.REMOVE_GEO]: true,
  [TrellisPermission.ADD_RESPONDENT_NAME]: true,
  [TrellisPermission.ADD_RESPONDENT_GEO]: true,
  [TrellisPermission.EDIT_RESPONDENT_NAME]: true,
  [TrellisPermission.MOVE_RESPONDENT]: true,
  [TrellisPermission.REMOVE_RESPONDENT_NAME]: true,
  [TrellisPermission.ADD_RESPONDENT_CONDITION_TAG]: false,
  [TrellisPermission.REMOVE_RESPONDENT_CONDITION_TAG]: false,
  [TrellisPermission.VIEW_USERS]: false,
  [TrellisPermission.REMOVE_USER]: false,
  [TrellisPermission.EDIT_USER]: false,
  [TrellisPermission.ADD_FORM]: true,
  [TrellisPermission.REMOVE_FORM]: true,
  [TrellisPermission.EDIT_FORM]: true,
  [TrellisPermission.VIEW_DEVICES]: false,
  [TrellisPermission.ADD_DEVICE]: false,
  [TrellisPermission.EDIT_DEVICE]: false,
  [TrellisPermission.REMOVE_DEVICE]: false,
  [TrellisPermission.ADD_GEO_TYPE]: false,
  [TrellisPermission.EDIT_GEO_TYPE]: false,
  [TrellisPermission.REMOVE_GEO_TYPE]: false,
  [TrellisPermission.VIEW_REPORTS]: false
}

// These are set to true for admins
export const adminPermissions = [
  TrellisPermission.ADD_USER,
  TrellisPermission.ADD_STUDY,
  TrellisPermission.EDIT_STUDY,
  TrellisPermission.REMOVE_STUDY,
  TrellisPermission.REMOVE_RESPONDENT,
  TrellisPermission.CHANGE_RESPONDENT_GEO_CURRENT,
  TrellisPermission.EDIT_GEO,
  TrellisPermission.ADD_RESPONDENT_CONDITION_TAG,
  TrellisPermission.EDIT_USER,
  TrellisPermission.REMOVE_USER,
  TrellisPermission.ADD_DEVICE,
  TrellisPermission.EDIT_DEVICE,
  TrellisPermission.REMOVE_DEVICE,
  TrellisPermission.ADD_GEO_TYPE,
  TrellisPermission.EDIT_GEO_TYPE,
  TrellisPermission.REMOVE_GEO_TYPE,
  TrellisPermission.VIEW_STUDIES,
  TrellisPermission.VIEW_DEVICES,
  TrellisPermission.VIEW_USERS,
  TrellisPermission.VIEW_REPORTS
]

export type PermissionMap = {
  [key in TrellisPermission]: boolean
}

export default defaultPermissions
