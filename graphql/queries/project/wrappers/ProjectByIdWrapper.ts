import { ProjectById, ProjectByIdVariables } from 'database-api'

import { Query } from 'react-apollo'

/* interface IData extends ProjectCategoriesAll {} */

export default class ProjectByIdQueryWrapper extends Query<
  ProjectById,
  ProjectByIdVariables
> {}
