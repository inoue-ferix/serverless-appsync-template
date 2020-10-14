import getItemById from './getItemById'
import createItem from './createItem'

exports.handler = async (event, _context, _callback) => {
  switch (event.info.fieldName) {
    case 'getItemById':
      return await getItemById(event.arguments.id, event.arguments.status)
    case 'createItemByLambda':
      return await createItem({
        id: event.arguments.input.id,
        name: event.arguments.input.name,
        status: event.arguments.input.status,
      })
    case 'info':
      return {
        name: 'myapp',
        version: '0.0.1',
      }
    default:
      return null
  }
}
